import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconChevronRight, IconPlasma } from '@salutejs/plasma-icons';
import styled from 'styled-components';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { config } from './List.config';

import { List, ListItem } from '.';

type StoryProps = React.ComponentProps<typeof List> & {
    hasContentLeft?: boolean;
};
type Story = StoryObj<StoryProps>;

const { views, sizes } = getConfigVariations(config);

const ChevronRight = styled(IconChevronRight)`
    transform: rotate(0deg);
`;

const meta: Meta<StoryProps> = {
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
        hasBackground: {
            control: {
                type: 'boolean',
            },
        },
        hasItemBackground: {
            control: {
                type: 'boolean',
            },
        },
        hasDivider: {
            control: {
                type: 'boolean',
            },
        },
        hasContentLeft: {
            control: {
                type: 'boolean',
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
        hasBackground: false,
        hasItemBackground: false,
        hasDivider: false,
        hasContentLeft: false,
    },
    render: ({ view, size, hasContentLeft, ...rest }: StoryProps) => {
        return (
            <div style={{ padding: '1rem' }}>
                <List view={view} size={size} {...rest}>
                    {[...Array(4)].map((_, index) => (
                        <ListItem
                            key={index}
                            contentLeft={hasContentLeft ? <IconPlasma color="inherit" size="s" /> : undefined}
                            contentRight={<ChevronRight color="inherit" size="xs" />}
                        >
                            Test Item {index + 1}
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    },
};
