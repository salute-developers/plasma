import { MouseEventHandler, RefObject, useCallback, useEffect, useLayoutEffect } from 'react';

import type { TabItemRefs } from '../TabsContext';

export type UseTabItemProps = {
    refs: TabItemRefs | null;
    innerRef: RefObject<HTMLButtonElement>;
    orientation?: 'horizontal' | ' vertical';
    selected?: boolean;
    disabled?: boolean;
    itemIndex?: number;
    onIndexChange?: (index: number) => void;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const useTabItem = ({
    refs,
    innerRef,
    itemIndex,
    selected,
    orientation,
    disabled,
    onIndexChange,
    onClick,
}: UseTabItemProps) => {
    const hasKeyNavigation = itemIndex !== undefined && onIndexChange !== undefined;
    const navigationTabIndex = !disabled && refs?.current === itemIndex ? 0 : -1;

    const onItemFocus = useCallback<React.FocusEventHandler>(
        (event) => {
            if (disabled) {
                return;
            }

            if (!hasKeyNavigation && innerRef?.current) {
                if (orientation === ' vertical') {
                    innerRef.current.scrollTo({
                        top: innerRef.current.offsetTop,
                        behavior: 'smooth',
                    });

                    return;
                }

                innerRef.current.scrollTo({
                    top: 0,
                    left: innerRef.current.offsetLeft,
                    behavior: 'smooth',
                });

                return;
            }

            if (!refs) {
                return;
            }

            const focusIndex = refs.items.findIndex((itemRef) => itemRef.current === event.target);

            if (focusIndex === refs.current) {
                return;
            }

            onIndexChange?.(focusIndex);
            refs.setCurrent(focusIndex);
        },
        [refs, innerRef, onIndexChange, disabled],
    );

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!onClick) {
            return;
        }

        onClick(event);
    };

    useEffect(() => {
        if (!refs) {
            return;
        }

        refs.register(innerRef);

        return () => refs.unregister(innerRef);
    }, [refs]);

    useLayoutEffect(() => {
        if (!selected || !innerRef.current) {
            return;
        }

        const scrollEl = innerRef.current.parentElement?.parentElement;
        if (!scrollEl) {
            return;
        }

        const scrollElStyle = getComputedStyle(scrollEl);

        if (orientation === ' vertical') {
            scrollEl.scrollTo({
                top: innerRef.current.offsetTop - parseInt(scrollElStyle.paddingTop, 10),
            });

            return;
        }

        scrollEl.scrollTo({
            left: innerRef.current.offsetLeft - parseInt(scrollElStyle.paddingLeft, 10),
        });
    }, [selected, orientation]);

    return { hasKeyNavigation, navigationTabIndex, onItemFocus, handleClick };
};
