import styled from 'styled-components';

import { applySliderThumb, applySliderThumbFocus } from '../../../../mixins';
import type { SliderThumbTokens } from '../../../../mixins';
import { tokens } from '../../TextFieldSlider.tokens';

const thumbTokens: SliderThumbTokens = {
    width: tokens.sliderThumbWidth,
    height: tokens.sliderThumbHeight,
    borderRadius: tokens.sliderThumbBorderRadius,
    borderWidth: tokens.sliderThumbBorderWidth,
    borderColor: tokens.sliderThumbBorderColor,
    focusBorderColor: tokens.sliderThumbFocusBorderColor,
    background: tokens.sliderThumbBackground,
    innerContent: tokens.sliderThumbInnerContent,
};

export const SliderWrapper = styled.div`
    position: relative;
    display: grid;
`;

/**
 * Бегунок. Рамка рисуется слоем фона по border-box (см. applySliderThumb), поэтому её толщина
 * может быть асимметричной, форма — эллиптической, а внутрь можно положить innerContent.
 */
const thumb = applySliderThumb(thumbTokens);

const thumbHovered = applySliderThumbFocus(thumbTokens);

export const StyledSlider = styled.input<{ hasPointer?: boolean }>`
    appearance: none;
    outline: none;
    background: transparent;
    border: none;
    height: var(${tokens.sliderTrackHeight});
    width: 100%;
    z-index: 2;
    margin: 0;
    cursor: pointer;
    opacity: ${({ hasPointer }) => (hasPointer ? '1' : '0')};

    &:disabled {
        cursor: not-allowed;
    }

    &::-webkit-slider-runnable-track {
        background: transparent;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        outline: none;
        ${thumb}
    }

    &:not(:disabled)::-webkit-slider-thumb:hover,
    &:not(:disabled)::-webkit-slider-thumb:active,
    &:focus-visible::-webkit-slider-thumb {
        ${thumbHovered}
    }

    &::-webkit-slider-thumb:active {
        cursor: grabbing;
    }

    &::-moz-range-track {
        background: transparent;
        height: var(${tokens.sliderTrackHeight});
    }

    &::-moz-range-progress {
        background: transparent;
    }

    &::-moz-range-thumb {
        ${thumb}
    }

    &:not(:disabled)::-moz-range-thumb:hover,
    &:not(:disabled)::-moz-range-thumb:active,
    &:focus-visible::-moz-range-thumb {
        ${thumbHovered}
    }

    &::-moz-range-thumb:active {
        cursor: grabbing;
    }

    &:disabled {
        &::-webkit-slider-thumb,
        &::-webkit-slider-thumb:active,
        &::-moz-range-thumb,
        &::-moz-range-thumb:active {
            cursor: not-allowed;
        }
    }
`;

export const StyledTrack = styled.div`
    position: absolute;
    top: 50%;
    left: calc(var(${tokens.sliderThumbWidth}) / 2);
    right: calc(var(${tokens.sliderThumbWidth}) / 2);
    transform: translateY(-50%);
    height: var(${tokens.sliderTrackHeight});
    border-radius: var(${tokens.sliderTrackBorderRadius}, 0.5rem);
    background-color: var(${tokens.sliderTrackBackground});
`;

export const StyledProgress = styled.div<{ max: number; min: number; value: number }>`
    position: absolute;
    top: 50%;
    left: calc(var(${tokens.sliderThumbWidth}) / 2);
    transform: translateY(-50%);
    width: ${({ value, max, min }) =>
        `calc((${value} - ${min}) / (${max} - ${min}) * (100% - var(${tokens.sliderThumbWidth})))`};
    height: var(${tokens.sliderTrackHeight});
    border-radius: var(${tokens.sliderTrackBorderRadius}, 0.5rem);
    background: var(${tokens.sliderProgressBackground});
`;
