import React, { forwardRef } from 'react';

import { applySpacing } from '../../mixins/applySpacing';
import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { classes } from './tokens';
import { FontProps } from './Typography.types';

export const typographyRoot = (Root: RootProps<HTMLDivElement, FontProps>) =>
    forwardRef<HTMLDivElement, FontProps>((props, ref) => {
        const { size, children, breakWord, bold, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;
        const typographyBold = bold ? classes.typoBold : undefined;

        return (
            <Root
                size={size}
                ref={ref}
                className={cx(withBreakWord, typographyBold, className)}
                style={{ ...style, ...applySpacing(rest) }}
                bold={bold}
                {...rest}
            >
                {children}
            </Root>
        );
    });

export const typographyRootBoldDefault = (Root: RootProps<HTMLDivElement, FontProps>) =>
    forwardRef<HTMLDivElement, FontProps>((props, ref) => {
        const { size, children, breakWord, bold = true, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;
        const typographyBold = bold ? classes.typoBold : undefined;

        return (
            <Root
                size={size}
                ref={ref}
                className={cx(withBreakWord, typographyBold, className)}
                style={{ ...style, ...applySpacing(rest) }}
                bold={bold}
                {...rest}
            >
                {children}
            </Root>
        );
    });
