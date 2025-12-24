import { styled } from '@linaria/react';

import { applyEllipsis } from '../../mixins';
import { tooltipConfig } from '../Tooltip';
import { component, mergeConfig } from '../../engines';

import { classes, tokens } from './TextArea.tokens';

const mergedConfig = mergeConfig(tooltipConfig);
const Tooltip = component(mergedConfig);

export const Hint = styled(Tooltip)``;

export const OuterLabelWrapper = styled.div<{ isInnerLabel: boolean; width: string }>`
    display: flex;
    align-items: center;
    max-width: ${({ width }) => width};

    margin-bottom: ${({ isInnerLabel }) =>
        isInnerLabel ? `var(${tokens.titleCaptionInnerLabelOffset})` : `var(${tokens.labelMarginBottom})`};
`;

export const StyledLabel = styled.div`
    position: relative;
    display: inline-flex;

    color: var(${tokens.labelOuterColor}, var(${tokens.inputColor}));
    font-family: var(${tokens.labelOuterFontFamily}, var(${tokens.inputFontFamily}));
    font-size: var(${tokens.labelOuterFontSize}, var(${tokens.inputFontSize}));
    font-style: var(${tokens.labelOuterFontStyle}, var(${tokens.inputFontStyle}));
    font-weight: var(${tokens.labelOuterFontWeight}, var(${tokens.inputFontWeight}));
    letter-spacing: var(${tokens.labelOuterLetterSpacing}, var(${tokens.inputLetterSpacing}));
    line-height: var(${tokens.labelOuterLineHeight}, var(${tokens.inputLineHeight}));
`;

export const TitleCaption = styled.div`
    display: inline-block;
    margin-left: auto;

    font-family: var(${tokens.titleCaptionFontFamily});
    font-size: var(${tokens.titleCaptionFontSize});
    font-style: var(${tokens.titleCaptionFontStyle});
    font-weight: var(${tokens.titleCaptionFontWeight});
    letter-spacing: var(${tokens.titleCaptionLetterSpacing});
    line-height: var(${tokens.titleCaptionLineHeight});
`;

export const StyledIndicatorWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
`;

export const StyledOptionalText = styled.span<{ inheritFont?: boolean }>`
    color: var(${tokens.optionalColor});

    font-family: ${({ inheritFont }) =>
        inheritFont ? 'inherit' : `var(${tokens.labelOuterFontFamily}, var(${tokens.inputFontFamily}))`};
    font-size: ${({ inheritFont }) =>
        inheritFont ? 'inherit' : `var(${tokens.labelOuterFontSize}, var(${tokens.inputFontSize}))`};
    font-style: ${({ inheritFont }) =>
        inheritFont ? 'inherit' : `var(${tokens.labelOuterFontStyle}, var(${tokens.inputFontStyle}))`};
    font-weight: ${({ inheritFont }) =>
        inheritFont ? 'inherit' : `var(${tokens.labelOuterFontWeight}, var(${tokens.inputFontWeight}))`};
    letter-spacing: ${({ inheritFont }) =>
        inheritFont ? 'inherit' : `var(${tokens.labelOuterLetterSpacing}, var(${tokens.inputLetterSpacing}))`};
    line-height: ${({ inheritFont }) =>
        inheritFont ? 'inherit' : `var(${tokens.labelOuterLineHeight}, var(${tokens.inputLineHeight}))`};
`;

export const StyledHintWrapper = styled.div`
    display: inline-flex;
    line-height: 0;
    margin: var(${tokens.hintMargin});

    &.${classes.innerLabelPlacement} {
        position: absolute;
        margin: 0;
        inset: var(${tokens.hintInnerLabelPlacementOffset});
    }
`;

export const HintTargetWrapper = styled.div`
    color: var(${tokens.hintIconColor});
    width: var(${tokens.hintTargetSize});
    height: var(${tokens.hintTargetSize});

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HintIconWrapper = styled.div``;

export const StyledTextAreaWrapper = styled.div<{
    hasHelper: boolean;
    hasHeader: boolean;
}>`
    display: flex;
    flex-direction: column;
    background-color: var(${tokens.inputBackgroundColor});

    padding-top: ${({ hasHeader }) => (hasHeader ? 'unset' : `var(${tokens.inputPaddingTop})`)};
    padding-bottom: ${({ hasHelper }) =>
        hasHelper ? `var(${tokens.inputPaddingBottomWithHelpers})` : `var(${tokens.inputPaddingBottom})`};

    border-radius: ${({ hasHelper }) =>
        hasHelper ? `var(${tokens.borderRadiusWithHelpers})` : `var(${tokens.borderRadius})`};
`;

