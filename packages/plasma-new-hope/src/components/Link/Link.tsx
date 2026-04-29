import React, { forwardRef } from 'react';
import { css } from 'styled-components';
import { cx } from 'src/utils';

import type { RootProps } from '../../engines/types';

import { base as viewCSS } from './_view/base';
import { base as disabledCSS } from './_disabled/base';
import { base as focusedCSS } from './_focused/base';
import { LinkProps } from './Link.types';
import { classes } from './Link.tokens';

const base = css`
    position: relative;
    text-decoration: none;
    transition: color 0.15s ease-in, text-decoration-color 0.15s ease-in;
`;

const underlineClassMap: Record<NonNullable<LinkProps['underline']>, string | undefined> = {
    always: classes.linkUnderlineAlways,
    hover: classes.linkUnderlineHover,
    none: undefined,
};

export const linkRoot = (Root: RootProps<HTMLAnchorElement, LinkProps>) =>
    forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
        const { className, children, disabled, underline = 'none', target, href, rel, ...rest } = props;

        const underlineClass = underlineClassMap[underline];

        const forwardProps = {
            disabled,
            target,
            href: disabled ? undefined : href,
            // NOTE: https://developer.chrome.com/docs/lighthouse/best-practices/external-anchors-use-rel-noopener/
            rel: target === '_blank' ? 'noopener noreferrer' : rel,
        };

        return (
            <Root className={cx(underlineClass, className)} ref={ref} {...forwardProps} {...rest}>
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
