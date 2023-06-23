import React from 'react';
import styled from 'styled-components';
import { accent } from '@salutejs/plasma-tokens-b2c';
import { BodyM } from '@salutejs/plasma-b2c';

const StyledThemeInfo = styled.div`
    margin: 1rem 0;
`;

const ThemeLabel = styled(BodyM)``;

const ThemeValue = styled(BodyM)`
    color: ${accent};

    margin: 0.5rem 0;
`;

interface ThemeInfoProps {
    label: string;
    value: string;
}

export const ThemeInfo = ({ label, value }: ThemeInfoProps) => {
    return (
        <StyledThemeInfo>
            <ThemeLabel>{label}</ThemeLabel>
            <ThemeValue>{value}</ThemeValue>
        </StyledThemeInfo>
    );
};
