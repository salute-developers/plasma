import React, { forwardRef, useRef, useContext, useEffect, useCallback } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../../../../engines';
import { classes } from '../../../tokens';
import { cx } from '../../../../../utils';
import { TabsContext } from '../../../TabsContext';
import { VerticalTabItemProps } from '../../../TabItem.types';

import { base, LeftContent, RightContent, StyledContent, TabItemValue } from './VerticalTabItem.styles';
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
            onIndexChange,
            itemIndex,
            tabIndex,
            className,
            onClick,
            ...rest
        } = props;

        const innerRef = useRef<HTMLButtonElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const role = 'tab';

        const selectedClass = selected ? classes.selectedTabsItem : undefined;

        const hasKeyNavigation = itemIndex !== undefined && onIndexChange !== undefined;
        const navigationTabIndex = !disabled && refs?.current === itemIndex ? 0 : -1;

        useEffect(() => {
            if (!refs) {
                return;
            }

            refs.register(innerRef);

            return () => refs.unregister(innerRef);
        }, [refs]);

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
            event.currentTarget.scrollIntoView({ block: 'nearest', inline: 'nearest' });

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
                className={cx(selectedClass, className)}
                onClick={handleClick}
                {...rest}
            >
                <>
                    {contentLeft && <LeftContent className={classes.tabLeftContent}>{contentLeft}</LeftContent>}
                    <StyledContent className={classes.tabContent}>{children}</StyledContent>
                    {!contentRight && value && <TabItemValue>{value}</TabItemValue>}
                    {!value && contentRight && (
                        <RightContent className={classes.tabRightContent}>{contentRight}</RightContent>
                    )}
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
