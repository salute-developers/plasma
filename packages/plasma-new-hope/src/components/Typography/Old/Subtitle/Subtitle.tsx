import React, { forwardRef } from 'react';

import { applySpacing } from '../../../../mixins/applySpacing';
import type { RootProps } from '../../../../engines';
import { base as sizeCSS } from '../../variations/_size/base';
import type { FontProps } from '../../Typography.types';

import { base } from './Subtitle.styles';

export type SubtitleProps = Omit<FontProps, 'bold' | 'breakWord'>;

export const subtitleRoot = (Root: RootProps<HTMLDivElement, SubtitleProps>) =>
    forwardRef<HTMLDivElement, SubtitleProps>((props, ref) => {
        const { size, children, style, ...rest } = props;

        return (
            <Root size={size} ref={ref} style={{ ...style, ...applySpacing(rest) }} {...rest}>
                {children}
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
