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

export type FootnoteProps = Omit<FontProps, 'bold'>;

const base = css``;

export const Footnote = styled.div<FootnoteProps>`
    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});

    ${String(applyHyphensNormal)};

    &.${String(classes.typoWithBreakWord)} {
        ${String(applyHyphens)};
    }
`;

export const footnoteRoot = (Root: RootProps<HTMLDivElement, FootnoteProps>) =>
    forwardRef<HTMLDivElement, FootnoteProps>((props, ref) => {
        const { size, children, breakWord, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        return (
            <Root size={size} ref={ref}>
                <Footnote
                    className={cx(withBreakWord, className)}
                    style={{ ...style, ...applySpacing(rest) }}
                    {...rest}
                >
                    {children}
                </Footnote>
            </Root>
        );
    });

export const footnoteConfig = {
    name: 'Footnote',
    tag: 'div',
    layout: footnoteRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'footnote1',
    },
};
