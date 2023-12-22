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

export type TextProps = FontProps;

const base = css``;

export const Text = styled.div<FontProps>`
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

export const textRoot = (Root: RootProps<HTMLDivElement, TextProps>) =>
    forwardRef<HTMLDivElement, TextProps>((props, ref) => {
        const { children, breakWord, bold, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        return (
            <Root ref={ref} {...rest}>
                <Text className={cx(withBreakWord)} style={applySpacing(rest)} bold={bold}>
                    {children}
                </Text>
            </Root>
        );
    });

export const textConfig = {
    name: 'Text',
    tag: 'div',
    layout: textRoot,
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
