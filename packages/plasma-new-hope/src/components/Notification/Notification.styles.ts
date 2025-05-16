import type { CSSProperties } from 'react';
import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyHyphens } from '../../mixins';
import { buttonConfig } from '../Button';
import { component, mergeConfig } from '../../engines';

import { classes, tokens } from './Notification.tokens';
import { CloseIconType, IconPlacementType, NotificationPlacement, placements } from './Notification.types';

export const StyledNotification = css`
    width: fit-content;
`;

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const CloseIconWrapper = styled(Button)`
    position: absolute;
    width: var(${tokens.closeIconButtonSize});
    height: var(${tokens.closeIconButtonSize});
    align-self: var(${tokens.horisontalIconCloseAlignSelf});

    color: var(${tokens.closeIconColor});

    :hover {
        color: var(${tokens.closeIconColorOnHover});
    }

    &.${classes.horizontal} {
        position: relative;
    }
`;

export const Wrapper = styled.div<{
    backgroundColor?: string;
    width?: CSSProperties['width'];
    maxWidth?: CSSProperties['maxWidth'];
}>`
    position: relative;
    width: ${({ width = `var(${tokens.width})` }) => width};
    max-width: ${({ maxWidth }) => maxWidth || 'unset'};

    border-radius: var(${tokens.borderRadius});
    border: var(${tokens.borderWidth}) solid var(${tokens.borderColor});

    background: ${({ backgroundColor }) => backgroundColor || `var(${tokens.background})`};
    box-sizing: border-box;

    &.${classes.horizontal} {
        display: flex;
        align-items: center;
        gap: var(${tokens.horizontalLayoutGap});
    }
`;

export const ButtonsWrapper = styled.div<IconPlacementType>`
    margin-top: var(${tokens.buttonsMarginTop});
    margin-left: ${({ iconPlacement }) =>
        iconPlacement === placements.left ? `var(${tokens.buttonsMarginLeft})` : 'unset'};

    align-self: var(${tokens.horisontalActionsAlignSelf});

    &.${classes.horizontal} {
        margin-top: unset;
        margin-left: unset;
    }
`;

export const IconWrapper = styled.div<IconPlacementType & { iconColor?: string }>`
    width: var(${tokens.contentLeftIconSize});
    height: var(${tokens.contentLeftIconSize});
    align-self: var(${tokens.horisontalIconLeftAlignSelf});
    color: ${({ iconColor }) => iconColor || `var(${tokens.contentLeftIconColor})`};

    margin-right: ${({ iconPlacement }) =>
        iconPlacement === placements.left ? `var(${tokens.contentLeftIconMargin})` : 'unset'};
    margin-bottom: ${({ iconPlacement }) =>
        iconPlacement === placements.top ? `var(${tokens.contentTopIconMargin})` : 'unset'};

    &.${classes.horizontal} {
        margin-right: var(${tokens.horizontalLayoutLeftIconMargin});
        margin-bottom: unset;
    }
`;

export const ContentBox = styled.div<IconPlacementType>`
    // TODO: переделать, когда научимся работать с токенами при пересечнии свойств
    // issue #909
    display: ${({ iconPlacement }) => (iconPlacement === placements.left ? 'flex' : 'block')};

    padding-top: ${({ iconPlacement }) =>
        iconPlacement ? `var(${tokens.contentPaddingTop})` : `var(${tokens.contentPaddingTopWithoutIcon})`};

    &.${classes.horizontal} {
        padding: unset;
        display: flex;
        align-items: center;
        flex-grow: 1;
    }
`;

export const TextBox = styled.div<CloseIconType & IconPlacementType>`
    padding: var(${tokens.textboxPaddingTop}) var(${tokens.textboxPaddingRight}) var(${tokens.textboxPaddingBottom})
        var(${tokens.textboxPaddingLeft});

    padding-top: ${({ iconPlacement }) =>
        !iconPlacement || iconPlacement === placements.top
            ? `var(${tokens.textboxPaddingTopWithTopIcon})`
            : `var(${tokens.textboxPaddingTop})`};
    padding-right: ${({ showCloseIcon, iconPlacement }) =>
        showCloseIcon && iconPlacement !== placements.top
            ? `var(${tokens.textboxPaddingRightWithCloseIcon})`
            : `var(${tokens.textboxPaddingRight})`};

    display: flex;
    flex-direction: column;
    row-gap: var(${tokens.textboxGap});
    word-break: break-word;

    &.${classes.horizontal} {
        padding: unset;
    }
`;

export const StyledTitle = styled.div<{ textColor?: string }>`
    font-family: var(${tokens.titleFontFamily});
    font-size: var(${tokens.titleFontSize});
    font-style: var(${tokens.titleFontStyle});
    font-weight: var(${tokens.titleFontWeight});
    letter-spacing: var(${tokens.titleFontLetterSpacing});
    line-height: var(${tokens.titleFontLineHeight});
    ${String(applyHyphens)};

    color: ${({ textColor }) => textColor || `var(${tokens.titleColor})`};
`;

export const StyledContent = styled.div<{ textColor?: string }>`
    font-family: var(${tokens.contentFontFamily});
    font-size: var(${tokens.contentFontSize});
    font-style: var(${tokens.contentFontStyle});
    font-weight: var(${tokens.contentFontWeight});
    letter-spacing: var(${tokens.contentFontLetterSpacing});
    line-height: var(${tokens.contentFontLineHeight});
    ${String(applyHyphens)};

    color: ${({ textColor }) => textColor || `var(${tokens.contentColor})`};
`;

export const StyledItemWrapper = styled.div<{ isHidden: boolean }>`
    margin-top: 1rem;
    opacity: 1;

    &&.${classes.notificationItemOpened} {
        animation: 0.4s showAnimation ease-out;

        &.${classes.notificationLeftToRightAnimation} {
            animation: 0.4s showLeftToRightAnimation ease-out;
        }

        &.${classes.notificationTopToCenterAnimation} {
            animation: 0.4s showTopToCenterAnimation ease-out;
        }

        &.${classes.notificationBottomToCenterAnimation} {
            animation: 0.4s showBottomToCenterAnimation ease-out;
        }
    }

    &&.${classes.notificationItemHidden} {
        animation: 0.4s hideAnimation ease-out;

        &.${classes.notificationLeftToRightAnimation} {
            animation: 0.4s hideLeftToRightAnimation ease-out;
        }
    }

    @keyframes showTopToCenterAnimation {
        0% {
            transform: translateY(-100%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes showBottomToCenterAnimation {
        0% {
            transform: translateY(100%);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes showLeftToRightAnimation {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes hideLeftToRightAnimation {
        0% {
            transform: translateX(0);
            opacity: 1;
        }

        100% {
            transform: translateX(-100%);
            opacity: 0;
        }
    }

    @keyframes showAnimation {
        0% {
            transform: translateX(100%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes hideAnimation {
        0% {
            transform: translateX(0);
            opacity: 1;
        }

        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;

export const StyledRoot = styled.div<{ placement?: NotificationPlacement }>`
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;
    padding: 0 1.5rem 1.5rem;
    max-height: 100%;
    align-items: ${({ placement }) => (placement === 'bottom-left' ? 'flex-start' : 'flex-end')};
`;
