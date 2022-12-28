import React, { useCallback } from 'react';
import styled from 'styled-components';
import { accent, tertiary } from '@salutejs/plasma-tokens-b2c';
import { Button } from '@salutejs/plasma-b2c';

import { SBSansTextMono } from '../mixins';
import type { ThemeMode } from '../types';

const StyledThemeModeToggle = styled.div`
    ${SBSansTextMono};

    display: flex;
    align-items: center;
    width: 100%;
`;

const StyledThemeTypeButton = styled(Button)<{ isSelected: boolean }>`
    padding: 0.75rem 0;
    cursor: pointer;
    color: ${({ isSelected }) => (isSelected ? accent : tertiary)};
`;

const Separator = styled.div`
    margin: 0 1rem;
`;

interface ThemeModeButtonProps {
    mode: ThemeMode;
    selectedMode: ThemeMode;
    onClick: (value: ThemeMode) => void;
}

const ThemeModeButton = ({ onClick, selectedMode, mode }: ThemeModeButtonProps) => {
    const handleOnClick = useCallback(() => {
        onClick(mode);
    }, [onClick, mode]);

    return (
        <StyledThemeTypeButton view="clear" isSelected={selectedMode === mode} onClick={handleOnClick}>
            {mode}
        </StyledThemeTypeButton>
    );
};

interface ThemeModeToggleProps {
    selectedMode: ThemeMode;
    onClick: (value: ThemeMode) => void;
}

export const ThemeModeToggle = ({ onClick, selectedMode }: ThemeModeToggleProps) => {
    const handleOnClick = useCallback(
        (value: ThemeMode) => {
            onClick(value);
        },
        [onClick],
    );

    return (
        <StyledThemeModeToggle>
            <ThemeModeButton mode="dark" selectedMode={selectedMode} onClick={handleOnClick} />
            <Separator>|</Separator>
            <ThemeModeButton mode="light" selectedMode={selectedMode} onClick={handleOnClick} />
        </StyledThemeModeToggle>
    );
};
