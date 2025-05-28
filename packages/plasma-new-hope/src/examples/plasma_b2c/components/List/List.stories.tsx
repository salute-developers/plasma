import React from 'react';
import type { Meta } from '@storybook/react';
import { styled } from '@linaria/react';

import { IconChevronLeft } from '../../../../components/_Icon';
import { WithTheme } from '../../../_helpers';

import { List, ListItem } from './List';

const ChevronRight = styled(IconChevronLeft)`
    transform: rotate(180deg);
`;

const meta: Meta<typeof List> = {
    title: 'b2c/Data Display/List',
    component: List,
    decorators: [WithTheme],
    argTypes: {
        size: {
            options: ['xl', 'l', 'm', 's', 'xs'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default'],
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
