import React from 'react';
import type { ComponentProps } from 'react';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';

import { segmentGroupConfig } from '../../../../components/Segment';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { SegmentProvider } from '../../../../components/Segment/SegmentProvider';

import { config } from './Segment.config';
import { SegmentItem, SegmentGroup } from './Segment';

const meta: Meta<typeof SegmentGroup> = {
    title: 'sds_engineer/Segment',
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
        ...disableProps([]),
    },
};

export default meta;

type StorySegmentProps = ComponentProps<typeof SegmentGroup> & {
    contentItemsNumber?: number;
};

const StoryDefault = ({ contentItemsNumber, selectionMode, ...args }: StorySegmentProps) => {
    const contentItems = Array(contentItemsNumber).fill(0);

    return (
        <>
            <h3>Segment with auto width</h3>
            <SegmentProvider>
                <SegmentGroup selectionMode={selectionMode} {...args}>
                    {contentItems.map((_, i) => (
                        <SegmentItem label={`Label ${i}`} value={`label_${i}`} key={`label_${i}`} {...args} />
                    ))}
                </SegmentGroup>
            </SegmentProvider>

            <h3>Segment with fixed width</h3>
            <SegmentProvider>
                <SegmentGroup style={{ width: '28.5rem' }} selectionMode={selectionMode} {...args}>
                    {contentItems.map((_, i) => (
                        <SegmentItem label={`Label ${i}`} value={`label_${i}`} key={`label_${i}`} {...args} />
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
        selectionMode: 'single',
        contentItemsNumber: 11,
        pilled: false,
        filledBackground: false,
        disabled: false,
    },
    render: (args) => <StoryDefault {...args} />,
};
