import React from 'react';
import styled from 'styled-components';
import { SliderCore, SliderProps, ThumbBase, SliderSettings } from '@salutejs/plasma-core';
import {
    surfaceLiquid03,
    white,
    buttonAccent as fillColor,
    accent,
    sberPortalScale,
    scalingPixelBasis,
} from '@salutejs/plasma-tokens';

import { useThemeContext } from '../../hooks';

const sliderSettings: SliderSettings = {
    indent: 0.8125,
    backgroundColor: surfaceLiquid03,
    fillColor,
};

const StyledThumb = styled(ThumbBase)`
    width: 1.5rem;
    height: 1.5rem;

    border: 0.063rem solid ${surfaceLiquid03};

    background-color: ${white};

    color: ${accent};
`;

export const Slider = (props: SliderProps) => {
    const theme = useThemeContext();

    const fontSizeMultiplier = (theme?.deviceScale ?? sberPortalScale) * scalingPixelBasis;

    return <SliderCore {...props} settings={{ ...sliderSettings, fontSizeMultiplier }} thumb={StyledThumb} />;
};
