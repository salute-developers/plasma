import React, { forwardRef, useMemo, useCallback } from 'react';
import { safeUseId } from 'src/utils';
import { IconClose } from 'src/components/_Icon';

import type { RootProps } from '../../../engines';
import { Overlay } from '../../Overlay';
import { usePopupContext } from '../../Popup';
import { DEFAULT_Z_INDEX } from '../../Popup/utils';
import { getIdLastModal } from '../../Modal/ModalContext';

import { classes, tokens } from './Modal.tokens';
import type { DialogModalProps } from './Modal.types';
import {
    base,
    ModalActions,
    ModalCloseButton,
    ModalContent,
    ModalImage,
    ModalSurface,
    ModalTitle,
    ModalBase,
} from './Modal.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';

export const dialogModalRoot = (Root: RootProps<HTMLDivElement, Omit<DialogModalProps, 'title'>>) =>
    forwardRef<HTMLDivElement, DialogModalProps>(
        (
            {
                id,
                view,
                size = 'm',
                title,
                imageUrl,
                imageAlt = '',
                children,
                actions,
                hasClose = true,
                onClose,
                onOverlayClick,
                role = 'dialog',
                withBlur,
                zIndex,
                closeOnOverlayClick = true,
                overlay: _overlay,
                ...rest
            },
            ref,
        ) => {
            const titleId = safeUseId();
            const uniqId = safeUseId();
            const innerId = id || uniqId;

            const popupController = usePopupContext();
            const transparent = useMemo(
                () => getIdLastModal(Array.from(popupController.items.values()) as any) !== innerId,
                [innerId, popupController.items],
            );

            const overlayBackgroundToken = withBlur
                ? `var(${tokens.dialogModalOverlayWithBlurColor})`
                : `var(${tokens.dialogModalOverlayColor})`;

            const handleOverlayClick = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
                    if (onOverlayClick) {
                        onOverlayClick(event);
                        return;
                    }
                    if (onClose) {
                        onClose();
                    }
                },
                [onOverlayClick, onClose],
            );

            return (
                <ModalBase
                    {...rest}
                    id={innerId}
                    ref={ref}
                    view={view}
                    onClose={onClose}
                    hasBody={false}
                    role={role}
                    aria-modal
                    aria-labelledby={title ? titleId : undefined}
                    withBlur={withBlur}
                    zIndex={zIndex}
                    closeOnOverlayClick={closeOnOverlayClick}
                    overlay={
                        <Root view={view}>
                            <Overlay
                                className={classes.overlay}
                                zIndex={zIndex || DEFAULT_Z_INDEX}
                                backgroundColorProperty={overlayBackgroundToken}
                                withBlur={withBlur}
                                transparent={transparent}
                                isClickable={closeOnOverlayClick}
                                onOverlayClick={handleOverlayClick}
                            />
                        </Root>
                    }
                >
                    <Root view={view} size={size}>
                        <ModalSurface>
                            {hasClose && (
                                <ModalCloseButton onClick={onClose}>
                                    <IconClose size="xs" color="currentColor" />
                                </ModalCloseButton>
                            )}
                            {imageUrl && <ModalImage src={imageUrl} alt={imageAlt} />}
                            <ModalContent>
                                {title && <ModalTitle id={titleId}>{title}</ModalTitle>}
                                {children}
                            </ModalContent>
                            {actions && <ModalActions>{actions}</ModalActions>}
                        </ModalSurface>
                    </Root>
                </ModalBase>
            );
        },
    );

export const dialogModalConfig = {
    name: 'DialogModal',
    tag: 'div',
    layout: dialogModalRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
