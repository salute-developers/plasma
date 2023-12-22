import React, { forwardRef } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyHyphens, applyHyphensNormal } from '../../../../mixins';
import { applySpacing } from '../../../../mixins/applySpacing';
import type { RootProps } from '../../../../engines';
import { classes, tokens } from '../../tokens';
import { base as sizeCSS } from '../../variations/_size/base';
import type { FontProps } from '../../types';
import { cx } from '../../../../utils';

export type UnderlineProps = Omit<FontProps, 'bold'>;

const base = css``;

export const Underline = styled.div<UnderlineProps>`
    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});

    text-transform: uppercase;

    ${String(applyHyphensNormal)};

    &.${String(classes.typoWithBreakWord)} {
        ${String(applyHyphens)};
    }
`;

export const underlineRoot = (Root: RootProps<HTMLDivElement, UnderlineProps>) =>
    forwardRef<HTMLDivElement, UnderlineProps>((props, ref) => {
        const { size, children, breakWord, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        return (
            <Root size={size} ref={ref}>
                <Underline
                    className={cx(withBreakWord, className)}
                    style={{ ...style, ...applySpacing(rest) }}
                    {...rest}
                >
                    {children}
                </Underline>
            </Root>
        );
    });

export const underlineConfig = {
    name: 'Underline',
    tag: 'div',
    layout: underlineRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'm',
    },
};
