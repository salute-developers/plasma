import React, { forwardRef } from 'react';

import type { RootProps } from '../../../engines';
import { classes } from '../Header.tokens';
import { cx } from '../../../utils';

import type { HeaderRootProps } from './HeaderRoot.types';
import { base as sizeCSS } from './variations/_size/base';
import { StyledHeaderRoot, StyledInner } from './HeaderRoot.styles';

/**
 * Корневой узел для шапки.
 */
export const headerRoot = (Root: RootProps<HTMLDivElement, HeaderRootProps>) =>
    forwardRef<HTMLDivElement, HeaderRootProps>((props, outerRootRef) => {
        const { children, size, view, gradientColor, ...rest } = props;

        const gradientColorClass = gradientColor ? classes.headerWithGradient : undefined;

        return (
            <Root ref={outerRootRef} size={size} view={view}>
                <StyledHeaderRoot
                    className={cx(classes.headerRoot, gradientColorClass)}
                    {...rest}
                    $gradientColor={gradientColor}
                >
                    <StyledInner>{children}</StyledInner>
                </StyledHeaderRoot>
            </Root>
        );
    });

export const headerRootConfig = {
    name: 'HeaderRoot',
    tag: 'div',
    layout: headerRoot,
    base: '',
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'm',
    },
};
