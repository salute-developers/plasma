import React, { forwardRef } from 'react';

import { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { ListProps } from './List.types';
import { base } from './List.styles';
import { classes } from './List.tokens';
import { base as variantCSS } from './variations/_variant/base';
import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';

export const listRoot = (Root: RootProps<HTMLDivElement, ListProps>) =>
    forwardRef<HTMLDivElement, ListProps>(({ size, view, variant, disabled, className, children }, outerRootRef) => {
        return (
            <Root
                ref={outerRootRef}
                size={size}
                view={view}
                variant={variant}
                disabled={disabled}
                className={cx(classes.listRoot, className)}
            >
                {children}
            </Root>
        );
    });

export const listConfig = {
    name: 'List',
    tag: 'ul',
    layout: listRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        variant: {
            css: variantCSS,
        },
        disabled: {
            css: disabledCSS,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
