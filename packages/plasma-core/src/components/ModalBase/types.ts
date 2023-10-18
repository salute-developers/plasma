import { PopupBaseProps, PopupRootProps } from '../PopupBase';
import { PopupAnimationInfo, PopupHookArgs } from '../PopupBase/types';

export interface ModalBaseProps extends PopupBaseProps {
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
}
export type ModalAnimationInfo = PopupAnimationInfo;

export type ModalBaseRootProps = PopupRootProps & Pick<ModalBaseProps, 'initialFocusRef' | 'focusAfterRef' | 'onClose'>;

export type ModalOverlayProps = Pick<PopupRootProps, 'id' | 'animationInfo' | 'zIndex'> &
    Pick<ModalBaseProps, 'withBlur' | 'closeOnOverlayClick' | 'onOverlayClick' | 'onClose'>;

export type ModalHookArgs = Pick<PopupHookArgs, 'id' | 'popupInfo'> &
    Pick<ModalBaseProps, 'closeOnEsc' | 'onEscKeyDown' | 'onClose'>;
