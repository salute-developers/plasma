import React, { forwardRef } from 'react';

import { RootProps } from '../../../../engines';
import { classes } from '../../Toolbar.tokens';

import { base as viewCSS } from './variations/_view/base';
import { base, StyledToolbarDivider } from './ToolbarDivider.styles';
import type { ToolbarDividerProps } from './ToolbarDivider.types';

/**
 * Разделитель тулбара
 */
export const toolbarDividerRoot = (Root: RootProps<HTMLDivElement, ToolbarDividerProps>) =>
    forwardRef<HTMLDivElement, ToolbarDividerProps>(({ className, ...rest }, outerRootRef) => {
        return (
            <Root ref={outerRootRef} className={className}>
                <StyledToolbarDivider className={classes.divider} {...rest} />
            </Root>
        );
    });

export const toolbarDividerConfig = {
    name: 'ToolbarDivider',
    tag: 'div',
    layout: toolbarDividerRoot,
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
