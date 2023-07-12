import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, H4 } from '@salutejs/plasma-b2c';
import { IconPlus, IconCross } from '@salutejs/plasma-icons';
import type { ThemeMode } from '@salutejs/plasma-tokens-utils';

import { ThemeInfo } from '../ThemeInfo/ThemeInfo';
import { ThemeModeToggle } from '../ThemeModeToggle/ThemeModeToggle';
import { TokensSection } from '../TokensSection/TokensSection';
import { TokenForm } from '../TokenForm/TokenForm';
import { AddTokenSection } from '../AddTokenSection/AddTokenSection';

import { useNormalizeThemeSections } from '../../hooks';
import { TokenContext } from '../../utils';
import { emptyInputData } from '../../types';
import type { InputData, Theme as ThemeType } from '../../types';

const StyledTheme = styled.div`
    width: 70rem;
`;

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

const ThemeControls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const StyledButton = styled(Button)`
    display: block;
    margin: 2rem 0;
    margin-left: auto;
`;

const IconButton = styled(Button)``;

interface ThemeProps {
    data?: ThemeType;
    defaultData?: ThemeType;
    branchNameFromParam?: string;
    onPullRequest: (data: ThemeType) => void;
}

export const Theme = ({ data, defaultData, branchNameFromParam, onPullRequest }: ThemeProps) => {
    const initialThemeData = useNormalizeThemeSections(data);

    const [themeData, setThemeData] = useState(initialThemeData);
    const [themeMode, setThemMode] = useState<ThemeMode>('dark');
    const [inputData, setInputData] = useState<InputData>(emptyInputData);
    const [isFormTokenOpen, setIsFormTokenOpen] = useState(false);
    const [isAddTokenSectionOpen, setIsAddTokenSectionOpen] = useState(false);

    const onTokenFormShow = useCallback((value: boolean) => {
        setIsFormTokenOpen(value);
    }, []);

    const onAddTokenSectionShow = useCallback((value: boolean) => {
        setIsAddTokenSectionOpen(value);
    }, []);

    const onAddTokenSectionToggle = useCallback(() => {
        setIsAddTokenSectionOpen((prevValue) => !prevValue);
    }, []);

    const onInputDataChange = useCallback((data: InputData) => {
        setInputData(data);
    }, []);

    const onThemeDataChange = useCallback((data?: ThemeType) => {
        setThemeData(data);
    }, []);

    const onChangeThemeType = useCallback((value: ThemeMode) => {
        setThemMode(value);
    }, []);

    const onOpenTokenForm = useCallback(
        (data: InputData) => {
            onInputDataChange(data);

            onTokenFormShow(true);
        },
        [onInputDataChange, onTokenFormShow],
    );

    const onTokenDelete = useCallback(
        (data: InputData) => {
            if (!themeData) {
                return;
            }

            const theme = { ...themeData };
            const { section, subsection, name } = data;

            delete theme.dark[section.value][subsection.value][name.value];
            delete theme.light[section.value][subsection.value][name.value];

            onThemeDataChange(theme);
        },
        [themeData, onThemeDataChange],
    );

    const onTokenEnabled = useCallback(
        (data: InputData) => {
            if (!themeData) {
                return;
            }

            const theme = { ...themeData };
            const { section, subsection, name, enabled } = data;

            theme.dark[section.value][subsection.value][name.value].enabled = enabled?.value;
            theme.light[section.value][subsection.value][name.value].enabled = enabled?.value;

            onThemeDataChange(theme);
        },
        [themeData, onThemeDataChange],
    );

    const onTokensSubsectionEnabled = useCallback(
        (data: InputData) => {
            if (!themeData) {
                return;
            }

            const theme = { ...themeData };
            const { section, subsection, enabled } = data;

            const tokenKeys = Object.keys(themeData.dark[section.value][subsection.value]);

            tokenKeys.forEach((key) => {
                themeData.dark[section.value][subsection.value][key].enabled = enabled?.value;
                themeData.light[section.value][subsection.value][key].enabled = enabled?.value;
            });

            onThemeDataChange(theme);
        },
        [themeData, onThemeDataChange],
    );

    const onTokensSectionEnabled = useCallback(
        (data: InputData) => {
            if (!themeData) {
                return;
            }

            const theme = { ...themeData };
            const { section, enabled } = data;

            const subsectionKeys = Object.keys(themeData.dark[section.value]);

            subsectionKeys.forEach((subsection) => {
                const tokenKeys = Object.keys(themeData.dark[section.value][subsection]);

                tokenKeys.forEach((key) => {
                    themeData.dark[section.value][subsection][key].enabled = enabled?.value;
                    themeData.light[section.value][subsection][key].enabled = enabled?.value;
                });
            });

            onThemeDataChange(theme);
        },
        [themeData, onThemeDataChange],
    );

    const onCreateTheme = useCallback(() => {
        if (themeData) {
            onPullRequest(themeData);
        }
    }, [onPullRequest, themeData]);

    if (!themeData) {
        return null;
    }

    const { accentColor, grayscale, name, opacity } = themeData.config;

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
                {isFormTokenOpen && (
                    <TokenForm
                        themeMode={themeMode}
                        defaultThemeData={defaultData}
                        isOpen={isFormTokenOpen}
                        inputData={inputData}
                        themeData={themeData}
                        onTokenFormShow={onTokenFormShow}
                        onThemeDataChange={onThemeDataChange}
                    />
                )}
                <ThemeLabel bold={false}>Цветовая схема</ThemeLabel>
                <ThemeControls>
                    <ThemeModeToggle selectedMode={themeMode} onClick={onChangeThemeType} />
                    <IconButton
                        view="clear"
                        onClick={onAddTokenSectionToggle}
                        contentLeft={isAddTokenSectionOpen ? <IconCross /> : <IconPlus />}
                    />
                </ThemeControls>
                <AddTokenSection
                    isOpen={isAddTokenSectionOpen}
                    themeData={themeData}
                    onAddTokenSectionShow={onAddTokenSectionShow}
                    onThemeDataChange={onThemeDataChange}
                />
                {Object.entries(themeData[themeMode]).map(([sectionName, tokensItems]) => (
                    <TokenContext.Provider
                        key={sectionName}
                        value={{
                            defaultData,
                            onOpenTokenForm,
                            onTokenDelete,
                            onTokenEnabled,
                            onTokensSubsectionEnabled,
                            onTokensSectionEnabled,
                        }}
                    >
                        <TokensSection items={tokensItems} name={sectionName} />
                    </TokenContext.Provider>
                ))}
            </Content>
            <StyledButton
                text={`Подтвердить ${branchNameFromParam ? 'редактирование' : 'создание'} темы`}
                view="primary"
                onClick={onCreateTheme}
            />
        </StyledTheme>
    );
};
