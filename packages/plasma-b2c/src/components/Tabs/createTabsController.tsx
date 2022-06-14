import { TabItemProps, TabsProps, Tabs, TabItem, TabsContext, useForkRef } from '@salutejs/plasma-core';
import React, { forwardRef, ReactNode, useMemo, useCallback, FunctionComponent, MutableRefObject, useRef } from 'react';

export interface TabsControllerProps extends TabsProps {
    items: Array<{ label: string; contentLeft?: ReactNode }>;
    index: number;
    onIndexChange: (index: number) => void;
    children?: never;
}

enum Keys {
    end = 35,
    home = 36,
    left = 37,
    right = 39,
}

class TabItemRefs {
    public items: MutableRefObject<HTMLElement | null>[] = [];

    public register(ref: MutableRefObject<HTMLElement | null>): number {
        this.items.push(ref);
        return this.items.length - 1;
    }

    public unregister(ref: MutableRefObject<HTMLElement | null>) {
        this.items.splice(this.items.indexOf(ref), 1);
    }
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
    return forwardRef<T, P>(function TabsController({ items, index, onIndexChange, ...rest }, outerRef) {
        const { disabled } = rest;
        const refs = useMemo(() => new TabItemRefs(), []);
        const innerRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, innerRef);

        const onItemFocus = useCallback(
            (event) => {
                if (disabled) {
                    return;
                }

                const focusIndex = refs.items.findIndex((itemRef) => itemRef.current === event.target);
                const focusItem = refs.items[focusIndex];

                if (focusIndex !== index) {
                    onIndexChange?.(focusIndex);
                    if (innerRef.current?.parentNode && focusItem?.current) {
                        const parent = innerRef.current?.parentNode as Element;
                        const { x, width } = focusItem.current?.getBoundingClientRect();
                        const { width: parentWidth } = parent.getBoundingClientRect();
                        const style = window.getComputedStyle(parent);
                        const mL = Number.parseInt(style.marginLeft, 10);
                        const mR = Number.parseInt(style.marginRight, 10);

                        if (x < 0) {
                            parent.scrollLeft += x + mL;
                        } else if (parentWidth <= x + width) {
                            parent.scrollLeft += x + width - parentWidth - mR;
                        }
                    }
                }
            },
            [ref, refs, index, onIndexChange, disabled],
        );

        const onKeyDown = useCallback(
            (event: KeyboardEvent) => {
                if (disabled) {
                    return;
                }

                const minIndex = 0;
                const maxIndex = refs.items.length - 1;
                let nextIndex;

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
            <TabsContext.Provider value={{ refs }}>
                <ListComponent ref={ref} onKeyDown={onKeyDown} {...rest}>
                    {items.map(({ label, contentLeft }, i) => (
                        <ItemComponent
                            key={i}
                            isActive={i === index}
                            tabIndex={!disabled && i === index ? 0 : -1}
                            contentLeft={contentLeft}
                            onClick={() => onIndexChange?.(i)}
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
