import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';

import { Chip } from '../Chip/Chip';

import { ChipGroup } from './ChipGroup';

type StoryProps = ComponentProps<typeof ChipGroup> & { itemsCount?: number };
type Story = StoryObj<StoryProps>;

const views = ['default', 'accent', 'secondary'];
const sizes = ['m', 'xxs'];
const gapValues = ['dense', 'wide'];

const meta: Meta<typeof ChipGroup> = {
    title: 'Data Display/ChipGroup',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: { type: 'select' },
            if: { arg: 'isCommonChipStyles', truthy: true },
        },
        view: {
            options: views,
            control: { type: 'select' },
            if: { arg: 'isCommonChipStyles', truthy: true },
        },
        gap: {
            options: gapValues,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

export const Default: Story = {
    args: {
        itemsCount: 5,
        gap: 'dense',
        isWrapped: false,
        view: 'default',
        size: 'm',
        isCommonChipStyles: true,
    },
    argTypes: {
        ...disableProps(['isCommonChipStyles']),
    },
    render: ({ itemsCount, ...args }: StoryProps) => {
        return (
            <ChipGroup {...args}>
                {Array(itemsCount)
                    .fill(true)
                    .map((_, i) => (
                        <Chip text={`Chip ${i}`} key={`chip_${i}`} hasClear={false} />
                    ))}
            </ChipGroup>
        );
    },
};

export const CustomChips: Story = {
    args: {
        ...Default.args,
        isCommonChipStyles: false,
    },
    argTypes: {
        ...disableProps(['itemsCount', 'isWrapped']),
    },
    render: (args: StoryProps) => {
        return (
            <>
                <h3>Группа Chip с разными темами</h3>
                <ChipGroup {...args}>
                    <Chip text="Primary" view="default" hasClear={false} />
                    <Chip text="Secondary" view="secondary" hasClear={false} />
                    <Chip text="Accent" view="accent" hasClear={false} />
                </ChipGroup>

                <h3>Группа Chip с разными размерами</h3>
                <ChipGroup {...args}>
                    <Chip text="Primary" view="default" size="xxs" hasClear={false} />
                    <Chip text="Secondary" view="secondary" size="m" hasClear={false} />
                    <Chip text="Accent" view="accent" size="xxs" hasClear={false} />
                </ChipGroup>
            </>
        );
    },
};
