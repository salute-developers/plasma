import React, { FC, useCallback, useMemo } from 'react';

import { usePopupContext } from '../../Popup';
import { getIdLastModal } from '../Modal/ModalContext';
import { ModalOverlayProps } from '../Modal/Modal.types';
import { classes } from '../Modal/Modal.tokens';

import { Overlay } from './ModalOverlay.styles';

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
    const popupController = usePopupContext();

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
            className={classes.overlay}
            transparent={transparent}
            clickable={closeOnOverlayClick}
            onClick={onModalOverlayKeyDown}
            zIndex={zIndex}
            $withBlur={withBlur}
            {...rest}
        />
    );
};
