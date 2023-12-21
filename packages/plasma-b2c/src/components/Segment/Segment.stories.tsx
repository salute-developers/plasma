import React from 'react';
import type { ComponentProps } from 'react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { SegmentItem, SegmentGroup } from './Segment';

import { SegmentProvider } from '.';

const views = ['clear', 'filled'];
const sizes = ['l', 'm', 's', 'xs'];
const segmentItemViews = ['clear', 'default', 'secondary'];

type CustomStorySegmentProps = {
    segmentItemView?: string;
    contentItemsNumber?: number;
};

type StorySegmentProps = ComponentProps<typeof SegmentGroup> & CustomStorySegmentProps;

const meta: Meta<StorySegmentProps> = {
    title: 'Controls/Segment',
    decorators: [InSpacingDecorator],
    component: SegmentGroup,
    argTypes: {
        view: {
            options: views,
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
        selectionMode: {
            options: ['single', 'multiple'],
            control: {
                type: 'select',
            },
        },
        segmentItemView: {
            options: segmentItemViews,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = ({ contentItemsNumber, selectionMode, view, segmentItemView, ...args }: StorySegmentProps) => {
    const contentItems = Array(contentItemsNumber).fill(0);

    return (
        <>
            <h3>Segment with auto width</h3>
            <SegmentProvider>
                <SegmentGroup view={view} selectionMode={selectionMode} {...args}>
                    {contentItems.map((_, i) => (
                        <SegmentItem
                            view={segmentItemView}
                            label={`Label ${i}`}
                            value={`label_${i}`}
                            key={`label_${i}`}
                            {...args}
                        />
                    ))}
                </SegmentGroup>
            </SegmentProvider>

            <h3>Segment with fixed width</h3>
            <SegmentProvider>
                <SegmentGroup view={view} style={{ width: '28.5rem' }} selectionMode={selectionMode} {...args}>
                    {contentItems.map((_, i) => (
                        <SegmentItem
                            view={segmentItemView}
                            label={`Label ${i}`}
                            value={`label_${i}`}
                            key={`label_${i}`}
                            {...args}
                        />
                    ))}
                </SegmentGroup>
            </SegmentProvider>
        </>
    );
};

export const Default: StoryObj<StorySegmentProps> = {
    args: {
        view: 'clear',
        size: 'xs',
        segmentItemView: 'clear',
        selectionMode: 'single',
        contentItemsNumber: 11,
        pilled: false,
        filledBackground: false,
        disabled: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
