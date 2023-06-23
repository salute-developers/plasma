import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button, H3, Modal, Select, Switch, TextField } from '@salutejs/plasma-b2c';
import { PlasmaSaturation, general as generalColors } from '@salutejs/plasma-colors';
import type { ThemeMode } from '@salutejs/plasma-tokens-utils';

import { FormField } from '../FormField/FormField';

import { getAccentColors, getSaturations } from '../../utils';
import type { InputData, GeneralColor, Theme as ThemeType } from '../../types';

const Form = styled.form``;

const StyledTokenForm = styled(Modal)`
    width: 40rem;
`;

const ColorTokenField = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

const PreviewColor = styled.div<{ value: string }>`
    width: 3rem;
    height: 3rem;
    border-radius: 0.75rem;
    background: ${({ value }) => value};
`;

const StyledTextField = styled(TextField)`
    min-width: 25rem;
`;

const StyledTextFieldWithColor = styled(TextField)`
    width: 25rem;
`;

const StyledSelect = styled(Select)`
    width: 10rem;
`;

const StyledPaletteSelect = styled.div`
    display: flex;
    gap: 1rem;
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
    onThemeDataChange: (data?: ThemeType) => void;
}

export const TokenForm = ({
    themeMode,
    isOpen,
    inputData,
    themeData,
    onTokenFormShow,
    onThemeDataChange,
}: TokenFormProps) => {
    const [name, setName] = useState(inputData.name);
    const [selectedColor, setSelectedColor] = useState<GeneralColor | undefined>();
    const [selectedSaturation, setSelectedSaturation] = useState<PlasmaSaturation | undefined>();
    const [value, setValue] = useState(inputData.value);
    const [comment, setComment] = useState(inputData.comment);
    const [enabled, setEnabled] = useState(inputData.enabled);

    const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setName({ value });
    }, []);

    const onChangeSelectedColor = useCallback(
        (color: GeneralColor) => {
            const saturation500 = 7;
            const saturation: PlasmaSaturation = selectedSaturation || getSaturations()[saturation500].value;
            const value = generalColors[color][saturation];

            setSelectedColor(color);
            setSelectedSaturation(saturation);
            setValue({ value });
        },
        [selectedSaturation],
    );

    const onChangeSelectedSaturation = useCallback(
        (saturation: PlasmaSaturation) => {
            const colorRed = 0;
            const color: GeneralColor = selectedColor || getAccentColors()[colorRed].value;
            const value = generalColors[color][saturation];

            setSelectedColor(color);
            setSelectedSaturation(saturation);
            setValue({ value });
        },
        [selectedColor],
    );

    const onChangeValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setSelectedColor(undefined);
        setSelectedSaturation(undefined);
        setValue({ value });
    }, []);

    const onChangeComment = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setComment({ value });
    }, []);

    const onChangeEnabled = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { checked: value } = event.target;

        setEnabled({ value });
    }, []);

    const accentColors = useMemo(() => getAccentColors(), []);

    const saturations = useMemo(() => getSaturations(selectedColor), [selectedColor]);

    const onCancel = useCallback(() => onTokenFormShow(false), [onTokenFormShow]);

    const onApply = useCallback(() => {
        const { section, subsection } = inputData;

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
            setName({
                value: name.value,
                status: 'error',
                helpText: 'Название токена должно начинаться с ' + section.value,
            });
            return;
        }

        if (comment?.value && comment.value?.length >= 60) {
            setComment({
                value: comment?.value,
                status: 'error',
                helpText: 'Комментарий не должен превышать 60 символов',
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
    }, [themeData, themeMode, onTokenFormShow, onThemeDataChange, inputData, name, value, comment, enabled]);

    const onSubmit = useCallback((event: React.SyntheticEvent) => {
        event.preventDefault();
    }, []);

    return (
        <StyledTokenForm id="modalA" isOpen={isOpen} onClose={onCancel}>
            <H3 bold={false}>Редактирование токена</H3>
            <Form onSubmit={onSubmit}>
                <FormField label="Название">
                    <StyledTextField
                        name="name"
                        value={name?.value}
                        status={name?.status}
                        helperText={name?.helpText}
                        onChange={onChangeName}
                    />
                </FormField>
                <FormField label="Значение цвета">
                    <ColorTokenField>
                        <StyledPaletteSelect>
                            <PreviewColor value={value.value} />
                            <StyledSelect
                                listOverflow="scroll"
                                listHeight="25"
                                items={accentColors}
                                value={selectedColor}
                                onChange={onChangeSelectedColor}
                            />
                            <StyledSelect
                                listOverflow="scroll"
                                listHeight="25"
                                items={saturations}
                                value={selectedSaturation}
                                onChange={onChangeSelectedSaturation}
                            />
                        </StyledPaletteSelect>
                        <StyledTextFieldWithColor
                            name="value"
                            value={value.value}
                            status={value?.status}
                            helperText={value?.helpText}
                            onChange={onChangeValue}
                        />
                    </ColorTokenField>
                </FormField>
                <FormField label="Комментарий">
                    <StyledTextField
                        name="comment"
                        value={comment?.value}
                        status={comment?.status}
                        helperText={comment?.helpText}
                        onChange={onChangeComment}
                    />
                </FormField>
                <FormField label="Отображать токен">
                    <Switch
                        name="enabled"
                        checked={enabled?.value || enabled?.value === undefined ? true : false}
                        onChange={onChangeEnabled}
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
