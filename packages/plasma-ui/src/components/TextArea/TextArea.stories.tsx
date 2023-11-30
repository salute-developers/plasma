import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IconPlaceholder, InSpacingDecorator, disableProps } from '../../helpers';

import { TextArea } from '.';
import type { TextAreaProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<TextAreaProps> = {
    title: 'Controls/TextArea',
    component: TextArea,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: ['', 'success', 'error'],
            control: {
                type: 'select',
            },
        },
        resize: {
            options: ['none', 'both', 'horizontal', 'vertical'],
            control: {
                type: 'select',
            },
        },
        ...disableProps([
            '$isFocused',
            'label',
            'contentRight',
            'autoComplete',
            'autoFocus',
            'dirName',
            'form',
            'minLength',
            'maxLength',
            'name',
            'required',
            'value',
            'wrap',
            'onChange',
            'onFocus',
            'onBlur',
        ]),
    },
};

export default meta;

type StoryTextAreaProps = Omit<TextAreaProps, 'status'> & {
    status: '' | TextAreaProps['status'];
    enableRightIcon: boolean;
};

const StoryDefault = ({ enableRightIcon, status, ...rest }: StoryTextAreaProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextArea
            value={value}
            contentRight={enableRightIcon && <IconPlaceholder />}
            status={status || undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

export const Default: StoryObj<StoryTextAreaProps> = {
    args: {
        id: 'example-textarea',
        placeholder: 'Заполните многострочное поле',
        helperText: 'Подсказка к полю',
        enableRightIcon: true,
        status: '',
        resize: 'vertical',
        disabled: false,
        readOnly: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
