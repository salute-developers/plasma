import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { IconClose } from '../../../components/_Icon';
import { WithTheme } from '../../_helpers';
import { Button } from '../Button/Button';
import { Chip } from '../Chip/Chip';
import { IconButton } from '../IconButton/IconButton';

import { Group } from './Group';

type ChildKind = 'button' | 'iconButton' | 'chip' | 'mixed';
type StoryProps = ComponentProps<typeof Group> & { itemsCount?: number; childKind?: ChildKind };

type Story = StoryObj<StoryProps>;

const orientationValues = ['horizontal', 'vertical'];
const gapValues = ['none', 'dense', 'wide'];
const shapeValues = ['segmented', 'default'];
const stretchingValues = ['auto', 'filled'];
const childKindValues: ChildKind[] = ['button', 'iconButton', 'chip', 'mixed'];

const renderItem = (kind: ChildKind, index: number) => {
    const resolvedKind = kind === 'mixed' ? childKindValues[index % 3] : kind;

    if (resolvedKind === 'iconButton') {
        return (
            <IconButton key={`icon-button-${index}`}>
                <IconClose color="inherit" size="s" />
            </IconButton>
        );
    }

    if (resolvedKind === 'chip') {
        return <Chip key={`chip-${index}`} text={`Chip ${index}`} />;
    }

    return <Button key={`button-${index}`} text={`Button ${index}`} />;
};

const meta: Meta<StoryProps> = {
    title: 'Layout/Group',
    decorators: [WithTheme],
    argTypes: {
        orientation: {
            options: orientationValues,
            control: {
                type: 'inline-radio',
            },
        },
        gap: {
            options: gapValues,
            control: {
                type: 'select',
            },
        },
        shape: {
            options: shapeValues,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretchingValues,
            control: {
                type: 'select',
            },
        },
        childKind: {
            options: childKindValues,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        gap: 'dense',
        orientation: 'horizontal',
        shape: 'default',
        itemsCount: 3,
        stretching: 'auto',
        childKind: 'button',
    },
    render: ({ itemsCount = 3, childKind = 'button', ...args }: StoryProps) => (
        <Group {...args}>{Array.from({ length: itemsCount }, (_, index) => renderItem(childKind, index))}</Group>
    ),
};
