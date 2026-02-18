import { styled } from '@linaria/react';

import { tokens } from '../../TextFieldSlider.tokens';

export const SliderWrapper = styled.div`
    position: relative;
    display: grid;
`;

export const StyledSlider = styled.input<{ hasPointer?: boolean }>`
    appearance: none;
    outline: none;
    background: none;
    border: none;
    height: var(${tokens.sliderTrackHeight});
    width: 100%;
    z-index: 2;
    margin: 0;
    cursor: pointer;
    opacity: ${({ hasPointer }) => (hasPointer ? '1' : '0')};
    transition: box-shadow 0.2s ease-in;

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        border-radius: 50%;
        cursor: grab;

        width: var(${tokens.sliderThumbSize});
        height: var(${tokens.sliderThumbSize});
        background: var(${tokens.sliderThumbBackground});
        color: var(${tokens.sliderThumbBackground});
        box-shadow: var(${tokens.sliderThumbBorderBoxShadow});
    }

    ::-moz-range-thumb {
        border: none;
        border-radius: 50%;
        cursor: grab;

        width: var(${tokens.sliderThumbSize});
        height: var(${tokens.sliderThumbSize});
        background: var(${tokens.sliderThumbBackground});
        color: var(${tokens.sliderThumbBackground});
        box-shadow: var(${tokens.sliderThumbBorderBoxShadow});
    }

    ::-webkit-slider-thumb:hover,
    ::-webkit-slider-thumb:active,
    &:focus-visible::-webkit-slider-thumb {
        border-radius: 50%;
        box-shadow: var(${tokens.sliderThumbBorderBoxShadowFocus});
    }

    ::-webkit-slider-thumb:active {
        cursor: grabbing;
    }

    ::-moz-range-thumb:hover,
    ::-moz-range-thumb:active,
    &:focus-visible::-moz-range-thumb {
        border-radius: 50%;
        box-shadow: var(${tokens.sliderThumbBorderBoxShadowFocus});
    }

    ::-moz-range-thumb:active {
        cursor: grabbing;
    }
`;

export const StyledTrack = styled.div`
    position: absolute;
    top: 50%;
    left: calc(var(${tokens.sliderThumbSize}) / 2);
    right: calc(var(${tokens.sliderThumbSize}) / 2);
    transform: translateY(-50%);
    height: var(${tokens.sliderTrackHeight});
    border-radius: 0.5rem;
    background-color: var(${tokens.sliderTrackBackground});
`;

export const StyledProgress = styled.div<{ max: number; min: number; value: number }>`
    position: absolute;
    top: 50%;
    left: calc(var(${tokens.sliderThumbSize}) / 2);
    transform: translateY(-50%);
    width: ${({ value, max, min }) =>
        `calc((${value} - ${min}) / (${max} - ${min}) * 100% - var(${tokens.sliderThumbSize}) / 2)`};
    height: var(${tokens.sliderTrackHeight});
    border-radius: 0.5rem;
    background: var(${tokens.sliderProgressBackground});
`;
