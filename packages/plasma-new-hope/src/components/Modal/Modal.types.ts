import { PopupHookArgs, PopupProps, PopupRootProps } from '../Popup/Popup.types';
import type { CloseRequestHandler } from '../OverlayProvider/OverlayProvider.types';

export type ModalBodyProps =
    | {
          /**
           * Оборачивает children в стилизованную обертку
           */
          hasBody: true;
          /**
           * Отображает кнопку с крестиком для закрытия
           */
          hasClose?: boolean;
      }
    | {
          hasBody?: false;
          hasClose?: never;
      };

export interface CommonModalProps extends Omit<PopupProps, 'layerOptions'> {
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
     * Фокус элементов будет происходить только внутри модального окна
     * @default true
     */
    isFocusTrapped?: boolean;
    /**
     * Первый элемент для фокуса внутри модального окна.
     */
    initialFocusRef?: string | React.RefObject<HTMLElement>;
    /**
     * Селекторы дополнительных DOM-поддеревьев, которые считаются частью модального окна для focus trap.
     * Используется для элементов, отрисованных через Portal или вне DOM-поддерева модального окна.
     */
    focusTrapSelectors?: string[];
    /**
     * Элемент для фокуса после закрытия модального окна
     * (по умолчанию фокус на последнем перед открытием активном элементе).
     */
    focusAfterRef?: React.RefObject<HTMLElement>;
    /**
     * Общий обработчик клика по кнопке "закрыть".
     */
    onClose?: () => void;
    /**
     * Проверка запроса на закрытие (Escape, нажатие на подложку, кнопка закрытия).
     * Верните `false`, чтобы оставить окно открытым, или `Promise`, чтобы отложить решение.
     */
    onCloseRequest?: CloseRequestHandler;
    view?: string;
    /**
     * Размер модального окна.
     */
    size?: string;
}

export type ModalProps = CommonModalProps & ModalBodyProps;

export type ModalBaseRootProps = PopupRootProps & Pick<ModalProps, 'initialFocusRef' | 'focusAfterRef' | 'onClose'>;

export type ModalOverlayProps = Pick<PopupRootProps, 'id' | 'zIndex'> &
    Pick<ModalProps, 'withBlur' | 'closeOnOverlayClick' | 'onOverlayClick' | 'onClose'>;

export type ModalHookArgs = Pick<PopupHookArgs, 'id' | 'popupInfo'> &
    Pick<ModalProps, 'closeOnEsc' | 'onEscKeyDown' | 'onOverlayClick' | 'onClose' | 'onCloseRequest'>;
