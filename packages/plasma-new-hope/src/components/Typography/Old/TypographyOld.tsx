import React, { forwardRef } from 'react';

import { applySpacing } from '../../../mixins/applySpacing';
import type { RootProps } from '../../../engines';
import { classes } from '../tokens';
import type { FontProps } from '../Typography.types';
import { cx } from '../../../utils';

export type TypographyOldProps = Omit<FontProps, 'bold'>;

export const typographyOldRoot = (Root: RootProps<HTMLDivElement, TypographyOldProps>) =>
    forwardRef<HTMLDivElement, TypographyOldProps>((props, ref) => {
        const { size, children, breakWord, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        return (
            <Root
                size={size}
                ref={ref}
                className={cx(withBreakWord, className)}
                style={{ ...style, ...applySpacing(rest) }}
                {...rest}
            >
                {children}
            </Root>
        );
    });
