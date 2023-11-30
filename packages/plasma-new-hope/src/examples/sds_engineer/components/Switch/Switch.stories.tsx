import React, { useState } from 'react';
import { styled } from '@linaria/react';
import { action } from '@storybook/addon-actions';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { switchConfig } from '../../../../components/Switch';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Switch.config';
import { Switch } from './Switch';

type SwitchProps = ComponentProps<typeof Switch>;

const meta: Meta<SwitchProps> = {
    title: 'sds_engineer/Switch',
    decorators: [WithTheme],
    component: Switch,
    argTypes: argTypesFromConfig(mergeConfig(switchConfig, config), ['view', 'focused']),
    args: {
        label: 'Label',
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
    render: (args) => <StoryDefault {...args} />,
};
