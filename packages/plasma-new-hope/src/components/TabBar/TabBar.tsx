import React, { forwardRef } from 'react';
import cls from 'classnames';

import type { RootProps } from '../../engines';

import type { TabBarProps } from './TabBar.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { classes } from './TabBar.tokens';
import { base } from './TabBar.styles';

export const tabBarRoot = (Root: RootProps<HTMLElement, TabBarProps>) =>
    forwardRef<HTMLElement, TabBarProps>((props, ref) => {
        const {
            children,
            island = true,
            separation = 'none',
            hasSelectedItemBackground = false,
            homeIndicator = true,
            className,
            view,
            size,
            ...rest
        } = props;

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
                className={cls(
                    className,
                    island && classes.island,
                    hasSelectedItemBackground && classes.selectedBackground,
                    homeIndicator && classes.hasHomeIndicator,
                    separationClassName,
                )}
                {...rest}
            >
                <div className={classes.items}>{children}</div>
                {homeIndicator ? <div className={classes.homeIndicator} aria-hidden /> : null}
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
