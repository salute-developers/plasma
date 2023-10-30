import { useCallback, useEffect } from 'react';

import { ModalInfo, getIdLastModal } from '../ModalContext';
import { ModalHookArgs } from '../Modal.types';
import { usePopupContext } from '../../Popup';

const ESCAPE_KEYCODE = 27;

export const useModal = ({ id, popupInfo, onEscKeyDown, onClose, closeOnEsc = true }: ModalHookArgs) => {
    const popupController = usePopupContext();

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

    const modalInfo: ModalInfo = {
        id,
        info: {
            isModal: true,
        },
        ...popupInfo,
    };

    return { modalInfo };
};
