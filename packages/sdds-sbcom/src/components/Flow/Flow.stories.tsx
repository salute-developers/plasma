import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { InSpacingDecorator, disableProps } from '@salutejs/plasma-sb-utils';
import styled from 'styled-components';

import { Flow } from './Flow';

const orientations = ['vertical', 'horizontal'];
const arrangements = ['start', 'center', 'end', 'spaceBetween', 'spaceAround'];
const alignments = ['start', 'center', 'end'];

const widths = [100, 32, 171, 74, 179, 55];
const heights = [10, 50, 45, 33, 14, 55];

const FlowCustom = styled(Flow)`
    background: var(--surface-transparent-primary);
    border-radius: 0.5rem;
`;

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
        containerWidth: {
            control: {
                type: 'text',
            },
        },
        containerHeight: {
            control: {
                type: 'text',
            },
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
                type: 'text',
            },
        },
        minColWidth: {
            control: {
                type: 'text',
            },
        },
        ...disableProps(['minColWidth']),
    },
};

export default meta;

type Story = StoryObj<typeof Flow>;

export const Default: Story = {
    args: {
        containerWidth: '450px',
        containerHeight: '200px',
        orientation: 'horizontal',
        arrangement: 'start',
        alignment: 'start',
        mainAxisGap: '10',
        crossAxisGap: '10',
        itemsPerLine: '',
        itemsCount: 6,
    },
    render: ({ itemsCount, containerWidth, containerHeight, ...args }: ComponentProps<typeof Flow>) => {
        const hasLines = Boolean(args.itemsPerLine);

        return (
            <FlowCustom {...args} style={{ width: containerWidth, height: containerHeight }}>
                {new Array(itemsCount).fill(null).map((width, index) => (
                    <Item
                        key={index}
                        style={
                            hasLines
                                ? {
                                      minWidth: widths[index % widths.length],
                                      minHeight: heights[index % heights.length],
                                  }
                                : {
                                      width: widths[index % widths.length],
                                      height: heights[index % heights.length],
                                  }
                        }
                    >
                        {index + 1}
                    </Item>
                ))}
            </FlowCustom>
        );
    },
};
