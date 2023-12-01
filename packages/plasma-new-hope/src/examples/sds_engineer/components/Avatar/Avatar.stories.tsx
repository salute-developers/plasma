import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { avatarConfig } from '../../../../components/Avatar';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './Avatar.config';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'sds_engineer/Avatar',
    decorators: [WithTheme],
    component: Avatar,
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Avatar>>;

const mergedConfig = mergeConfig(avatarConfig, config);

export const Default: Story = {
    argTypes: {
        ...argTypesFromConfig(mergedConfig),
    },
    args: {
        view: 'default',
        size: 'xxl',
        name: 'Иван Фадеев',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
    },
};
