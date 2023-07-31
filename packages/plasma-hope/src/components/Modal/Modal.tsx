import React, { useEffect, useCallback, useRef, useState, useContext, FC } from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import { useUniqId } from '@salutejs/plasma-core';
import { darkOverlayBlur, overlaySoft } from '@salutejs/plasma-tokens-web';

import { useFocusTrap } from '../../hooks';

import { ModalsContext, MODALS_PORTAL_ID } from './ModalsContext';
import { ModalView, ModalViewProps } from './ModalView';

export interface ModalProps extends ModalViewProps {
    /**
     * Отображение модального окна.
     */
    isOpen: boolean;

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
}

interface HidingProps {
    isHiding?: boolean;
}

const ESCAPE_KEYCODE = 27;

const wrapperHideAnimation = keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`;
const bodyShowAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;
const bodyHideAnimation = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }

    to {
        opacity: 0;
        transform: translateY(-100%);
    }
`;

const StyledWrapper = styled.div<HidingProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({ isHiding }) =>
        isHiding &&
        css`
            animation: 0.1s ${wrapperHideAnimation} ease-out;
        `}
`;

const StyledOverlay = styled.div<{ transparent?: boolean; $withBlur?: boolean; clickable?: boolean }>`
    position: absolute;

    ${({ $withBlur }) => {
        return css`
            --background-color: ${$withBlur ? darkOverlayBlur : overlaySoft};
            --backdrop-filter: ${$withBlur ? 'blur(1rem)' : 'none'};
        `;
    }};

    width: 100%;
    height: 100%;

    background-color: ${({ transparent }) => (transparent ? 'transparent' : 'var(--background-color)')};
    backdrop-filter: var(--backdrop-filter);
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;

const StyledModal = styled.div<HidingProps>`
    position: absolute;
    height: 100%;
    pointer-events: none;

    ${({ isHiding }) => css`
        animation: 0.4s ${isHiding ? bodyHideAnimation : bodyShowAnimation} ease-out;
    `}
`;

const NoScroll = createGlobalStyle`
    body {
        overflow-y: hidden;
    }
`;

/**
 * Модальное окно.
 * Управляет показом/скрытием, подложкой и анимацией визуальной части модального окна.
 */
export const Modal: FC<ModalProps> = ({
    id,
    isOpen,
    onClose,
    onOverlayClick,
    onEscKeyDown,
    closeOnEsc = true,
    closeOnOverlayClick = true,
    withBlur,
    initialFocusRef,
    focusAfterRef,
    ...rest
}) => {
    const uniqId = useUniqId();
    const innerId = id || uniqId;

    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const portalRef = useRef<HTMLElement | null>(null);
    const trapRef = useFocusTrap(true, initialFocusRef, focusAfterRef);

    const controller = useContext(ModalsContext);

    const [, forceRender] = useState(false);

    const onOverlayKeyDown = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (!closeOnOverlayClick) {
                return;
            }

            if (onOverlayClick) {
                onOverlayClick(event);
                return;
            }

            onClose?.();
        },
        [closeOnOverlayClick, onOverlayClick, onClose],
    );

    useEffect(() => {
        let portal = document.getElementById(MODALS_PORTAL_ID);

        if (!portal) {
            portal = document.createElement('div');
            portal.setAttribute('id', MODALS_PORTAL_ID);
            portal.setAttribute('aria-live', 'off');
            portal.setAttribute('role', 'presentation');
            portal.style.position = 'relative';
            portal.style.zIndex = '9000';
            document.body.appendChild(portal);
        }

        portalRef.current = portal;

        /**
         * Изменение стейта нужно для того, чтобы модальное окно
         * отобразилось после записи DOM элемента в portalRef.current
         */
        forceRender(true);

        return () => {
            controller.unregister(innerId);
        };
    }, [controller, innerId]);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (
                closeOnEsc &&
                event.keyCode === ESCAPE_KEYCODE &&
                wrapperRef.current &&
                portalRef.current &&
                portalRef.current.contains(wrapperRef.current) &&
                portalRef.current.children[portalRef.current.children.length - 1] === wrapperRef.current
            ) {
                if (onEscKeyDown) {
                    onEscKeyDown(event);
                    return;
                }

                onClose?.();
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onClose, onEscKeyDown, closeOnEsc]);

    if (isOpen) {
        controller.register(innerId);
    } else {
        controller.unregister(innerId);
        return null;
    }

    return (
        <>
            <NoScroll />
            {portalRef.current &&
                ReactDOM.createPortal(
                    <StyledWrapper ref={wrapperRef}>
                        <StyledOverlay
                            transparent={controller.items.indexOf(innerId) !== 0}
                            clickable={closeOnOverlayClick}
                            onClick={onOverlayKeyDown}
                            $withBlur={withBlur}
                        />
                        <StyledModal>
                            <ModalView onClose={onClose} ref={trapRef} {...rest} />
                        </StyledModal>
                    </StyledWrapper>,
                    portalRef.current,
                )}
        </>
    );
};
