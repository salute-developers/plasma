import React, { useRef } from 'react';
import styled from 'styled-components';

import { formatedPaletteColors, colorsForGradient, colorsHSL } from '../../utils';

import { Header } from './Header';
import { PaletteItem } from './PaletteItem';
import { GradientScroll } from './GradientScroll';

const PaletteWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: content-box;
    padding-right: 17px;
`;
const PaletteColors = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    padding: 2px;
    box-sizing: border-box;
    overflow-x: hidden;
`;

export const Palette: React.FC = () => {
    const scrollRef = useRef<null | HTMLDivElement>(null);

    return (
        <PaletteWrapper ref={scrollRef}>
            <Header text="Палитра" link="/" />
            <GradientScroll hsl={colorsHSL} colors={colorsForGradient} scrollRef={scrollRef} />
            <PaletteColors>
                {formatedPaletteColors.map((color, index) => (
                    <PaletteItem key={index} paletteColor={color} />
                ))}
            </PaletteColors>
        </PaletteWrapper>
    );
};
