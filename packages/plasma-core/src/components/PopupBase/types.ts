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
    /**
     * Отображение PopupBase.
     */
    isOpen: boolean;
    /* Позиция на экране
     * center - по умолчанию
     * left, right, top, bottom и их комбинации
     */
    placement?: PopupBasePlacement;
    /* Смещение относительно текущей позиции.
     * (x, y) - <number | string, number | string> или проценты.
     * При передаче number, то расчёт в rem.
     */
    offset?: [number | string, number | string];
    /**
     * В каком контейнере позиционируется(по умолчанию document).
     */
    frame?: 'document' | React.RefObject<HTMLElement>;
    /**
     * Содержимое PopupBase.
     */
    children?: React.ReactNode;
    /**
     * Соседний элемент для окна в портале.
     */
    overlay?: React.ReactNode;
    /**
     * Значение z-index для PopupBase.
     */
    zIndex?: string;
    /**
     * Дополнительная информация для программного взаимодействия с окном через контекст.
     */
    popupInfo?: PopupInfo;
    /**
     * Используются ли анимация.
     */
    withAnimation?: boolean;
    /**
     * Данные из хука usePopupAnimation.
     */
    animationInfo?: PopupAnimationInfo;
}
export interface PopupAnimationInfo {
    endAnimation: boolean;
    setEndAnimation: React.Dispatch<React.SetStateAction<boolean>>;
    endTransition: boolean;
    setEndTransition: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface PopupRootProps extends Omit<PopupBaseProps, 'isOpen' | 'overlay' | 'withAnimation'> {
    id: string;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UsePopupArgs extends Pick<PopupBaseProps, 'isOpen' | 'withAnimation' | 'popupInfo' | 'animationInfo'> {
    id: string;
}
