import React, { useState } from 'react';
import { IconPlasma } from '@salutejs/plasma-icons';

import { getContentLeft, getContentRight, getContentSize } from './helpers';

type CreateDefaultStoryProps = {
    SegmentGroup: any;
    SegmentItem: any;
    SegmentProvider: any;
    useSegment: () => {
        selectedSegmentItems: string[];
    };
    CounterComponent?: React.ComponentType<{ size: string; count: number; view: string }>;

    customGetContentLeft?: (contentLeftOption: string, size: string) => JSX.Element | undefined;
    customGetContentRight?: (
        contentRightOption: string,
        size: string,
        segmentItemView?: string | undefined,
        isSelected?: boolean | undefined,
    ) => JSX.Element | 'Text' | undefined;
};

export const createDefaultStory = ({
    SegmentGroup,
    SegmentItem,
    SegmentProvider,
    CounterComponent,
    useSegment,
    customGetContentLeft,
    customGetContentRight,
}: CreateDefaultStoryProps) => {
    const SegmentGroupContent = ({
        items,
        stretch,
        disabled,
        size,
        orientation,
        segmentItemView,
        contentLeftOption,
        contentRightOption,
        maxItemWidth,
        hasBackground,
        ...args
    }: any) => {
        const { selectedSegmentItems } = useSegment();

        return (
            <SegmentGroup
                stretch={stretch}
                disabled={disabled}
                clip={false}
                size={size}
                orientation={orientation}
                hasBackground={hasBackground}
                {...args}
            >
                {items.map((_: any, i: number) => (
                    <SegmentItem
                        view={segmentItemView}
                        label={`Label ${i}`}
                        value={`label_${i}`}
                        size={size}
                        key={`label_${i}`}
                        contentLeft={
                            customGetContentLeft
                                ? customGetContentLeft(contentLeftOption, size)
                                : getContentLeft({
                                      contentLeftOption,
                                      size,
                                  })
                        }
                        contentRight={
                            customGetContentRight
                                ? customGetContentRight(
                                      contentRightOption,
                                      size,
                                      segmentItemView,
                                      selectedSegmentItems.includes(`label_${i}`),
                                  )
                                : getContentRight({
                                      contentRightOption,
                                      size,
                                      CounterComponent,
                                  })
                        }
                        maxItemWidth={maxItemWidth}
                        {...args}
                    >
                        {`Label${i + 1}`}
                    </SegmentItem>
                ))}
            </SegmentGroup>
        );
    };

    return (props: any) => {
        const {
            singleSelectedRequired,
            disabled,
            itemQuantity,
            size,
            stretch,
            orientation,
            maxItemWidth,
            segmentItemView,
            contentLeft: contentLeftOption,
            contentRight: contentRightOption,
            ...args
        } = props;

        const items = Array(itemQuantity).fill(0);
        const [selected, setSelected] = useState<string[]>([]);

        const handleChangeSelected = (selectedSegnment: string) => {
            setSelected([selectedSegnment]);
        };

        return (
            <SegmentProvider
                singleSelectedRequired={singleSelectedRequired}
                selected={selected}
                onChangeSelected={handleChangeSelected}
            >
                <SegmentGroupContent
                    items={items}
                    stretch={stretch}
                    disabled={disabled}
                    size={size}
                    orientation={orientation}
                    segmentItemView={segmentItemView}
                    contentLeftOption={contentLeftOption}
                    contentRightOption={contentRightOption}
                    maxItemWidth={maxItemWidth}
                    {...args}
                />
            </SegmentProvider>
        );
    };
};

type CreateIconItemStoryProps = {
    SegmentGroup: any;
    SegmentIconItem: any;
    SegmentProvider: any;
};

export const createIconItemStory = ({ SegmentGroup, SegmentIconItem, SegmentProvider }: CreateIconItemStoryProps) => {
    const SegmentGroupContent = ({
        items,
        stretch,
        disabled,
        size,
        orientation,
        segmentItemView,
        hasBackground,
        args,
    }: any) => {
        const iconSize = getContentSize(size);

        return (
            <SegmentGroup
                stretch={stretch}
                disabled={disabled}
                clip={false}
                size={size}
                orientation={orientation}
                hasBackground={hasBackground}
                {...args}
            >
                {items.map((_: any, i: number) => (
                    <SegmentIconItem
                        view={segmentItemView}
                        value={`icon_${i}`}
                        size={size}
                        key={`icon_${i}`}
                        icon={<IconPlasma size={iconSize} color="inherit" />}
                        {...args}
                    />
                ))}
            </SegmentGroup>
        );
    };

    return (props: any) => {
        const {
            singleSelectedRequired,
            disabled,
            itemQuantity,
            size,
            stretch,
            orientation,
            segmentItemView,
            ...args
        } = props;

        const items = Array(itemQuantity).fill(0);
        const [selected, setSelected] = useState<string[]>([]);

        const handleChangeSelected = (selectedSegment: string) => {
            setSelected([selectedSegment]);
        };

        return (
            <SegmentProvider
                singleSelectedRequired={singleSelectedRequired}
                selected={selected}
                onChangeSelected={handleChangeSelected}
            >
                <SegmentGroupContent
                    items={items}
                    stretch={stretch}
                    disabled={disabled}
                    size={size}
                    orientation={orientation}
                    segmentItemView={segmentItemView}
                    {...args}
                />
            </SegmentProvider>
        );
    };
};
