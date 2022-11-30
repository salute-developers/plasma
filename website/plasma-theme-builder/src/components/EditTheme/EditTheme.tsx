import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, H4 } from '@salutejs/plasma-b2c';

import { theme } from '../../assets/mocks';
import type { ThemeType } from '../types';
import { ThemeInfo } from '../ThemeInfo/ThemeInfo';
import { ThemeTypeToggle } from '../ThemeTypeToggle/ThemeTypeToggle';
import { TokensSection } from '../TokensSection/TokensSection';

const StyledEditTheme = styled.div``;

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

export const EditTheme = () => {
    const [themeType, setThemeType] = useState<ThemeType>('light');

    const onChangeThemeType = useCallback((value: ThemeType) => {
        setThemeType(value);
    }, []);

    const { accentColor, grayscale, name, opacity } = theme.config;

    return (
        <StyledEditTheme>
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
                <ThemeTypeToggle selectedType={themeType} onClick={onChangeThemeType} />
                {Object.entries(theme[themeType]).map(([tokenName, tokensItems]) => (
                    <TokensSection key={tokenName} items={tokensItems} name={tokenName} />
                ))}
            </Content>
            <StyledButton disabled text="Подтвердить создание темы" view="primary" />
        </StyledEditTheme>
    );
};
