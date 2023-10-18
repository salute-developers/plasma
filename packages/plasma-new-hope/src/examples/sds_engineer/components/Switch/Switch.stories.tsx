import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { switchConfig } from '../../../../components/Switch';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Switch.config';
import { Switch } from './Switch';

export default {
    title: 'sds_engineer/Switch',
    decorators: [WithTheme],
    component: Switch,
} as ComponentMeta<typeof Switch>;

const mergedConfig = mergeConfig(switchConfig, config);

const onChange = action('onChange');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

export const Default: ComponentStory<typeof Switch> = ({ ...rest }) => {
    const [checked, setChecked] = React.useState(true);
    return (
        <Switch
            checked={checked}
            onChange={(event) => {
                setChecked(event.target.checked);
                onChange(event);
            }}
            onFocus={onFocus}
            onBlur={onBlur}
            {...rest}
        />
    );
};

Default.argTypes = argTypesFromConfig(mergedConfig);

Default.args = {
    label: 'Label',
    disabled: false,
    focused: true,
};
