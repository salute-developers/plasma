import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../engines';
import { badgeConfig, badgeTokens } from '../Badge';
import { counterConfig, counterTokens } from '../Counter';

import { classes, tokens } from './Avatar.tokens';
import { AvatarProps } from './Avatar.types';

const mergedBadgeConfig = mergeConfig(badgeConfig);
const Badge = component(mergedBadgeConfig);

const mergedCounterConfig = mergeConfig(counterConfig);
const Counter = component(mergedCounterConfig);

export const base = css`
    position: relative;
`;

export const Wrapper = styled.div<{ isScalable?: AvatarProps['isScalable'] }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(${tokens.backgroundColor});
    overflow: hidden;

    &:hover {
        scale: ${({ isScalable }) => (isScalable ? `var(${tokens.scaleHover})` : '1')};
        cursor: ${({ isScalable }) => (isScalable ? 'pointer' : 'inherit')};
    }
`;

export const StatusIcon = styled.div`
    position: absolute;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Text = styled.span`
    font-size: var(${tokens.fontSize});
    font-family: var(${tokens.fontFamily});
    font-weight: var(${tokens.fontWeight});
    line-height: var(${tokens.lineHeight});
    background-image: var(${tokens.color});
    background-color: var(${tokens.color});
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ExtraContent = styled.div`
    max-width: 100%;
    display: flex;

    position: absolute;
    z-index: 2;

    &.${classes.extraPlacementTopLeft} {
        top: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
        left: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
    }

    &.${classes.extraPlacementTopRight} {
        top: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
        right: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
    }

    &.${classes.extraPlacementBottomRight} {
        bottom: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
        right: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
    }

    &.${classes.extraPlacementBottomLeft} {
        bottom: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
        left: calc(-0.063rem * var(${tokens.extraPlacementFactor}, 0));
    }
`;

export const ExtraBadge = styled(Badge)`
    ${badgeTokens.background}: var(${tokens.badgeBackground});
    ${badgeTokens.color}: var(${tokens.badgeColor});
    ${badgeTokens.backgroundTransparent}: var(${tokens.badgeBackgroundTransparent});
    ${badgeTokens.colorTransparent}: var(${tokens.badgeColorTransparent});
    ${badgeTokens.colorClear}: var(${tokens.badgeColorClear});
    ${badgeTokens.backgroundClear}: var(${tokens.badgeBackgroundClear});
    ${badgeTokens.borderRadius}: var(${tokens.badgeBorderRadius});
    ${badgeTokens.pilledBorderRadius}: var(${tokens.badgePilledBorderRadius});
    ${badgeTokens.height}: var(${tokens.badgeHeight});
    ${badgeTokens.padding}: var(${tokens.badgePadding});
    ${badgeTokens.paddingIconOnly}: var(${tokens.badgePaddingIconOnly});
    ${badgeTokens.fontFamily}: var(${tokens.badgeFontFamily});
    ${badgeTokens.fontSize}: var(${tokens.badgeFontSize});
    ${badgeTokens.fontStyle}: var(${tokens.badgeFontStyle});
    ${badgeTokens.fontWeight}: var(${tokens.badgeFontWeight});
    ${badgeTokens.letterSpacing}: var(${tokens.badgeLetterSpacing});
    ${badgeTokens.lineHeight}: var(${tokens.badgeLineHeight});
    ${badgeTokens.leftContentMarginLeft}: var(${tokens.badgeLeftContentMarginLeft});
    ${badgeTokens.leftContentMarginRight}: var(${tokens.badgeLeftContentMarginRight});
    ${badgeTokens.rightContentMarginLeft}: var(${tokens.badgeRightContentMarginLeft});
    ${badgeTokens.rightContentMarginRight}: var(${tokens.badgeRightContentMarginRight});
`;

export const ExtraCounter = styled(Counter)`
    ${counterTokens.background}: var(${tokens.counterBackground});
    ${counterTokens.color}: var(${tokens.counterColor});
    ${counterTokens.borderRadius}: var(${tokens.counterBorderRadius});
    ${counterTokens.height}: var(${tokens.counterHeight});
    ${counterTokens.padding}: var(${tokens.counterPadding});
    ${counterTokens.fontFamily}: var(${tokens.counterFontFamily});
    ${counterTokens.fontSize}: var(${tokens.counterFontSize});
    ${counterTokens.fontStyle}: var(${tokens.counterFontStyle});
    ${counterTokens.fontWeight}: var(${tokens.counterFontWeight});
    ${counterTokens.letterSpacing}: var(${tokens.counterLetterSpacing});
    ${counterTokens.lineHeight}: var(${tokens.counterLineHeight});
`;
