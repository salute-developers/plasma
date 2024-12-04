import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import * as React from 'react';

import { Avatar } from '../Avatar';

import { AvatarGroup } from './AvatarGroup';

type Story = StoryObj<ComponentProps<typeof AvatarGroup>>;

const meta: Meta<typeof AvatarGroup> = {
    title: 'Data Display/AvatarGroup',
    component: AvatarGroup,
};

export default meta;

export const Default: Story = {
    render: (args: ComponentProps<typeof AvatarGroup>) => {
        return (
            <AvatarGroup {...args}>
                {Array(5)
                    .fill(true)
                    .map(() => (
                        <Avatar size="s" url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                    ))}
            </AvatarGroup>
        );
    },
};

export const DynamicSize: Story = {
    args: { totalCount: 10, visibleCount: 3 },
    render: (args: ComponentProps<typeof AvatarGroup>) => {
        const itemLength = args.totalCount;

        return (
            <AvatarGroup {...args}>
                {Array(args.visibleCount)
                    .fill(true)
                    .map((_, index) => (
                        <Avatar size="s" customText={index + 1} />
                    ))}

                {itemLength > args.visibleCount && (
                    <Avatar size="s" customText={`+${itemLength - args.visibleCount}`} />
                )}
            </AvatarGroup>
        );
    },
};

export const Accessibility: Story = {
    render: (args: ComponentProps<typeof AvatarGroup>) => {
        return (
            <AvatarGroup {...args}>
                {Array(5)
                    .fill(true)
                    .map(() => (
                        <Avatar
                            role="button"
                            tabIndex={0}
                            focused
                            size="s"
                            url="https://avatars.githubusercontent.com/u/1813468?v=4"
                        />
                    ))}
            </AvatarGroup>
        );
    },
};
