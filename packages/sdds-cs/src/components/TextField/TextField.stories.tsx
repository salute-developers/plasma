import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { TextField } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');
const onChipsChange = action('onChipsChange');

const sizes = ['s'];
const views = ['default', 'negative'];
const labelPlacements = ['outer'];

const meta: Meta<typeof TextField> = {
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
        view: {
            options: views,
            control: {
                type: 'select',
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
        ...disableProps([
            'contentLeft',
            'contentRight',
            'onChange',
            'onSearch',
            'onChangeChips',
            'enumerationType',
            'values',
        ]),
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

const BellIcon = ({ size }) => {
    const sizeMapper = {
        l: '1.5rem',
        m: '1.5rem',
        s: '1.5rem',
        xs: '1rem',
    };

    return (
        <svg viewBox="0 0 24 24" fill="none" width={sizeMapper[size]} height={sizeMapper[size]}>
            <path
                d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
                fill="currentColor"
            />
        </svg>
    );
};

const StoryDemo = ({ enableContentLeft, enableContentRight, view, ...rest }: StoryPropsDefault) => {
    const [text, setText] = useState('Значение поля');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <TextField
                {...rest}
                value={text}
                contentLeft={enableContentLeft ? <BellIcon size={rest.size} /> : undefined}
                contentRight={enableContentRight ? <BellIcon size={rest.size} /> : undefined}
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
                contentLeft={enableContentLeft ? <BellIcon size={rest.size} /> : undefined}
                contentRight={enableContentRight ? <BellIcon size={rest.size} /> : undefined}
                view={view}
                onChange={(e) => {
                    setText(e.target.value);
                    onChange(e.target.value);
                }}
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
        size: 's',
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
    | 'enumerationType'
> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryChips = ({ enableContentLeft, enableContentRight, view, ...rest }: StoryPropsChips) => {
    const [text, setText] = useState('Значение поля');

    return (
        <TextField
            {...rest}
            enumerationType="chip"
            value={text}
            contentLeft={enableContentLeft ? <BellIcon size={rest.size} /> : undefined}
            contentRight={enableContentRight ? <BellIcon size={rest.size} /> : undefined}
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
