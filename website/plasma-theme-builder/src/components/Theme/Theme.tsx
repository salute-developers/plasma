import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, H4 } from '@salutejs/plasma-b2c';

import { ThemeInfo } from '../ThemeInfo/ThemeInfo';
import { ThemeModeToggle } from '../ThemeModeToggle/ThemeModeToggle';
import { TokensSection } from '../TokensSection/TokensSection';
import type { ThemeMode } from '../types';
import type { Theme as ThemeType } from '../../builder/types';

const StyledTheme = styled.div``;

const Description = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: flex-end;
    gap: 4rem;
`;

const Column = styled.div``;

const Content = styled.div`
    margin: 1rem 0;
`;

const ThemeLabel = styled(H4)``;

const StyledButton = styled(Button)`
    display: block;
    margin: 2rem 0;
    margin-left: auto;
`;

interface ThemeProps {
    data?: ThemeType;
}

export const Theme = ({ data }: ThemeProps) => {
    const [themeMode, setThemMode] = useState<ThemeMode>('dark');

    const onChangeThemeType = useCallback((value: ThemeMode) => {
        setThemMode(value);
    }, []);

    if (!data) {
        return null;
    }

    const { accentColor, grayscale, name, opacity } = data.config;

    return (
        <StyledTheme>
            <Description>
                <Column>
                    <ThemeInfo label="Название темы" value={name} />
                    <ThemeInfo
                        label="Акцентный цвет"
                        value={`dark: ${accentColor.dark} | light: ${accentColor.light}`}
                    />
                    <ThemeInfo label="Оттенок серого" value={`dark: ${grayscale.dark} | light: ${grayscale.light}`} />
                </Column>
                <Column>
                    <ThemeInfo label="Текст и иконки с прозрачностью" value={`${opacity.textIcons}`} />
                    <ThemeInfo label="Поверхности с прозрачностью" value={`${opacity.surfaces}`} />
                </Column>
            </Description>
            <Content>
                <ThemeLabel bold={false}>Цветовая схема</ThemeLabel>
                <ThemeModeToggle selectedMode={themeMode} onClick={onChangeThemeType} />
                {Object.entries(data[themeMode]).map(([tokenName, tokensItems]) => (
                    <TokensSection key={tokenName} items={tokensItems} name={tokenName} />
                ))}
            </Content>
            <StyledButton disabled text="Подтвердить создание темы" view="primary" />
        </StyledTheme>
    );
};
