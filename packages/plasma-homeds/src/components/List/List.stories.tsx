import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconChevronRight, IconPlasma } from '@salutejs/plasma-icons';
import styled from 'styled-components';
import { disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { Counter } from '../Counter';

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
        appearance: {
            options: ['default', 'numbered'],
            control: {
                type: 'select',
            },
        },
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
            if: { arg: 'appearance', eq: 'default' },
        },
        hasBackground: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'appearance', eq: 'default' },
        },
        hasItemBackground: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'appearance', eq: 'default' },
        },
        hasDivider: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'appearance', eq: 'default' },
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
        appearance: 'default',
        view: 'default',
        size: 'm',
        variant: 'normal',
        disabled: false,
        hasBackground: false,
        hasItemBackground: false,
        hasDivider: false,
        hasContentLeft: true,
    },
    render: ({ view, size, hasContentLeft, appearance, ...rest }: StoryProps) => {
        const isNumbered = appearance === 'numbered';

        const getContentLeft = (index: number) => {
            if (!hasContentLeft) {
                return undefined;
            }

            return isNumbered ? (
                <Counter size="s" view="secondary" count={index + 1} />
            ) : (
                <IconPlasma color="inherit" size="s" />
            );
        };

        return (
            <div style={{ padding: '1rem' }}>
                <List
                    {...rest}
                    appearance={appearance}
                    view={view}
                    size={size}
                    hasBackground={!isNumbered && rest.hasBackground}
                    hasItemBackground={!isNumbered && rest.hasItemBackground}
                    hasDivider={!isNumbered && rest.hasDivider}
                >
                    {[...Array(4)].map((_, index) => (
                        <ListItem
                            key={index}
                            contentLeft={getContentLeft(index)}
                            contentRight={isNumbered ? undefined : <ChevronRight color="inherit" size="xs" />}
                        >
                            Test Item {index + 1}
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    },
};
