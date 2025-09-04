import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Switch } from '.';
import type { SwitchProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<SwitchProps> = {
    title: 'Data Entry/Switch',
    component: Switch,
    decorators: [InSpacingDecorator],
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        description: {
            control: {
                type: 'text',
            },
        },
        labelPosition: {
            options: ['before', 'after'],
            control: { type: 'select' },
        },
        size: {
            control: { type: 'select' },
        },
        toggleSize: {
            control: { type: 'select' },
        },
        ...disableProps([
            'id',
            'onFocus',
            'onBlur',
            'onChange',
            'value',
            'checked',
            'focused',
            'pressed',
            'outlined',
            'theme',
            'as',
            'forwardedAs',
            'view',
            'placeholder',
            'name',
            'type',
            'readOnly',
            'required',
            'minLength',
            'maxLength',
        ]),
    },
    args: {
        label: 'Label',
        description: 'Description',
        labelPosition: 'before',
        labelEllipses: true,
    },
};

export default meta;

const StyledWrapper = styled.div`
    width: 13.75rem;
`;

const StoryDefault = (args: SwitchProps) => {
    const value = 0;
    const [checked, setChecked] = useState(true);

    return (
        <StyledWrapper>
            <Switch
                value={value}
                checked={checked}
                onChange={(event) => {
                    setChecked(event.target.checked);
                    onChange(event);
                }}
                onFocus={onFocus}
                onBlur={onBlur}
                {...args}
            />
        </StyledWrapper>
    );
};

export const Default: StoryObj<SwitchProps> = {
    args: {
        size: 'm',
        toggleSize: 'l',
        disabled: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
