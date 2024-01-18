import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as pilledCSS } from './variations/_pilled/base';
import { base as transparentCSS } from './variations/_transparent/base';
import type { BadgeProps } from './Badge.types';
import { StyledContentLeft, StyledContentMain, StyledContentRight, base } from './Badge.styles';
import { classes } from './Badge.tokens';

export const badgeRoot = (Root: RootProps<HTMLDivElement, BadgeProps>) =>
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
            ...rest
        } = props;

        const pilledClass = pilled ? classes.badgePilled : undefined;
        const transparentClass = transparent ? classes.badgeTransparent : undefined;
        const txt = !text && typeof children === 'string' ? children : text;

        return (
            <Root
                ref={ref}
                className={cx(pilledClass, transparentClass, className)}
                view={view}
                size={size}
                pilled={pilled}
                transparent={transparent}
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
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
