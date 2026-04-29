import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getChipStories } from '@salutejs/plasma-sb-utils';

import { Avatar } from '../Avatar';

import { config } from './Chip.config';

import { Chip } from '.';

type ChipProps = ComponentProps<typeof Chip>;

const contentSizeMapper: Record<string, string> = {
    m: '1.5rem',
    s: '1rem',
    xs: '0.75rem',
    xxs: '0.75rem',
};

const { meta: META, Default: DefaultStory } = getChipStories({
    component: Chip,
    componentConfig: config,
    additionalArgTypes: {
        contentLeftType: {
            name: 'contentLeftType',
            table: { category: 'layout' },
            control: { type: 'select' },
            options: ['icon', 'avatar'],
            if: { arg: 'enableContentLeft' },
        },
    },
});

const meta: Meta<ChipProps> = {
    ...META,
    title: 'Data Display/Chip',
};

export default meta;

export const Default = {
    ...DefaultStory,
    render: ({ contentLeftType, size, ...args }: any) => {
        const contentSize = contentSizeMapper[size] || '1rem';

        const contentLeft =
            args.enableContentLeft && contentLeftType === 'avatar' ? (
                <Avatar
                    style={{ width: contentSize, height: contentSize }}
                    name="Иван Фадеев"
                    url="https://avatars.githubusercontent.com/u/1813468?v=4"
                />
            ) : undefined;

        return DefaultStory.render({
            ...args,
            size,
            ...(contentLeft ? { contentLeft } : {}),
        });
    },
};
