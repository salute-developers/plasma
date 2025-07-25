import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../_helpers';
import { IconCross, IconLock } from '../../../components/_Icon';
import type { PopoverPlacement } from '../Popover/Popover';

import { TextField } from './TextField';
import { config } from './TextField.config';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');
const onChipsChange = action('onChipsChange');

const { views, sizes } = getConfigVariations(config);

const chipViews = ['default', 'secondary', 'accent', 'positive', 'warning', 'negative'];
const hintViews = ['default'];
const hintSizes = ['m', 's'];
const hintTriggers = ['hover', 'click'];
const hintTargetPlacements = ['outer', 'inner'];
const labelPlacements = ['outer', 'inner'];
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

const getIcon = (IconComponent: React.ReactElement, size: string, readOnly = false) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    if (readOnly) {
        return <IconLock size={iconSize} color="var(--text-secondary)" style={{ opacity: 0.4 }} />;
    }

    return <IconComponent size={iconSize} color="inherit" />;
};

const meta: Meta<typeof TextField> = {
    title: 'Data Entry/TextField',
    component: TextField,
    decorators: [WithTheme],
    argTypes: {
        requiredPlacement: {
            options: ['left', 'right'],
            control: {
                type: 'select',
            },
            if: {
                arg: 'optional',
                truthy: false,
            },
        },
        required: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'optional',
                truthy: false,
            },
        },
        hasRequiredIndicator: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'required',
                truthy: true,
            },
        },
        optional: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'required',
                truthy: false,
            },
        },
        hasDivider: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'clear',
                truthy: true,
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        maxLength: {
            control: {
                type: 'number',
            },
        },
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        keepPlaceholder: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'labelPlacement',
                eq: 'inner',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        titleCaption: {
            control: { type: 'text' },
        },
        leftHelper: {
            control: { type: 'text' },
        },
        hintText: {
            control: { type: 'text' },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintView: {
            options: hintViews,
            control: {
                type: 'select',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintSize: {
            options: hintSizes,
            control: {
                type: 'select',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintTargetPlacement: {
            options: hintTargetPlacements,
            control: {
                type: 'inline-radio',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintTrigger: {
            options: hintTriggers,
            control: {
                type: 'inline-radio',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintPlacement: {
            options: placements,
            control: {
                type: 'select',
            },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
            mappers: placements,
        },
        hintHasArrow: {
            control: { type: 'boolean' },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        hintWidth: {
            control: { type: 'text' },
            if: {
                arg: 'hasHint',
                truthy: true,
            },
        },
        chipType: {
            control: 'select',
            options: ['default', 'text'],
        },
    },
};

export default meta;

type StoryPropsDefault = Omit<
    ComponentProps<typeof TextField>,
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
    | 'required'
    | 'enumerationType'
    | 'chips'
    | 'onChangeChips'
> & {
    hasHint: boolean;
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDemo = ({ enableContentLeft, enableContentRight, view, readOnly, ...rest }: StoryPropsDefault) => {
    const [text, setText] = useState('Значение поля');

    const contentRight = enableContentRight || readOnly ? getIcon(IconCross, rest.size, readOnly) : undefined;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                width: '70%',
                margin: '0 auto',
            }}
        >
            <TextField
                {...rest}
                enumerationType="plain"
                value={text}
                readOnly={readOnly}
                contentLeft={enableContentLeft ? getIcon(IconPlaceholder, rest.size) : undefined}
                contentRight={contentRight}
                view={view}
                onChange={(e) => {
                    setText(e.target.value);
                    onChange(e.target.value);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
            />

            <TextField
                {...rest}
                label="Uncontrolled TextField"
                defaultValue="Дефолтное значение"
                enumerationType="plain"
                contentLeft={enableContentLeft ? getIcon(IconPlaceholder, rest.size) : undefined}
                contentRight={contentRight}
                view={view}
                readOnly={readOnly}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
            />
        </div>
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        id: 'example-text-field',
        size: 'l',
        view: 'default',
        label: 'Лейбл',
        labelPlacement: 'outer',
        keepPlaceholder: false,
        titleCaption: 'Подпись к полю',
        textBefore: '',
        textAfter: '',
        placeholder: 'Заполните поле',
        leftHelper: 'Подсказка к полю',
        disabled: false,
        readOnly: false,
        enableContentLeft: true,
        enableContentRight: true,
        optional: false,
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: true,
        clear: false,
        hasDivider: false,
        hasHint: true,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintTargetPlacement: 'outer',
        hintPlacement: 'auto',
        hintWidth: '10rem',
        hintHasArrow: true,
    },
    parameters: {
        controls: {
            exclude: ['chipType', 'chipView'],
        },
    },
    render: (args) => <StoryDemo {...args} />,
};

type StoryPropsChips = Omit<
    ComponentProps<typeof TextField>,
    | 'helperBlock'
    | 'contentLeft'
    | 'htmlSize'
    | 'contentRight'
    | 'type'
    | 'name'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'onSearch'
    | 'value'
    | 'checked'
    | 'maxLength'
    | 'minLength'
    | 'enumerationType'
> & {
    hasHint: boolean;
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryChips = ({ enableContentLeft, enableContentRight, view, readOnly, ...rest }: StoryPropsChips) => {
    const [text, setText] = useState('Значение поля');

    const contentRight = enableContentRight || readOnly ? getIcon(IconCross, rest.size, readOnly) : undefined;

    const validateChip = (value) => (value === '1 value' ? { view: 'negative' } : {});

    return (
        <TextField
            {...rest}
            enumerationType="chip"
            value={text}
            contentLeft={enableContentLeft ? getIcon(IconPlaceholder, rest.size) : undefined}
            contentRight={contentRight}
            view={view}
            readOnly={readOnly}
            onChange={(e) => {
                setText(e.target.value);
                onChange(e.target.value);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeChips={onChipsChange}
            chipValidator={validateChip}
            style={{
                width: '70%',
                margin: '0 auto',
            }}
        />
    );
};

export const Chips: StoryObj<StoryPropsChips> = {
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
        leftHelper: 'Для первого чипа валидация вернула view="negative"',
        chipView: 'secondary',
        chips: ['1 value', '2 value', '3 value', '4 value'],
        chipType: 'default',
    },
    render: (args) => <StoryChips {...args} />,
};
