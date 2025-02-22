import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import type { PopoverPlacement } from '@salutejs/plasma-new-hope';
import { IconPlasma, IconLockOutline } from '@salutejs/plasma-icons';

import { TextField } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');
const onSearch = action('onSearch');

const sizes = ['s'];
const views = ['default', 'negative'];
const labelPlacements = ['outer'];

const StyledIconLockOutline = styled(IconLockOutline)`
    opacity: 0.4;
`;

const getIcon = (IconComponent: React.ReactElement, size: string, readOnly = false) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    if (readOnly) {
        return <StyledIconLockOutline size={iconSize} color="var(--text-secondary)" />;
    }

    return <IconComponent size={iconSize} color="inherit" />;
};

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
            if: {
                arg: 'optional',
                truthy: false,
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
    hasHint: boolean;
    enableContentLeft: boolean;
    enableContentRight: boolean;
};

const StoryDemo = ({ enableContentLeft, enableContentRight, view, readOnly, ...rest }: StoryPropsDefault) => {
    const [text, setText] = useState('Значение поля');

    const contentRight = enableContentRight || readOnly ? getIcon(IconPlasma, rest.size, readOnly) : undefined;

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
                contentLeft={enableContentLeft ? getIcon(IconPlasma, rest.size) : undefined}
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
                contentLeft={enableContentLeft ? getIcon(IconPlasma, rest.size) : undefined}
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
        size: 's',
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
