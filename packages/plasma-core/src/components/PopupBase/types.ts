export type BasicPopupBasePlacement = 'center' | 'top' | 'bottom' | 'right' | 'left';
export type MixedPopupBasePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type PopupBasePlacement = BasicPopupBasePlacement | MixedPopupBasePlacement;

export interface PopupInfo {
    id: string;
    info?: Object;
}

export interface PopupContextType {
    items: PopupInfo[];
    register: (info: PopupInfo) => void;
    unregister: (id: string) => void;
}

export interface PopupBaseProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    hookInfo: PopupAnimationInfo;
}

export interface PopupAnimationInfo {
    id: string;
    isVisible: boolean;
    isOpen: boolean;
    placement?: PopupBasePlacement;
    offset?: [number | string, number | string];
    frame: 'document' | React.RefObject<HTMLElement>;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    endAnimation: boolean;
    setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    withAnimation?: boolean;
}

export interface usePopupProps {
    isOpen: boolean;
    offset?: [number | string, number | string];
    placement?: PopupBasePlacement;
    frame?: 'document' | React.RefObject<HTMLElement>;
    id?: string;
    withAnimation?: boolean;
    popupInfo?: PopupInfo;
}

export interface PopupRootProps extends React.HTMLAttributes<HTMLDivElement> {
    /* Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     */
    /* Смещение отнсительно текущей позиции налево и вверх.
     * (x, y) - <number | string, number | string> или проценты.
     * При передаче number, то расчёт в rem.
     */
    /**
     * В каком контейнере позиционируется(по умолчанию document).
     */
    /**
     * Содержимое PopupBase.
     */
    children?: React.ReactNode;
    /**
     * Значение z-index для PopupBase.
     */
    zIndex?: string;
    hookInfo: PopupAnimationInfo;
}
