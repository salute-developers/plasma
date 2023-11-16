import React, { forwardRef, useEffect } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applyHyphens, applyHyphensNormal } from '../../../../mixins';
import { applySpacing } from '../../../../mixins/applySpacing';
import type { RootProps } from '../../../../engines';
import { classes, tokens } from '../../tokens';
import { base as sizeCSS } from '../../variations/_size/base';
import type { FontProps } from '../../types';
import { cx } from '../../../../utils';

export type CaptionProps = Omit<FontProps, 'bold'>;

const base = css``;

export const Caption = styled.div<CaptionProps>`
    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});

    ${String(applyHyphensNormal)};

    .${String(classes.typoWithBreakWord)} {
        ${String(applyHyphens)};
    }
`;

export const captionRoot = (Root: RootProps<HTMLDivElement, CaptionProps>) =>
    forwardRef<HTMLDivElement, CaptionProps>((props, ref) => {
        const { children, breakWord, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        /*
         * Хак, который фиксит применение applySpacing для linaria
         */
        useEffect(() => {}, []);

        return (
            <Root ref={ref} {...rest}>
                <Caption className={cx(withBreakWord)} style={applySpacing(rest)}>
                    {children}
                </Caption>
            </Root>
        );
    });

export const captionConfig = {
    name: 'Caption',
    tag: 'div',
    layout: captionRoot,
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
