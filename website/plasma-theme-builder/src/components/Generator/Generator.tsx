import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Select, Switch, TextField } from '@salutejs/plasma-b2c';
import { general as generalColors } from '@salutejs/plasma-colors';
import { Grayscale } from '@salutejs/plasma-tokens-utils';

import { FormField } from '../FormField/FormField';

import { createTheme } from '../../builder/createTheme';
import { deleteTheme, getAccentColors, getSavedThemes, getSaturations, loadTheme } from '../../utils';
import type { ThemeData, Theme as ThemeType } from '../../types';

const Form = styled.form``;

const StyledGenerator = styled.div`
    width: 45rem;
`;

const Description = styled.div`
    margin-top: 2rem;
`;

const StyledSelect = styled(Select)`
    min-width: 14rem;
`;

const StyledTextField = styled(TextField)`
    min-width: 14rem;
`;

const StyledButton = styled(Button)`
    display: block;
    margin: 2rem 0;
`;

const StyledButtons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
`;

const StyledSelectSavedThemes = styled(StyledSelect)`
    margin-top: 2rem;
`;

export const getGrayscale = (): Array<{
    value: Grayscale;
    label: string;
}> => [
    {
        value: Grayscale.gray,
        label: Grayscale.gray,
    },
    {
        value: Grayscale.coolGray,
        label: Grayscale.coolGray,
    },
];

const HELPER_TEXT_VALIDATION_ERROR = 'Латинские буквы и цифры без пробелов в нижнем регистре, минимум 3 символа';

const HELPER_TEXT_SAME_NAME_ERROR = 'Тема с таким названием уже существует в черновиках';

interface GeneratorProps {
    onPreviewTheme: (data: ThemeType) => void;
}

export const Generator = ({ onPreviewTheme }: GeneratorProps) => {
    const [savedThemes, setSavedThemes] = useState(getSavedThemes());
    const [inputState, setInputState] = useState<{
        status?: 'error';
        helperText?: string;
    }>({
        helperText: HELPER_TEXT_VALIDATION_ERROR,
    });
    const [data, setData] = useState<ThemeData & { savedTheme?: string }>({
        savedTheme: getSavedThemes()[0]?.value || '',
        themeName: '',
        accentColors: getAccentColors()[0].value,
        lightSaturations: getSaturations()[0].value,
        darkSaturations: getSaturations()[0].value,
        lightGrayscale: getGrayscale()[0].value,
        darkGrayscale: getGrayscale()[0].value,
        opacityIcons: false,
        opacitySurfaces: false,
    });

    const onChangeTextField = useCallback(
        (name: string) => (arg: any) => {
            const value = arg.target.value;

            setData((prevState) => ({
                ...prevState,
                [name]: value,
            }));

            setInputState({
                helperText: HELPER_TEXT_VALIDATION_ERROR,
            });
        },
        [],
    );

    const onChangeSelect = useCallback(
        (name: string) => (arg: any) => {
            setData((prevState) => ({
                ...prevState,
                [name]: arg,
            }));
        },
        [],
    );

    const onChangeSwitch = useCallback(
        (name: string) => (arg: any) => {
            const value = arg.target.checked;

            setData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [],
    );

    const onSubmit = useCallback((event: React.SyntheticEvent) => {
        event.preventDefault();
    }, []);

    const onGenerateTheme = useCallback(() => {
        const {
            themeName,
            accentColors,
            lightSaturations,
            darkSaturations,
            lightGrayscale,
            darkGrayscale,
            opacityIcons,
            opacitySurfaces,
        } = data;

        if (savedThemes.some((savedTheme) => themeName === savedTheme.value)) {
            setInputState({
                status: 'error',
                helperText: HELPER_TEXT_SAME_NAME_ERROR,
            });
            return;
        }

        const themeNameValidationRegexp = new RegExp(/^[a-zA-Z\d_]{3,}$/);
        if (!themeNameValidationRegexp.test(themeName)) {
            setInputState({
                status: 'error',
                helperText: HELPER_TEXT_VALIDATION_ERROR,
            });
            return;
        }

        const theme = createTheme({
            name: themeName,
            accentColor: {
                light: generalColors[accentColors][lightSaturations],
                dark: generalColors[accentColors][darkSaturations],
            },
            grayscale: {
                light: lightGrayscale,
                dark: darkGrayscale,
            },
            opacity: {
                textIcons: opacityIcons,
                surfaces: opacitySurfaces,
            },
        });

        onPreviewTheme(theme);
    }, [onPreviewTheme, savedThemes, data]);

    const accentColors = useMemo(() => getAccentColors(), []);

    const saturations = useMemo(() => getSaturations(data.accentColors), [data.accentColors]);

    const grayscale = useMemo(() => getGrayscale(), []);

    const onLoadTheme = useCallback(() => {
        if (!data.savedTheme) {
            return;
        }

        const theme = loadTheme(data.savedTheme);

        if (!theme) {
            return;
        }

        onPreviewTheme(theme.themeData);
    }, [onPreviewTheme, data]);

    const onDeleteTheme = useCallback(() => {
        if (!data.savedTheme) {
            return;
        }

        const themes = savedThemes.filter((item) => item.value !== data.savedTheme);

        setSavedThemes(themes);
        deleteTheme(data.savedTheme);
    }, [data, savedThemes]);

    return (
        <StyledGenerator>
            {Boolean(savedThemes.length) && (
                <>
                    <Description>Черновики тем</Description>
                    <Form onSubmit={onSubmit}>
                        <StyledSelectSavedThemes
                            value={data.savedTheme}
                            items={savedThemes}
                            onChange={onChangeSelect('savedTheme')}
                        />
                        <StyledButtons>
                            <StyledButton text="Удалить тему" onClick={onDeleteTheme} />
                            <StyledButton text="Продолжить редактировать тему" view="primary" onClick={onLoadTheme} />
                        </StyledButtons>
                    </Form>
                </>
            )}
            <Description>Выберите базовые настройки в соответствии с макетом для генерации цветовой схемы.</Description>
            <Form onSubmit={onSubmit}>
                <FormField label="Наименование темы">
                    <StyledTextField
                        value={data.themeName}
                        helperText={inputState?.helperText}
                        status={inputState?.status}
                        onChange={onChangeTextField('themeName')}
                    />
                </FormField>
                <FormField label="Акцентный цвет из основной палитры">
                    <StyledSelect
                        value={data.accentColors}
                        items={accentColors}
                        onChange={onChangeSelect('accentColors')}
                    />
                </FormField>
                <FormField label="Светлость акцентного цвета для светлой темы">
                    <StyledSelect
                        value={data.lightSaturations}
                        items={saturations}
                        onChange={onChangeSelect('lightSaturations')}
                    />
                </FormField>
                <FormField label="Светлость акцентного цвета для темной темы">
                    <StyledSelect
                        value={data.darkSaturations}
                        items={saturations}
                        onChange={onChangeSelect('darkSaturations')}
                    />
                </FormField>
                <FormField label="Оттенок серого для светлой темы">
                    <StyledSelect
                        value={data.lightGrayscale}
                        items={grayscale}
                        onChange={onChangeSelect('lightGrayscale')}
                    />
                </FormField>
                <FormField label="Оттенок серого для темной темы">
                    <StyledSelect
                        value={data.darkGrayscale}
                        items={grayscale}
                        onChange={onChangeSelect('darkGrayscale')}
                    />
                </FormField>
                <FormField label="Текст и иконки с прозрачностью">
                    <Switch checked={data.opacityIcons} onChange={onChangeSwitch('opacityIcons')} />
                </FormField>
                <FormField label="Поверхности с прозрачностью">
                    <Switch checked={data.opacitySurfaces} onChange={onChangeSwitch('opacitySurfaces')} />
                </FormField>
                <StyledButtons>
                    <StyledButton text="Сгенеририовать тему" view="primary" onClick={onGenerateTheme} />
                </StyledButtons>
            </Form>
        </StyledGenerator>
    );
};
