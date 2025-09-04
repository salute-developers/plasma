import React, { forwardRef, useRef, useContext } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { RootProps } from 'src/engines';
import { cx } from 'src/utils';

import { classes } from '../../../tokens';
import { TabsContext } from '../../../TabsContext';
import { HorizontalIconTabItemProps } from '../../../TabItem.types';
import { useTabItem, UseTabItemProps } from '../../../hooks/useTabItem';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { ActionContent, StyledContent, base } from './HorizontalIconTabItem.styles';

export const horizontalIconTabItemRoot = (Root: RootProps<HTMLButtonElement, HorizontalIconTabItemProps>) =>
    forwardRef<HTMLButtonElement, HorizontalIconTabItemProps>((props, outerRef) => {
        const {
            size,
            view,
            children,
            selected,
            disabled = false,
            actionContent,
            itemIndex,
            tabIndex,
            className,
            onIndexChange,
            onClick,
            isActive,
            animated = true,
            ...rest
        } = props;

        const innerRef = useRef<HTMLButtonElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const role = 'tab';

        const animatedClass = animated ? classes.tabItemAnimated : undefined;
        const selectedClass = isActive || selected ? classes.selectedTabsItem : undefined;

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
                className={cx(selectedClass, animatedClass, className)}
                disabled={disabled}
                role={role}
                view={view}
                size={size}
                tabIndex={hasKeyNavigation ? navigationTabIndex : tabIndex}
                onFocus={onItemFocus}
                onClick={handleClick}
                {...rest}
            >
                <>
                    <StyledContent className={classes.tabContent}>{children}</StyledContent>
                    {actionContent && <ActionContent>{actionContent}</ActionContent>}
                </>
            </Root>
        );
    });

export const horizontalIconTabItemConfig = {
    name: 'HorizontalIconTabItem',
    tag: 'button',
    layout: horizontalIconTabItemRoot,
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
        view: 'default',
    },
};
