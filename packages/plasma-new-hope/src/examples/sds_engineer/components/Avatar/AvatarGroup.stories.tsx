import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { avatarGroupConfig } from '../../../../components/Avatar';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';

import { config } from './AvatarGroup.config';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
    title: 'sds_engineer/AvatarGroup',
    decorators: [WithTheme],
    component: AvatarGroup,
};

export default meta;

type Story = StoryObj<ComponentProps<typeof AvatarGroup>>;

const mergedConfig = mergeConfig(avatarGroupConfig, config);

export const Default: Story = {
    argTypes: {
        ...argTypesFromConfig(mergedConfig),
    },
    args: {
        view: 'default',
        size: 'xl',
        visibleCount: 3,
        items: [
            {
                name: 'Иван Фадеев',
                url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
            },
            {
                name: 'Иван Фадеев',
            },
            {
                name: '',
            },
            {
                name: 'Иван Фадеев',
                url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
            },
            {
                name: 'Иван Фадеев',
                url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
            },
            {
                name: 'Иван Фадеев',
                url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
            },
        ],
    },
};
