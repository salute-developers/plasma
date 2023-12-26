import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyHyphens } from '../../mixins';
import { buttonConfig } from '../Button';
import { component, mergeConfig } from '../../engines';

import { classes, tokens } from './Notification.tokens';
import { CloseIconType, IconPlacementType, placements } from './Notification.types';

export const StyledNotification = css`
    width: fit-content;
`;

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const CloseIconWrapper = styled(Button)`
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;

    color: var(${tokens.closeIconColor});

    :hover {
        color: var(${tokens.closeIconColorOnHover});
    }

    &.${classes.horizontal} {
        position: relative;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;

    background: var(${tokens.background});
    border-radius: var(${tokens.borderRadius});

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

    &.${classes.horizontal} {
        margin-top: unset;
        margin-left: unset;
    }
`;

export const IconWrapper = styled.div<IconPlacementType>`
    width: var(${tokens.contentLeftIconSize});
    height: var(${tokens.contentLeftIconSize});

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

export const StyledTitle = styled.div`
    font-family: var(${tokens.titleFontFamily});
    font-size: var(${tokens.titleFontSize});
    font-style: var(${tokens.titleFontStyle});
    font-weight: var(${tokens.titleFontWeight});
    letter-spacing: var(${tokens.titleFontLetterSpacing});
    line-height: var(${tokens.titleFontLineHeight});
    ${String(applyHyphens)};
`;

export const StyledContent = styled.div`
    font-family: var(${tokens.contentFontFamily});
    font-size: var(${tokens.contentFontSize});
    font-style: var(${tokens.contentFontStyle});
    font-weight: var(${tokens.contentFontWeight});
    letter-spacing: var(${tokens.contentFontLetterSpacing});
    line-height: var(${tokens.contentFontLineHeight});
    ${String(applyHyphens)};

    color: var(${tokens.contentColor});
`;

export const StyledItemWrapper = styled.div<{ isHidden: boolean }>`
    margin-top: 1rem;
    opacity: 1;

    &&.${classes.notificationItemOpened} {
        animation: 0.4s showAnimation ease-out;
    }

    &&.${classes.notificationItemHidden} {
        animation: 0.4s hideAnimation ease-out;
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

export const StyledRoot = styled.div`
    display: flex;
    flex-direction: column-reverse;
    box-sizing: border-box;
    padding: 0 1.5rem 1.5rem;
    max-height: 100%;
    align-items: flex-end;
`;
