import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { TextArea } from './TextArea';

const placements = ['inner', 'outer'];

type StoryTextAreaPropsCustom = {
    hasHint?: boolean;
    enableContentRight?: boolean;
};

type StoryTextAreaProps = ComponentProps<typeof TextArea> & StoryTextAreaPropsCustom;

const hintViews = ['default'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];

const meta: Meta<StoryTextAreaProps> = {
    title: 'Data Entry/TextArea',
    decorators: [InSpacingDecorator],
    component: TextArea,
    argTypes: {
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
        clear: {
            control: {
                type: 'boolean',
            },
        },
        labelPlacement: {
            options: ['inner', 'outer'],
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
        cols: {
            control: {
                type: 'number',
            },
            if: { arg: 'clear', truthy: false },
        },
        rows: {
            control: {
                type: 'number',
            },
            if: { arg: 'clear', truthy: false },
        },
        hasHint: {
            control: {
                type: 'boolean',
            },
        },
        hintText: {
            control: { type: 'text' },
            if: { arg: 'hasHint', truthy: true },
        },
        hintView: {
            options: hintViews,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintSize: {
            options: hintSizes,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintTrigger: {
            options: hintTriggers,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hasHint', truthy: true },
        },
        hintPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
            if: { arg: 'hasHint', truthy: true },
            mappers: placements,
        },
        hintHasArrow: {
            control: { type: 'boolean' },
            if: { arg: 'hasHint', truthy: true },
        },
        hintWidth: {
            control: { type: 'text' },
            if: { arg: 'hasHint', truthy: true },
        },
        helperText: {
            control: { type: 'text' },
        },
        width: {
            control: { type: 'text' },
        },
        height: {
            control: { type: 'text' },
        },
        leftHelper: {
            control: { type: 'text' },
        },
        titleCaption: {
            control: { type: 'text' },
        },
        rightHelper: {
            control: { type: 'text' },
        },
        ...disableProps([
            'helperBlock',
            '$isFocused',
            'contentRight',
            'autoComplete',
            'autoFocus',
            'dirName',
            'form',
            'minLength',
            'maxLength',
            'name',
            'value',
            'wrap',
            'theme',
            'as',
            'forwardedAs',
            'onChange',
            'onFocus',
            'onBlur',
            'status',
            'resize',
            'height',
            'width',
            'helperText',
            'labelPlacement',
            'hintView',
        ]),
    },
    args: {
        id: 'example-textarea',
        enableContentRight: true,
        enableContentLeft: true,
        label: 'Лейбл',
        titleCaption: 'Подпись к полю',
        placeholder: 'Заполните многострочное поле',
        leftHelperPlacement: 'outer',
        leftHelper: 'Подсказка к полю слева',
        rightHelper: 'Подсказка к полю справа',
        disabled: false,
        readOnly: false,
        autoResize: false,
        minAuto: 0,
        maxAuto: 0,
        required: false,
        requiredPlacement: 'right',
        size: 's',
        optional: false,
        labelPlacement: 'outer',
        clear: false,
        hasDivider: false,
        hasHint: true,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintPlacement: 'auto',
        hintWidth: '10rem',
        hintHasArrow: true,
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
            contentRight={props.enableContentRight ? <IconPlasma size={iconSize} color="inherit" /> : undefined}
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
