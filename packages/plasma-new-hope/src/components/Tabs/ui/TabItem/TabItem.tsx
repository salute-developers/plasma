import React, { forwardRef, useRef, useContext, useEffect } from 'react';
import { safeUseId, useForkRef } from '@salutejs/plasma-core';

import { ComponentConfig, RootProps } from '../../../../engines';
import { classes } from '../../tokens';
import { cx } from '../../../../utils';

import { TabsContext } from './TabsContext';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { TabItemProps } from './TabItem.types';
import { AdditionalContent, StyledContent, base } from './TabItem.styles';

export const tabItemRoot = (Root: RootProps<HTMLDivElement, TabItemProps>) =>
    forwardRef<HTMLDivElement, TabItemProps>((props, outerRef) => {
        const { size, view, id, active, disabled, pilled, children, leftContent, rightContent, ...rest } = props;

        const innerRef = useRef<HTMLDivElement>(null);
        const ref = useForkRef(outerRef, innerRef);
        const refs = useContext(TabsContext);

        const uniqId = safeUseId();
        const tabItemId = id || `item-${uniqId}`;

        const role = 'tab';

        const pilledAttr = view !== 'clear' && pilled;
        const pilledClass = pilledAttr ? classes.tabsPilled : undefined;
        const selectedClass = active ? classes.selectedTabsItem : undefined;

        useEffect(() => {
            if (!refs) {
                return;
            }

            refs.register(innerRef);

            return () => refs.unregister(innerRef);
        }, [refs]);

        return (
            <Root
                ref={ref}
                id={tabItemId}
                active={active}
                disabled={disabled}
                pilled={pilled}
                role={role}
                view={view}
                size={size}
                className={cx(pilledClass, selectedClass)}
                {...rest}
            >
                <>
                    {leftContent && (
                        <AdditionalContent className={classes.tabLeftContent}>{leftContent}</AdditionalContent>
                    )}
                    <StyledContent className={classes.tabLeftContent}>{children}</StyledContent>
                    {rightContent && (
                        <AdditionalContent className={classes.tabRightContent}>{rightContent}</AdditionalContent>
                    )}
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
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
    },
};
