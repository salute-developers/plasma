import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { IconBell, IconProps } from '@salutejs/plasma-icons';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { TextArea } from './TextArea';

const labelPlacements = ['inner', 'outer'];

const getIcon = (IconComponent: React.FC<IconProps>, size: string) => {
    const iconSize = size === 'xs' ? 'xs' : 's';

    return <IconComponent size={iconSize} color="inherit" />;
};

type StoryTextAreaPropsCustom = {
    hasHint?: boolean;
    enableContentRight?: boolean;
    enableHeader?: boolean;
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
        optionalText: {
            control: {
                type: 'text',
            },
            if: {
                arg: 'required',
                truthy: false,
            },
        },
        clear: {
            control: {
                type: 'boolean',
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
        helperText: {
            control: { type: 'text' },
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
        enableHeader: {
            control: {
                type: 'boolean',
            },
            if: {
                arg: 'clear',
                truthy: false,
            },
        },
        ...disableProps([
            'size',
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
            'resize',
            'height',
            'width',
            'helperText',
            'labelPlacement',
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
            'hintView',
            'hintOpened',
        ]),
    },
    args: {
        id: 'example-textarea',
        view: 'default',
        size: 's',
        enableContentRight: true,
        enableHeader: false,
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
        optionalText: 'опционально',
        required: false,
        requiredPlacement: 'right',
        hasRequiredIndicator: true,
        clear: false,
        hasDivider: false,
    },
};

export default meta;

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const StyledHeader = styled.div`
    padding: 0.5rem 0.75rem;
    border-bottom: 0.063rem solid var(--surface-transparent-tertiary);
    font-family: var(--plasma-textarea-input-font-family);
    font-size: var(--plasma-textarea-input-font-size);
    font-style: var(--plasma-textarea-input-font-style);
    font-weight: var(--plasma-textarea-input-font-weight);
    letter-spacing: var(--plasma-textarea-input-letter-spacing);
    line-height: var(--plasma-textarea-input-line-height);
`;

const StoryDefault = (props: StoryTextAreaProps) => {
    const [value, setValue] = useState('Значение поля');

    return (
        <TextArea
            value={value}
            contentRight={
                props.enableContentRight || props.readOnly ? getIcon(IconBell, props.size, props.readOnly) : undefined
            }
            headerSlot={props.enableHeader && <StyledHeader>Дополнительный контент</StyledHeader>}
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
