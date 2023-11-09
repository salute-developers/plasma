import React, { ComponentProps } from 'react';
import type { Meta } from '@storybook/react';
import { StoryObj } from '@storybook/react';

import { buttonConfig } from '../../../../components/Button';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Button.config';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'plasma_web/Button',
    decorators: [WithTheme],
    component: Button,
    argTypes: argTypesFromConfig(mergeConfig(buttonConfig, config)),
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Button>> = {
    args: {
        children: 'Hello',
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
    },
};
