import type { PopupProps } from '../Popup';
import type { PanelProps } from '../Panel';
import type { PopupHookArgs } from '../Popup/Popup.types';

export const drawerPlacements = {
    top: 'top',
    right: 'right',
    bottom: 'bottom',
    left: 'left',
};

export type DrawerPlacement = keyof typeof drawerPlacements;

export type DrawerAnimationInfo = {
    enter?: string;
    exit?: string;
};

export type DrawerProps = Omit<PopupProps, 'draggable' | 'resizable'> &
    PanelProps & {
        /**
         * Информация об анимации.
         * Свойство может содержать поля `enter` и `exit`
         * @example
         * ```
         * {
         *      enter: 'animatinName 0.2s forwards',
         *      exit: 'exitAnimationName 0.2s forwards',
         * }
         * ```
         */
        animationInfo?: DrawerAnimationInfo;
        /**
         * Расположение Drawer.
         * @default
         * left
         */
        placement?: DrawerPlacement;
        /**
         * Поведение аналогичное Modal.
         * @default
         * true
         * @description
         * Если передан как true нет возможности зваимодействовать с контентом вне Drawer.
         * Если же передано как false, контент вне Drawer становиться доступным.
         */
        asModal?: boolean;
        /**
         * Пользовательский цвет фона Panel.
         */
        customBackgroundColor?: string;
        /**
         * Пользовательский цвет фона контента Panel.
         */
        customContentBackgroundColor?: string;
        /**
         * Нужно ли применять blur для подложки.
         */
        withBlur?: boolean;
        /**
         * Закрывать модальное окно при нажатии на ESC(по умолчанию true).
         */
        closeOnEsc?: boolean;
        /**
         * Закрывать модальное окно при нажатии вне области модального окна(по умолчанию true),
         */
        closeOnOverlayClick?: boolean;
        /**
         * Обработчик клика при нажатии на ESC(если не передан, то при нажатии используется onClose).
         */
        onEscKeyDown?: (event: KeyboardEvent) => void;
        /**
         * Обработчик клика при нажатии вне области модального окна
         * (если не передан, то при нажатии используется onClose).
         */
        onOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
        /**
         * Первый элемент для фокуса внутри модального окна.
         */
        initialFocusRef?: React.RefObject<HTMLElement>;
        /**
         * Элемент для фокуса после закрытия модального окна
         * (по умолчанию фокус на последнем перед открытием активном элементе).
         */
        focusAfterRef?: React.RefObject<HTMLElement>;
        /**
         * Общий обработчик клика по кнопке "закрыть".
         */
        onClose?: () => void;
    };

export interface DrawerHookArgs
    extends Pick<PopupHookArgs, 'id' | 'popupInfo' | 'isOpen'>,
        Pick<DrawerProps, 'closeOnEsc' | 'onEscKeyDown' | 'onClose'> {
    disableScroll?: boolean;
}
