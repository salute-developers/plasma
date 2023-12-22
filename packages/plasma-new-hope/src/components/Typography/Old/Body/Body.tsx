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

export type OldBodyProps = Omit<FontProps, 'bold'>;

const base = css``;

export const OldBody = styled.div<OldBodyProps>`
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

export const oldBodyRoot = (Root: RootProps<HTMLDivElement, OldBodyProps>) =>
    forwardRef<HTMLDivElement, OldBodyProps>((props, ref) => {
        const { size, children, breakWord, className, style, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        return (
            <Root size={size} ref={ref}>
                <OldBody className={cx(withBreakWord, className)} style={{ ...style, ...applySpacing(rest) }} {...rest}>
                    {children}
                </OldBody>
            </Root>
        );
    });

export const oldBodyConfig = {
    name: 'OldBody',
    tag: 'div',
    layout: oldBodyRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'body1',
    },
};
