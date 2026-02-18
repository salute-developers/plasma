import React, { ChangeEvent, RefObject } from 'react';
import styled, { css } from 'styled-components';

import { IconArrowsMoveVertical } from '@salutejs/plasma-icons';
import { BackgroundGradientSaturation } from './types';

const getGradientColorPart = (colors: string[]) =>
    colors.map((color: string, index: number) => `${color} ${(100 / colors.length) * index}%`).join(',');

const Root = styled.div<{ colors: string[] }>`
    position: absolute;
    z-index: 999;

    left: 1.5rem;
    top: 6.125rem;

    --private-gradient-scroll-height: calc(100vh - 6.125rem - 4.375rem);
    height: var(--private-gradient-scroll-height);
    width: 0.25rem;
    border-radius: 0.125rem;

    background: linear-gradient(180deg, ${({ colors }) => getGradientColorPart(colors)});
`;

const thumbStyle = css`
    border-radius: 0.5rem;
    height: 0.25rem;
    width: 0.25rem;
    outline: 0.5rem solid #fff;
`;

const Slider = styled.input`
    cursor: pointer;
    appearance: none;
    background: transparent;
    margin: 0;
    opacity: 0;

    position: absolute;
    left: 0.75rem;

    transform: rotate(90deg);
    transform-origin: 0 0;

    padding: 0 0.5rem;
    top: -0.5rem;
    height: 1.25rem;
    width: var(--private-gradient-scroll-height);

    :focus {
        outline: none;
    }

    ::-webkit-slider-thumb {
        appearance: none;
        position: relative;

        ${thumbStyle}
    }

    ::-moz-range-thumb {
        border: none;
        border-radius: 0;
        background: transparent;

        ${thumbStyle}
    }
`;

const Thumb = styled.div`
    position: absolute;

    ${thumbStyle}

    transition: transform 0.5s cubic-bezier(0.33, 1, 0.68, 1);
    will-change: transform;
`;

const GradientShadow = styled.div<{ colors: string[] }>`
    position: absolute;
    width: 0.25rem;
    left: -0.375rem;
    top: 1.5rem;
    bottom: 1.5rem;

    border-radius: 0.125rem;

    filter: blur(32px);
    opacity: 0.6;

    background: linear-gradient(180deg, ${({ colors }) => getGradientColorPart(colors)});
`;

const HintIcon = styled(IconArrowsMoveVertical)`
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
`;

interface GradientVerticalSliderProps {
    value: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    min: number;
    max: number;
    gradients: BackgroundGradientSaturation[];
    thumbRef: RefObject<HTMLDivElement>;
}

export const GradientVerticalSlider = ({
    value,
    gradients,
    min,
    max,
    thumbRef,
    onChange,
}: GradientVerticalSliderProps) => {
    return (
        <Root colors={gradients.map((item) => item[500])}>
            <GradientShadow colors={gradients.map((item) => item[500])} />
            <Thumb ref={thumbRef} />
            <Slider type="range" min={min} max={max} value={value} onChange={onChange} />
            <HintIcon size="xs" />
        </Root>
    );
};
