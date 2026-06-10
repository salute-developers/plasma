import React, { useState, useEffect } from 'react';
import { IconMic } from '@salutejs/plasma-icons';

const renderIndicator = ({ status, size }: { status: string; size: string }) => {
    let iconSize: 'xs' | 's';
    if (size === 'xs' || size === 's') {
        iconSize = 'xs';
    } else if (status === 'active') {
        iconSize = 's';
    } else {
        iconSize = 'xs';
    }

    return <IconMic color="inherit" size={iconSize} />;
};

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
        ...rest
    }: any) => {
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
                    return { indicator, status, completedItemView };
                }

                return { title: viewTitle, content, indicator, status, completedItemView };
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
