import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { IconBell, IconLockOutline } from '@salutejs/plasma-icons';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import type { PopoverPlacement } from '@salutejs/plasma-new-hope';

import { TextArea } from './TextArea';

const labelPlacements = ['inner', 'outer'];
const sizes = ['xs', 's', 'm', 'l', 'xl'];
const views = ['default', 'positive', 'warning', 'negative'];
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

type StoryTextAreaPropsCustom = {
    hasHint?: boolean;
    enableContentRight?: boolean;
};

type StoryTextAreaProps = ComponentProps<typeof TextArea> & StoryTextAreaPropsCustom;

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
        size: {
            options: sizes,
            defaultValue: 'm',
            control: {
                type: 'inline-radio',
            },
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
                type: 'select',
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
        cols: {
            control: {
                type: 'number',
            },
            if: {
                arg: 'clear',
                truthy: false,
            },
        },
        rows: {
            control: {
                type: 'number',
            },
            if: {
                arg: 'clear',
                truthy: false,
            },
        },
        hasHint: {
            control: {
                type: 'boolean',
            },
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
            'helperText',
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
            'hintView',
            'hintOpened',
        ]),
    },
    args: {
        id: 'example-textarea',
        view: 'default',
        size: 'm',
        enableContentRight: true,
        label: 'Лейбл',
        labelPlacement: 'outer',
        placeholder: 'Заполните многострочное поле',
        titleCaption: 'Подпись к полю',
        leftHelper: 'Подсказка к полю слева',
        rightHelper: 'Подсказка к полю справа',
        disabled: false,
        readOnly: false,
        autoResize: false,
        minAuto: 0,
        maxAuto: 0,
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

    return (
        <TextArea
            value={value}
            contentRight={
                props.enableContentRight || props.readOnly ? getIcon(IconBell, props.size, props.readOnly) : undefined
            }
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{
                width: '70%',
                margin: '0 auto',
            }}
            {...props}
        />
    );
};

export const Default: StoryObj<StoryTextAreaProps> = {
    render: (args) => <StoryDefault {...args} />,
};

type StoryProps = typeof TextArea & {
    hasHint: boolean;
    enableContentRight: boolean;
    id?: string;
};

const StoryLive = ({ status, ...rest }: StoryProps) => {
    const [value, setValue] = React.useState('');
    const l = value.length;
    const max = 140;

    return (
        <TextArea
            value={value}
            status={max <= l ? 'error' : ('' as 'success')}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{
                width: '70%',
                margin: '0 auto',
            }}
            {...rest}
            rightHelper={`${max - l} символов`}
        />
    );
};

export const Live: StoryObj<StoryProps> = {
    args: {
        placeholder: 'Placeholder text',
        label: 'Label',
        leftHelper: 'Helper text',
        disabled: false,
        hasHint: true,
        hintText: 'Текст подсказки',
        hintTrigger: 'hover',
        hintView: 'default',
        hintSize: 'm',
        hintPlacement: 'auto',
        hintHasArrow: true,
    },
    render: (args) => <StoryLive {...args} />,
};
