import React from 'react';
import type { Meta } from '@storybook/react-vite';
import { IconChevronRight } from '@salutejs/plasma-icons';
import styled from 'styled-components';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { config } from './List.config';

import { List, ListItem } from '.';

const { views, sizes } = getConfigVariations(config);

const ChevronRight = styled(IconChevronRight)`
    transform: rotate(0deg);
`;

const meta: Meta<typeof List> = {
    title: 'Data Display/List',
    component: List,
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        variant: {
            options: ['normal', 'tight'],
            control: {
                type: 'select',
            },
        },
        ...disableProps(['view']),
    },
};

export default meta;

export const Default: Story = {
    args: {
        view: 'default',
        size: 'm',
        variant: 'normal',
        disabled: false,
    },
    render: ({ view, size, ...rest }: StoryProps) => {
        return (
            <List view={view} size={size} {...rest}>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />} disabled>
                    Test Item 3
                </ListItem>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />}>Test Item 4</ListItem>
            </List>
        );
    },
};
