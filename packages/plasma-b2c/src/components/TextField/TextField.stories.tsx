import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { TextField, TextFieldView } from '.';
import type { TextFieldProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');
const onChipsChange = action('onChipsChange');

const sizes = ['l', 'm', 's', 'xs'];
const statuses = ['', 'success', 'warning', 'error'];
const labelPlacements = ['label', 'placeholder'];

const propsToDisable = [
    'helperBlock',
    'contentLeft',
    'htmlSize',
    '$isFocused',
    'contentRight',
    'onChangeChips',
    'onSearch',
    'type',
    'name',
    'onFocus',
    'onBlur',
    'onChange',
    'value',
    'checked',
    'minLength',
    'required',
    'caption',
    'values',
    'enumerationType',
    'chips',
];

const meta: Meta<TextFieldProps> = {
    title: 'Controls/TextField',
    component: TextField,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: { ...TextFieldView, ...{ empty: '' } },
            control: {
                type: 'select',
            },
        },
        animatedHint: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        label: {
            control: 'text',
        },
        ...disableProps(propsToDisable),
    },
};

export default meta;

type StorePropsDefault = Omit<
    TextFieldProps,
    | 'helperBlock'
    | 'contentLeft'
    | 'htmlSize'
    | 'contentRight'
    | 'type'
    | 'name'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'value'
    | 'checked'
    | 'maxLength'
    | 'minLength'
    | 'required'
> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDemo = ({ enableContentLeft, enableContentRight, status, ...rest }: StorePropsDefault) => {
    const [value, setValue] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    return (
        <TextField
            {...rest}
            value={value}
            contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            status={status || undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            onChangeChips={onChipsChange}
        />
    );
};

export const Default: StoryObj<StorePropsDefault> = {
    args: {
        id: 'example-text-field',
        size: 'l',
        label: 'Лейбл',
        animatedHint: undefined,
        placeholder: 'Заполните поле',
        helperText: 'Подсказка к полю',
        enumerationType: 'plain',
        status: '' as 'success',
        disabled: false,
        readOnly: false,
        enableContentLeft: true,
        enableContentRight: true,
    },
    render: (args) => <StoryDemo {...args} />,
};

export const Chips: StoryObj<StorePropsDefault> = {
    args: {
        ...Default.args,
        enumerationType: 'chip',
        chips: ['1 value', '2 value', '3 value', '4 value'],
    },
    render: (args) => <StoryDemo {...args} />,
};
