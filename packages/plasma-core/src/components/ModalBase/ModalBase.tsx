import React, { useCallback, FC, useEffect } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

import { useFocusTrap, useUniqId } from '../../hooks';
import { usePopupBaseContext } from '../PopupBase/PopupBaseContext';
import { DEFAULT_Z_INDEX, PopupBase, PopupBaseProps } from '../PopupBase/PopupBase';

import { ModalInfo, getIdLastModal } from './ModalBaseContext';

export interface ModalBaseProps extends Omit<PopupBaseProps, 'frame'> {
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

// TODO: новый отдельный оверлей #778
const StyledOverlay = styled.div<{ transparent?: boolean; $withBlur?: boolean; clickable?: boolean; zIndex?: string }>`
    position: absolute;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    ${({ zIndex }) => css`
        z-index: ${zIndex || DEFAULT_Z_INDEX};
    `}

    ${({ $withBlur }) => {
        return css`
            --background-color: ${$withBlur
                ? 'var(--plasma-modal-blur-overlay-color)'
                : 'var(--plasma-modal-overlay-color)'};
            --backdrop-filter: ${$withBlur ? 'blur(1rem)' : 'none'};
        `;
    }};

    background-color: ${({ transparent }) => (transparent ? 'transparent' : 'var(--background-color)')};
    backdrop-filter: var(--backdrop-filter);
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;

const NoScroll = createGlobalStyle`
    body {
        overflow-y: hidden;
    }
`;

const ESCAPE_KEYCODE = 27;

/**
 * ModalBase.
 * Управляет показом/скрытием, подложкой и анимацией визуальной части модального окна.
 */
export const ModalBase: FC<ModalBaseProps> = ({
    id,
    isOpen,
    placement,
    onClose,
    onOverlayClick,
    onEscKeyDown,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    withBlur,
    initialFocusRef,
    focusAfterRef,
    children,
    ...rest
}) => {
    const uniqId = useUniqId();
    const innerId = id || uniqId;
    const popupController = usePopupBaseContext();

    const trapRef = useFocusTrap(true, initialFocusRef, focusAfterRef);

    const onOverlayKeyDown = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (!closeOnOverlayClick) {
                return;
            }

            if (onOverlayClick) {
                onOverlayClick(event);
                return;
            }

            if (onClose) {
                onClose();
            }
        },
        [closeOnOverlayClick, onOverlayClick, onClose],
    );

    // При ESC закрывает текущее окно, если это возможно
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (closeOnEsc && event.keyCode === ESCAPE_KEYCODE && getIdLastModal(popupController.items) === innerId) {
                if (onEscKeyDown) {
                    onEscKeyDown(event);
                    return;
                }

                if (onClose) {
                    onClose();
                }
            }
        },
        [onClose, onEscKeyDown, popupController, closeOnEsc],
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onClose, onEscKeyDown, popupController, closeOnEsc]);

    const modalInfo: ModalInfo = {
        id: innerId,
        info: {
            isModal: true,
        },
    };

    return (
        <>
            <NoScroll />
            <PopupBase
                id={innerId}
                frame="document"
                isOpen={isOpen}
                placement={placement}
                ref={trapRef}
                popupInfo={modalInfo}
                overlay={
                    <StyledOverlay
                        transparent={getIdLastModal(popupController.items) !== innerId}
                        clickable={closeOnOverlayClick}
                        onClick={onOverlayKeyDown}
                        $withBlur={withBlur}
                    />
                }
                {...rest}
            >
                {children}
            </PopupBase>
        </>
    );
};
