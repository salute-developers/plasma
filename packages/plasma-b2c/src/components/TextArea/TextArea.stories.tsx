import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

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
            'helperBlock',
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

type StoryProps = TextAreaProps & { enableContentRight: boolean; id?: string };

type Story = StoryObj<StoryProps>;

const StoryDefault = ({ status, enableContentRight, ...rest }: StoryProps) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onChange(e);
    };

    return (
        <TextArea
            value={value}
            contentRight={enableContentRight && <IconPlaceholder />}
            status={status || undefined}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

export const Default: Story = {
    args: {
        id: 'example-textarea',
        placeholder: 'Заполните многострочное поле',
        leftHelper: 'Подсказка к полю',
        rightHelper: '125 слов',
        enableContentRight: true,
        status: '' as 'success',
        resize: 'vertical',
        disabled: false,
        size: 'm',
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryLive = ({ status, ...rest }: StoryProps) => {
    const [value, setValue] = React.useState('');
    const l = value.length;
    const max = 140;

    return (
        <TextArea
            value={value}
            status={max <= l ? 'error' : ('' as 'success')}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            rightHelper={`${max - l} символов`}
            {...rest}
        />
    );
};

export const Live: Story = {
    args: {
        placeholder: 'Placeholder text',
        leftHelper: 'Helper text',
        resize: 'vertical',
        disabled: false,
    },
    render: (args) => <StoryLive {...args} />,
};
