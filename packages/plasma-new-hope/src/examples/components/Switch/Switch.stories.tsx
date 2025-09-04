import React, { useState } from 'react';
import { styled } from '@linaria/react';
import { action } from '@storybook/addon-actions';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { switchConfig } from '../../../components/Switch';
import { mergeConfig } from '../../../engines';
import { WithTheme, argTypesFromConfig } from '../../_helpers';

import { config } from './Switch.config';
import { Switch, SwitchOutline } from './Switch';

type SwitchProps = ComponentProps<typeof Switch>;

const meta: Meta<SwitchProps> = {
    title: 'Data Entry/Switch',
    decorators: [WithTheme],
    component: Switch,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(switchConfig, config), ['view', 'focused']),
        labelPosition: {
            options: ['before', 'after'],
            control: { type: 'select' },
        },
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

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const StoryDefault = (args: SwitchProps) => {
    const value = 'yes';
    const name = 'agree';
    const [checked, setChecked] = useState(true);

    return (
        <StyledWrapper>
            <Switch
                value={value}
                name={name}
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

const StoryOutline = (args: SwitchProps) => {
    const value = 'yes';
    const name = 'agree';
    const [checked, setChecked] = useState(true);

    return (
        <StyledWrapper>
            <SwitchOutline
                value={value}
                name={name}
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

export const Outline: StoryObj<SwitchProps> = {
    args: {
        size: 'm',
        toggleSize: 'l',
        disabled: false,
    },
    render: (args) => <StoryOutline {...args} />,
};