export const StyledContentWrapper = styled.div<{ hasHeader: boolean }>`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: ${({ hasHeader }) => (hasHeader ? `var(${tokens.inputPaddingTop})` : 'unset')};
`;

export const StyledContent = styled.div<{ hasHeader?: boolean }>`
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 1;

    color: var(${tokens.rightContentColor}, var(${tokens.inputColor}));

    top: ${({ hasHeader }) => (hasHeader ? `var(${tokens.inputPaddingTop})` : `var(${tokens.rightContentTop})`)};
    right: var(${tokens.rightContentRight});

    height: var(${tokens.rightContentHeight});
`;

export const StyledHeaderSlot = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DividerWrapper = styled.div`
    background: var(${tokens.backgroundColor});
`;

export const Divider = styled.div`
    height: 0.0625rem;
    background: var(${tokens.dividerColor});
`;

export const StyledContainer = styled.div<{ width: string }>`
    display: inline-flex;
    flex-direction: column;

    width: ${({ width }) => width};

    position: relative;
`;

export const StyledTextArea = styled.textarea<{
    hasHelper: boolean;
    hasContentRight: boolean;
    applyCustomWidth: boolean;
    width?: string | number;
    height?: string | number;
    resize?: string;
}>`
    display: block;
    box-sizing: border-box;
    outline: none;
    border: none;
    -webkit-appearance: none; /* для отображение рамок на iOS */
    background-color: transparent;

    color: var(${tokens.inputColor});
    caret-color: var(${tokens.inputCaretColor});

    resize: ${({ resize }) => resize || 'none'};

    --plasma_private-textarea-height: ${({ height }) =>
        !Number.isNaN(Number(height)) ? `calc(${height}rem - 0.875rem)` : height || `var(${tokens.inputHeight})`};

    --plasma_private-textarea-width: ${({ width }) =>
        !Number.isNaN(Number(width)) ? `${width}rem` : width || `var(${tokens.inputWidth})`};

    --plasma_private-textarea-computed-height: ${({ rows }) =>
        rows ? 'unset' : 'var(--plasma_private-textarea-height)'};
    --plasma_private-textarea-computed-width: ${({ cols }) =>
        cols ? 'unset' : 'var(--plasma_private-textarea-width)'};

    height: var(--plasma_private-textarea-computed-height);
    width: var(--plasma_private-textarea-computed-width);

    min-width: ${({ applyCustomWidth }) => (applyCustomWidth ? 'var(--plasma_private-textarea-width)' : 'auto')};
    max-width: ${({ applyCustomWidth }) => (applyCustomWidth ? 'var(--plasma_private-textarea-width)' : 'auto')};

    min-height: var(${tokens.inputMinHeight});

    padding-right: ${({ hasContentRight }) =>
        hasContentRight
            ? `var(${tokens.inputPaddingRightWithRightContent}, 0)`
            : `var(${tokens.inputPaddingRight}, 0)`};
    padding-left: var(${tokens.inputPaddingLeft}, 0);
    padding-top: 0;
    padding-bottom: 0;

    /* INFO: Высчитываем высоту блока с подсказками */
    --plasma_private-textarea-helpers-computed-height: calc(
        var(${tokens.helpersPaddingTop}, 0) + var(${tokens.helpersPaddingBottom}, 0) + var(${tokens.helpersLineHeight})
    );

    --plasma_private-textarea-input-with-helpers-height: calc(
        var(--plasma_private-textarea-height) - var(--plasma_private-textarea-helpers-computed-height) +
            var(${tokens.helpersOffset})
    );
    --plasma_private-textarea-input-without-helpers-height: calc(
        var(--plasma_private-textarea-computed-height) - var(${tokens.inputPaddingBottom})
    );

    --plasma_private-textarea-input-actual-height: ${({ hasHelper, rows }) =>
        hasHelper && !rows
            ? 'var(--plasma_private-textarea-input-with-helpers-height)'
            : 'var(--plasma_private-textarea-input-without-helpers-height)'};

    height: var(--plasma_private-textarea-input-actual-height);

    font-family: var(${tokens.inputFontFamily});
    font-size: var(${tokens.inputFontSize});
    font-style: var(${tokens.inputFontStyle});
    font-weight: var(${tokens.inputFontWeight});
    letter-spacing: var(${tokens.inputLetterSpacing});
    line-height: var(${tokens.inputLineHeight});

    &::placeholder {
        opacity: 0;
    }

    &:read-only {
        cursor: default;
    }

    &:focus:not(:disabled) {
        color: var(${tokens.inputColorFocus});
    }

    &::-webkit-scrollbar {
        width: var(${tokens.scrollbarWidth});
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(${tokens.scrollbarThumbBackgroundColor});
        background-clip: content-box;
        border: var(${tokens.scrollbarBorderWidth}) solid transparent;
        border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
        background-color: var(${tokens.scrollbarTrackBackgroundColor});
        background-clip: content-box;
        border: var(${tokens.scrollbarBorderWidth}) solid transparent;
        border-radius: 1rem;
    }
`;

