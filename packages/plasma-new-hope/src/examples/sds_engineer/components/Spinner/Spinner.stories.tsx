import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { spinnerConfig } from '../../../../components/Spinner';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Spinner.config';
import { Spinner } from './Spinner';

export default {
    title: 'sds_engineer/Spinner',
    decorators: [WithTheme],
    component: Spinner,
} as ComponentMeta<typeof Spinner>;

const mergedConfig = mergeConfig(spinnerConfig, config);

export const Default: ComponentStory<typeof Spinner> = ({ ...rest }) => {
    return <Spinner {...rest} />;
};

Default.argTypes = argTypesFromConfig(mergedConfig);

export const CustomSize: ComponentStory<typeof Spinner> = ({ ...rest }) => {
    return <Spinner {...rest} />;
};

CustomSize.argTypes = {
    ...argTypesFromConfig(mergedConfig, ['size']),
    width: {
        defaultValue: '100px',
        control: {
            type: 'text',
        },
    },
    height: {
        defaultValue: '100px',
        control: {
            type: 'text',
        },
    },
};
