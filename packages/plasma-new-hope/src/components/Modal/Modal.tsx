import React, { forwardRef, useCallback, useMemo } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { safeUseId } from 'src/utils';
import { RootProps, component } from 'src/engines';
import { useFocusTrap } from 'src/hooks';
import { IconClose } from 'src/components/_Icon';

import { popupConfig, usePopupContext } from '../Popup';
import { Overlay } from '../Overlay';
import { DEFAULT_Z_INDEX } from '../Popup/utils';

import { classes, tokens } from './Modal.tokens';
import { ModalProps } from './Modal.types';
import { useModal } from './hooks';
import { base as viewCSS } from './variations/_view/base';
import { getIdLastModal } from './ModalContext';
import { CloseButton, ModalBody, ModalContent, base } from './Modal.styles';

// issue #823
const Popup = component(popupConfig);

/**
 * Modal.
 * Управляет показом/скрытием, подложкой и анимацией визуальной части модального окна.
 */
export const modalRoot = (Root: RootProps<HTMLDivElement, ModalProps>) =>
    forwardRef<HTMLDivElement, ModalProps>(
        (
            {
                id,
                withAnimation,
                onClose,
                onOverlayClick,
                onEscKeyDown,
                closeOnEsc = true,
                closeOnOverlayClick = true,
                withBlur,
                isFocusTrapped = true,
                initialFocusRef,
                focusAfterRef,
                zIndex,
                popupInfo,
                children,
                view,
                opened,
                isOpen,
                hasBody,
                hasClose,
                resizable,
                draggable,
                overlay,
                ...rest
            },
            outerRootRef,
        ) => {
            const innerIsOpen = Boolean(isOpen || opened);
            const innerHasClose = (hasClose === undefined && hasBody) || hasClose;
            const trapRef = useFocusTrap(isFocusTrapped, initialFocusRef, focusAfterRef, true, !isFocusTrapped);
            const popupController = usePopupContext();

            const innerRef = useForkRef<HTMLDivElement>(trapRef, outerRootRef);

            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const overlayBackgroundToken = withBlur
                ? `var(${tokens.modalOverlayWithBlurColor})`
                : `var(${tokens.modalOverlayColor})`;

            const { modalInfo } = useModal({
                id: innerId,
                isOpen: innerIsOpen,
                closeOnEsc,
                onEscKeyDown,
                onClose,
                popupInfo,
            });

            const transparent = useMemo(() => getIdLastModal(Array.from(popupController.items.values())) !== innerId, [
                innerId,
                popupController.items,
            ]);

            const onModalOverlayKeyDown = useCallback(
                (event: React.MouseEvent<HTMLDivElement>) => {
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

            const overlayNode = (
                <Overlay
                    className={classes.overlay}
                    zIndex={zIndex || DEFAULT_Z_INDEX}
                    backgroundColorProperty={overlayBackgroundToken}
                    withBlur={withBlur}
                    transparent={transparent}
                    isClickable={closeOnOverlayClick}
                    onOverlayClick={onModalOverlayKeyDown}
                />
            );

            return (
                <Popup
                    id={innerId}
                    opened={innerIsOpen}
                    ref={innerRef}
                    popupInfo={modalInfo}
                    withAnimation={withAnimation}
                    zIndex={zIndex}
                    overlay={<Root view={view}>{overlay || overlayNode}</Root>}
                    draggable={draggable}
                    resizable={resizable}
                    {...rest}
                >
                    {hasBody ? (
                        <Root view={view}>
                            <ModalBody>
                                <ModalContent>
                                    {innerHasClose && (
                                        <CloseButton onClick={onClose} data-test="modal-close">
                                            <IconClose size="s" color="currentColor" />
                                        </CloseButton>
                                    )}
                                    {children}
                                </ModalContent>
                            </ModalBody>
                        </Root>
                    ) : (
                        <>{children}</>
                    )}
                </Popup>
            );
        },
    );

export const modalConfig = {
    name: 'Modal',
    tag: 'div',
    layout: modalRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
