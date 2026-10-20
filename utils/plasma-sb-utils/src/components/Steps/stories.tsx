import React, { useState, useEffect } from 'react';
import { IconMic } from '@salutejs/plasma-icons';

import { getIndicatorSizePreset, indicatorSizePresets } from './fixtures';

const getIconSize = (status: string, size: string, indicatorSize?: number): 'xs' | 's' => {
    // Свой диаметр один на все статусы: 24px — иконка 16px, любой другой — 24px.
    if (indicatorSize != null) {
        return indicatorSize === 24 ? 'xs' : 's';
    }

    if (size === 'xs' || size === 's' || status !== 'active') {
        return 'xs';
    }

    return 's';
};

const renderIndicator = ({
    status,
    size,
    item,
}: {
    status: string;
    size: string;
    item?: { indicatorSize?: number };
}) => <IconMic color="inherit" size={getIconSize(status, size, item?.indicatorSize)} />;

export const createDefaultStory = (Steps: any, stepItemViews: any) => {
    return ({
        applyCustomCompletedItemView,
        maxWidth,
        title,
        content,
        size,
        indicatorType,
        quantity,
        hasContent,
        loading,
        disabled,
        simple,
        indicatorSizeSimpleBullet,
        indicatorSizeSimpleMarker,
        indicatorSizeBullet,
        indicatorSizeMarker,
        indicatorSizePreset: _indicatorSizePreset,
        ...rest
    }: any) => {
        const preset = getIndicatorSizePreset(simple, indicatorType);
        const indicatorSize = {
            'simple-bullet': indicatorSizeSimpleBullet,
            'simple-marker': indicatorSizeSimpleMarker,
            bullet: indicatorSizeBullet,
            marker: indicatorSizeMarker,
        }[preset];
        const allowedSizes: readonly string[] = indicatorSizePresets[preset];
        const stepIndicatorSize =
            indicatorSize && allowedSizes.includes(String(indicatorSize)) ? Number(indicatorSize) : undefined;
        const innerTitle = title || 'Title';

        const [items, setItems] = useState<any[]>([]);

        useEffect(() => {
            const newItems = new Array(quantity).fill(null).map((_, index) => {
                const indicator = index + 1;
                const status = index === 0 ? 'active' : 'inactive';
                const completedItemView =
                    applyCustomCompletedItemView && (index < stepItemViews.length ? stepItemViews[index] : 'default');
                const viewTitle = applyCustomCompletedItemView ? `${completedItemView} view` : innerTitle;

                if (simple) {
                    return { indicator, status, completedItemView, indicatorSize: stepIndicatorSize };
                }

                return {
                    title: viewTitle,
                    content,
                    indicator,
                    status,
                    completedItemView,
                    indicatorSize: stepIndicatorSize,
                };
            });

            setItems(newItems);
        }, [loading, applyCustomCompletedItemView, quantity, simple]);

        useEffect(() => {
            setItems((curItems) =>
                curItems.map((item, index) => {
                    if (indicatorType === 'numbered') {
                        return { ...item, indicator: index + 1 };
                    }

                    if (indicatorType === 'bullet') {
                        return { ...item, indicator: undefined };
                    }

                    if (indicatorType === 'icon') {
                        return { ...item, indicator: renderIndicator };
                    }

                    return item;
                }),
            );
        }, [indicatorType, content, simple]);

        useEffect(() => {
            setItems((curItems) => curItems.map((item) => ({ ...item, disabled })));
        }, [disabled]);

        useEffect(() => {
            setItems((curItems) => curItems.map((item) => ({ ...item, indicatorSize: stepIndicatorSize })));
        }, [stepIndicatorSize]);

        const onChange = (_item: any, index: number, prevIndex: number) => {
            if (prevIndex !== undefined) {
                items[prevIndex].status = 'completed';
            }

            items[index].status = 'active';

            setItems([...items]);
        };

        return (
            <div style={{ maxWidth, height: '600px' }}>
                <Steps
                    size={size}
                    items={items}
                    onChange={onChange}
                    hasLoader={loading}
                    hasContent={hasContent}
                    {...rest}
                />
            </div>
        );
    };
};
