import React, { forwardRef } from 'react';

import type { RootProps } from '../../../../engines';
import { cx } from '../../../../utils';
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
                className={cx(className, isFixedWeight(weight) && classes.fixed)}
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
