import { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { buttonConfig } from '../../../../components/Button';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Button.config';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'plasma_b2c/Button',
    decorators: [WithTheme],
    component: Button,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(buttonConfig, config)),
        pin: {
            options: [
                'square-square',
                'square-clear',
                'clear-square',
                'clear-clear',
                'clear-circle',
                'circle-clear',
                'circle-circle',
                '',
            ],
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
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        square: false,
        stretch: false,
    },
};
