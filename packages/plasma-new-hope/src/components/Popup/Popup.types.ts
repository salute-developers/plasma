export type BasicPopupPlacement = 'center' | 'top' | 'bottom' | 'right' | 'left';
export type MixedPopupPlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PopupPlacement = BasicPopupPlacement | MixedPopupPlacement;

export interface PopupInfo {
    id: string;
    info?: Object;
}

export interface PopupContextType {
    items: PopupInfo[];
    register: (info: PopupInfo) => void;
    unregister: (id: string) => void;
}

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Отображение Popup.
     */
    isOpen?: boolean;
    /* Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     */
    placement?: PopupPlacement;
    /* Смещение относительно текущей позиции.
     * (x, y) - [number, number], [string, string].
     * При передаче number расчёт в rem.
     */
    offset?: [number, number] | [string, string];
    /**
     * В каком контейнере позиционируется(по умолчанию document).
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

export interface PopupRootProps extends Omit<PopupProps, 'isOpen' | 'overlay'> {
    id: string;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    position: PopupPositionType;
    /**
     * Данные из хука usePopupAnimation.
     */
    animationInfo: PopupAnimationInfo;
}

export interface PopupHookArgs extends Pick<PopupProps, 'isOpen' | 'popupInfo' | 'withAnimation'> {
    id: string;
}

export interface PopupRootContainerProps extends Omit<PopupProps, 'isOpen' | 'overlay'> {
    endTransition?: boolean;
    endAnimation?: boolean;
    position: PopupPositionType;
}
