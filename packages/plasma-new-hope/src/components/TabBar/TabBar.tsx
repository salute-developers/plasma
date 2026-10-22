import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { TabBarProps } from './TabBar.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { classes } from './TabBar.tokens';
import { base } from './TabBar.styles';

export const tabBarRoot = (Root: RootProps<HTMLElement, TabBarProps>) =>
    forwardRef<HTMLElement, TabBarProps>((props, ref) => {
        const { children, island = false, separation = 'none', className, view, size, ...rest } = props;

        let separationClassName: string | undefined;
        if (separation === 'shadow') {
            separationClassName = classes.shadow;
        } else if (separation === 'divider' && !island) {
            separationClassName = classes.divider;
        }

        return (
            <Root
                ref={ref}
                view={view}
                size={size}
                className={cx(className, island && classes.island, separationClassName)}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const tabBarConfig = {
    name: 'TabBar',
    tag: 'nav',
    layout: tabBarRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
