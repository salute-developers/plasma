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

export type ParagraphProps = {
    resetMargin?: boolean;
} & Omit<FontProps, 'bold'>;

const base = css`
    display: inline-block;
    margin: 0;
`;

export const Paragraph = styled.p<ParagraphProps>`
    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});

    margin: 0;

    ${String(applyHyphensNormal)};

    &.${String(classes.typoWithBreakWord)} {
        ${String(applyHyphens)};
    }
`;

export const paragraphRoot = (Root: RootProps<HTMLDivElement, ParagraphProps>) =>
    forwardRef<HTMLDivElement, ParagraphProps>((props, ref) => {
        const { size, children, breakWord, resetMargin, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;
        const withResetMargin = resetMargin ? { margin: 0 } : {};

        return (
            <Root size={size} ref={ref}>
                <Paragraph
                    className={cx(withBreakWord, className)}
                    style={{ ...style, ...applySpacing(rest), ...withResetMargin }}
                    {...rest}
                >
                    {children}
                </Paragraph>
            </Root>
        );
    });

export const paragraphConfig = {
    name: 'Paragraph',
    tag: 'div',
    layout: paragraphRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'paragraph1',
    },
};
