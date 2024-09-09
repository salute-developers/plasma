import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as transparentCSS } from './variations/_transparent/base';
import { base as clearCSS } from './variations/_clear/base';
import type { BadgeProps, BadgeRootProps } from './Badge.types';
import { StyledContentLeft, StyledContentMain, StyledContentRight, base } from './Badge.styles';
import { classes } from './Badge.tokens';

export const badgeRoot = (Root: RootProps<HTMLDivElement, BadgeRootProps>) =>
    forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
        const {
            children,
            className,
            text,
            contentLeft,
            contentRight,
            size,
            view,
            pilled = false,
            transparent = false,
            clear = false,
            ...rest
        } = props;

        const pilledClass = pilled ? classes.badgePilled : undefined;
        const transparentClass = transparent ? classes.badgeTransparent : undefined;
        const clearClass = clear ? classes.badgeClear : undefined;
        const txt = !text && typeof children === 'string' ? children : text;

        return (
            <Root
                ref={ref}
                className={cx(pilledClass, transparentClass, clearClass, className)}
                view={view}
                size={size}
                pilled={pilled}
                transparent={transparent}
                clear={clear}
                {...rest}
            >
                {contentLeft && <StyledContentLeft>{contentLeft}</StyledContentLeft>}
                {txt ? <StyledContentMain>{txt}</StyledContentMain> : children}
                {contentRight && <StyledContentRight>{contentRight}</StyledContentRight>}
            </Root>
        );
    });

export const badgeConfig = {
    name: 'Badge',
    tag: 'div',
    layout: badgeRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        pilled: {
            css: pilledCSS,
            attrs: true,
        },
        transparent: {
            css: transparentCSS,
            attrs: true,
        },
        clear: {
            css: clearCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
