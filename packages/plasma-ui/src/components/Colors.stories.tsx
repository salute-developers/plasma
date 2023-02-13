import React from 'react';
import styled from 'styled-components';
import { Meta } from '@storybook/react';
import { ThemeColors, extractCanvasThemeColors } from '@salutejs/plasma-sb-utils';
import { darkEva, darkJoy, darkSber, lightEva, lightJoy, lightSber } from '@salutejs/plasma-tokens';

const StyledContainer = styled.div`
    display: flex;
`;

export default {
    title: 'Colors',
} as Meta;

const colors = extractCanvasThemeColors(
    { Sber: darkSber, Athena: darkEva, Joy: darkJoy },
    { Sber: lightSber, Athena: lightEva, Joy: lightJoy },
);

export const Default = () => {
    return (
        <StyledContainer>
            <ThemeColors style={{ backgroundColor: '#080808' }} colors={colors.dark} title="🌚 Dark Theme Colors" />
            <ThemeColors style={{ backgroundColor: '#F7F7F7' }} colors={colors.light} title="🌝 Light Theme Colors" />
        </StyledContainer>
    );
};
