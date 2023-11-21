import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconSleep, IconEye } from '@salutejs/plasma-icons';

import { disableProps } from '../../helpers';
import { InSpacing } from '../../helpers/StoryDecorators';
import { ActionButton } from '../Button';

import { TextField } from '.';
import type { TextFieldProps } from '.';

const meta: Meta<TextFieldProps> = {
    title: 'Controls/TextField',
    component: TextField,
    decorators: [InSpacing],
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        status: {
            options: ['success', 'error', ''],
            control: {
                type: 'select',
            },
        },
        maxLength: {
            control: {
                type: 'number',
            },
        },
        ...disableProps([
            'contentLeft',
            'htmlSize',
            '$isFocused',
            'contentRight',
            'type',
            'name',
            'onFocus',
            'onBlur',
            'onChange',
            'placeholder',
            'value',
            'checked',
            'minLength',
            'required',
        ]),
    },
};

export default meta;

type StoryTextFieldProps = Omit<TextFieldProps, 'status'> & {
    status: '' | TextFieldProps['status'];
    enableLeftIcon: boolean;
    enableRightIcon: boolean;
};

const StoryDefault = ({ status, enableLeftIcon, enableRightIcon, ...rest }: StoryTextFieldProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextField
            value={value}
            status={status || undefined}
            contentLeft={enableLeftIcon && <IconSleep color="inherit" size="s" />}
            contentRight={
                enableRightIcon && (
                    <ActionButton view="clear">
                        <IconEye color="inherit" size="s" />
                    </ActionButton>
                )
            }
            onChange={(v) => setValue(v.target.value)}
            onFocus={action('onFocus')}
            onBlur={action('onBlur')}
            onSearch={action('onSearch')}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryTextFieldProps> = {
    args: {
        id: 'example-text-field',
        type: 'text',
        placeholder: 'Заполните поле',
        helperText: 'Подсказка к полю',
        disabled: false,
        readOnly: false,
        status: '',
        size: 'l',
        enableLeftIcon: true,
        enableRightIcon: true,
        rightTrailingSymbols: '',
    },
    render: (args) => <StoryDefault {...args} />,
};
