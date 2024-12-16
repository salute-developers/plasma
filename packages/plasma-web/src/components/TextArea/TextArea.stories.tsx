import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import type { PopoverPlacement } from '@salutejs/plasma-new-hope';

import { IconPlaceholder, InSpacingDecorator, disableProps } from '../../helpers';

import { TextArea } from '.';
import type { TextAreaProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const statuses = ['', 'success', 'warning', 'error'];
const sizes = ['xs', 's', 'm', 'l'];
const hintViews = ['default'];
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

const meta: Meta<TextAreaProps> = {
    title: 'Data Entry/TextArea',
    component: TextArea,
    decorators: [InSpacingDecorator],
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
        status: {
            options: statuses,
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
            if: { arg: 'hasHint', truthy: true },
        },
        helperText: {
            control: { type: 'text' },
            if: { arg: 'helperText', truthy: true },
        },
        width: {
            control: { type: 'text' },
            if: { arg: 'width', truthy: true },
        },
        height: {
            control: { type: 'text' },
            if: { arg: 'width', truthy: true },
        },
        rows: {
            control: { type: 'text' },
            if: { arg: 'number', truthy: true },
        },
        cols: {
            control: { type: 'text' },
            if: { arg: 'number', truthy: true },
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
            'leftHelperPlacement',
            'status',
            'hintTargetIcon',
            'hintOffset',
            'hintContentLeft',
        ]),
    },
    args: {
        autoResize: false,
        minAuto: 0,
        maxAuto: 0,
        size: 'm',
    },
};

export default meta;

type StoryProps = TextAreaProps & {
    hasHint: boolean;
    enableContentRight: boolean;
};

const StoryDefault = ({ enableContentRight, status, ...rest }: StoryProps) => {
    const [value, setValue] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    return (
        <TextArea
            resize="none"
            value={value}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            status={status || undefined}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{ width: '70%', margin: '0 auto' }}
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
        titleCaption: 'Подпись к полю',
        rightHelper: 'Подсказка к полю справа',
        enableContentRight: true,
        status: '' as 'success',
        disabled: false,
        readOnly: false,
        required: false,
        requiredPlacement: 'right',
        optional: false,
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
    render: (args) => <StoryDefault {...args} />,
};
