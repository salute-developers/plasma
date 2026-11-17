import type {
    CloseReason,
    CloseRequestStatus,
    OverlayLayerOptions,
    OverlayLayerState,
    OverlayManagerOptions,
    ScrollLockTarget,
} from './OverlayProvider.types';
import { globalScrollLocker, ScrollLocker } from './utils/scrollLock';
import { hideOthers } from './utils/hideOthers';

export const DEFAULT_OVERLAY_Z_INDEX_BASE = 9000;
export const DEFAULT_OVERLAY_Z_INDEX_STEP = 10;
const MESSAGES_Z_INDEX_OFFSET = 900;

type Layer = OverlayLayerOptions & {
    dismissable?: boolean;
};

type Listener = () => void;

const isEscape = (event: KeyboardEvent) => event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
    Boolean(value) && Object.getPrototypeOf(value) === Object.prototype;

const isSameValue = (a: unknown, b: unknown) => {
    if (a === b) {
        return true;
    }

    if (!isPlainObject(a) || !isPlainObject(b)) {
        return false;
    }

    const keys = Object.keys(a);

    return keys.length === Object.keys(b).length && keys.every((key) => a[key] === b[key]);
};

const isPromiseLike = (value: unknown): value is PromiseLike<boolean | void> =>
    Boolean(value) && typeof (value as PromiseLike<unknown>).then === 'function';

const resolveScrollLockTarget = (target: ScrollLockTarget | undefined, doc: Document | null) => {
    if (!target) {
        return null;
    }

    if (target === true) {
        return doc ? doc.body : null;
    }

    if (typeof target === 'function') {
        return target() || null;
    }

    return target;
};

/**
 * Менеджер слоёв Overlay.
 * Хранит общий стек слоёв и обеспечивает гарантии инфраструктуры:
 * порядок слоёв, модальность, маршрутизацию Escape и нажатия снаружи, запрос на закрытие,
 * блокировку прокрутки и каскадное закрытие дочерних слоёв.
 */
export class OverlayManager {
    private layers: Layer[] = [];

    private listeners = new Set<Listener>();

    private pendingRequests = new Set<string>();

    private cascadedParents = new Set<string>();

    private restoreHidden: (() => void) | null = null;

    private attachedDocument: Document | null = null;

    private readonly zIndexBase: number;

    private readonly zIndexStep: number;

    private readonly messagesZIndex: number;

    private readonly scrollLocker: ScrollLocker;

    constructor(options: OverlayManagerOptions = {}, scrollLocker: ScrollLocker = globalScrollLocker) {
        this.zIndexBase = options.zIndexBase ?? DEFAULT_OVERLAY_Z_INDEX_BASE;
        this.zIndexStep = options.zIndexStep ?? DEFAULT_OVERLAY_Z_INDEX_STEP;
        this.messagesZIndex = options.messagesZIndex ?? this.zIndexBase + MESSAGES_Z_INDEX_OFFSET;
        this.scrollLocker = scrollLocker;
    }

    private get document(): Document | null {
        return typeof document === 'undefined' ? null : document;
    }

    /**
     * Регистрирует слой. Возвращает функцию снятия регистрации.
     */
    public register = (options: OverlayLayerOptions & { dismissable?: boolean }) => {
        if (this.getLayer(options.id)) {
            this.update(options.id, options);
            return () => this.unregister(options.id);
        }

        const layer: Layer = { ...options };
        const descendantIndex = this.layers.findIndex((item) => this.isDescendantOf(item, layer.id));

        if (descendantIndex === -1) {
            this.layers.push(layer);
        } else {
            this.layers.splice(descendantIndex, 0, layer);
        }

        this.syncScrollLock(layer);
        this.notify();

        if (!layer.closing) {
            this.applyOpeningRules(layer);
        }

        return () => this.unregister(layer.id);
    };

    /**
     * Обновляет настройки зарегистрированного слоя.
     */
    public update = (id: string, options: Partial<OverlayLayerOptions> & { dismissable?: boolean }) => {
        const layer = this.getLayer(id);

        if (!layer) {
            return;
        }

        const wasClosing = Boolean(layer.closing);
        const changed = (Object.keys(options) as Array<keyof Layer>).some(
            (key) => !isSameValue(layer[key], options[key]),
        );

        if (!changed) {
            return;
        }

        Object.assign(layer, options);

        if (!wasClosing && layer.closing) {
            this.cascadeClose(id);
        }

        if (wasClosing && !layer.closing) {
            this.cascadedParents.delete(id);
        }

        this.syncScrollLock(layer);
        this.notify();

        if (wasClosing && !layer.closing) {
            this.applyOpeningRules(layer);
        }
    };

