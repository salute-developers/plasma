import { useUniqId } from '../../hooks';
import { usePopup, usePopupBaseContext } from '../PopupBase';
import { ModalInfo, getIdLastModal } from './ModalBaseContext';
import { useModalProps, ModalAnimationInfo } from './types';
import { useCallback, useEffect } from 'react';

const ESCAPE_KEYCODE = 27;

export const useModal = (args: useModalProps): ModalAnimationInfo => {
    const { isOpen, id, offset, placement, withAnimation, popupInfo, closeOnEsc = true, onEscKeyDown, onClose } = args;
    const popupController = usePopupBaseContext();

    const uniqId = useUniqId();
    const innerId = id || uniqId;

    // При ESC закрывает текущее окно, если это возможно
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (closeOnEsc && event.keyCode === ESCAPE_KEYCODE && getIdLastModal(popupController.items) === innerId) {
                console.log('esc');
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
        id: innerId,
        info: {
            isModal: true,
        },
        ...popupInfo
    };

    const info = usePopup({ isOpen, frame: "document", placement, offset, id: innerId, withAnimation, popupInfo: modalInfo });

    return {
        onClose,
        ...info
    }
};
