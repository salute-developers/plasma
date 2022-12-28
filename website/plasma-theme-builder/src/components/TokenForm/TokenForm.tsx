import React, { ChangeEvent, useCallback } from 'react';
import styled from 'styled-components';
import { Button, H3, Modal, Switch, TextField } from '@salutejs/plasma-b2c';

import { FormField } from '../FormField/FormField';
import { InputData, ThemeMode } from '../types';
import type { Theme as ThemeType } from '../../builder/types';

const Form = styled.form``;

const StyledTokenForm = styled(Modal)`
    width: 40rem;
`;

const ColorTokenField = styled.div`
    display: flex;
    gap: 1rem;
`;

const PreviewColor = styled.div<{ value: string }>`
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background-color: ${({ value }) => value};
`;

const StyledTextField = styled(TextField)`
    min-width: 25rem;
`;

const StyledTextFieldWithColor = styled(TextField)`
    min-width: 21rem;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

interface TokenFormProps {
    themeMode: ThemeMode;
    isOpen: boolean;
    inputData: InputData;
    themeData: ThemeType;
    onTokenFormShow: (value: boolean) => void;
    onInputDataChange: (data: InputData) => void;
    onThemeDataChange: (data?: ThemeType) => void;
}

export const TokenForm = ({
    themeMode,
    isOpen,
    inputData,
    themeData,
    onTokenFormShow,
    onInputDataChange,
    onThemeDataChange,
}: TokenFormProps) => {
    const onChangeTextField = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;

            onInputDataChange({
                ...inputData,
                [name]: {
                    value: value,
                    status: undefined,
                    comment: undefined,
                },
            });
        },
        [onInputDataChange, inputData],
    );

    const onChangeSwitch = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { name, checked } = event.target;

            onInputDataChange({
                ...inputData,
                [name]: {
                    value: checked,
                    status: undefined,
                    comment: undefined,
                },
            });
        },
        [onInputDataChange, inputData],
    );

    const onCancel = useCallback(() => onTokenFormShow(false), [onTokenFormShow]);

    const onApply = useCallback(() => {
        const { section, subsection, name, value, comment, enabled } = inputData;

        const hasToken = themeData[themeMode][section.value][subsection.value][name.value];

        const getDataByThemeMode = (themeMode: ThemeMode) => ({
            ...themeData[themeMode],
            [section.value]: {
                ...themeData[themeMode][section.value],
                [subsection.value]: {
                    ...themeData[themeMode][section.value][subsection.value],
                    [name.value]: {
                        value: value.value,
                        comment: comment?.value,
                        enabled: enabled?.value,
                    },
                },
            },
        });

        if (!name.value.startsWith(section.value)) {
            onInputDataChange({
                ...inputData,
                name: {
                    value: inputData.name.value,
                    status: 'error',
                    helpText: 'Название токена должно начинаться с ' + section.value,
                },
            });
            return;
        }

        if (!/#\b[0-9A-Fa-f]{8}\b/g.test(value.value)) {
            onInputDataChange({
                ...inputData,
                value: {
                    value: inputData.value.value,
                    status: 'error',
                    helpText: 'Цвет должен быть в формате #FFFFFFFF',
                },
            });
            return;
        }

        if (comment?.value && comment.value?.length >= 60) {
            onInputDataChange({
                ...inputData,
                comment: {
                    value: inputData.comment?.value,
                    status: 'error',
                    helpText: 'Комментарий не должен превышать 60 символов',
                },
            });
            return;
        }

        onTokenFormShow(false);

        if (hasToken) {
            onThemeDataChange({
                ...themeData,
                [themeMode]: getDataByThemeMode(themeMode),
            });
            return;
        }

        onThemeDataChange({
            ...themeData,
            dark: getDataByThemeMode('dark'),
            light: getDataByThemeMode('light'),
        });
    }, [onInputDataChange, onTokenFormShow, onThemeDataChange, inputData, themeData, themeMode]);

    const onSubmit = useCallback((event) => {
        event.preventDefault();
    }, []);

    return (
        <StyledTokenForm id="modalA" isOpen={isOpen} onClose={onCancel}>
            <H3 bold={false}>Редактирование токена</H3>
            <Form onSubmit={onSubmit}>
                <FormField label="Название">
                    <StyledTextField
                        name="name"
                        value={inputData.name?.value}
                        status={inputData.name?.status}
                        helperText={inputData.name?.helpText}
                        onChange={onChangeTextField}
                    />
                </FormField>
                <FormField label="Значение цвета">
                    <ColorTokenField>
                        <PreviewColor value={inputData.value.value} />
                        <StyledTextFieldWithColor
                            name="value"
                            value={inputData.value.value}
                            status={inputData.value?.status}
                            helperText={inputData.value?.helpText}
                            onChange={onChangeTextField}
                        />
                    </ColorTokenField>
                </FormField>
                <FormField label="Комментарий">
                    <StyledTextField
                        name="comment"
                        value={inputData.comment?.value}
                        status={inputData.comment?.status}
                        helperText={inputData.comment?.helpText}
                        onChange={onChangeTextField}
                    />
                </FormField>
                <FormField label="Отображать токен">
                    <Switch
                        name="enabled"
                        checked={inputData.enabled?.value || inputData.enabled?.value === undefined ? true : false}
                        onChange={onChangeSwitch}
                    />
                </FormField>
                <StyledButtons>
                    <Button type="button" text="Отмена" onClick={onCancel} />
                    <Button type="button" text="Сохранить" view="primary" onClick={onApply} />
                </StyledButtons>
            </Form>
        </StyledTokenForm>
    );
};
