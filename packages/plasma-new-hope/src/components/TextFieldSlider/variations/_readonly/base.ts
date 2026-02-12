import { css } from '@linaria/core';

import { StyledSlider } from '../../ui/Slider/Slider.styles';

export const base = css`
    &[readonly] {
        cursor: default;

        ${StyledSlider} {
            cursor: default;
            pointer-events: none;
        }

        ${StyledSlider}::-webkit-slider-thumb {
            cursor: default;
            pointer-events: none;
        }

        ${StyledSlider}::-moz-range-thumb {
            cursor: default;
            pointer-events: none;
        }
    }
`;
