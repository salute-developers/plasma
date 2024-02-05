import React, { useCallback } from 'react';
import type { FC, MouseEvent } from 'react';

import type { OverlayProps } from './Overlay.types';
import { StyledOverlay } from './Overlay.styles';

/**
 * Overlay - подложка для всплывающих компонент (Modal, Toast и т.д.).
 */
export const Overlay: FC<OverlayProps> = ({
    withBlur,
    className,
    backgroundColorProperty,
    onOverlayClick,
    zIndex,
    transparent,
    isClickable = true,
    ...rest
}) => {
    const handleOverlayClick = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (!isClickable) {
                return;
            }

            onOverlayClick?.(event);
        },
        [isClickable, onOverlayClick],
    );

    return (
        <StyledOverlay
            className={className}
            backgroundColorToken={backgroundColorProperty}
            transparent={transparent}
            clickable={isClickable}
            onClick={handleOverlayClick}
            zIndex={zIndex}
            withBlur={withBlur}
            {...rest}
        />
    );
};
