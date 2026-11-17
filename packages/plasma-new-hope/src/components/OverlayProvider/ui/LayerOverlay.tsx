import React from 'react';
import type { FC } from 'react';

import { Overlay } from '../../Overlay';
import type { OverlayProps } from '../../Overlay/Overlay.types';
import { useOverlayLayerContext } from '../OverlayContext';

const DEFAULT_Z_INDEX = '9000';

export type LayerOverlayProps = Omit<OverlayProps, 'zIndex'> & {
    zIndex?: string;
};

/**
 * Подложка слоя: z-index и прозрачность берутся из общего стека слоёв.
 * Подложка видима только у верхнего модального слоя, чтобы при вложенности фон не затемнялся повторно.
 */
export const LayerOverlay: FC<LayerOverlayProps> = ({ zIndex, transparent, ...rest }) => {
    const state = useOverlayLayerContext()?.state;
    const innerZIndex = zIndex || (state ? String(state.backdropZIndex) : DEFAULT_Z_INDEX);
    const innerTransparent = transparent ?? Boolean(state && !state.isTopModal && state.hasActiveModal);

    return <Overlay zIndex={innerZIndex} transparent={innerTransparent} {...rest} />;
};
