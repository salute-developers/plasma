import type { ReactNode, RefObject } from 'react';

/**
 * Тип слоя Overlay. Определяет правила маршрутизации событий и порядок слоёв.
 */
export type OverlayKind = 'modal' | 'drawer' | 'popup' | 'popover' | 'tooltip' | 'dropdown' | 'message';

/**
 * Причина запроса на закрытие слоя.
 * - `escape` — нажатие Escape;
 * - `outside` — нажатие вне слоя или на подложку;
 * - `close-button` — кнопка закрытия внутри слоя;
 * - `parent-closed` — закрылся слой-владелец;
 * - `modal-opened` — открылся модальный слой, временные слои фона закрываются;
 * - `action` — программное закрытие действием внутри слоя.
 */
export type CloseReason = 'escape' | 'outside' | 'close-button' | 'parent-closed' | 'modal-opened' | 'action';

/**
 * Решение продукта по запросу на закрытие:
 * - `false` — отклонить, слой остаётся открытым;
 * - `Promise` — отложить до решения; `false` в результате отклоняет закрытие;
 * - иначе применяется стандартное поведение компонента.
 */
export type CloseRequestDecision = boolean | void | Promise<boolean | void>;

export type CloseRequestHandler = (reason: CloseReason, event?: Event) => CloseRequestDecision;

export type CloseRequestStatus = 'closed' | 'rejected' | 'deferred' | 'ignored';

export type ScrollLockTarget = boolean | HTMLElement | (() => HTMLElement | null | undefined);

/**
 * Настройки слоя, которые задаёт компонент.
 */
export interface OverlayLayerConfig {
    /**
     * Тип слоя.
     * @default 'popup'
     */
    kind?: OverlayKind;
    /**
     * Модальный слой: фон недоступен, фокус ограничен слоем и его дочерними слоями.
     * @default false
     */
    modal?: boolean;
    /**
     * Временный слой фона: закрывается при открытии модального слоя вне своей цепочки.
     * @default false
     */
    transient?: boolean;
    /**
     * Группа взаимоисключающих слоёв: открытие слоя закрывает другие слои группы вне своей цепочки.
     */
    group?: string;
    /**
     * Закрывать слой по Escape, если он верхний.
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * Закрывать слой по нажатию снаружи, если он верхний. Дочерние слои считаются частью владельца.
     * @default false
     */
    closeOnOutside?: boolean;
    /**
     * Блокировка прокрутки: `true` — страница, либо конкретный контейнер.
     * @default false
     */
    scrollLock?: ScrollLockTarget;
    /**
     * Закрытие слоя после разрешённого запроса.
     */
    onClose?: (reason: CloseReason, event?: Event) => void;
    /**
     * Проверка запроса на закрытие.
     */
    onCloseRequest?: CloseRequestHandler;
    /**
     * Дополнительная информация о слое для программного взаимодействия.
     */
    info?: Record<string, any>;
}

export interface OverlayLayerOptions extends OverlayLayerConfig {
    id: string;
    /**
     * Слой-владелец.
     */
    parentId?: string | null;
    /**
     * Явный z-index. Имеет приоритет над вычисленным.
     */
    zIndex?: number;
    /**
     * Слой в процессе закрытия (анимация): не участвует в маршрутизации и модальности.
     */
    closing?: boolean;
    /**
     * DOM-элементы слоя для определения «внутри / снаружи» и модальности.
     */
    getElements?: () => Array<Element | null | undefined>;
}

export interface OverlayLayerState {
    id: string;
    /**
     * Порядковый номер слоя в стеке.
     */
    index: number;
    zIndex: number;
    backdropZIndex: number;
    /**
     * z-index по умолчанию для дочерних всплывающих элементов.
     */
    childZIndex: number;
    /**
     * Верхний слой, который получает Escape и нажатие снаружи.
     */
    isTop: boolean;
    /**
     * Верхний модальный слой.
     */
    isTopModal: boolean;
    /**
     * Слой перекрыт модальным слоем и недоступен для взаимодействия.
     */
    isBlocked: boolean;
    /**
     * В стеке есть активный (не закрывающийся) модальный слой.
     */
    hasActiveModal: boolean;
}

export interface OverlayManagerOptions {
    /**
     * Базовый z-index для слоёв.
     * @default 9000
     */
    zIndexBase?: number;
    /**
     * Шаг z-index между соседними слоями.
     * @default 10
     */
    zIndexStep?: number;
    /**
     * z-index области сообщений, когда нет модальных слоёв.
     * @default zIndexBase + 900
     */
    messagesZIndex?: number;
}

export interface OverlayProviderProps {
    children?: ReactNode;
    /**
     * Базовый z-index для слоёв Overlay.
     * @default 9000
     */
    zIndexBase?: number;
    /**
     * Контейнер для корня слоёв (по умолчанию document), можно указать id элемента или ref для него.
     */
    portalContainer?: 'document' | string | RefObject<HTMLElement>;
    /**
     * @description Только для применения в рамках SSR.
     */
    UNSAFE_SSR_ENABLED?: boolean;
}
