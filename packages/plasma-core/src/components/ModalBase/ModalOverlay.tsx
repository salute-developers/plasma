import React, { FC } from "react";
import styled, { css } from "styled-components";
import { DEFAULT_Z_INDEX } from "../PopupBase/PopupBaseRoot";
import { getIdFirstModal, getIdLastModal } from "./ModalBaseContext";
import { useCallback } from "react";
import { usePopupBaseContext } from "../PopupBase";
import { ModalOverlayProps } from "./types";

// TODO: новый отдельный оверлей #778
export const Overlay = styled.div<{ transparent?: boolean; endAnimation?: boolean; $withBlur?: boolean; clickable?: boolean; zIndex?: string }>`
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
 * ModalOverlay.
 */
export const ModalOverlay: FC<ModalOverlayProps> = ({
    withBlur,
    onModalOverlayClick,
    hookInfo,
    zIndex,
    closeOnModalOverlayClick = true,
    ...rest
}) => {
    const popupController = usePopupBaseContext();

    console.log('overlay', closeOnModalOverlayClick, hookInfo);

    const onModalOverlayKeyDown = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            console.log('click overlay', closeOnModalOverlayClick);
            if (!closeOnModalOverlayClick) {
                return;
            }

            if (onModalOverlayClick) {
                onModalOverlayClick(event);
                return;
            }

            if (hookInfo.onClose) {
                hookInfo.onClose();
            }
        },
        [closeOnModalOverlayClick, onModalOverlayClick, hookInfo.onClose],
    );

    return (
        <Overlay
            transparent={getIdLastModal(popupController.items) !== hookInfo.id}
            clickable={closeOnModalOverlayClick}
            endAnimation={getIdFirstModal(popupController.items) === hookInfo.id && hookInfo.endAnimation}
            onClick={onModalOverlayKeyDown}
            zIndex={zIndex}
            $withBlur={withBlur}
            {...rest}
        />
    );
};
