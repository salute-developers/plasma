import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import * as React from 'react';

import { WithTheme } from '../../../_helpers';
import { Avatar } from '../Avatar/Avatar';

import { AvatarGroup } from './AvatarGroup';

type Story = StoryObj<ComponentProps<typeof AvatarGroup>>;
type Avatar = ComponentProps<typeof Avatar>;

const meta: Meta<typeof AvatarGroup> = {
    title: 'plasma_b2c/AvatarGroup',
    decorators: [WithTheme],
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
                        <Avatar size="xxl" url="https://avatars.githubusercontent.com/u/1813468?v=4" />
                    ))}
            </AvatarGroup>
        );
    },
};

export const DynamicSize: Story = {
    args: { totalCount: 10, visibleCount: 3 },
    render: ({ visibleCount, totalCount, ...args }: ComponentProps<typeof AvatarGroup>) => {
        const itemLength = totalCount;

        return (
            <AvatarGroup {...args}>
                {Array(visibleCount)
                    .fill(true)
                    .map((_, index) => (
                        <Avatar size="xxl" key={index} customText={index + 1} />
                    ))}

                {itemLength > visibleCount && <Avatar size="xxl" customText={`+${itemLength - visibleCount}`} />}
            </AvatarGroup>
        );
    },
};

const list: Array<Avatar> = [
    {
        name: 'Илья Муромец',
        status: 'active',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
    },
    {
        name: 'Алеша Попович',
        status: 'active',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
    },
    {
        name: 'Добрыня Никитич',
        status: 'active',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
    },
    {
        name: 'Микула Селянинович',
        status: 'inactive',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
    },
    {
        name: 'Ставр Годинович',
        status: 'inactive',
    },
];

export const Accessibility: Story = {
    render: (args: ComponentProps<typeof AvatarGroup>) => {
        return (
            <AvatarGroup {...args}>
                {list.map((props) => (
                    <Avatar role="button" tabIndex={0} focused key={props.name} size="xxl" {...props} />
                ))}
            </AvatarGroup>
        );
    },
};
