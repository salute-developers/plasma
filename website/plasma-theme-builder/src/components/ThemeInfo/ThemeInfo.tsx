import React from 'react';
import styled from 'styled-components';
import { accent } from '@salutejs/plasma-tokens-b2c';
import { H4 as ThemeLabel, TextL } from '@salutejs/plasma-b2c';

import { SBSansTextMono } from '../mixins';

interface ThemeInfoProps {
    label: string;
    value: string;
}

const StyledThemeInfo = styled.div`
    margin: 1rem 0;
`;

const ThemeValue = styled(TextL)`
    ${SBSansTextMono};

    color: ${accent};

    margin: 0.5rem 0;
`;

export const ThemeInfo = ({ label, value }: ThemeInfoProps) => {
    return (
        <StyledThemeInfo>
            <ThemeLabel bold={false}>{label}</ThemeLabel>
            <ThemeValue>{value}</ThemeValue>
        </StyledThemeInfo>
    );
};
