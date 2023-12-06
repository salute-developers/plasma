import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { buttonConfig } from '../../../../components/Button';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Button.config';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'sds_engineer/Button',
    decorators: [WithTheme],
    component: Button,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(buttonConfig, config)),
        pin: {
            options: ['clear-clear', 'circle-circle', ''],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
    },
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Button>> = {
    args: {
        children: 'Hello',
        view: 'secondary',
        size: 'm',
        disabled: false,
        focused: true,
    },
};
