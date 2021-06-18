import React from 'react';
import styled from 'styled-components';
import { ThemeColors, extractWebThemeColors } from '@salutejs/plasma-sb-utils';
import { light, dark } from '@salutejs/plasma-tokens-web/themes';

import { WebStoryDecorator } from '../helpers';

export default {
    title: 'Web',
    decorators: [WebStoryDecorator],
};

const StyledContainer = styled.div`
    display: flex;
`;

const colors = extractWebThemeColors(light, dark);

export const Colors = () => {
    return (
        <StyledContainer>
            <ThemeColors style={{ backgroundColor: '#FAFAFA' }} colors={colors.light} title="🌝 Light Theme Colors" />
            <ThemeColors style={{ backgroundColor: '#292929' }} colors={colors.dark} title="🌚 Dark Theme Colors" />
        </StyledContainer>
    );
};
