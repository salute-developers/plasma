import React, { useState } from 'react';

import { getContentLeft, getContentRight } from './helpers';

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
        pilled,
        args,
    }: any) => {
        const { selectedSegmentItems } = useSegment();

        return (
            <div style={{ padding: '16px' }}>
                <SegmentGroup
                    stretch={stretch}
                    disabled={disabled}
                    clip={false}
                    size={size}
                    orientation={orientation}
                    hasBackground={hasBackground}
                    pilled={pilled}
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
                            pilled={pilled}
                            {...args}
                        >
                            {`Label${i + 1}`}
                        </SegmentItem>
                    ))}
                </SegmentGroup>
            </div>
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
