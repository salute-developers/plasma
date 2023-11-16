import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { linkConfig } from '../../../../components/Link';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Link.config';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
    title: 'plasma_b2c/Link',
    decorators: [WithTheme],
    component: Link,
    argTypes: argTypesFromConfig(mergeConfig(linkConfig, config)),
};

export default meta;

export const Default: StoryObj<ComponentProps<typeof Link>> = {
    args: {
        target: '_blank',
        href: 'https://google.com',
        children: 'Hello',
        view: 'accent',
        disabled: false,
        focused: true,
    },
};
