import React, { forwardRef, useCallback, useMemo } from 'react';
import { useFocusTrap, useForkRef, safeUseId } from '@salutejs/plasma-core';

import { RootProps, component } from '../../engines';
import { popupConfig, usePopupContext } from '../Popup';
import { Overlay } from '../Overlay';
import { DEFAULT_Z_INDEX } from '../Popup/utils';

import { classes, tokens } from './Modal.tokens';
import { ModalProps } from './Modal.types';
import { useModal } from './hooks';
import { base as viewCSS } from './variations/_view/base';
import { getIdLastModal } from './ModalContext';

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
                initialFocusRef,
                focusAfterRef,
                zIndex,
                popupInfo,
                children,
                view,
                isOpen,
                ...rest
            },
            outerRootRef,
        ) => {
            const trapRef = useFocusTrap(true, initialFocusRef, focusAfterRef);
            const popupController = usePopupContext();

            const innerRef = useForkRef<HTMLDivElement>(trapRef, outerRootRef);

            const uniqId = safeUseId();
            const innerId = id || uniqId;
            const overlayBackgroundToken = withBlur
                ? `var(${tokens.modalOverlayWithBlurColor})`
                : `var(${tokens.modalOverlayColor})`;

            const { modalInfo } = useModal({ id: innerId, isOpen, closeOnEsc, onEscKeyDown, onClose, popupInfo });
            const transparent = useMemo(() => getIdLastModal(popupController.items) !== innerId, [
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

            return (
                <Popup
                    id={innerId}
                    isOpen={isOpen}
                    ref={innerRef}
                    popupInfo={modalInfo}
                    withAnimation={withAnimation}
                    zIndex={zIndex}
                    overlay={
                        <Root view={view}>
                            <Overlay
                                className={classes.overlay}
                                zIndex={zIndex || DEFAULT_Z_INDEX}
                                backgroundColorProperty={overlayBackgroundToken}
                                withBlur={withBlur}
                                transparent={transparent}
                                isClickable={closeOnOverlayClick}
                                onOverlayClick={onModalOverlayKeyDown}
                            />
                        </Root>
                    }
                    {...rest}
                >
                    {children}
                </Popup>
            );
        },
    );

export const modalConfig = {
    name: 'Modal',
    tag: 'div',
    layout: modalRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
