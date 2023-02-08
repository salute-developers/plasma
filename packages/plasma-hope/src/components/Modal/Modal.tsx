import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import { useUniqId } from '@salutejs/plasma-core';
import { darkOverlayBlur } from '@salutejs/plasma-tokens-web';

import { ModalsContext, MODALS_PORTAL_ID } from './ModalsContext';
import { ModalView, ModalViewProps } from './ModalView';

export interface ModalProps extends ModalViewProps {
    /**
     * Отображение модального окна.
     */
    isOpen: boolean;
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
const StyledOverlay = styled.div<{ transparent?: boolean }>`
    position: absolute;

    width: 100%;
    height: 100%;

    background-color: ${({ transparent }) => (transparent ? 'transparent' : darkOverlayBlur)};
    backdrop-filter: blur(1rem);
    cursor: pointer;
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
export const Modal: React.FC<ModalProps> = ({ id, isOpen, onClose, ...rest }) => {
    const uniqId = useUniqId();
    const innerId = id || uniqId;
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    const portalRef = React.useRef<HTMLElement | null>(null);
    const controller = React.useContext(ModalsContext);
    const [, forceRender] = React.useState(false);

    React.useEffect(() => {
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
    }, []);

    React.useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (
                event.keyCode === ESCAPE_KEYCODE &&
                wrapperRef.current &&
                portalRef.current &&
                portalRef.current.contains(wrapperRef.current) &&
                portalRef.current.children[portalRef.current.children.length - 1] === wrapperRef.current
            ) {
                onClose?.();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

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
                        <StyledOverlay transparent={controller.items.indexOf(innerId) !== 0} onClick={onClose} />
                        <StyledModal>
                            <ModalView onClose={onClose} {...rest} />
                        </StyledModal>
                    </StyledWrapper>,
                    portalRef.current,
                )}
        </>
    );
};
