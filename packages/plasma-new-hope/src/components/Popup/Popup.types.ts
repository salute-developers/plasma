export type PopupPlacementBasic = 'center' | 'top' | 'bottom' | 'right' | 'left';
export type PopupPlacementMixed = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PopupPlacement = PopupPlacementBasic | PopupPlacementMixed;

export interface PopupInfo {
    id: string;
    info?: Record<string, any>;
}

export interface PopupContextType {
    items: Map<string, PopupInfo>;
    rootId: string;
    register: (info: PopupInfo) => void;
    unregister: (id: string) => void;
}

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @deprecated Отображение Popup.
     */
    isOpen?: boolean;
    /**
     * Отображение Popup.
     */
    opened?: boolean;
    /** Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     */
    placement?: PopupPlacement;
    /** Смещение относительно текущей позиции.
     * (x, y) - [number, number], [string, string].
     * При передаче number расчёт в rem.
     */
    offset?: [number, number] | [string, string];
    /**
     * В каком контейнере позиционируется(по умолчанию document), можно также указать id элемента или ref для него.
     */
    frame?: 'document' | string | React.RefObject<HTMLElement>;
    /**
     * Содержимое Popup.
     */
    children?: React.ReactNode;
    /**
     * Соседний элемент для окна в портале.
     */
    overlay?: React.ReactNode;
    /**
     * Значение z-index для Popup.
     */
    zIndex?: string;
    /**
     * Дополнительная информация для программного взаимодействия с окном через контекст.
     */
    popupInfo?: PopupInfo;
    /**
     * Использовать ли анимацию.
     */
    withAnimation?: boolean;
}
export interface PopupAnimationInfo {
    endAnimation: boolean;
    setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    endTransition: boolean;
    setEndTransition: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PopupPositionType {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
    transform?: string;
}

export interface PopupRootProps extends Omit<PopupProps, 'opened' | 'isOpen' | 'overlay'> {
    id: string;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    position: PopupPositionType;
    /**
     * Данные из хука usePopupAnimation.
     */
    animationInfo: PopupAnimationInfo;
}

export interface PopupHookArgs extends Pick<PopupProps, 'popupInfo' | 'withAnimation'> {
    id: string;
    isOpen: boolean;
}

export interface PopupRootContainerProps extends Omit<PopupProps, 'opened' | 'isOpen' | 'overlay'> {
    endTransition?: boolean;
    endAnimation?: boolean;
    position: PopupPositionType;
}
