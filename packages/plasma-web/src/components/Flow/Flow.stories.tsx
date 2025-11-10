import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { Flow } from './Flow';

const orientations = ['vertical', 'horizontal'];
const arrangements = ['start', 'center', 'end', 'spaceBetween', 'spaceAround'];
const alignments = ['start', 'center', 'end'];

const widths = [100, 32, 171, 74, 179, 55];
const heights = [10, 50, 45, 33, 14, 55];

const Item = styled.div`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: #aab1e9;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
`;

const meta: Meta<typeof Flow> = {
    title: 'Layout/Flow',
    component: Flow,
    decorators: [InSpacingDecorator],
    argTypes: {
        itemsCount: {
            control: {
                type: 'number',
            },
        },
        height: {
            control: {
                type: 'text',
            },
            if: { arg: 'orientation', eq: 'vertical' },
        },
        orientation: {
            options: orientations,
            control: {
                type: 'select',
            },
        },
        arrangement: {
            options: arrangements,
            control: {
                type: 'select',
            },
        },
        alignment: {
            options: alignments,
            control: {
                type: 'select',
            },
        },
        mainAxisGap: {
            control: {
                type: 'text',
            },
        },
        crossAxisGap: {
            control: {
                type: 'text',
            },
        },
        itemsPerLine: {
            control: {
                type: 'number',
            },
        },
        minColWidth: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Flow>;

export const Default: Story = {
    args: {
        height: '13rem',
        orientation: 'horizontal',
        arrangement: 'start',
        alignment: 'start',
        mainAxisGap: '0',
        crossAxisGap: '0',
        minColWidth: 'auto',
        itemsPerLine: 0,
        itemsCount: 6,
    },
    render: ({ itemsCount, height, ...args }: ComponentProps<typeof Flow>) => {
        return (
            <Flow {...args} style={{ maxWidth: '28rem', height: height || 'auto' }}>
                {new Array(itemsCount).fill(null).map((width, index) => (
                    <Item
                        key={index}
                        style={{
                            minWidth: widths[index % widths.length],
                            minHeight: heights[index % heights.length],
                        }}
                    >
                        {index + 1}
                    </Item>
                ))}
            </Flow>
        );
    },
};
