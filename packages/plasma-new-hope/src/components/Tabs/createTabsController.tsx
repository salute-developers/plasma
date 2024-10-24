import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';

import { HorizontalTabItemProps } from './TabItem.types';
import { HorizontalCommonTabsProps, HorizontalTabsProps } from './Tabs.types';

export interface TabsControllerProps extends HorizontalCommonTabsProps {
    items: Array<{ label: string } & HorizontalTabItemProps>;
    index: number;
    onIndexChange: (index: number) => void;
    children?: never;
    autoscroll?: boolean;
}

/**
 * @deprecated
 * Используйте Tabs, TabItem, указав параметры index, itemIndex, onIndexChange
 *
 * Функция для создания `TabController`, которая дает возможность
 * кастомизировать стили, при этом сохраняя единый интерфейс и функционал.
 */
export function createTabsController<T extends HTMLDivElement, P extends TabsControllerProps>(
    ListComponent: ForwardRefExoticComponent<HorizontalTabsProps & RefAttributes<HTMLDivElement>>,
    ItemComponent: ForwardRefExoticComponent<HorizontalTabItemProps & RefAttributes<HTMLDivElement>>,
) {
    // eslint-disable-next-line prefer-arrow-callback
    return forwardRef<T, P>(function TabsController({ items, index, autoscroll, onIndexChange, ...rest }, ref) {
        const { disabled } = rest;

        return (
            <ListComponent ref={ref} index={index} {...rest}>
                {items.map(({ label, ...restItem }, i) => (
                    <ItemComponent
                        key={i}
                        selected={i === index}
                        itemIndex={i}
                        onIndexChange={onIndexChange}
                        tabIndex={!disabled && i === index ? 0 : -1}
                        disabled={disabled}
                        {...restItem}
                    >
                        {label}
                    </ItemComponent>
                ))}
            </ListComponent>
        );
    });
}
