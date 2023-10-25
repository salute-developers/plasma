import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import { PopupBase } from '../PopupBase/PopupBase';
import { useFocusTrap, useUniqId } from '../../hooks';

import { ModalBaseProps } from './types';
import { ModalOverlay } from './ModalOverlay';
import { useModal } from './hooks';

const NoScroll = createGlobalStyle`
    body {
        overflow-y: hidden;
    }
`;

/**
 * ModalBase.
 * Управляет показом/скрытием, подложкой и анимацией визуальной части модального окна.
 */
export const ModalBase: FC<ModalBaseProps> = ({
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
    ...rest
}) => {
    const trapRef = useFocusTrap(true, initialFocusRef, focusAfterRef);

    const uniqId = useUniqId();
    const innerId = id || uniqId;

    const { modalInfo } = useModal({ id: innerId, closeOnEsc, onEscKeyDown, onClose, popupInfo });

    return (
        <PopupBase
            id={id}
            ref={trapRef}
            popupInfo={modalInfo}
            withAnimation={withAnimation}
            zIndex={zIndex}
            overlay={
                <ModalOverlay
                    id={innerId}
                    withBlur={withBlur}
                    onOverlayClick={onOverlayClick}
                    onClose={onClose}
                    zIndex={zIndex}
                    closeOnOverlayClick={closeOnOverlayClick}
                />
            }
            {...rest}
        >
            <NoScroll />
            {children}
        </PopupBase>
    );
};
