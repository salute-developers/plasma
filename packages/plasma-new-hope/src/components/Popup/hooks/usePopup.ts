import { useEffect, useMemo, useState } from 'react';

import type { PopupAnimationInfo, PopupHookArgs } from '../Popup.types';
import { ensureFallbackOverlayRoot, OVERLAY_ROOT_ID, useOverlayContext } from '../../OverlayProvider/OverlayContext';
import { useOverlayLayer } from '../../OverlayProvider/hooks/useOverlayLayer';

// Хук для подключения анимации
const usePopupAnimation = (): PopupAnimationInfo => {
    const [endAnimation, setEndAnimation] = useState<boolean>(false);
    const [endTransition, setEndTransition] = useState<boolean>(false);

    return useMemo(() => ({ endAnimation, endTransition, setEndTransition, setEndAnimation }), [
        endAnimation,
        endTransition,
    ]);
};

// Хук для внутреннего состояния, необходимого для правильного отображения вложенных окон, а также для анимации
export const usePopup = ({ isOpen, id, popupInfo, withAnimation, layerOptions, zIndex }: PopupHookArgs) => {
    const [isVisible, setVisible] = useState<boolean>(false);
    const animationInfo = usePopupAnimation();
    const { rootId, isFallback } = useOverlayContext();

    const info = layerOptions?.info || popupInfo?.info ? { ...popupInfo?.info, ...layerOptions?.info } : undefined;

    // слой остаётся в стеке до окончания анимации закрытия, но уже не участвует в маршрутизации событий
    const layer = useOverlayLayer({
        ...layerOptions,
        id,
        info,
        zIndex,
        registered: isOpen || isVisible,
        closing: !isOpen,
    });

    // для использования transition в качестве анимации
    useEffect(() => {
        if (withAnimation && animationInfo) {
            animationInfo.setEndTransition(!isVisible || animationInfo?.endAnimation);
        }
    }, [animationInfo, withAnimation, isVisible]);

    useEffect(() => {
        // при первом открытии
        if (isOpen && !isVisible) {
            if (isFallback) {
                ensureFallbackOverlayRoot();
            }

            setVisible(true);
            animationInfo.setEndAnimation(false);
            return;
        }

        if (isOpen || !isVisible) {
            return;
        }

        // если есть анимация - закрытие по окончании анимации
        if (withAnimation) {
            animationInfo.setEndAnimation(true);
            return;
        }

        // иначе обычное закрытие
        setVisible(false);
    }, [isOpen, isVisible, animationInfo]);

    return {
        isVisible,
        setVisible,
        animationInfo,
        withAnimation,
        rootId: isFallback ? OVERLAY_ROOT_ID : rootId,
        layer,
    };
};