export const StyledHiddenTextArea = styled.textarea<{
    hasContentRight: boolean;
    resize?: string;
}>`
    max-height: none !important;
    min-height: var(${tokens.inputMinHeight}) !important;
    visibility: hidden !important;
    overflow: hidden !important;
    position: absolute !important;
    z-index: -1000 !important;
    top: 0 !important;
    left: 0 !important;
    right: 0.0625rem !important;
    border-width: 0;
    padding-right: ${({ hasContentRight }) =>
        hasContentRight
            ? `var(${tokens.inputPaddingRightWithRightContent}, 0)`
            : `var(${tokens.inputPaddingRight}, 0)`};
    padding-left: var(${tokens.inputPaddingLeft}, 0);
    padding-top: 0;
    padding-bottom: 0;
    box-sizing: border-box;
    text-indent: 0;
    text-rendering: auto;
    text-transform: none;
    tab-size: 8;

    font-family: var(${tokens.inputFontFamily});
    font-size: var(${tokens.inputFontSize});
    font-style: var(${tokens.inputFontStyle});
    font-weight: var(${tokens.inputFontWeight});
    letter-spacing: var(${tokens.inputLetterSpacing});
    line-height: var(${tokens.inputLineHeight});
`;

export const StyledHelpers = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    transition: background-color 0.1s ease-in-out;

    background-color: var(${tokens.helpersBackgroundColor});

    padding-top: var(${tokens.helpersPaddingTop});
    padding-right: var(${tokens.helpersPaddingRight});
    padding-bottom: var(${tokens.helpersPaddingBottom});
    padding-left: var(${tokens.helpersPaddingLeft});

    border-bottom-left-radius: var(${tokens.borderRadius});
    border-bottom-right-radius: var(${tokens.borderRadius});
`;

export const StyledOutsideHelpersWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    padding-top: var(${tokens.clearHelpersPaddingTop});
`;

export const StyledLeftHelper = styled.span`
    ${applyEllipsis()};

    display: block;

    font-family: var(${tokens.helpersFontFamily});
    font-size: var(${tokens.helpersFontSize});
    font-style: var(${tokens.helpersFontStyle});
    font-weight: var(${tokens.helpersFontWeight});
    letter-spacing: var(${tokens.helpersLetterSpacing});
    line-height: var(${tokens.helpersLineHeight});

    color: var(${tokens.leftHelperColor});

    &.${classes.leftHelperFocus} {
        color: var(${tokens.leftHelperColorFocus});
    }
`;

export const StyledRightHelper = styled(StyledLeftHelper)`
    color: var(${tokens.rightHelperColor});
    margin-left: auto;
`;

export const StyledPlaceholder = styled.label<{
    hasContentRight: boolean;
}>`
    box-sizing: border-box;
    position: absolute;
    pointer-events: none;
    display: inline-flex;
    align-items: center;

    transition: all 0.1s ease-in-out;
    transform-origin: top left;

    color: var(${tokens.placeholderColor});

    width: 100%;
    height: auto;

    top: var(${tokens.inputPaddingTop});
    padding-left: var(${tokens.inputPaddingLeft});
    padding-right: ${({ hasContentRight }) =>
        hasContentRight ? `var(${tokens.inputPaddingRightWithRightContent})` : `var(${tokens.inputPaddingRight})`};

    font-family: var(${tokens.inputFontFamily});
    font-size: var(${tokens.inputFontSize});
    font-style: var(${tokens.inputFontStyle});
    font-weight: var(${tokens.inputFontWeight});
    letter-spacing: var(${tokens.inputLetterSpacing});
    line-height: var(${tokens.inputLineHeight});
`;

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
                right: calc(
                    -1 * var(${tokens.indicatorSizeOuter}) + var(${tokens.indicatorLabelPlacementHintOuterRight}, 0px)
                );
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
