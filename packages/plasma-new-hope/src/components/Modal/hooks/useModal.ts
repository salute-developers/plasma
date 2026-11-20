import { useCallback, useRef } from 'react';
import type { MouseEvent } from 'react';

import type { ModalHookArgs } from '../Modal.types';
import type { CloseReason, OverlayLayerConfig } from '../../OverlayProvider/OverlayProvider.types';
import { useOverlayContext } from '../../OverlayProvider/OverlayContext';

/**
 * Подключает модальное окно к общему стеку слоёв: Escape, нажатие на подложку и кнопку закрытия
 * проходят через запрос на закрытие с причиной.
 */
export const useModal = ({
    id,
    popupInfo,
    onEscKeyDown,
    onOverlayClick,
    onClose,
    onCloseRequest,
    closeOnEsc = true,
}: ModalHookArgs) => {
    const { manager } = useOverlayContext();
    const overlayEventRef = useRef<MouseEvent<HTMLDivElement> | null>(null);

    const handleLayerClose = useCallback(
        (reason: CloseReason, event?: Event) => {
            const overlayEvent = overlayEventRef.current;
            overlayEventRef.current = null;

            if (reason === 'escape' && onEscKeyDown && event) {
                onEscKeyDown(event as KeyboardEvent);
                return;
            }

            if (reason === 'outside' && onOverlayClick && overlayEvent) {
                onOverlayClick(overlayEvent);
                return;
            }

            onClose?.();
        },
        [onEscKeyDown, onOverlayClick, onClose],
    );

    const handleOverlayClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            overlayEventRef.current = event;
            manager.requestClose(id, 'outside', event.nativeEvent);
        },
        [manager, id],
    );

    const handleCloseButtonClick = useCallback(
        (event: MouseEvent<HTMLButtonElement>) => {
            manager.requestClose(id, 'close-button', event.nativeEvent);
        },
        [manager, id],
    );

    const getFocusScopeElements = useCallback(
        () => [...manager.getDescendantElements(id), ...manager.getMessageElements()],
        [manager, id],
    );

    const layerOptions: OverlayLayerConfig = {
        kind: 'modal',
        modal: true,
        closeOnEsc,
        scrollLock: true,
        info: { ...popupInfo?.info, isModal: true },
        onClose: handleLayerClose,
        onCloseRequest,
    };

    return { layerOptions, handleOverlayClick, handleCloseButtonClick, getFocusScopeElements };
};
