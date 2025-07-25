import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { segmentGroupConfig } from '../../../components/Segment';
import { mergeConfig } from '../../../engines';
import { WithTheme, argTypesFromConfig } from '../../_helpers';
import { SegmentProvider } from '../../../components/Segment/SegmentProvider';
import { Counter } from '../Counter/Counter';
import { IconMic } from '../../../components/_Icon';

import { config } from './SegmentGroup.config';
import { SegmentItem, SegmentGroup } from './Segment';

const contentLeftOptions = ['none', 'icon'];
const contentRightOptions = ['none', 'text', 'counter', 'icon'];

const segmentItemViews = ['default', 'secondary', 'accent', 'clear'];
type Size = typeof sizes[number];

type CustomStoryProps = {
    itemQuantity: number;
    contentLeft: string;
    contentRight: string;
    segmentItemView?: 'default' | 'secondary';
    singleSelectedRequired?: boolean;
};

type StorySegmentProps = ComponentProps<typeof SegmentGroup> & CustomStoryProps;

const sizes = ['xs', 's', 'm', 'l', 'xl'] as const;

const getContentLeft = (contentLeftOption: string, size: Size) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
    return contentLeftOption === 'icon' ? <IconMic size={iconSize} color="inherit" /> : undefined;
};

const getContentRight = (contentRightOption: string, size: Size) => {
    const iconSize = size === 'xs' ? 'xs' : 's';
    const counterSize = size === 'xs' ? 'xxs' : 'xs';

    switch (contentRightOption) {
        case 'icon':
            return <IconMic size={iconSize} color="inherit" />;
        case 'counter':
            return <Counter size={counterSize} count={1} view="positive" />;
        case 'text':
            return 'Text';
        default:
            return undefined;
    }
};

const meta: Meta<StorySegmentProps> = {
    title: 'Data Entry/Segment',
    decorators: [WithTheme],
    component: SegmentGroup,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(segmentGroupConfig, config)),
        ...disableProps(['filledBackground', 'view', 'selectionMode', 'clip']),
        stretch: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'orientation', eq: 'horizontal' },
        },
        orientation: {
            options: ['horizontal', 'vertical'],
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
        contentLeft: {
            options: contentLeftOptions,
            control: {
                type: 'select',
            },
        },
        contentRight: {
            options: contentRightOptions,
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
    },
};

export default meta;

const StoryDefault = (props: StorySegmentProps) => {
    const {
        singleSelectedRequired,
        disabled,
        itemQuantity,
        size,
        stretch,
        orientation,

        segmentItemView,
        contentLeft: contentLeftOption,
        contentRight: contentRightOption,
        ...args
    } = props;
    const items = Array(itemQuantity).fill(0);
    const isVertical = orientation === 'vertical';

    return (
        <SegmentProvider singleSelectedRequired={singleSelectedRequired}>
            <SegmentGroup
                stretch={stretch}
                disabled={disabled}
                clip={false}
                size={size}
                orientation={orientation}
                {...args}
            >
                {items.map((_, i) => (
                    <SegmentItem
                        view={segmentItemView}
                        label={`Label ${i}`}
                        value={`label_${i}`}
                        size={size}
                        key={`label_${i}`}
                        contentLeft={getContentLeft(contentLeftOption, size)}
                        contentRight={getContentRight(contentRightOption, size)}
                        {...args}
                    >
                        {`Label${i + 1}`}
                    </SegmentItem>
                ))}
            </SegmentGroup>
        </SegmentProvider>
    );
};

export const Default: StoryObj<StorySegmentProps> = {
    args: {
        itemQuantity: 8,
        size: 'xs',
        segmentItemView: 'default',
        selectionMode: 'single',
        pilled: false,
        filledBackground: false,
        hasBackground: false,
        disabled: false,
        stretch: false,
        singleSelectedRequired: false,
        orientation: 'horizontal',
        contentRight: 'none',
        contentLeft: 'none',
    },
    argTypes: {
        ...disableProps(['filledBackground', 'view', 'selectionMode', 'clip']),
    },
    render: (args: StorySegmentProps) => <StoryDefault {...args} />,
};
