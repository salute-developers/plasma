import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { textAreaConfig } from '../../../../components/TextArea';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './TextArea.config';
import { TextArea } from './TextArea';

type StoryTextAreaProps = ComponentProps<typeof TextArea>;

const meta: Meta<StoryTextAreaProps> = {
    title: 'sds_engineer/TextArea',
    decorators: [WithTheme],
    component: TextArea,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(textAreaConfig, config)),
        rows: {
            control: {
                type: 'number',
            },
        },
        cols: {
            control: {
                type: 'number',
            },
        },
    },
    args: {
        id: 'example-textarea',
        placeholder: 'Заполните многострочное поле',
        disabled: false,
        readOnly: false,
        autoResize: false,
    },
};

export default meta;

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const StoryDefault = (props: StoryTextAreaProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextArea
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...props}
        />
    );
};

export const Default: StoryObj<StoryTextAreaProps> = {
    render: (args) => <StoryDefault {...args} />,
};
