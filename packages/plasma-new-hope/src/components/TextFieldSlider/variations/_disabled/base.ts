import { css } from '@linaria/core';

import { tokens } from '../../TextFieldSlider.tokens';
import { StyledSlider } from '../../ui/Slider/Slider.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        ${StyledSlider} {
            cursor: not-allowed;
            pointer-events: none;
        }

        ${StyledSlider}::-webkit-slider-thumb {
            cursor: not-allowed;
            pointer-events: none;
        }

        ${StyledSlider}::-moz-range-thumb {
            cursor: not-allowed;
            pointer-events: none;
        }
    }
`;
