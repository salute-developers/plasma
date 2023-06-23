import React, { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, H3, Modal, Switch, TextField } from '@salutejs/plasma-b2c';
import { surfaceLiquid01 } from '@salutejs/plasma-tokens-b2c';
import type { ThemeMode } from '@salutejs/plasma-tokens-utils';

import { FormField } from '../FormField/FormField';
import { SolidTokenValue } from '../SolidTokenValue/SolidTokenValue';
import { TypeTabs } from '../TypeTabs/TypeTabs';
import { GradientTokenValue } from '../GradientTokenValue/GradientTokenValue';

import { SBSansTextMono } from '../mixins';
import type { MultiplatformValue, InputData, Theme as ThemeType } from '../../types';

const Form = styled.form``;

const StyledTokenForm = styled(Modal)`
    width: 50rem;
`;

const StyledHeader = styled(H3)`
    ${SBSansTextMono}
`;

const StyledTokenName = styled(TextField)`
    input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    width: 100%;
`;

const StyledTextField = styled(TextField)`
    width: 35rem;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
`;

const StyledTokenPrefix = styled.span`
    font-size: 0.875rem;
    height: 2.5rem;
    background: ${surfaceLiquid01};

    display: flex;
    align-items: center;

    border-top-left-radius: 0.625rem;
    border-bottom-left-radius: 0.625rem;

    padding-left: 0.875rem;
    padding-right: 0.875rem;
`;

const TokenName = styled.div`
    width: 35rem;
    display: flex;
`;

const TokenValue = styled.div`
    width: 35rem;
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
    const [name, setName] = useState<InputData['name']>({
        ...inputData.name,
        value: inputData.name.value.replace(inputData.section.value, ''),
        helpText: 'Латинские буквы и цифры без пробелов, минимум 3 символа',
    });

    const [value, setValue] = useState(inputData.value);
    const [comment, setComment] = useState(inputData.comment);
    const [enabled, setEnabled] = useState(inputData.enabled);
    const colorTypeItems = ['Solid', 'Gradient'] as const;
    const [selectColorType, setSelectedColorType] = useState<typeof colorTypeItems[number]>(colorTypeItems[0]);

    const onChangeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setName((preValue) => ({
            ...preValue,
            value,
        }));
    }, []);

    const onSelectColorType = useCallback((value: string) => {
        setSelectedColorType(value as typeof colorTypeItems[number]);
    }, []);

    const onChangeSolidValue = useCallback((value: string) => {
        setValue({ value });
    }, []);

    const onChangeGradientValue = useCallback(
        (value: Record<string, string> | Array<MultiplatformValue> | MultiplatformValue) => {
            setValue({ value });
        },
        [],
    );

    const onChangeComment = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setComment({ value });
    }, []);

    const onChangeEnabled = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { checked: value } = event.target;

        setEnabled({ value });
    }, []);

    const onCancel = useCallback(() => onTokenFormShow(false), [onTokenFormShow]);

    const onApply = useCallback(() => {
        const { section, subsection } = inputData;

        const tokenName = `${section.value}${name.value}`;
        const hasToken = themeData[themeMode][section.value][subsection.value][tokenName];
        const cleanedValue = typeof value.value === 'string' ? value.value.replace(/[\s;]*/gm, '') : value.value;

        const getDataByThemeMode = (themeMode: ThemeMode) => ({
            ...themeData[themeMode],
            [section.value]: {
                ...themeData[themeMode][section.value],
                [subsection.value]: {
                    ...themeData[themeMode][section.value][subsection.value],
                    [tokenName]: {
                        value: cleanedValue,
                        comment: comment?.value,
                        enabled: enabled?.value,
                    },
                },
            },
        });

        if (!RegExp(/^[\w\d]{3,}$/).test(name.value)) {
            setName({
                value: name.value,
                status: 'error',
                helpText: 'Латинские буквы и цифры без пробелов, минимум 3 символа',
            });
            return;
        }

        if (comment?.value && comment.value?.length >= 120) {
            setComment({
                value: comment?.value,
                status: 'error',
                helpText: 'Комментарий не должен превышать 120 символов',
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
            <StyledHeader bold={false}>Редактирование токена</StyledHeader>
            <Form onSubmit={onSubmit}>
                <FormField label="Название">
                    <TokenName>
                        <StyledTokenPrefix>{inputData?.section.value}</StyledTokenPrefix>
                        <StyledTokenName
                            size="s"
                            name="name"
                            value={name?.value}
                            status={name?.status}
                            helperText={name?.helpText}
                            onChange={onChangeName}
                        />
                    </TokenName>
                </FormField>
                <FormField label="Значение цвета">
                    <TokenValue>
                        <TypeTabs
                            items={colorTypeItems}
                            selectedItem={selectColorType}
                            onSelectTab={onSelectColorType}
                        />
                        {selectColorType === 'Solid' && (
                            <SolidTokenValue value={value} onChangeValue={onChangeSolidValue} />
                        )}
                        {selectColorType === 'Gradient' && (
                            <GradientTokenValue value={value} onChangeValue={onChangeGradientValue} />
                        )}
                    </TokenValue>
                </FormField>
                <FormField label="Комментарий">
                    <StyledTextField
                        size="s"
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
