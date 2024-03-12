import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import { ToolbarProps } from './Toolbar.types';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { classes } from './Toolbar.tokens';
import { base } from './Toolbar.styles';

export const toolbarRoot = (Root: RootProps<HTMLDivElement, ToolbarProps>) =>
    forwardRef<HTMLDivElement, ToolbarProps>((props, ref) => {
        const { children, placement = 'vertical', hasShadow = true, className, ...rest } = props;
        const placementClassName = placement === 'horizontal' ? classes.horizontal : classes.vertical;
        const shadowClassName = hasShadow ? classes.shadow : undefined;

        return (
            <Root
                ref={ref}
                placement={placement}
                hasShadow={hasShadow}
                className={cx(className, placementClassName, shadowClassName)}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const toolbarConfig = {
    name: 'Toolbar',
    tag: 'div',
    layout: toolbarRoot,
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
    },
};
