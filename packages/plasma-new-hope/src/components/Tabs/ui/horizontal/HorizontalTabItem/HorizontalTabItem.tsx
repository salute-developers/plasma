import React, { forwardRef, useRef, useContext, useEffect, useCallback } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../../../../engines';
import { classes } from '../../../tokens';
import { cx } from '../../../../../utils';
import { TabsContext } from '../../../TabsContext';
import { HorizontalTabItemProps } from '../../../TabItem.types';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { LeftContent, RightContent, StyledContent, TabItemValue, base } from './HorizontalTabItem.styles';

export const horizontalTabItemRoot = (Root: RootProps<HTMLDivElement, HorizontalTabItemProps>) =>
    forwardRef<HTMLDivElement, HorizontalTabItemProps>((props, outerRef) => {
        const {
            size,
            view,
            isActive,
            selected,
            disabled = false,
            pilled = false,
            children,
            value,
            contentLeft,
            contentRight,
            animated = true,
            onIndexChange,
            itemIndex,
            tabIndex,
            className,
            onClick,
            header: _header,
            ...rest
        } = props;

        const innerRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const role = 'tab';

        const pilledAttr = view !== 'clear' && pilled;
        const animatedClass = animated ? classes.tabItemAnimated : undefined;
        const pilledClass = pilledAttr ? classes.tabsPilled : undefined;
        const selectedClass = isActive || selected ? classes.selectedTabsItem : undefined;
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
                pilled={pilled}
                onFocus={onItemFocus}
                tabIndex={hasKeyNavigation ? navigationTabIndex : tabIndex}
                className={cx(pilledClass, selectedClass, animatedClass, className)}
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

export const horizontalTabItemConfig = {
    name: 'HorizontalTabItem',
    tag: 'button',
    layout: horizontalTabItemRoot,
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
        pilled: {
            css: pilledCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
