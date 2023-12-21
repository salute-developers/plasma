import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { segmentGroupConfig } from '../../../../components/Segment';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { SegmentProvider } from '../../../../components/Segment/SegmentProvider';

import { config } from './SegmentGroup.config';
import { SegmentItem, SegmentGroup } from './Segment';

const segmentItemViews = ['clear', 'filled', 'default', 'card', 'inverse'];

type CustomStorySegmentProps = {
    segmentItemView?: string;
    contentItemsNumber?: number;
};

type StorySegmentProps = ComponentProps<typeof SegmentGroup> & CustomStorySegmentProps;

const meta: Meta<StorySegmentProps> = {
    title: 'plasma_web/Segment',
    decorators: [WithTheme],
    component: SegmentGroup,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(segmentGroupConfig, config)),
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

const StoryDefault = ({ contentItemsNumber, selectionMode, segmentItemView, view, ...args }: StorySegmentProps) => {
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
