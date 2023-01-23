import React, { forwardRef, ReactNode, useMemo, useCallback, FunctionComponent, useRef } from 'react';

import { useForkRef } from '../../hooks';

import { TabItemRefs, TabsContext } from './TabsContext';
import { Tabs, TabsProps } from './Tabs';
import { TabItem, TabItemProps } from './TabItem';

export interface TabsControllerProps extends TabsProps {
    items: Array<{ label: string; contentLeft?: ReactNode }>;
    index: number;
    onIndexChange: (index: number) => void;
    children?: never;
    autoscroll?: boolean;
}

enum Keys {
    end = 35,
    home = 36,
    left = 37,
    right = 39,
}

/**
 * Функция для создания `TabController`, которая дает возможность
 * кастомизировать стили, при этом сохраняя единый интерфейс и функционал.
 */
export function createTabsController<T extends HTMLDivElement, P extends TabsControllerProps>(
    ListComponent = Tabs,
    ItemComponent: FunctionComponent<TabItemProps> = TabItem,
) {
    // eslint-disable-next-line prefer-arrow-callback
    return forwardRef<T, P>(function TabsController({ items, index, autoscroll, onIndexChange, ...rest }, outerRef) {
        const { disabled } = rest;
        const refs = useMemo(() => new TabItemRefs(), []);
        const innerRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, innerRef);

        const onItemFocus = useCallback<React.FocusEventHandler>(
            (event) => {
                if (disabled) {
                    return;
                }

                const focusIndex = refs.items.findIndex((itemRef) => itemRef.current === event.target);
                const focusItem = refs.items[focusIndex];

                if (focusIndex === index) {
                    return;
                }

                onIndexChange?.(focusIndex);

                const parent = innerRef.current?.parentNode as Element;
                if (autoscroll && parent && focusItem?.current) {
                    const { x, width } = focusItem.current?.getBoundingClientRect();
                    const { x: parentX, width: parentWidth } = parent.getBoundingClientRect();
                    const relativeX = x - parentX;

                    const style = window.getComputedStyle(parent);
                    const marginLeft = Number.parseInt(style.marginLeft, 10);
                    const marginRight = Number.parseInt(style.marginRight, 10);

                    if (relativeX < -marginLeft) {
                        parent.scrollLeft += relativeX + marginLeft;
                        return;
                    }

                    if (parentWidth <= relativeX + width - marginRight) {
                        parent.scrollLeft += relativeX + width - parentWidth - marginRight;
                    }
                }
            },
            [refs, innerRef, index, onIndexChange, disabled],
        );

        const onKeyDown = useCallback(
            (event: KeyboardEvent) => {
                if (disabled) {
                    return;
                }

                const minIndex = 0;
                const maxIndex = refs.items.length - 1;
                let nextIndex: number;

                switch (event.keyCode) {
                    case Keys.end:
                        nextIndex = maxIndex;
                        break;
                    case Keys.left:
                        nextIndex = index > minIndex ? index - 1 : index;
                        break;
                    case Keys.right:
                        nextIndex = index < maxIndex ? index + 1 : index;
                        break;
                    case Keys.home:
                        nextIndex = minIndex;
                        break;
                    default:
                        return;
                }

                if (nextIndex !== index) {
                    event.preventDefault();
                    refs.items[nextIndex].current?.focus();
                }
            },
            [index, onIndexChange, disabled],
        );

        return (
            <TabsContext.Provider value={refs}>
                <ListComponent ref={ref} onKeyDown={onKeyDown} {...rest}>
                    {items.map(({ label, contentLeft }, i) => (
                        <ItemComponent
                            key={i}
                            isActive={i === index}
                            tabIndex={!disabled && i === index ? 0 : -1}
                            contentLeft={contentLeft}
                            onFocus={onItemFocus}
                            disabled={disabled}
                        >
                            {label}
                        </ItemComponent>
                    ))}
                </ListComponent>
            </TabsContext.Provider>
        );
    });
}
