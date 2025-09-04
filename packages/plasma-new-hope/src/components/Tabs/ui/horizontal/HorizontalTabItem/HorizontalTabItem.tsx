import React, { forwardRef, useRef, useContext } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../../../../engines';
import { classes } from '../../../tokens';
import { cx } from '../../../../../utils';
import { TabsContext } from '../../../TabsContext';
import { HorizontalTabItemProps } from '../../../TabItem.types';
import { useTabItem, UseTabItemProps } from '../../../hooks/useTabItem';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as disabledCSS } from './variations/_disabled/base';
import {
    ActionContent,
    LeftContent,
    RightContent,
    StyledContent,
    TabItemValue,
    base,
} from './HorizontalTabItem.styles';

export const horizontalTabItemRoot = (Root: RootProps<HTMLButtonElement, HorizontalTabItemProps>) =>
    forwardRef<HTMLButtonElement, HorizontalTabItemProps>((props, outerRef) => {
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
            actionContent,
            animated = true,
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

        const pilledAttr = view !== 'clear' && pilled;
        const animatedClass = animated ? classes.tabItemAnimated : undefined;
        const pilledClass = pilledAttr ? classes.tabsPilled : undefined;

        const selectedClass = isActive || selected ? classes.selectedTabsItem : undefined;
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
                pilled={pilled}
                role={role}
                view={view}
                // TODO: убрать каст any, когда будут удалены deprecated props
                size={size as any}
                onFocus={onItemFocus}
                tabIndex={hasKeyNavigation ? navigationTabIndex : tabIndex}
                className={cx(pilledClass, selectedClass, animatedClass, truncateClass, className)}
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
