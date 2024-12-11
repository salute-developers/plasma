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
const chipViews = ['default', 'secondary', 'accent', 'positive', 'warning', 'negative'];
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
    title: 'Data Entry/TextField',
    component: TextField,
    decorators: [InSpacingDecorator],
    argTypes: {
        keepPlaceholder: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'animatedHint', eq: 'label' },
        },
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
        chipType: {
            control: 'select',
            options: ['default', 'text'],
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
    hasHint: boolean;
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
        keepPlaceholder: false,
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
        hasHint: true,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintPlacement: 'auto',
        hintWidth: '10rem',
        hintHasArrow: true,
    },
    parameters: {
        controls: {
            exclude: ['chipType'],
        },
    },
    render: (args) => <StoryDemo {...args} />,
};

const StoryChips = ({ status, enableContentLeft, enableContentRight, ...rest }: StoryPropsDefault) => {
    const [text, setText] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    const validateChip = (value) => (value === '1 value' ? { view: 'negative' } : {});

    return (
        <TextField
            {...rest}
            enumerationType="chip"
            value={text}
            contentLeft={enableContentLeft ? <IconBellFill size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconBellFill size={iconSize} /> : undefined}
            status={status || undefined}
            onChange={(e) => {
                setText(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            onChangeChips={onChipsChange}
            chipValidator={validateChip}
            style={{ width: '70%', margin: '0 auto' }}
        />
    );
};

export const Chips: StoryObj<StoryPropsDefault> = {
    argTypes: {
        chipView: {
            options: chipViews,
            control: {
                type: 'select',
            },
        },
    },
    args: {
        ...Default.args,
        helperText: 'Для первого чипа валидация вернула view="negative"',
        chipView: 'secondary',
        chips: ['1 value', '2 value', '3 value', '4 value'],
        chipType: 'default',
    },
    render: (args) => <StoryChips {...args} />,
};
