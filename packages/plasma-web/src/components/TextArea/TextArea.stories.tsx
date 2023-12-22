import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { IconPlaceholder, InSpacingDecorator, disableProps } from '../../helpers';

import { TextArea } from '.';
import type { TextAreaProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const statuses = ['', 'success', 'warning', 'error'];

const meta: Meta<TextAreaProps> = {
    title: 'Controls/TextArea',
    component: TextArea,
    decorators: [InSpacingDecorator],
    argTypes: {
        status: {
            options: statuses,
            control: {
                type: 'select',
            },
        },
        cols: {
            control: {
                type: 'number',
            },
        },
        rows: {
            control: {
                type: 'number',
            },
        },
        labelPlacement: {
            options: ['inner', 'outer'],
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
            'theme',
            'as',
            'forwardedAs',
            'onChange',
            'onFocus',
            'onBlur',
            'helperText',
            'helperBlock',
        ]),
    },
};

export default meta;

type StoryProps = TextAreaProps & { enableContentRight: boolean };

const StoryDefault = ({ enableContentRight, status, ...rest }: StoryProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextArea
            value={value}
            contentRight={enableContentRight ? <IconPlaceholder /> : undefined}
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

export const Default: StoryObj<StoryProps> = {
    args: {
        id: 'example-textarea',
        placeholder: 'Заполните многострочное поле',
        label: 'Подпись',
        leftHelper: 'Подсказка к полю слева',
        rightHelper: 'Подсказка к полю справа',
        enableContentRight: true,
        status: '' as 'success',
        disabled: false,
        readOnly: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
