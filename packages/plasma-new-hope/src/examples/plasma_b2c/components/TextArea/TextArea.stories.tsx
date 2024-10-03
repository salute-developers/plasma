import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { textAreaConfig } from '../../../../components/TextArea';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './TextArea.config';
import { TextArea } from './TextArea';

const labelPlacements = ['inner', 'outer'];

type StoryTextAreaPropsCustom = {
    enableContentRight?: boolean;
};

type StoryTextAreaProps = ComponentProps<typeof TextArea> & StoryTextAreaPropsCustom;

const meta: Meta<StoryTextAreaProps> = {
    title: 'plasma_b2c/TextArea',
    decorators: [WithTheme],
    component: TextArea,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(textAreaConfig, config)),
        requiredPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
        },
        required: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'optional', truthy: false },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'required', truthy: false },
        },
        rows: {
            control: {
                type: 'number',
            },
            if: { arg: 'clear', truthy: false },
        },
        cols: {
            control: {
                type: 'number',
            },
            if: { arg: 'clear', truthy: false },
        },
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'select',
            },
        },
        hasDivider: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'clear', truthy: true },
        },
    },
    args: {
        id: 'example-textarea',
        view: 'default',
        size: 's',
        enableContentRight: true,
        label: 'Лейбл',
        labelPlacement: 'outer',
        placeholder: 'Заполните многострочное поле',
        leftHelper: 'Подсказка к полю слева',
        rightHelper: 'Подсказка к полю справа',
        disabled: false,
        readOnly: false,
        autoResize: false,
        minAuto: 0,
        maxAuto: 0,
        optional: false,
        required: false,
        requiredPlacement: 'right',
        clear: false,
        hasDivider: false,
    },
};

export default meta;

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const StoryDefault = (props: StoryTextAreaProps) => {
    const [value, setValue] = useState('Значение поля');

    const iconSize = props.size === 'xs' ? 'xs' : 's';

    return (
        <TextArea
            value={value}
            contentRight={props.enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
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