    /**
     * Снимает регистрацию слоя и освобождает только принадлежащие ему ресурсы.
     */
    public unregister = (id: string) => {
        const index = this.layers.findIndex((layer) => layer.id === id);

        if (index === -1) {
            return;
        }

        this.cascadeClose(id);
        this.layers.splice(index, 1);
        this.scrollLocker.unlock(id);
        this.pendingRequests.delete(id);
        this.cascadedParents.delete(id);
        this.notify();
    };

    /**
     * Запрос на закрытие слоя с причиной.
     * `force` — закрытие без проверки продуктом (завершение владельца, открытие модального слоя).
     */
    public requestClose = (id: string, reason: CloseReason, event?: Event, force = false): CloseRequestStatus => {
        const layer = this.getLayer(id);

        if (!layer || this.pendingRequests.has(id)) {
            return 'ignored';
        }

        const decision = force ? undefined : layer.onCloseRequest?.(reason, event);

        if (decision === false) {
            return 'rejected';
        }

        if (isPromiseLike(decision)) {
            this.pendingRequests.add(id);

            decision.then(
                (result) => {
                    this.pendingRequests.delete(id);

                    if (result !== false && this.getLayer(id)) {
                        this.getLayer(id)?.onClose?.(reason, event);
                    }
                },
                () => {
                    this.pendingRequests.delete(id);
                },
            );

            return 'deferred';
        }

        layer.onClose?.(reason, event);

        return 'closed';
    };

    public subscribe = (listener: Listener) => {
        this.listeners.add(listener);

        return () => {
            this.listeners.delete(listener);
        };
    };

    public getLayers = (): readonly Layer[] => this.layers;

    public getLayer = (id: string | null | undefined): Layer | undefined =>
        id ? this.layers.find((layer) => layer.id === id) : undefined;

    public isPending = (id: string) => this.pendingRequests.has(id);

    /**
     * Является ли `ancestorId` предком слоя `id`.
     */
    public isAncestor = (ancestorId: string, id: string) => {
        const layer = this.getLayer(id);

        return layer ? this.isDescendantOf(layer, ancestorId) : false;
    };

    /**
     * Все зарегистрированные потомки слоя.
     */
    public getDescendants = (id: string) => this.layers.filter((layer) => this.isDescendantOf(layer, id));

    /**
     * DOM-элементы потомков слоя: нужны для расширения области фокуса.
     */
    public getDescendantElements = (id: string) =>
        this.getDescendants(id).flatMap((layer) => this.getElements(layer)) as HTMLElement[];

    /**
     * DOM-элементы области сообщений.
     */
    public getMessageElements = () =>
        this.layers
            .filter((layer) => layer.kind === 'message')
            .flatMap((layer) => this.getElements(layer)) as HTMLElement[];

    /**
     * Находится ли узел внутри слоя или любого его дочернего слоя, в том числе в другом портале.
     */
    public contains = (id: string, target: Node | null) => {
        if (!target) {
            return false;
        }

        const layer = this.getLayer(id);

        if (!layer) {
            return false;
        }

        return [layer, ...this.getDescendants(id)].some((item) =>
            this.getElements(item).some((element) => element.contains(target)),
        );
    };

    /**
     * Верхний активный слой, участвующий в цепочке закрытия.
     */
    public getTopLayer = () => {
        for (let index = this.layers.length - 1; index >= 0; index -= 1) {
            const layer = this.layers[index];

            if (this.isInteractive(layer)) {
                return layer;
            }
        }

        return undefined;
    };

    public getTopModal = () => {
        for (let index = this.layers.length - 1; index >= 0; index -= 1) {
            const layer = this.layers[index];

            if (layer.modal && !layer.closing && layer.kind !== 'message') {
                return layer;
            }
        }

        return undefined;
    };

    public getZIndex = (id: string): number => {
        const layer = this.getLayer(id);

        if (!layer) {
            return this.zIndexBase;
        }

        if (layer.zIndex !== undefined) {
            return layer.zIndex;
        }

        if (layer.kind === 'message') {
            return this.getMessagesZIndex();
        }

        const index = this.layers.filter((item) => item.kind !== 'message').indexOf(layer);

        return this.zIndexBase + Math.max(index, 0) * this.zIndexStep;
    };

    /**
     * z-index области сообщений. Глобальная область не получает приоритет над модальным слоем.
     */
    public getMessagesZIndex = (): number => {
        const firstModal = this.layers.find((layer) => layer.modal && !layer.closing && layer.kind !== 'message');

        if (!firstModal) {
            return this.messagesZIndex;
        }

        return Math.min(this.messagesZIndex, this.getZIndex(firstModal.id) - 1);
    };

    public getState = (id: string): OverlayLayerState | null => {
        const layer = this.getLayer(id);

        if (!layer) {
            return null;
        }

        const zIndex = this.getZIndex(id);
        const topModal = this.getTopModal();
        const isBlocked = Boolean(
            topModal && topModal.id !== id && !this.isDescendantOf(layer, topModal.id) && layer.kind !== 'message',
        );

        return {
            id,
            index: this.layers.indexOf(layer),
            zIndex,
            backdropZIndex: zIndex,
            childZIndex: zIndex + 1,
            isTop: this.getTopLayer()?.id === id,
            isTopModal: topModal?.id === id,
            isBlocked,
            hasActiveModal: Boolean(topModal),
        };
    };

