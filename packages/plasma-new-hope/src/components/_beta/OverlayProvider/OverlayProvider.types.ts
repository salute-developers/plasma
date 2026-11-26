import type { PropsWithChildren, RefObject } from 'react';

/**
 * Роль слоя в единой системе слоёв Overlay.
 * Определяет базовый уровень z-index, поведение Escape и обработку открытия модального контекста.
 */
export type OverlayKind =
    | 'modal'
    | 'drawer'
    | 'bottom-sheet'
    | 'popover'
    | 'dropdown'
    | 'tooltip'
    | 'toast'
    | 'notification'
    | 'tour'
    | 'toolbar'
    | 'custom';

/**
 * Режим слоя: модальный блокирует фон (G1), немодальный оставляет фон доступным.
 */
export type OverlayMode = 'modal' | 'non-modal';

/**
 * Причина запроса на закрытие слоя (PDF «Overlay: возможности и гарантии SDDS», раздел 6).
 */
export type OverlayCloseReason =
    /** Пользователь нажал Escape (обрабатывает только верхний слой, G2). */
    | 'escape'
    /** Пользователь нажал вне слоя (обрабатывает только верхний слой, G3). */
    | 'outside-click'
    /** Владелец слоя завершился — дочерние слои деактивируются (G5). */
    | 'owner-dispose'
    /** Программное закрытие или реакция системы на открытие нового слоя. */
    | 'internal';

/**
 * Область, прокрутку которой блокирует слой (G6): страница или конкретный контейнер.
 */
export type OverlayScrollArea = 'page' | 'container';

/**
 * Событие-запрос на закрытие. Владелец слоя может принять закрытие,
 * отклонить (preventDefault) или отложить его, закрыв слой позже через свой API.
 */
export interface OverlayCloseEvent {
    /** Причина запроса на закрытие. */
    reason: OverlayCloseReason;
    /** Исходное DOM-событие (keydown, pointerdown), если запрос инициирован событием. */
    originalEvent?: Event;
    /** true — закрытие отклонено или отложено вызовом preventDefault. */
    defaultPrevented: boolean;
    /** Отклонить или отложить закрытие слоя. */
    preventDefault: () => void;
}

export type OverlayScrollLockConfig =
    | boolean
    | OverlayScrollArea
    | {
          /** Область блокировки прокрутки. */
          area: OverlayScrollArea;
          /** Контейнер для блокировки при area='container'. */
          container?: RefObject<HTMLElement | null>;
      };

export interface OverlayLayerOptions {
    /** Роль слоя в системе слоёв. */
    kind: OverlayKind;
    /** Режим слоя. По умолчанию модальные роли — 'modal', остальные — 'non-modal'. */
    mode?: OverlayMode;
    /** Явный владелец слоя. По умолчанию берётся из ближайшего слоя-предка в контексте. */
    ownerId?: string | null;
    /** Закрывать ли слой по Escape (обрабатывается только у верхнего активного слоя, G2). */
    closeOnEsc?: boolean;
    /** Закрывать ли слой по нажатию вне его границ (с учётом дочерних слоёв, G3). */
    closeOnOutsideClick?: boolean;
    /** Блокировка прокрутки фона (G6). */
    scrollLock?: OverlayScrollLockConfig;
    /**
     * Кастомный z-index: применяется как есть, дочерние слои отсчитываются от него.
     * По умолчанию z-index вычисляется по единой таблице слоёв.
     */
    zIndex?: string | number;
    /**
     * Запрос на закрытие: продукт проверяет причину и принимает, отклоняет или откладывает
     * закрытие (раздел 6 PDF «Overlay: возможности и гарантии SDDS»).
     */
    onRequestClose?: (event: OverlayCloseEvent) => void;
}

/**
 * Изменяемые обработчики слоя. Хранятся по ссылке, чтобы смена пропсов
 * не переставляла слой в стеке.
 */
export interface OverlayLayerHandlers {
    closeOnEsc: boolean;
    closeOnOutsideClick: boolean;
    onRequestClose: ((event: OverlayCloseEvent) => void) | null;
}

export interface OverlayLayerRegistration {
    id: string;
    kind: OverlayKind;
    mode: OverlayMode;
    ownerId: string | null;
    /** Вычисленный слот z-index слоя. */
    zSlot: number;
    /** Ссылка на изменяемые обработчики слоя. */
    handlersRef: { current: OverlayLayerHandlers };
}

export interface OverlayLayerRecord {
    id: string;
    kind: OverlayKind;
    mode: OverlayMode;
    ownerId: string | null;
    zSlot: number;
    handlersRef: { current: OverlayLayerHandlers };
    /** Корневой DOM-узел слоя (для проверки «внутри/снаружи», G3). */
    node: HTMLElement | null;
    /** Дочерние узлы, отрисованные в отдельных контейнерах (порталы) — считаются частью слоя, G3. */
    branches: Set<HTMLElement>;
    /** Зоны слоя (например подложка), клики в которые обрабатывает сам слой и не передаёт ниже. */
    zones: Set<HTMLElement>;
}

export interface OverlayContextValue {
    manager: OverlayManagerInterface;
    /** Слот z-index ближайшего слоя-предка: дочерние слои отсчитываются от него. */
    parentZSlot?: number;
    /** Id ближайшего слоя-предка (владельческая цепочка, G3/G5). */
    ownerId?: string;
}

export interface OverlayProviderProps extends PropsWithChildren {
    /**
     * Собственный экземпляр менеджера для изолированных областей (тесты, микрофронтенды).
     * По умолчанию используется глобальный менеджер.
     */
    manager?: OverlayManagerInterface;
}

/**
 * Контракт менеджера слоёв. Выделен отдельно, чтобы провайдер и хуки
 * не зависели от деталей реализации.
 */
export interface OverlayManagerInterface {
    register: (registration: OverlayLayerRegistration) => () => void;
    unregister: (id: string) => void;
    subscribe: (listener: () => void) => () => void;
    getVersion: () => number;
    isTop: (id: string) => boolean;
    setNode: (id: string, node: HTMLElement | null) => void;
    registerBranch: (id: string, node: HTMLElement) => () => void;
    registerZone: (id: string, node: HTMLElement) => () => void;
    requestClose: (id: string, reason: OverlayCloseReason, originalEvent?: Event) => boolean;
    attachDocumentListeners: () => () => void;
    /** Единый менеджер блокировки прокрутки (G6). */
    scrollLock: OverlayScrollLockManagerInterface;
}

/** Контракт менеджера блокировки прокрутки (G6, OV-07). */
export interface OverlayScrollLockManagerInterface {
    acquirePage: (id: string) => void;
    releasePage: (id: string) => void;
    acquireContainer: (id: string, container: HTMLElement) => void;
    releaseContainer: (id: string, container: HTMLElement) => void;
    acquire: (id: string, area: OverlayScrollArea, container?: HTMLElement | null) => void;
    release: (id: string, area?: OverlayScrollArea, container?: HTMLElement | null) => void;
    isPageLocked: () => boolean;
    isContainerLocked: (container: HTMLElement) => boolean;
}
