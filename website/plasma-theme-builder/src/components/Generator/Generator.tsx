import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, Select, Switch, TextField } from '@salutejs/plasma-b2c';
import { general as generalColors } from '@salutejs/plasma-colors';

import { FormField } from '../FormField/FormField';
import { createTheme } from '../../builder/createTheme';
import { ThemeData } from '../types';
import { Theme as ThemeType, Grayscale } from '../../builder/types';
import { getAccentColors, getSaturations } from '../utils';

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
    margin-left: auto;
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
interface GeneratorProps {
    onPreviewTheme: (data: ThemeType) => void;
}

export const Generator = ({ onPreviewTheme }: GeneratorProps) => {
    const [inputState, setInputState] = useState<'error' | undefined>();
    const [data, setData] = useState<ThemeData>({
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

            setInputState(undefined);
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

    const onSubmit = useCallback((event) => {
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

        if (!RegExp(/^[a-z\d]{3,}$/).test(themeName)) {
            setInputState('error');
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
    }, [onPreviewTheme, data]);

    const accentColors = useMemo(() => getAccentColors(), []);

    const saturations = useMemo(() => getSaturations(data.accentColors), [data.accentColors]);

    const grayscale = useMemo(() => getGrayscale(), []);

    return (
        <StyledGenerator>
            <Description>Выберите базовые настройки в соответствии с макетом для генерации цветовой схемы.</Description>
            <Form onSubmit={onSubmit}>
                <FormField label="Наименование темы">
                    <StyledTextField
                        value={data.themeName}
                        helperText="Латинские буквы и цифры без пробелов в нижнем регистре, минимум 3 символа"
                        status={inputState}
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
                <StyledButton type="button" text="Сгенеририовать тему" view="primary" onClick={onGenerateTheme} />
            </Form>
        </StyledGenerator>
    );
};
