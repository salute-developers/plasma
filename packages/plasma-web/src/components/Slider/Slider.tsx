import React from 'react';
import styled from 'styled-components';
import { SliderCore, SliderProps, SliderSettings } from '@salutejs/plasma-core';
import { SliderThumb } from '@salutejs/plasma-hope';
import { accent, white, surfaceLiquid03, buttonAccent as fillColor } from '@salutejs/plasma-tokens-web';

const sliderSettings: SliderSettings = {
    backgroundColor: surfaceLiquid03,
    fillColor,
};

const StyledThumb = styled(SliderThumb)`
    border-color: ${surfaceLiquid03};

    background-color: ${white};

    color: ${accent};
`;

export const Slider = (props: SliderProps) => {
    return <SliderCore {...props} settings={sliderSettings} thumb={StyledThumb} />;
};
