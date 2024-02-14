import { useCallback, useEffect, useRef } from 'react';

import { ModalInfo, getIdLastModal, hasModals } from '../ModalContext';
import { ModalHookArgs } from '../Modal.types';
import { usePopupContext } from '../../Popup';

const ESCAPE_KEYCODE = 27;

export const useModal = ({ id, isOpen, popupInfo, onEscKeyDown, onClose, closeOnEsc = true }: ModalHookArgs) => {
    const popupController = usePopupContext();
    const overflow = useRef<string>(document.body.style.overflowY);

    // При ESC закрывает текущее окно, если это возможно
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (!closeOnEsc) {
                return;
            }
            if (event.keyCode === ESCAPE_KEYCODE && getIdLastModal(popupController.items) === id) {
                if (onEscKeyDown) {
                    onEscKeyDown(event);
                    return;
                }

                if (onClose) {
                    onClose();
                }
            }
        },
        [onClose, onEscKeyDown, popupController.items, closeOnEsc],
    );

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onClose, onEscKeyDown, popupController.items, closeOnEsc]);

    // linaria не поддерживает динамический global
    useEffect(() => {
        if (isOpen) {
            overflow.current = document.body.style.overflowY;
            document.body.style.overflowY = 'hidden';
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen && !hasModals(popupController.items)) {
            document.body.style.overflowY = overflow.current;
        }
    }, [isOpen, overflow.current, popupController.items]);

    const modalInfo: ModalInfo = {
        id,
        info: {
            isModal: true,
        },
        ...popupInfo,
    };

    return { modalInfo };
};
