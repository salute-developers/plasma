import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component, mergeConfig } from '../../engines';
import { tooltipConfig } from '../Tooltip';
import { popoverClasses } from '../Popover';

import { classes, tokens } from './TextField.tokens';

const mergedConfig = mergeConfig(tooltipConfig);
const Tooltip = component(mergedConfig);

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const InputLabelWrapper = styled.div`
    flex: 1;
    overflow: scroll;
    position: relative;
    width: 100%;
    display: inline-flex;
    align-items: center;

    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    overscroll-behavior: contain;

    &.${String(classes.hasChips)} {
        height: var(${tokens.chipHeight});
        border-radius: var(${tokens.chipBorderRadius});
    }
`;

export const StyledChips = styled.div`
    display: flex;
    gap: var(${tokens.chipGap});
    margin-right: var(${tokens.chipMarginRight}, var(${tokens.chipGap}));
    user-select: none;
`;

export const Input = styled.input`
    box-sizing: border-box;
    appearance: none;
    border: 0;
    padding: 0;
    background-color: transparent;
    outline: none;
    width: 100%;
    z-index: 1;

    &::placeholder {
        opacity: 0;
    }
`;

export const InputContainer = styled.div<{ hasDynamicWidth?: boolean }>`
    position: relative;
    display: flex;
    flex: 1;
    min-width: ${({ hasDynamicWidth }) => (hasDynamicWidth ? 'auto' : '60%')};

    ${Input} {
        max-width: ${({ hasDynamicWidth }) => (hasDynamicWidth ? '100%' : 'none')};
    }
`;

export const InputPlaceholder = styled.div<{ hasPadding?: boolean }>`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    white-space: nowrap;

    pointer-events: none;
    user-select: none;
    font: inherit;
    letter-spacing: inherit;
    line-height: inherit;

    color: var(${tokens.placeholderColor});
    padding: ${({ hasPadding }) => (hasPadding ? `var(${tokens.contentLabelInnerPadding})` : '0')};
`;

export const OuterLabelWrapper = styled.div<{ isInnerLabel: boolean }>`
    display: flex;
    align-items: center;

    white-space: ${({ isInnerLabel }) => (isInnerLabel ? 'nowrap' : 'normal')};
    margin-bottom: ${({ isInnerLabel }) =>
        isInnerLabel ? `var(${tokens.titleCaptionInnerLabelOffset})` : `var(${tokens.labelOffset})`};

    --plasma-private-text-field-hint-icon-size: var(var(${tokens.hintCustomIconSize}), 1rem);
`;

export const TitleCaption = styled.div`
    display: inline-block;
    margin-left: auto;
`;

export const StyledIndicatorWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`;

export const Label = styled.label`
    display: inline-flex;
`;

export const StyledContentLeft = styled.div<{ isDefaultView: boolean; isClear: boolean }>`
    margin: var(${tokens.leftContentMargin});
    color: ${({ isDefaultView, isClear }) =>
        !isDefaultView && isClear ? `var(${tokens.clearColor})` : `var(${tokens.contentSlotColor})`};
    line-height: 0;
`;

export const StyledContentRightWrapper = styled.div``;

export const StyledContentRight = styled.div`
    line-height: 0;

    margin: var(${tokens.rightContentMargin});
    color: var(${tokens.contentSlotRightColor}, var(${tokens.contentSlotColor}));

    &:hover {
        color: var(${tokens.contentSlotRightColorHover}, var(${tokens.contentSlotColorHover}));
        cursor: pointer;
    }

    &:active {
        color: var(${tokens.contentSlotRightColorActive}, var(${tokens.contentSlotColorActive}));
    }

    &.${classes.contentRightCompensationMargin} {
        margin-right: calc(
            var(--plasma-private-text-field-hint-icon-size) + var(${tokens.rightContentWithInnerHintMarginRight})
        );
    }

    &.${classes.contentRightCompensationMargin}.${classes.clear} {
        margin-right: calc(
            var(--plasma-private-text-field-hint-icon-size) + var(${tokens.rightContentWithInnerHintMarginRight})
        );
    }
`;

export const LeftHelper = styled.div``;

export const StyledTextBefore = styled.div<{ isHidden?: boolean }>`
    visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
`;

export const StyledTextAfter = styled.div``;

export const StyledOptionalText = styled.span`
    color: var(${tokens.optionalColor});
`;

export const InnerHintWrapper = styled.div`
    position: relative;
`;

export const InnerHintContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;

    :not(.${classes.clear}) {
        inset: var(${tokens.padding});
    }
`;

export const StyledHintWrapper = styled.div`
    position: absolute;
    z-index: 2;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: var(--plasma-textfield__hint-target-size);
    height: var(--plasma-textfield__hint-target-size);

    :not(.${classes.outerLabelPlacement}) {
        /* + var(tokens.borderWidth)? */
        left: calc(100% + var(--plasma-private-text-field-hint-icon-size) / 2 + 0.065rem);
        margin: 0 0 0 var(${tokens.hintInnerLabelPlacementOffset});

        &.${classes.hasInnerHint} {
            margin: 0;
            left: calc(100% - var(--plasma-private-text-field-hint-icon-size) / 2 + 0.065rem);
        }
    }
`;

export const HintTargetWrapper = styled.div`
    color: var(${tokens.hintIconColor});

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Hint = styled(Tooltip)`
    ${HintTargetWrapper} .${popoverClasses.root} {
        width: fit-content;
    }
`;

export const HintIconWrapper = styled.div`
    display: flex;
`;

export const StyledIndicator = styled.div`
    position: absolute;
    top: 0;
    border-radius: 50%;

    background-color: var(${tokens.indicatorColor});

    &.${classes.outerLabelPlacement} {
        width: var(${tokens.indicatorSizeOuter});
        height: var(${tokens.indicatorSizeOuter});
        margin: var(${tokens.indicatorLabelPlacementOuter});

        &.${classes.requiredAlignRight} {
            left: 100%;
            margin: var(${tokens.indicatorLabelPlacementOuterRight});
        }
    }

    &.${classes.innerLabelPlacement} {
        width: var(${tokens.indicatorSizeInner});
        height: var(${tokens.indicatorSizeInner});
        inset: var(${tokens.indicatorLabelPlacementInner});

        &.${classes.requiredAlignRight} {
            inset: var(${tokens.indicatorLabelPlacementInnerRight});
        }
    }
`;

export const base = css`
    /* NOTE: Webkit не применяет opacity к inline тегам */
    display: block;

    --plasma-private-text-field-hint-icon-size: var(${tokens.hintCustomIconSize}, 1.5rem);

    &[data-size='xs'],
    ${OuterLabelWrapper} {
        --plasma-private-text-field-hint-icon-size: var(${tokens.hintCustomIconSize}, 1rem);
    }
`;

export const HintSizeContainer = styled.div`
    position: relative;
    margin: var(${tokens.hintMargin});
    width: var(--plasma-private-text-field-hint-icon-size);
    height: var(--plasma-private-text-field-hint-icon-size);
`;
