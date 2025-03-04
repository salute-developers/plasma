import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import { IconPlasma } from '@salutejs/plasma-icons';

import { TextField } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const sizes = ['s'];
const views = ['default', 'negative'];
const labelPlacements = ['outer'];

const meta: Meta<typeof TextField> = {
    title: 'Data Entry/TextField',
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
        keepPlaceholder: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'labelPlacement', eq: 'inner' },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        chipType: {
            control: 'select',
            options: ['default', 'text'],
        },
        ...disableProps([
            'contentLeft',
            'contentRight',
            'onChange',
            'onSearch',
            'onChangeChips',
            'enumerationType',
            'values',
            'hintView',
            'hintTargetIcon',
            'hintOffset',
            'hintContentLeft',
            'chipView',
            'chips',
            'chipValidator',
            'onFocus',
            'onBlur',
            'name',
            'value',
            'type',
            'minLength',
            'maxLength',
            'checked',
            'hintText',
            'hintTrigger',
            'hintView',
            'hintSize',
            'hintTargetIcon',
            'hintTargetPlacement',
            'hintPlacement',
            'hintHasArrow',
            'hintOffset',
            'hintWidth',
            'hintContentLeft',
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

const StoryDemo = ({ enableContentLeft, enableContentRight, view, ...rest }: StoryPropsDefault) => {
    const [text, setText] = useState('Значение поля');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '70%', margin: '0 auto' }}>
            <TextField
                {...rest}
                value={text}
                contentLeft={enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
                contentRight={enableContentRight ? <IconPlasma size="s" color="inherit" /> : undefined}
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
                contentLeft={enableContentLeft ? <IconPlasma size="s" color="inherit" /> : undefined}
                contentRight={enableContentRight ? <IconPlasma size="s" color="inherit" /> : undefined}
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
        keepPlaceholder: false,
        placeholder: 'Заполните поле',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка к полю',
        disabled: false,
        readOnly: false,
        required: false,
        requiredPlacement: 'right',
        optional: false,
        enableContentLeft: true,
        enableContentRight: true,
        clear: false,
        hasDivider: false,
    },
    parameters: {
        controls: {
            exclude: ['chipType'],
        },
    },
    render: (args) => <StoryDemo {...args} />,
};
