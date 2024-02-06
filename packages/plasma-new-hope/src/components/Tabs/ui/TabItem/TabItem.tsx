import React, { forwardRef, useRef, useContext, useEffect, useCallback } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';

import { ComponentConfig, RootProps } from '../../../../engines';
import { classes } from '../../tokens';
import { cx } from '../../../../utils';
import { TabsContext } from '../../TabsContext';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { TabItemProps } from './TabItem.types';
import { LeftContent, RightContent, StyledContent, base } from './TabItem.styles';

export const tabItemRoot = (Root: RootProps<HTMLDivElement, TabItemProps>) =>
    forwardRef<HTMLDivElement, TabItemProps>((props, outerRef) => {
        const {
            size,
            view,
            id,
            isActive,
            selected,
            disabled = false,
            pilled = false,
            children,
            contentLeft,
            contentRight,
            animated = true,
            ...rest
        } = props;

        const innerRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const uniqId = safeUseId();
        const tabItemId = id || `item-${uniqId}`;

        const role = 'tab';

        const pilledAttr = view !== 'clear' && pilled;
        const animatedClass = animated ? classes.tabItemAnimated : undefined;
        const pilledClass = pilledAttr ? classes.tabsPilled : undefined;
        const selectedClass = isActive || selected ? classes.selectedTabsItem : undefined;

        useEffect(() => {
            if (!refs) {
                return;
            }

            refs.register(innerRef);

            return () => refs.unregister(innerRef);
        }, [refs]);

        const onFocus = useCallback<React.FocusEventHandler>((event) => {
            event.target.scrollIntoView({
                block: 'center',
                inline: 'center',
                behavior: 'smooth',
            });
        }, []);

        return (
            <Root
                ref={ref}
                id={tabItemId}
                disabled={disabled}
                pilled={pilled}
                role={role}
                view={view}
                size={size}
                onFocus={onFocus}
                className={cx(pilledClass, selectedClass, animatedClass)}
                {...rest}
            >
                <>
                    {contentLeft && <LeftContent className={classes.tabLeftContent}>{contentLeft}</LeftContent>}
                    <StyledContent className={classes.tabContent}>{children}</StyledContent>
                    {contentRight && <RightContent className={classes.tabRightContent}>{contentRight}</RightContent>}
                </>
            </Root>
        );
    });

export const tabItemConfig: ComponentConfig = {
    name: 'TabItem',
    tag: 'button',
    layout: tabItemRoot,
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
