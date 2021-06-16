import React from 'react';
import styled from 'styled-components';
import { general, additional } from '@salutejs/plasma-colors';
import { light, dark } from '@salutejs/plasma-tokens-web/themes';
import { ThemeColors } from '@salutejs/plasma-sb-utils';

import { PaletteGrid, flattenPalette } from '../helpers';

const StyledContainer = styled.div`
    display: flex;
`;

const extractColors = (theme: Record<string, string>): Record<string, string> =>
    Object.entries(theme)
        .filter(([key]) => key.match(/^--/))
        .reduce((acc, [key, value]) => ({ ...acc, [key.replace('--plasma-colors-', '')]: value }), {});

const lightColors = extractColors(light[':root']);
const darkColors = extractColors(dark[':root']);

export const Default = () => {
    return (
        <StyledContainer>
            <ThemeColors style={{ backgroundColor: '#FAFAFA' }} colors={lightColors} title="🌝 Light Theme Colors" />
            <ThemeColors style={{ backgroundColor: '#292929' }} colors={darkColors} title="🌚 Dark Theme Colors" />
        </StyledContainer>
    );
};

const generalColors = flattenPalette(general);
const additionalColors = flattenPalette(additional);

export const General = () => <PaletteGrid colors={generalColors} />;
export const Additional = () => <PaletteGrid colors={additionalColors} />;
