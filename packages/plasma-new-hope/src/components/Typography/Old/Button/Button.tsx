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

type ButtonProps = Omit<FontProps, 'bold'>;

const base = css``;

const Button = styled.div<ButtonProps>`
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

export const buttonTypographyRoot = (Root: RootProps<HTMLDivElement, ButtonProps>) =>
    forwardRef<HTMLDivElement, ButtonProps>((props, ref) => {
        const { children, breakWord, ...rest } = props;

        const withBreakWord = breakWord ? classes.typoWithBreakWord : undefined;

        return (
            <Root ref={ref} {...rest}>
                <Button className={cx(withBreakWord)} style={applySpacing(rest)}>
                    {children}
                </Button>
            </Root>
        );
    });

export const buttonTypographyConfig = {
    name: 'Button',
    tag: 'div',
    layout: buttonTypographyRoot,
    base,
    variations: {
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'button1',
    },
};
