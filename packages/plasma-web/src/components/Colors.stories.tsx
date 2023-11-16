import React from 'react';
import styled from 'styled-components';
import type { StoryObj, Meta } from '@storybook/react';
import { general, additional } from '@salutejs/plasma-colors';
import { light, dark } from '@salutejs/plasma-tokens-b2b';
import { ThemeColors, extractWebThemeColors } from '@salutejs/plasma-sb-utils';

import { PaletteGrid, flattenPalette, InSpacingDecorator } from '../helpers';

const meta: Meta = {
    title: 'Colors',
    decorators: [InSpacingDecorator],
};

export default meta;

const StyledContainer = styled.div`
    display: flex;
`;

const colors = extractWebThemeColors(light, dark);

export const Default: StoryObj = {
    render: () => {
        return (
            <StyledContainer>
                <ThemeColors
                    style={{ backgroundColor: '#F7F7F7' }}
                    colors={colors.light}
                    title="🌝 Light Theme Colors"
                />
                <ThemeColors style={{ backgroundColor: '#080808' }} colors={colors.dark} title="🌚 Dark Theme Colors" />
            </StyledContainer>
        );
    },
};

const generalColors = flattenPalette(general);

const additionalColors = flattenPalette(additional);

export const General: StoryObj = {
    render: () => <PaletteGrid colors={generalColors} />,
};

export const Additional: StoryObj = {
    render: () => <PaletteGrid colors={additionalColors} />,
};
