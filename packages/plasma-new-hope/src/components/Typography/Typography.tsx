import React, { forwardRef } from 'react';

import { applySpacing } from '../../mixins/applySpacing';
import type { RootProps } from '../../engines';
import { cx } from '../../utils';

import { classes } from './tokens';
import { FontProps } from './Typography.types';

export const typographyRootCompose = (defaultArgs?: { defaultBold?: boolean }) => (
    Root: RootProps<HTMLDivElement, FontProps>,
) =>
    forwardRef<HTMLDivElement, FontProps>((props, ref) => {
        const {
            size,
            children,
            breakWord,
            noWrap,
            bold = defaultArgs?.defaultBold,
            color,
            className,
            style,
            ...rest
        } = props;

        return (
            <Root
                size={size}
                ref={ref}
                className={cx(
                    noWrap && classes.typoWithNoWrap,
                    breakWord && classes.typoWithBreakWord,
                    bold && classes.typoBold,
                    className,
                )}
                style={{ color, ...style, ...applySpacing(rest) }}
                bold={bold}
                {...rest}
            >
                {children}
            </Root>
        );
    });
