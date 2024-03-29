import React, { FC, useCallback, useMemo } from 'react';
import styled, { css } from 'styled-components';

import { DEFAULT_Z_INDEX } from '../PopupBase/PopupBaseRoot';
import { usePopupBaseContext } from '../PopupBase';

import { getIdLastModal } from './ModalBaseContext';
import { ModalOverlayProps } from './types';

/*
 * Класс компонента ModalBaseOverlay: `modal-base-overlay`
 */
export const modalBaseOverlayClass = 'modal-base-overlay';

// TODO: новый отдельный оверлей #778
export const Overlay = styled.div<{
    transparent?: boolean;
    $withBlur?: boolean;
    clickable?: boolean;
    zIndex?: string;
}>`
    position: fixed;

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

/**
 * ModalOverlay - подложка для ModalBase.
 */
export const ModalOverlay: FC<ModalOverlayProps> = ({
    id,
    withBlur,
    onOverlayClick,
    onClose,
    zIndex,
    closeOnOverlayClick = true,
    ...rest
}) => {
    const popupController = usePopupBaseContext();

    const onModalOverlayKeyDown = useCallback(
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

    const transparent = useMemo(() => getIdLastModal(popupController.items) !== id, [id, popupController.items]);

    return (
        <Overlay
            className={modalBaseOverlayClass}
            transparent={transparent}
            clickable={closeOnOverlayClick}
            onClick={onModalOverlayKeyDown}
            zIndex={zIndex}
            $withBlur={withBlur}
            {...rest}
        />
    );
};
