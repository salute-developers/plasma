import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Select, Switch, TextField } from '@salutejs/plasma-b2c';

import { accentColors, saturations, shade } from '../../assets/mocks';
import type { PageProps } from '../types';
import { FormField } from '../FormField/FormField';

const Form = styled.form``;

const StyledGenerator = styled.div`
    width: 42rem;
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

export const Generator = ({ onClick }: PageProps) => {
    const [state, setState] = useState({
        themeName: '',
        accentColors: accentColors[0].value,
        lightSaturations: saturations[0].value,
        darkSaturations: saturations[0].value,
        lightGrayscale: shade[0].value,
        darkGrayscale: shade[0].value,
        opacityIcons: false,
        opacitySurfaces: false,
    });

    const onChangeTextField = useCallback(
        (name: string) => (arg: any) => {
            const value = arg.target.value;

            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [],
    );

    const onChangeSelect = useCallback(
        (name: string) => (arg: any) => {
            setState((prevState) => ({
                ...prevState,
                [name]: arg,
            }));
        },
        [],
    );

    const onChangeSwitch = useCallback(
        (name: string) => (arg: any) => {
            const value = arg.target.checked;

            setState((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        },
        [],
    );

    const onSubmit = useCallback((event) => {
        event.preventDefault();
    }, []);

    return (
        <StyledGenerator>
            <Description>Выберите базовые настройки в соответствии с макетом для генерации цветовой схемы.</Description>
            <Form onSubmit={onSubmit}>
                <FormField label="Наименование темы">
                    <StyledTextField value={state.themeName} onChange={onChangeTextField('themeName')} />
                </FormField>
                <FormField label="Акцентный цвет из основной палитры">
                    <StyledSelect
                        value={state.accentColors}
                        items={accentColors}
                        onChange={onChangeSelect('accentColors')}
                    />
                </FormField>
                <FormField label="Светлость акцентного цвета для светлой темы">
                    <StyledSelect
                        value={state.lightSaturations}
                        items={saturations}
                        onChange={onChangeSelect('lightSaturations')}
                    />
                </FormField>
                <FormField label="Светлость акцентного цвета для темной темы">
                    <StyledSelect
                        value={state.darkSaturations}
                        items={saturations}
                        onChange={onChangeSelect('darkSaturations')}
                    />
                </FormField>
                <FormField label="Оттенок серого для светлой темы">
                    <StyledSelect
                        value={state.lightGrayscale}
                        items={shade}
                        onChange={onChangeSelect('lightGrayscale')}
                    />
                </FormField>
                <FormField label="Оттенок серого для темной темы">
                    <StyledSelect
                        value={state.darkGrayscale}
                        items={shade}
                        onChange={onChangeSelect('darkGrayscale')}
                    />
                </FormField>
                <FormField label="Текст и иконки с прозрачностью">
                    <Switch checked={state.opacityIcons} onChange={onChangeSwitch('opacityIcons')} />
                </FormField>
                <FormField label="Поверхности с прозрачностью">
                    <Switch checked={state.opacitySurfaces} onChange={onChangeSwitch('opacitySurfaces')} />
                </FormField>
                <StyledButton type="button" text="Сгенеририовать тему" view="primary" onClick={onClick} />
            </Form>
        </StyledGenerator>
    );
};
