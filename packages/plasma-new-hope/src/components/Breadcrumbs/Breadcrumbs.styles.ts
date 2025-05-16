import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { linkConfig } from '../Link';
import { component, mergeConfig } from '../../engines';
import { IconDisclosureRight } from '../_Icon';
import { addFocus } from '../../mixins';
import { tokens as linkTokens } from '../Link/Link.tokens';

import { tokens } from './Breadcrumbs.tokens';

const mergedLinkConfig = mergeConfig(linkConfig);
const Link = component(mergedLinkConfig);

export const StyledLink = styled(Link)<{ isHref: boolean }>`
    --plasma__private-color: ${({ isHref }) =>
        isHref ? `var(${tokens.breadcrumbsColor})` : `var(${tokens.breadcrumbsColorText})`};

    ${linkTokens.linkColor}: var(--plasma__private-color);
    ${linkTokens.linkColorHover}: var(--plasma__private-color);
    ${linkTokens.linkColorActive}: var(--plasma__private-color);

    ${linkTokens.linkDisabledOpacity}: var(${tokens.breadcrumbsOpacity});
    opacity: ${({ isHref }) => (isHref ? 1 : `var(${tokens.breadcrumbsOpacity})`)};

    cursor: pointer;

    ${addFocus({
        outlineOffset: '0rem',
        outlineSize: '0.125rem',
        outlineRadius: '0rem',
        outlineColor: `var(${tokens.breadcrumbsFocusOutlineColor})`,
    })}
`;

export const base = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(${tokens.breadcrumbsGap});

    color: var(${tokens.breadcrumbsColor});
    font-family: var(${tokens.breadcrumbsFontFamily});
    font-size: var(${tokens.breadcrumbsFontSize});
    font-weight: var(${tokens.breadcrumbsFontWeight});
    font-style: var(${tokens.breadcrumbsFontStyle});
    letter-spacing: var(${tokens.breadcrumbsLetterSpacing});
    line-height: var(${tokens.breadcrumbsLineHeight});
`;

export const Separator = styled(IconDisclosureRight)`
    color: var(${tokens.breadcrumbsColorSeparator});
    opacity: var(${tokens.breadcrumbsOpacity});
`;
