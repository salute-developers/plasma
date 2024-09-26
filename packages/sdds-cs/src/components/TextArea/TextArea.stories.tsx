import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';
import type { PopoverPlacement } from '@salutejs/plasma-new-hope';

import { TextArea } from './TextArea';

const labelPlacements = ['inner', 'outer'];

type StoryTextAreaPropsCustom = {
    enableContentRight?: boolean;
};

type StoryTextAreaProps = ComponentProps<typeof TextArea> & StoryTextAreaPropsCustom;

const sizes = ['s'];
const views = ['default', 'negative'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];
const placements: Array<PopoverPlacement> = [
    'top',
    'top-start',
    'top-end',

    'bottom',
    'bottom-start',
    'bottom-end',

    'left',
    'left-start',
    'left-end',

    'right',
    'right-start',
    'right-end',

    'auto',
];

const meta: Meta<StoryTextAreaProps> = {
    title: 'Controls/TextArea',
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
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            defaultValue: 'm',
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        clear: {
            control: {
                type: 'boolean',
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
        hintText: {
            control: { type: 'text' },
        },
        hintSize: {
            options: hintSizes,
            control: {
                type: 'select',
            },
            if: { arg: 'hintText', neq: '' },
        },
        hintTrigger: {
            options: hintTriggers,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'hintText', neq: '' },
        },
        hintPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
            if: { arg: 'hintText', neq: '' },
            mappers: placements,
        },
        hintHasArrow: {
            control: { type: 'boolean' },
            if: { arg: 'hintText', neq: '' },
        },
        hintWidth: {
            control: { type: 'text' },
            if: { arg: 'hintText', neq: '' },
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
