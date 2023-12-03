import { styled } from '@linaria/react';

import { mediaQuery } from '../../../mixins';
import { classes, tokens } from '../Header.tokens';

import type { StyledHeaderRootProps } from './HeaderRoot.types';

export const sizes = {
    /* sberBox */
    l: `
        ${tokens.headerHeight}: 2.25rem; /* 36px */
        ${tokens.headerPaddingTop}: 1.875rem; /* 30px */
        ${tokens.headerPaddingBottom}: 0.875rem; /* 14px */
    `,
    /* sberPortal */
    m: `
        ${tokens.headerHeight}: 2.25rem; /* 36px */
        ${tokens.headerPaddingTop}: 1.625rem; /* 26px */
        ${tokens.headerPaddingBottom}: 0.625rem; /* 10px */
    `,
    /* mobile */
    s: `
        ${tokens.headerHeight}: 2.25rem; /* 36px */
        ${tokens.headerPaddingTop}: 0.375rem; /* 6px */
        ${tokens.headerPaddingBottom}: 0.375rem; /* 6px */
    `,
};

export const StyledHeaderRoot = styled.header<StyledHeaderRootProps>`
    box-sizing: content-box;

    width: 100%;
    height: var(${tokens.headerHeight});
    padding-top: var(${tokens.headerPaddingTop});
    padding-bottom: var(${tokens.headerPaddingBottom});

    --header_private-gradient-color: ${({ $gradientColor }) => String($gradientColor)};
    &.${String(classes.headerWithGradient)} {
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: calc(
                var(${tokens.headerHeight}) + var(${tokens.headerPaddingTop}) + var(${tokens.headerPaddingBottom})
            );
            background-image: linear-gradient(180deg, var(--header_private-gradient-color), rgba(0, 0, 0, 0));
        }
    };

    &.${String(classes.headerWithDefaultSizes)} {
        ${mediaQuery('S', 1)(String(sizes.s))}
        ${mediaQuery('M')(String(sizes.m))}
        ${mediaQuery('L')(String(sizes.l))}
        ${mediaQuery('XL')(String(sizes.l))}
    }
`;

export const StyledInner = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: row;

    width: 100%;
    height: 100%;
`;
