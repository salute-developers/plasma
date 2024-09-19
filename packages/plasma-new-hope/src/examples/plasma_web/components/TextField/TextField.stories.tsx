import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { IconPlaceholder } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { IconChevronLeft } from '../../../../components/_Icon';

import { TextField } from './TextField';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');
const onChipsChange = action('onChipsChange');

const sizes = ['l', 'm', 's', 'xs'];
const views = ['default', 'positive', 'warning', 'negative'];
const labelPlacements = ['outer', 'inner'];

const meta: Meta<typeof TextField> = {
    title: 'plasma_web/TextField',
    component: TextField,
    decorators: [WithTheme],
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
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
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
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDemo = ({ enableContentLeft, enableContentRight, view, ...rest }: StoryPropsDefault) => {
    const [text, setText] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TextField
                {...rest}
                enumerationType="plain"
                value={text}
                contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
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
                contentLeft={enableContentLeft ? <IconPlaceholder size={iconSize} /> : undefined}
                contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
                view={view}
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
        placeholder: 'Заполните поле',
        leftHelper: 'Подсказка к полю',
        disabled: false,
        readOnly: false,
        required: false,
        requiredPlacement: 'right',
        optional: false,
        enableContentLeft: true,
        enableContentRight: true,
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
    | 'required'
    | 'optional'
    | 'enumerationType'
> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryChips = ({ enableContentLeft, enableContentRight, view, ...rest }: StoryPropsChips) => {
    const [text, setText] = useState('Значение поля');

    const iconSize = rest.size === 'xs' ? 'xs' : 's';

    return (
        <TextField
            {...rest}
            enumerationType="chip"
            value={text}
            contentLeft={enableContentLeft ? <IconChevronLeft color="inherit" size={iconSize} /> : undefined}
            contentRight={enableContentRight ? <IconPlaceholder size={iconSize} /> : undefined}
            view={view}
            onChange={(e) => {
                setText(e.target.value);
                onChange(e.target.value);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeChips={onChipsChange}
        />
    );
};

export const Chips: StoryObj<StoryPropsChips> = {
    args: {
        ...Default.args,
        chips: ['1 value', '2 value', '3 value', '4 value'],
    },
    render: (args) => <StoryChips {...args} />,
};
