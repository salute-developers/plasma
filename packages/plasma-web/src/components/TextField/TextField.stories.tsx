import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconBellFill } from '@salutejs/plasma-icons';
import type { PopoverPlacement } from '@salutejs/plasma-new-hope';

import { TextField } from '.';
import type { TextFieldProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');
const onChipsChange = action('onChipsChange');

const sizes = ['l', 'm', 's', 'xs'];
const statuses = ['', 'success', 'warning', 'error'];
const hintViews = ['default'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];
const labelPlacements = ['label', 'placeholder'];
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
        hasDivider: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'clear', truthy: true },
        },
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
        animatedHint: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        label: {
            control: 'text',
        },
        hintText: {
            control: { type: 'text' },
        },
        hintView: {
            options: hintViews,
            control: {
                type: 'select',
            },
            if: { arg: 'hintText', neq: '' },
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
        ...disableProps(propsToDisable),
    },
};

export default meta;

type StoryPropsDefault = Omit<
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
> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDemo = ({ enableContentLeft, enableContentRight, status, ...rest }: StoryPropsDefault) => {
    const [value, setValue] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '70%', margin: '0 auto' }}>
            <TextField
                {...rest}
                value={value}
                contentLeft={enableContentLeft ? <IconBellFill color="inherit" size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconBellFill color="inherit" size={iconSize} /> : undefined}
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

            <TextField
                {...rest}
                label="Uncontrolled TextField"
                defaultValue="Дефолтное значение"
                contentLeft={enableContentLeft ? <IconBellFill color="inherit" size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconBellFill color="inherit" size={iconSize} /> : undefined}
                status={status || undefined}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                onChangeChips={onChipsChange}
            />
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        id: 'example-text-field',
        size: 'l',
        label: 'Лейбл',
        animatedHint: undefined,
        placeholder: 'Заполните поле',
        titleCaption: 'Подпись к полю',
        helperText: 'Подсказка к полю',
        enumerationType: 'plain',
        status: '' as 'success',
        disabled: false,
        readOnly: false,
        enableContentLeft: true,
        enableContentRight: true,
        required: false,
        requiredPlacement: 'right',
        optional: false,
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
    render: (args) => <StoryDemo {...args} />,
};

export const Chips: StoryObj<StoryPropsDefault> = {
    args: {
        ...Default.args,
        enumerationType: 'chip',
        chips: ['1 value', '2 value', '3 value', '4 value'],
    },
    render: (args) => <StoryDemo {...args} />,
};
