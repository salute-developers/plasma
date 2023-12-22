import React, { forwardRef } from 'react';
import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { applySpacing } from '../../../../mixins/applySpacing';
import type { RootProps } from '../../../../engines';
import { tokens } from '../../tokens';
import { base as sizeCSS } from '../../variations/_size/base';
import type { FontProps } from '../../types';

export type SubtitleProps = Omit<FontProps, 'bold' | 'breakWord'>;

const base = css``;

export const Subtitle = styled.div<SubtitleProps>`
    font-family: var(${tokens.typoFontFamily});
    font-size: var(${tokens.typoFontSize});
    font-style: var(${tokens.typoFontStyle});
    letter-spacing: var(${tokens.typoFontLetterSpacing});
    line-height: var(${tokens.typoFontLineHeight});
    font-weight: var(${tokens.typoFontWeight});
    overflow-wrap: break-word;
    hyphens: auto;
`;

export const subtitleRoot = (Root: RootProps<HTMLDivElement, SubtitleProps>) =>
    forwardRef<HTMLDivElement, SubtitleProps>((props, ref) => {
        const { size, children, style, ...rest } = props;

        return (
            <Root size={size} ref={ref}>
                <Subtitle style={{ ...style, ...applySpacing(rest) }} {...rest}>
                    {children}
                </Subtitle>
            </Root>
        );
    });

export const subtitleConfig = {
    name: 'Subtitle',
    tag: 'div',
    layout: subtitleRoot,
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
