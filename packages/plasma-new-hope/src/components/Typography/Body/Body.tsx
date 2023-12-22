import React, { forwardRef } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyHyphens, applyHyphensNormal } from '../../../mixins';
import { applySpacing } from '../../../mixins/applySpacing';
import type { RootProps } from '../../../engines';
import { classes, tokens } from '../tokens';
import { base as sizeCSS } from '../variations/_size/base';
import type { FontProps } from '../types';
import { cx } from '../../../utils';

export type BodyProps = FontProps;

const base = css``;

export const Body = styled.div<FontProps>`
    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: ${({ bold }) => (bold ? `var(${tokens.typoFontWeightBold})` : `var(${tokens.typoFontWeight})`)};

    ${String(applyHyphensNormal)};

    &.${String(classes.typoWithBreakWord)} {
        ${String(applyHyphens)};
    }
`;

export const bodyRoot = (Root: RootProps<HTMLDivElement, BodyProps>) =>
    forwardRef<HTMLDivElement, BodyProps>((props, ref) => {
        const { size, children, breakWord, bold, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        return (
            <Root size={size} ref={ref}>
                <Body
                    className={cx(withBreakWord, className)}
                    style={{ ...style, ...applySpacing(rest) }}
                    bold={bold}
                    {...rest}
                >
                    {children}
                </Body>
            </Root>
        );
    });

export const bodyConfig = {
    name: 'Body',
    tag: 'div',
    layout: bodyRoot,
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
