import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import { InSpacingDecorator, disableProps } from '../../helpers';

import { Switch } from '.';
import type { SwitchProps } from '.';

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<SwitchProps> = {
    title: 'Controls/Switch',
    component: Switch,
    decorators: [InSpacingDecorator],
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        ...disableProps([
            'id',
            'onFocus',
            'onBlur',
            'onChange',
            'value',
            'checked',
            'description',
            'focused',
            'pressed',
            'outlined',
            'theme',
            'as',
            'forwardedAs',
            'indeterminate',
            'singleLine',
            'maxLength',
            'minLength',
            'required',
            'placeholder',
            'readOnly',
            'name',
            'type',
            'view',
            'size',
        ]),
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
        label: 'Label',
        disabled: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
