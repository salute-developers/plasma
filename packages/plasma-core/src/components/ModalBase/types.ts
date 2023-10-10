import { PopupBaseProps, PopupRootProps } from "../PopupBase";
import { PopupAnimationInfo, usePopupProps } from "../PopupBase/types";

export interface ModalBaseProps extends PopupBaseProps { }

export interface ModalAnimationInfo extends PopupAnimationInfo {
    onClose?: () => void;
}

export interface ModalBaseRootProps extends PopupRootProps {
    /**
     * Первый элемент для фокуса внутри модального окна.
     */
    initialFocusRef?: React.RefObject<HTMLElement>;
    /**
     * Элемент для фокуса после закрытия модального окна
     * (по умолчанию фокус на последнем перед открытием активном элементе).
     */
    focusAfterRef?: React.RefObject<HTMLElement>;
    hookInfo: ModalAnimationInfo;
}

export interface ModalOverlayProps extends PopupRootProps {
    /**
     * Нужно ли применять blur для подложки.
     */
    withBlur?: boolean;
    /**
     * Закрывать модальное окно при нажатии вне области модального окна(по умолчанию true),
     */
    closeOnModalOverlayClick?: boolean;
    /**
     * Обработчик клика при нажатии вне области модального окна(если не передан, то при нажатии используется onClose).
     */
    onModalOverlayClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    hookInfo: ModalAnimationInfo;
}


export interface useModalProps extends usePopupProps {
    /**
     * Закрывать модальное окно при нажатии на ESC(по умолчанию true).
     */
    closeOnEsc?: boolean;
    /**
     * Обработчик клика при нажатии на ESC(если не передан, то при нажатии используется onClose).
     */
    onEscKeyDown?: (event: KeyboardEvent) => void;
    /**
     * Общий обработчик клика по кнопке "закрыть".
     */
    onClose?: () => void;
}
