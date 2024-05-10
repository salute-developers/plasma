import React from 'react';

import type { ThumbProps } from './Thumb.types';
import { ThumbBase } from './Thumb.styles';

export const Thumb = ({ min, max, value, ariaValueMin = min, ariaLabel, disabled, ...rest }: ThumbProps) => {
    return (
        <ThumbBase
            role="slider"
            aria-label={ariaLabel}
            aria-valuemin={ariaValueMin}
            aria-valuemax={max}
            aria-valuenow={value}
            disabled={disabled}
            aria-orientation="horizontal"
            {...rest}
        />
    );
};
