import React, { forwardRef } from 'react';

import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import type { GridProps } from './Grid.types';
import { base } from './Grid.styles';
import { base as viewCSS } from './variations/_view/base';
import { getGridViewClass } from './utils';

export const gridRoot = (Root: RootProps<HTMLDivElement, GridProps>) =>
    forwardRef<HTMLDivElement, GridProps>((props, ref) => {
        const { children, view, className, style, maxWidth, ...rest } = props;

        const viewClass = getGridViewClass(view || 'default');
        const maxWidthValue = view === 'legacy' ? '90rem' : null;
        const maxWidthToken =
            maxWidthValue || maxWidth
                ? {
                      '--plasma_private-grid-max-width': maxWidth || maxWidthValue,
                  }
                : {};

        return (
            <Root
                ref={ref}
                view={view}
                className={cx(viewClass, className)}
                style={{
                    ...maxWidthToken,
                    ...style,
                }}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const gridConfig = {
    name: 'Grid',
    tag: 'div',
    layout: gridRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
    },
    defaults: {
        view: 'default',
    },
};
