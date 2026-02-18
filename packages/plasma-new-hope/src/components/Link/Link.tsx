import React, { forwardRef } from 'react';
import { css } from '@linaria/core';

import type { RootProps } from '../../engines/types';

import { base as viewCSS } from './_view/base';
import { base as sizeCSS } from './_size/base';
import { base as disabledCSS } from './_disabled/base';
import { base as focusedCSS } from './_focused/base';
import { LinkProps } from './Link.types';

const base = css`
    position: relative;
    text-decoration: none;
    transition: color 0.15s ease-in;

    ::before {
        content: '';
        position: absolute;
        inset: 0;
        opacity: 0.4;
    }
`;

export const linkRoot = (Root: RootProps<HTMLAnchorElement, LinkProps>) =>
    forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
        const { children, disabled, target, href, rel, ...rest } = props;

        const forwardProps = {
            disabled,
            target,
            href: disabled ? undefined : href,
            // NOTE: https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/
            rel: target === '_blank' ? 'noopener noreferrer' : rel,
        };

        return (
            <Root ref={ref} {...forwardProps} {...rest}>
                {children}
            </Root>
        );
    });

export const linkConfig = {
    name: 'Link',
    tag: 'a',
    layout: linkRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
        focused: {
            css: focusedCSS,
        },
    },
    defaults: {
        view: 'primary',
        size: 'm',
    },
};
