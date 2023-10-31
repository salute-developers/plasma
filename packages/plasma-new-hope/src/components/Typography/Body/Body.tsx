import React, { forwardRef, useEffect } from 'react';
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

    .${String(classes.typoWithBreakWord)} {
        ${String(applyHyphens)};
    }
`;

export const bodyRoot = (Root: RootProps<HTMLDivElement, BodyProps>) =>
    forwardRef<HTMLDivElement, BodyProps>((props, ref) => {
        const { children, breakWord, bold, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        /*
         * Хак, который фиксит применение applySpacing для linaria
         */
        useEffect(() => {}, []);

        return (
            <Root ref={ref} {...rest}>
                <Body className={cx(withBreakWord)} style={applySpacing(rest)} bold={bold}>
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
