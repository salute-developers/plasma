import { useCallback, useEffect, useRef } from 'react';

import { DrawerInfo, getIdLastDrawer, hasDrawers } from '../DrawerContext';
import { DrawerHookArgs } from '../Drawer.types';
import { usePopupContext } from '../../Popup';
import { canUseDOM } from '../../../utils';

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
    const overflow = useRef<string>(canUseDOM ? document.body.style.overflow : 'initial');

    // При ESC закрывает текущее окно, если это возможно
    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (!closeOnEsc) {
                return;
            }
            if (
                event.keyCode === ESCAPE_KEYCODE &&
                getIdLastDrawer(Array.from(popupController.items.values())) === id
            ) {
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
        if (!canUseDOM) {
            return;
        }

        if (isOpen && disableScroll) {
            overflow.current = document.body.style.overflow;

            document.body.style.overflow = 'hidden';
        }
    }, [isOpen, disableScroll]);

    useEffect(() => {
        if (!canUseDOM) {
            return;
        }

        if (!isOpen && !hasDrawers(Array.from(popupController.items.values()))) {
            document.body.style.overflow = overflow.current;
        }
    }, [isOpen, popupController.items]);

    // При анмаунте компонента нужно обновлять overflow у body.
    useEffect(() => {
        return () => {
            if (!canUseDOM) {
                return;
            }

            if (!hasDrawers(Array.from(popupController.items.values()))) {
                document.body.style.overflow = overflow.current;
            }
        };
    }, []);

    const drawerInfo: DrawerInfo = {
        id,
        info: {
            isDrawer: true,
        },
        ...popupInfo,
    };

    return { drawerInfo };
};