    /**
     * Маршрутизация Escape: событие получает только верхний слой.
     * Обработанное локально событие (`defaultPrevented`) не закрывает слой.
     */
    public handleKeyDown = (event: KeyboardEvent) => {
        if (!isEscape(event) || event.defaultPrevented) {
            return;
        }

        const top = this.getTopLayer();

        if (!top || top.closeOnEsc === false) {
            return;
        }

        event.preventDefault();
        this.requestClose(top.id, 'escape', event);
    };

    /**
     * Маршрутизация нажатия снаружи: учитывает дочерние слои в отдельных контейнерах.
     */
    public handlePointerDown = (event: Event) => {
        const top = this.getTopLayer();

        if (!top || !top.closeOnOutside) {
            return;
        }

        const target = event.target as Node | null;

        if (this.contains(top.id, target) || this.isInsideMessage(target)) {
            return;
        }

        this.requestClose(top.id, 'outside', event);
    };

    private getElements = (layer: Layer) =>
        (layer.getElements?.() ?? []).filter((element): element is Element => Boolean(element));

    private isInteractive = (layer: Layer) =>
        layer.kind !== 'message' && !layer.closing && (Boolean(layer.modal) || Boolean(layer.dismissable));

    private isInsideMessage = (target: Node | null) =>
        Boolean(target) && this.getMessageElements().some((element) => element.contains(target));

    private isDescendantOf = (layer: Layer, ancestorId: string) => {
        const visited = new Set<string>();
        let { parentId } = layer;

        while (parentId && !visited.has(parentId)) {
            if (parentId === ancestorId) {
                return true;
            }

            visited.add(parentId);
            parentId = this.getLayer(parentId)?.parentId;
        }

        return false;
    };

    private cascadeClose = (id: string) => {
        if (this.cascadedParents.has(id)) {
            return;
        }

        this.cascadedParents.add(id);

        this.getDescendants(id)
            .filter((layer) => !layer.closing)
            .forEach((layer) => this.requestClose(layer.id, 'parent-closed', undefined, true));
    };

    private applyOpeningRules = (opened: Layer) => {
        const isRelated = (layer: Layer) =>
            layer.id === opened.id || this.isDescendantOf(opened, layer.id) || this.isDescendantOf(layer, opened.id);

        if (opened.modal) {
            this.layers
                .filter((layer) => layer.transient && !layer.closing && !isRelated(layer))
                .forEach((layer) => this.requestClose(layer.id, 'modal-opened', undefined, true));
        }

        if (opened.group) {
            this.layers
                .filter(
                    (layer) =>
                        layer.group === opened.group &&
                        layer.kind === opened.kind &&
                        !layer.closing &&
                        !isRelated(layer),
                )
                .forEach((layer) => this.requestClose(layer.id, 'outside'));
        }
    };

    private syncScrollLock = (layer: Layer) => {
        const target = layer.closing ? null : resolveScrollLockTarget(layer.scrollLock, this.document);

        if (target) {
            this.scrollLocker.lock(layer.id, target);
        } else {
            this.scrollLocker.unlock(layer.id);
        }
    };

    private syncModality = () => {
        this.restoreHidden?.();
        this.restoreHidden = null;

        const topModal = this.getTopModal();

        if (!topModal || !this.document) {
            return;
        }

        const keep = [topModal, ...this.getDescendants(topModal.id)]
            .filter((layer) => !layer.closing)
            .flatMap(this.getElements)
            .concat(this.getMessageElements());

        const inert = this.layers
            .filter(
                (layer) => layer !== topModal && layer.kind !== 'message' && !this.isDescendantOf(layer, topModal.id),
            )
            .flatMap(this.getElements);

        this.restoreHidden = hideOthers(keep, inert, this.document.body);
    };

    private syncListeners = () => {
        const doc = this.document;

        if (this.layers.length > 0 && doc && !this.attachedDocument) {
            doc.addEventListener('keydown', this.handleKeyDown);
            doc.addEventListener('pointerdown', this.handlePointerDown, true);
            this.attachedDocument = doc;
            return;
        }

        if (this.layers.length === 0 && this.attachedDocument) {
            this.attachedDocument.removeEventListener('keydown', this.handleKeyDown);
            this.attachedDocument.removeEventListener('pointerdown', this.handlePointerDown, true);
            this.attachedDocument = null;
        }
    };

    private notify = () => {
        this.syncListeners();
        this.syncModality();
        this.listeners.forEach((listener) => listener());
    };

    /**
     * Повторно применяет модальность, например после монтирования DOM-элементов слоя.
     */
    public refresh = () => {
        this.syncModality();
    };
}
