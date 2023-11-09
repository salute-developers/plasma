import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { spinnerConfig } from '../../../../components/Spinner';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Spinner.config';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
    title: 'plasma_web/Spinner',
    decorators: [WithTheme],
    component: Spinner,
    args: {
        size: 'm',
        view: 'accent',
    },
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Spinner>>;

const mergedConfig = mergeConfig(spinnerConfig, config);

export const Default: Story = {
    argTypes: {
        ...argTypesFromConfig(mergedConfig),
    },
    args: {
        view: 'accent',
        size: 'm',
    },
};

export const CustomSize: Story = {
    argTypes: {
        ...argTypesFromConfig(mergedConfig, ['size']),
        width: {
            control: {
                type: 'text',
            },
        },
        height: {
            control: {
                type: 'text',
            },
        },
    },
    args: {
        width: '100px',
        height: '100px',
    },
};
