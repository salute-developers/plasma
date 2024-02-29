import React, { forwardRef } from 'react';
import type { CSSProperties } from 'react';

import type { RootProps } from '../../engines';
import { cx, getSizeValueFromProp } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as borderRadiusCSS } from './variations/_borderRadius/base';
import type { PanelProps } from './Panel.types';
import { classes } from './Panel.tokens';
import { StyledWrapper } from './Panel.styles';

export const panelRoot = (Root: RootProps<HTMLDivElement, PanelProps>) =>
    forwardRef<HTMLDivElement, PanelProps>(
        ({ children, view, size, width, height, className, style, ...rest }, outerRef) => {
            const innerWidth = width ? getSizeValueFromProp(width) : '100%';
            const innerHeight = height ? getSizeValueFromProp(height) : '100%';

            return (
                <Root
                    ref={outerRef}
                    view={view}
                    size={size}
                    className={cx(classes.root, className)}
                    style={
                        {
                            ...style,
                            '--plasma_private-panel-width': innerWidth,
                            '--plasma_private-panel-height': innerHeight,
                        } as CSSProperties
                    }
                    {...rest}
                >
                    <StyledWrapper>{children}</StyledWrapper>
                </Root>
            );
        },
    );

export const panelConfig = {
    name: 'Panel',
    tag: 'div',
    layout: panelRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        borderRadius: {
            css: borderRadiusCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
        borderRadius: 'none',
    },
};
