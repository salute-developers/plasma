import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../engines';
import { tooltipConfig } from '../Tooltip';

import { classes, tokens } from './TextField.tokens';

const mergedConfig = mergeConfig(tooltipConfig);
const Tooltip = component(mergedConfig);

export const Hint = styled(Tooltip)``;

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
    margin-right: var(${tokens.chipGap});
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

export const InputContainer = styled.div`
    position: relative;
    flex: 1;
    min-width: 60%;
`;

export const InputPlaceholder = styled.div`
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
`;

export const OuterLabelWrapper = styled.div<{ isInnerLabel: boolean }>`
    display: flex;
    align-items: center;

    margin-bottom: ${({ isInnerLabel }) =>
        isInnerLabel ? `var(${tokens.titleCaptionInnerLabelOffset})` : `var(${tokens.labelOffset})`};
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
`;

export const LeftHelper = styled.div``;

export const StyledTextBefore = styled.div``;

export const StyledTextAfter = styled.div``;

export const StyledOptionalText = styled.span`
    color: var(${tokens.optionalColor});
`;

export const StyledHintWrapper = styled.div`
    display: inline-block;
    line-height: 0;

    &.${classes.innerLabelPlacement} {
        position: absolute;
        margin: 0;
        inset: var(${tokens.hintInnerLabelPlacementOffset});
    }
`;

export const HintTargetWrapper = styled.div`
    color: var(${tokens.hintIconColor});

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HintIconWrapper = styled.div``;

export const StyledIndicator = styled.div`
    position: absolute;
    border-radius: 50%;

    background-color: var(${tokens.indicatorColor});

    &.${classes.outerLabelPlacement} {
        width: var(${tokens.indicatorSizeOuter});
        height: var(${tokens.indicatorSizeOuter});
        inset: var(${tokens.indicatorLabelPlacementOuter});

        &.${classes.requiredAlignRight} {
            inset: var(${tokens.indicatorLabelPlacementOuterRight});

            &.${classes.hasHint} {
                right: calc(-1 * var(${tokens.indicatorSizeOuter}));
            }
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
