import { PopupHookArgs, PopupProps, PopupRootProps } from '../Popup/Popup.types';

export interface ModalProps extends PopupProps {
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
     * Обработчик клика при нажатии вне области модального окна(если не передан, то при нажатии используется onClose).
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
    view?: string;
}

export type ModalBaseRootProps = PopupRootProps & Pick<ModalProps, 'initialFocusRef' | 'focusAfterRef' | 'onClose'>;

export type ModalOverlayProps = Pick<PopupRootProps, 'id' | 'zIndex'> &
    Pick<ModalProps, 'withBlur' | 'closeOnOverlayClick' | 'onOverlayClick' | 'onClose'>;

export type ModalHookArgs = Pick<PopupHookArgs, 'id' | 'popupInfo' | 'isOpen'> &
    Pick<ModalProps, 'closeOnEsc' | 'onEscKeyDown' | 'onClose'>;
