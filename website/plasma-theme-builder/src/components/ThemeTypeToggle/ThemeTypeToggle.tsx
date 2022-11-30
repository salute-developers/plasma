import React, { useCallback } from 'react';
import styled from 'styled-components';
import { accent, tertiary } from '@salutejs/plasma-tokens-b2c';
import { Button } from '@salutejs/plasma-b2c';

import { SBSansTextMono } from '../mixins';
import type { ThemeType } from '../types';

const StyledThemeToggle = styled.div`
    ${SBSansTextMono};

    margin-top: 1rem;
`;

const StyledThemeTypeButton = styled(Button)<{ isSelected: boolean }>`
    padding: 0.75rem 0;

    cursor: pointer;

    color: ${({ isSelected }) => (isSelected ? accent : tertiary)};
`;

interface ThemeTypeButtonProps {
    type: ThemeType;
    selectedType: ThemeType;
    onClick: (value: ThemeType) => void;
}

const ThemeTypeButton = ({ onClick, selectedType, type }: ThemeTypeButtonProps) => {
    const handleOnClick = useCallback(() => {
        onClick(type);
    }, [onClick, type]);

    return (
        <StyledThemeTypeButton view="clear" isSelected={selectedType === type} onClick={handleOnClick}>
            {type}
        </StyledThemeTypeButton>
    );
};

interface ThemeToggleProps {
    selectedType: ThemeType;
    onClick: (value: ThemeType) => void;
}

export const ThemeTypeToggle = ({ onClick, selectedType }: ThemeToggleProps) => {
    const handleOnClick = useCallback(
        (value: ThemeType) => {
            onClick(value);
        },
        [onClick],
    );

    return (
        <StyledThemeToggle>
            <ThemeTypeButton type="light" selectedType={selectedType} onClick={handleOnClick} /> |{' '}
            <ThemeTypeButton type="dark" selectedType={selectedType} onClick={handleOnClick} />
        </StyledThemeToggle>
    );
};
