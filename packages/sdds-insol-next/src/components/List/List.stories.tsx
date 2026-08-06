import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconChevronRight } from '@salutejs/plasma-icons';
import styled from 'styled-components';
import { action } from 'storybook/actions';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { config } from './List.config';

import { List, ListItem } from '.';

type StoryPropsDefault = ComponentProps<typeof List>;

const onKeyDown = action('onKeyDown');
const onKeyListDown = action('onKeyListDown');

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

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 'm',
        variant: 'normal',
        disabled: false,
    },
    render: ({ view, size, ...rest }) => {
        return (
            <List view={view} size={size} onKeyDown={onKeyListDown} {...rest}>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />} onKeyDown={onKeyDown}>
                    Test Item 1
                </ListItem>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />} onKeyDown={onKeyDown}>
                    Test Item 2
                </ListItem>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />} disabled>
                    Test Item 3
                </ListItem>
                <ListItem contentRight={<ChevronRight color="inherit" size="xs" />} onKeyDown={onKeyDown}>
                    Test Item 4
                </ListItem>
            </List>
        );
    },
};
