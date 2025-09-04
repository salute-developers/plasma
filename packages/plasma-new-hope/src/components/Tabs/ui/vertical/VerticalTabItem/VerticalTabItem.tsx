import React, { forwardRef, useRef, useContext } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { RootProps } from 'src/engines';
import { cx } from 'src/utils';

import { useTabItem, UseTabItemProps } from '../../../hooks/useTabItem';
import { classes } from '../../../tokens';
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

        const { hasKeyNavigation, navigationTabIndex, onItemFocus, handleClick } = useTabItem({
            refs,
            innerRef,
            itemIndex,
            selected,
            disabled,
            onIndexChange,
            onClick,

            orientation: rest.orientation as UseTabItemProps['orientation'],
        });

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
