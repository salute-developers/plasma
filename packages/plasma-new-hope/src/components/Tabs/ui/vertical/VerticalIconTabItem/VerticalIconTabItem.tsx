import React, { forwardRef, useRef, useContext } from 'react';
import { useForkRef } from '@salutejs/plasma-core';
import { RootProps } from 'src/engines';
import { cx } from 'src/utils';

import { classes } from '../../../tokens';
import { TabsContext } from '../../../TabsContext';
import { VerticalIconTabItemProps } from '../../../TabItem.types';
import { useTabItem, UseTabItemProps } from '../../../hooks/useTabItem';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { ActionContent, base, StyledContent } from './VerticalIconTabItem.styles';

export const verticalIconTabItemRoot = (Root: RootProps<HTMLButtonElement, VerticalIconTabItemProps>) =>
    forwardRef<HTMLButtonElement, VerticalIconTabItemProps>((props, outerRef) => {
        const {
            size,
            view,
            selected,
            disabled = false,
            children,
            actionContent,
            itemIndex,
            tabIndex,
            className,
            onIndexChange,
            onClick,
            ...rest
        } = props;

        const innerRef = useRef<HTMLButtonElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const role = 'tab';

        const selectedClass = selected ? classes.selectedTabsItem : undefined;

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
                className={cx(selectedClass, className)}
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

export const verticalIconTabItemConfig = {
    name: 'VerticalTabItem',
    tag: 'button',
    layout: verticalIconTabItemRoot,
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
