import React, { forwardRef, useRef, useContext, useEffect, useCallback, useLayoutEffect } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../../../../engines';
import { classes } from '../../../tokens';
import { cx } from '../../../../../utils';
import { TabsContext } from '../../../TabsContext';
import { VerticalTabItemProps } from '../../../TabItem.types';

import { ActionContent, base, LeftContent, RightContent, StyledContent, TabItemValue } from './VerticalTabItem.styles';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';

export const verticalTabItemRoot = (Root: RootProps<HTMLButtonElement, VerticalTabItemProps>) =>
    forwardRef<HTMLButtonElement, VerticalTabItemProps>((props, outerRef) => {
        const {
            size,
            view,
            selected,
            disabled = false,
            children,
            value,
            contentLeft,
            contentRight,
            actionContent,
            onIndexChange,
            itemIndex,
            tabIndex,
            className,
            onClick,
            maxItemWidth: maxWidth = 'auto',
            ...rest
        } = props;

        const innerRef = useRef<HTMLButtonElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const role = 'tab';

        const selectedClass = selected ? classes.selectedTabsItem : undefined;
        const truncateClass = maxWidth !== 'auto' ? classes.tabsTruncate : undefined;

        const hasKeyNavigation = itemIndex !== undefined && onIndexChange !== undefined;
        const navigationTabIndex = !disabled && refs?.current === itemIndex ? 0 : -1;

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
            scrollEl.scrollTo({
                top: innerRef.current.offsetTop - parseInt(scrollElStyle.paddingTop, 10),
            });
        }, [selected]);

        const onItemFocus = useCallback<React.FocusEventHandler>(
            (event) => {
                if (disabled) {
                    return;
                }

                if (!hasKeyNavigation && innerRef?.current) {
                    innerRef.current.scrollTo({
                        top: innerRef.current.offsetTop,
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

        return (
            <Root
                ref={ref}
                disabled={disabled}
                role={role}
                view={view}
                size={size}
                onFocus={onItemFocus}
                tabIndex={hasKeyNavigation ? navigationTabIndex : tabIndex}
                className={cx(selectedClass, truncateClass, className)}
                onClick={handleClick}
                {...rest}
                style={{
                    ...rest.style,
                    maxWidth,
                }}
            >
                <>
                    {contentLeft && <LeftContent className={classes.tabLeftContent}>{contentLeft}</LeftContent>}
                    <StyledContent className={classes.tabContent}>{children}</StyledContent>
                    {!contentRight && value && <TabItemValue>{value}</TabItemValue>}
                    {!value && contentRight && (
                        <RightContent className={classes.tabRightContent}>{contentRight}</RightContent>
                    )}
                    {actionContent && <ActionContent>{actionContent}</ActionContent>}
                </>
            </Root>
        );
    });

export const verticalTabItemConfig = {
    name: 'VerticalTabItem',
    tag: 'button',
    layout: verticalTabItemRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'divider',
    },
};
