import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../../../engines';
import type { TabBarSlotProps } from '../../TabBar.types';
import { classes } from '../../TabBar.tokens';
import { getWeightStyle, isFixedWeight } from '../../weight';

import { base } from './TabBarSlot.styles';

export const tabBarSlotRoot = (Root: RootProps<HTMLDivElement, TabBarSlotProps>) =>
    forwardRef<HTMLDivElement, TabBarSlotProps>((props, ref) => {
        const { children, weight = 0, className, style, ...rest } = props;

        return (
            <Root
                ref={ref}
                {...rest}
                className={cls(className, isFixedWeight(weight) && classes.fixed)}
                style={getWeightStyle(weight, style)}
            >
                {children}
            </Root>
        );
    });

export const tabBarSlotConfig = {
    name: 'TabBarSlot',
    tag: 'div',
    layout: tabBarSlotRoot,
    base,
    variations: {},
    defaults: {},
};
