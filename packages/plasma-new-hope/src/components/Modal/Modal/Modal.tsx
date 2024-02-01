import React, { forwardRef } from 'react';
import { useFocusTrap, useForkRef, safeUseId } from '@salutejs/plasma-core';

import { RootProps, component } from '../../../engines';
import { popupConfig } from '../../Popup';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

import { ModalProps } from './Modal.types';
import { useModal } from './hooks';
import { base as viewCSS } from './variations/_view/base';

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

            const innerRef = useForkRef<HTMLDivElement>(trapRef, outerRootRef);

            const uniqId = safeUseId();
            const innerId = id || uniqId;

            const { modalInfo } = useModal({ id: innerId, isOpen, closeOnEsc, onEscKeyDown, onClose, popupInfo });

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
                            <ModalOverlay
                                id={innerId}
                                withBlur={withBlur}
                                onOverlayClick={onOverlayClick}
                                onClose={onClose}
                                zIndex={zIndex}
                                closeOnOverlayClick={closeOnOverlayClick}
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
