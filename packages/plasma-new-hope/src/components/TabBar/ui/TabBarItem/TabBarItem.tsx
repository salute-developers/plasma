import React, { forwardRef } from 'react';

import type { RootProps } from '../../../../engines';
import { cx } from '../../../../utils';
import type { TabBarItemProps } from '../../TabBar.types';
import { classes } from '../../TabBar.tokens';
import { isFixedWeight, getWeightStyle } from '../../weight';

import { base, CounterWrap, ExtraCounter, Icon, Label } from './TabBarItem.styles';

export const tabBarItemRoot = (Root: RootProps<HTMLButtonElement, TabBarItemProps>) =>
    forwardRef<HTMLButtonElement, TabBarItemProps>((props, ref) => {
        const {
            icon,
            label,
            selected = false,
            counter,
            weight = 1,
            className,
            style,
            type = 'button',
            ...rest
        } = props;

        return (
            <Root
                ref={ref}
                {...rest}
                type={type}
                {...(selected ? { 'aria-current': 'page' as const } : {})}
                className={cx(className, selected && classes.selected, isFixedWeight(weight) && classes.fixed)}
                style={getWeightStyle(weight, style)}
            >
                {(icon || counter !== undefined) && (
                    <Icon>
                        {icon}
                        {counter !== undefined && (
                            <CounterWrap>
                                <ExtraCounter count={counter} />
                            </CounterWrap>
                        )}
                    </Icon>
                )}
                {label !== undefined && label !== null && label !== false && <Label>{label}</Label>}
            </Root>
        );
    });

export const tabBarItemConfig = {
    name: 'TabBarItem',
    tag: 'button',
    layout: tabBarItemRoot,
    base,
    variations: {},
    defaults: {},
};
