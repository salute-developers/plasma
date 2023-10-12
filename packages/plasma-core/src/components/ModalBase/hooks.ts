import { useCallback, useEffect } from 'react';

import { usePopupBaseContext, usePopupAnimation as useModalAnimation } from '../PopupBase';

import { ModalInfo, getIdLastModal } from './ModalBaseContext';
import { UseModalArgs } from './types';

export { useModalAnimation };

const ESCAPE_KEYCODE = 27;

export const useModal = ({ id, popupInfo, onEscKeyDown, onClose, closeOnEsc = true }: UseModalArgs) => {
    const popupController = usePopupBaseContext();

    // При ESC закрывает текущее окно, если это возможно
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (closeOnEsc && event.keyCode === ESCAPE_KEYCODE && getIdLastModal(popupController.items) === id) {
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
