import { useCallback, useEffect, useRef } from 'react';

import { DrawerInfo, getIdLastDrawer, hasDrawers } from '../DrawerContext';
import { DrawerHookArgs } from '../Drawer.types';
import { usePopupContext } from '../../Popup';

const ESCAPE_KEYCODE = 27;

export const useDrawer = ({
    id,
    isOpen,
    popupInfo,
    onEscKeyDown,
    onClose,
    closeOnEsc = true,
    disableScroll = true,
}: DrawerHookArgs) => {
    const popupController = usePopupContext();
    const overflow = useRef<string>(document.body.style.overflowY);

    // При ESC закрывает текущее окно, если это возможно
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (!closeOnEsc) {
                return;
            }
            if (event.keyCode === ESCAPE_KEYCODE && getIdLastDrawer(popupController.items) === id) {
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
    }, [onKeyDown]);

    // linaria не поддерживает динамический global
    useEffect(() => {
        if (isOpen && disableScroll) {
            overflow.current = document.body.style.overflowY;
            document.body.style.overflowY = 'hidden';
        }
    }, [isOpen, disableScroll]);

    useEffect(() => {
        if (!isOpen && !hasDrawers(popupController.items)) {
            document.body.style.overflowY = overflow.current;
        }
    }, [isOpen, popupController.items]);

    const drawerInfo: DrawerInfo = {
        id,
        info: {
            isDrawer: true,
        },
        ...popupInfo,
    };

    return { drawerInfo };
};
