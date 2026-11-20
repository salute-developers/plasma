import React, { forwardRef } from 'react';
import { safeUseId, cx } from 'src/utils';
import { RootProps, component } from 'src/engines';
import { useFocusTrap, useForkRef } from 'src/hooks';
import { IconClose } from 'src/components/_Icon';

import { popupConfig } from '../Popup';
import { LayerOverlay } from '../OverlayProvider/ui/LayerOverlay';

import { classes, tokens } from './Modal.tokens';
import { ModalProps } from './Modal.types';
import { useModal } from './hooks';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
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
                onCloseRequest,
                onOverlayClick,
                onEscKeyDown,
                closeOnEsc = true,
                closeOnOverlayClick = true,
                withBlur,
                isFocusTrapped = true,
                initialFocusRef,
                focusAfterRef,
                focusTrapSelectors,
                zIndex,
                popupInfo,
                children,
                view,
                size,
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
            const isResizable = Boolean(resizable && (resizable === true || !resizable.disabled));

            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const overlayBackgroundToken = withBlur
                ? `var(${tokens.modalOverlayWithBlurColor})`
                : `var(${tokens.modalOverlayColor})`;

            const { layerOptions, handleOverlayClick, handleCloseButtonClick, getFocusScopeElements } = useModal({
                id: innerId,
                closeOnEsc,
                onEscKeyDown,
                onOverlayClick,
                onClose,
                onCloseRequest,
                popupInfo,
            });

            const trapRef = useFocusTrap(
                isFocusTrapped,
                initialFocusRef,
                focusAfterRef,
                true,
                !isFocusTrapped,
                focusTrapSelectors,
                getFocusScopeElements,
            );

            const innerRef = useForkRef<HTMLDivElement>(trapRef, outerRootRef);

            const overlayNode = (
                <LayerOverlay
                    className={classes.overlay}
                    zIndex={zIndex}
                    backgroundColorProperty={overlayBackgroundToken}
                    withBlur={withBlur}
                    isClickable={closeOnOverlayClick}
                    onOverlayClick={handleOverlayClick}
                />
            );

            return (
                <Popup
                    id={innerId}
                    opened={innerIsOpen}
                    ref={innerRef}
                    role="dialog"
                    aria-modal="true"
                    popupInfo={popupInfo}
                    layerOptions={layerOptions}
                    withAnimation={withAnimation}
                    zIndex={zIndex}
                    overlay={<Root view={view}>{overlay || overlayNode}</Root>}
                    draggable={draggable}
                    resizable={resizable}
                    {...rest}
                >
                    {hasBody ? (
                        <Root view={view} size={size} className={cx(isResizable && classes.resizable)}>
                            <ModalBody className={cx(isResizable && classes.resizable)}>
                                <ModalContent className={innerHasClose ? classes.hasClose : undefined}>
                                    {innerHasClose && (
                                        <CloseButton
                                            className={classes.close}
                                            onClick={handleCloseButtonClick}
                                            data-test="modal-close"
                                        >
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
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
