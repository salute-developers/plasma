import React, { useState, useEffect } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { TextField, TextFieldView } from '.';
import type { TextFieldProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const propsToDisable = [
    'helperBlock',
    'contentLeft',
    'htmlSize',
    '$isFocused',
    'label',
    'contentRight',
    'type',
    'name',
    'onFocus',
    'onBlur',
    'onChange',
    'value',
    'checked',
    'minLength',
    'required',
];

const meta: Meta<TextFieldProps> = {
    title: 'Controls/TextField',
    component: TextField,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: { default: '', success: 'success', error: 'error' },
            control: {
                type: 'select',
            },
        },
        view: {
            options: { ...TextFieldView, ...{ empty: '' } },
            control: {
                type: 'select',
            },
        },
        maxLength: {
            control: {
                type: 'number',
            },
        },
        ...disableProps(propsToDisable),
    },
};

export default meta;

type StoryPropsDefault = TextFieldProps & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

type StoryPropsDeferredValue = { readOnly: boolean };

const StoryDefault = ({ enableContentLeft, enableContentRight, status, ...rest }: StoryPropsDefault) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextField
            value={value}
            contentLeft={enableContentLeft && <IconPlaceholder />}
            contentRight={enableContentRight && <IconPlaceholder />}
            status={status || undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        id: 'example-text-field',
        type: 'text',
        placeholder: 'Заполните поле имя',
        caption: 'Имя',
        helperText: 'Допустимы только символы кириллицы',
        enableContentLeft: true,
        enableContentRight: true,
        status: '' as 'success',
        disabled: false,
        readOnly: false,
        size: 'm',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryDeferredValue = ({ readOnly }: StoryPropsDeferredValue) => {
    const [asyncValue, setAsyncValue] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setAsyncValue("Sorry i'm late :)");
        }, 3000);
    }, []);

    return <TextField placeholder="Wait three seconds..." defaultValue={asyncValue} readOnly={readOnly} />;
};

export const DeferredValue: StoryObj<StoryPropsDeferredValue> = {
    argTypes: {
        ...disableProps([...propsToDisable, 'status', 'helperText', 'placeholder', 'disabled']),
    },
    args: {
        readOnly: true,
    },
    render: (args) => <StoryDeferredValue {...args} />,
};
