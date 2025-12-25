import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { component, mergeConfig } from 'src/engines';

import { rangeConfig, rangeTokens } from '../../Range';
import { classes, tokens } from '../DatePicker.tokens';
import { popoverClasses, popoverConfig } from '../../Popover';

const mergedRangeConfig = mergeConfig(rangeConfig);
const Range = component(mergedRangeConfig);

const mergedPopoverConfig = mergeConfig(popoverConfig);
const Popover = component(mergedPopoverConfig);

export const StyledPopover = styled(Popover)``;

// NOTE: переопределение токенов Range
export const StyledRange = styled(Range)`
    ${rangeTokens.background}: var(${tokens.background});
    ${rangeTokens.backgroundError}: var(${tokens.backgroundError});
    ${rangeTokens.backgroundSuccess}: var(${tokens.backgroundSuccess});
    ${rangeTokens.readOnlyOpacity}: var(${tokens.rangeReadOnlyOpacity});
    
    ${rangeTokens.borderColor}: var(${tokens.borderColor});
    ${rangeTokens.borderColorError}: var(${tokens.borderColorError});
    ${rangeTokens.borderColorSuccess}: var(${tokens.borderColorSuccess});
    
    ${rangeTokens.borderWidth}: var(${tokens.textFieldBorderWidth});

    ${rangeTokens.clearDividerColor}: var(${tokens.clearDividerColor});
    ${rangeTokens.dividerColor}: var(${tokens.dividerColor});
    ${rangeTokens.labelColor}: var(${tokens.labelColor});
    ${rangeTokens.leftHelperColor}: var(${tokens.leftHelperColor});
    ${rangeTokens.leftHelperColorSuccess}: var(${tokens.leftHelperColorSuccess});
    ${rangeTokens.leftHelperColorError}: var(${tokens.leftHelperColorError});

    ${rangeTokens.textFieldColor}: var(${tokens.textFieldColor});
    ${rangeTokens.textFieldPlaceholderColor}: var(${tokens.textFieldPlaceholderColor});
    ${rangeTokens.textFieldPlaceholderColorFocus}: var(${tokens.textFieldPlaceholderColorFocus});
    ${rangeTokens.textFieldClearPlaceholderColorFocus}: var(${tokens.textFieldClearPlaceholderColorFocus});
    ${rangeTokens.textFieldCaretColor}: var(${tokens.textFieldCaretColor});

    ${rangeTokens.textFieldBackgroundColorFocus}: var(${tokens.textFieldBackgroundColorFocus});
    ${rangeTokens.textFieldBackgroundErrorColor}: var(${tokens.textFieldBackgroundErrorColor});
    ${rangeTokens.textFieldBackgroundErrorColorFocus}: var(${tokens.textFieldBackgroundErrorColorFocus});
    ${rangeTokens.textFieldBackgroundSuccessColor}: var(${tokens.textFieldBackgroundSuccessColor});
    ${rangeTokens.textFieldBackgroundSuccessColorFocus}: var(${tokens.textFieldBackgroundSuccessColorFocus});

    ${rangeTokens.textFieldBorderWidth}: var(${tokens.textFieldBorderWidth});
    ${rangeTokens.textFieldBorderColorFocus}: var(${tokens.textFieldBorderColorFocus});
    ${rangeTokens.textFieldBorderColorError}: var(${tokens.textFieldBorderColorError});
    ${rangeTokens.textFieldBorderColorErrorFocus}: var(${tokens.textFieldBorderColorErrorFocus});
    ${rangeTokens.textFieldBorderColorSuccess}: var(${tokens.textFieldBorderColorSuccess});
    ${rangeTokens.textFieldBorderColorSuccessFocus}: var(${tokens.textFieldBorderColorSuccessFocus});

    ${rangeTokens.textFieldTextBeforeColor}: var(${tokens.textFieldTextBeforeColor});
    ${rangeTokens.textFieldTextAfterColor}: var(${tokens.textFieldTextAfterColor});

    ${rangeTokens.focusColor}: var(${tokens.focusColor});

    ${rangeTokens.borderRadius}: var(${tokens.borderRadius});

    ${rangeTokens.dividerPadding}: var(${tokens.dividerPadding});
    ${rangeTokens.dividerFontFamily}: var(${tokens.dividerFontFamily});
    ${rangeTokens.dividerFontStyle}: var(${tokens.dividerFontStyle});
    ${rangeTokens.dividerFontSize}: var(${tokens.dividerFontSize});
    ${rangeTokens.dividerFontWeight}: var(${tokens.dividerFontWeight});
    ${rangeTokens.dividerLetterSpacing}: var(${tokens.dividerLetterSpacing});
    ${rangeTokens.dividerLineHeight}: var(${tokens.dividerLineHeight});

    ${rangeTokens.leftContentMargin}: var(${tokens.leftContentMargin});
    ${rangeTokens.rightContentMargin}: var(${tokens.rightContentMargin});
    
    ${rangeTokens.contentSlotColor}: var(${tokens.contentSlotColor});
    ${rangeTokens.contentSlotColorHover}: var(${tokens.contentSlotColorHover});
    ${rangeTokens.contentSlotColorActive}: var(${tokens.contentSlotColorActive});
    
    ${rangeTokens.contentSlotRightColor}: var(${tokens.contentSlotRightColor});
    ${rangeTokens.contentSlotRightColorHover}: var(${tokens.contentSlotRightColorHover});
    ${rangeTokens.contentSlotRightColorActive}: var(${tokens.contentSlotRightColorActive});

    ${rangeTokens.labelWrapperOffset}: var(${tokens.labelOffset});

    ${rangeTokens.labelWrapperOffset}: var(${tokens.labelWrapperOffset});
    ${rangeTokens.labelFontFamily}: var(${tokens.labelFontFamily});
    ${rangeTokens.labelFontStyle}: var(${tokens.labelFontStyle});
    ${rangeTokens.labelFontSize}: var(${tokens.labelFontSize});
    ${rangeTokens.labelFontWeight}: var(${tokens.labelFontWeight});
    ${rangeTokens.labelLetterSpacing}: var(${tokens.labelLetterSpacing});
    ${rangeTokens.labelLineHeight}: var(${tokens.labelLineHeight});

    ${rangeTokens.titleCaptionOffset}: var(${tokens.titleCaptionOffset});
    ${rangeTokens.titleCaptionColor}: var(${tokens.titleCaptionColor});
    ${rangeTokens.titleCaptionFontFamily}: var(${tokens.titleCaptionFontFamily});
    ${rangeTokens.titleCaptionFontStyle}: var(${tokens.titleCaptionFontStyle});
    ${rangeTokens.titleCaptionFontSize}: var(${tokens.titleCaptionFontSize});
    ${rangeTokens.titleCaptionFontWeight}: var(${tokens.titleCaptionFontWeight});
    ${rangeTokens.titleCaptionLetterSpacing}: var(${tokens.titleCaptionLetterSpacing});
    ${rangeTokens.titleCaptionLineHeight}: var(${tokens.titleCaptionLineHeight});
        
    ${rangeTokens.indicatorWrapperGap}: var(${tokens.indicatorWrapperGap});
    ${rangeTokens.indicatorColor}: var(${tokens.indicatorColor});
    ${rangeTokens.indicatorSizeInner}: var(${tokens.indicatorSizeInner});
    ${rangeTokens.indicatorSizeOuter}: var(${tokens.indicatorSizeOuter});
    ${rangeTokens.indicatorMarginTop}: var(${tokens.indicatorMarginTop});
    ${rangeTokens.indicatorOuterLeft}: var(${tokens.indicatorOuterLeft});
    ${rangeTokens.indicatorWithoutLabelInner}: var(${tokens.indicatorWithoutLabelInner});
    ${rangeTokens.indicatorWithoutLabelInnerLeft}: var(${tokens.indicatorWithoutLabelInnerLeft});
    ${rangeTokens.indicatorWithoutLabelOuterHint}: var(${tokens.indicatorWithoutLabelOuterHint});

    ${rangeTokens.hintMargin}: var(${tokens.hintMargin});
    ${rangeTokens.hintTargetSize}: var(${tokens.hintTargetSize});
    ${rangeTokens.hintCustomIconTargetSize}: var(${tokens.hintCustomIconTargetSize});
    ${rangeTokens.hintIconColor}: var(${tokens.hintIconColor});
    ${rangeTokens.hintWithoutLabelPlacementOffset}: var(${tokens.hintWithoutLabelPlacementOffset});

    ${rangeTokens.tooltipBackgroundColor}: var(${tokens.hintTooltipBackgroundColor});
    ${rangeTokens.tooltipBoxShadow}: var(${tokens.hintTooltipBoxShadow});
    ${rangeTokens.tooltipColor}: var(${tokens.hintTooltipColor});
    ${rangeTokens.tooltipPaddingTop}: var(${tokens.hintTooltipPaddingTop});
    ${rangeTokens.tooltipPaddingRight}: var(${tokens.hintTooltipPaddingRight});
    ${rangeTokens.tooltipPaddingBottom}: var(${tokens.hintTooltipPaddingBottom});
    ${rangeTokens.tooltipPaddingLeft}: var(${tokens.hintTooltipPaddingLeft});
    ${rangeTokens.tooltipMinHeight}: var(${tokens.hintTooltipMinHeight});
    ${rangeTokens.tooltipBorderRadius}: var(${tokens.hintTooltipBorderRadius});
    ${rangeTokens.tooltipTextFontFamily}: var(${tokens.hintTooltipTextFontFamily});
    ${rangeTokens.tooltipTextFontSize}: var(${tokens.hintTooltipTextFontSize});
    ${rangeTokens.tooltipTextFontStyle}: var(${tokens.hintTooltipTextFontStyle});
    ${rangeTokens.tooltipTextFontWeight}: var(${tokens.hintTooltipTextFontWeight});
    ${rangeTokens.tooltipTextFontLetterSpacing}: var(${tokens.hintTooltipTextFontLetterSpacing});
    ${rangeTokens.tooltipTextFontLineHeight}: var(${tokens.hintTooltipTextFontLineHeight});
    ${rangeTokens.tooltipContentLeftMargin}: var(${tokens.hintTooltipContentLeftMargin});
    ${rangeTokens.tooltipArrowMaskWidth}: var(${tokens.hintTooltipArrowMaskWidth});
    ${rangeTokens.tooltipArrowMaskHeight}: var(${tokens.hintTooltipArrowMaskHeight});
    ${rangeTokens.tooltipArrowMaskImage}: var(${tokens.hintTooltipArrowMaskImage});
    ${rangeTokens.tooltipArrowHeight}: var(${tokens.hintTooltipArrowHeight});
    ${rangeTokens.tooltipArrowEdgeMargin}: var(${tokens.hintTooltipArrowEdgeMargin});
    ${rangeTokens.tooltipArrowBackground}: var(${tokens.hintTooltipArrowBackground});

    ${rangeTokens.textFieldHeight}: var(${tokens.textFieldHeight});
    ${rangeTokens.textFieldBorderRadius}: var(${tokens.textFieldBorderRadius});
    ${rangeTokens.textFieldPadding}: var(${tokens.textFieldPadding});
    ${rangeTokens.textFieldFontFamily}: var(${tokens.textFieldFontFamily});
    ${rangeTokens.textFieldFontStyle}: var(${tokens.textFieldFontStyle});
    ${rangeTokens.textFieldFontSize}: var(${tokens.textFieldFontSize});
    ${rangeTokens.textFieldFontWeight}: var(${tokens.textFieldFontWeight});
    ${rangeTokens.textFieldLetterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${rangeTokens.textFieldLineHeight}: var(${tokens.textFieldLineHeight});

    ${rangeTokens.helpersPadding}: var(${tokens.leftHelperOffset});
    ${rangeTokens.leftHelperFontFamily}: var(${tokens.leftHelperFontFamily});
    ${rangeTokens.leftHelperFontStyle}: var(${tokens.leftHelperFontStyle});
    ${rangeTokens.leftHelperFontSize}: var(${tokens.leftHelperFontSize});
    ${rangeTokens.leftHelperFontWeight}: var(${tokens.leftHelperFontWeight});
    ${rangeTokens.leftHelperLetterSpacing}: var(${tokens.leftHelperLetterSpacing});
    ${rangeTokens.leftHelperLineHeight}: var(${tokens.leftHelperLineHeight});

    ${rangeTokens.textFieldLeftContentMargin}: var(${tokens.textFieldLeftContentMargin});
    ${rangeTokens.textFieldRightContentMargin}: var(${tokens.textFieldRightContentMargin});
    ${rangeTokens.rightContentOpacityReadOnly}: var(${tokens.rightContentOpacityReadOnly});
    
    ${rangeTokens.textFieldTextBeforeMargin}: var(${tokens.textFieldTextBeforeMargin});
    ${rangeTokens.textFieldTextAfterMargin}: var(${tokens.textFieldTextAfterMargin});

    ${rangeTokens.backgroundReadOnly}: var(${tokens.backgroundReadOnly});
    ${rangeTokens.dividerColorReadOnly}: var(${tokens.dividerColorReadOnly});
    ${rangeTokens.dividerOpacityReadOnly}: var(${tokens.dividerOpacityReadOnly});
    ${rangeTokens.textFieldDividerColorSuccess}: var(${tokens.textFieldDividerColorSuccess});
    ${rangeTokens.textFieldDividerColorError}: var(${tokens.textFieldDividerColorError});
    ${rangeTokens.textFieldDividerColorHover}: var(${tokens.textFieldDividerColorHover});
    ${rangeTokens.textFieldDividerColorFocus}: var(${tokens.textFieldDividerColorFocus});

    ${rangeTokens.textFieldColorReadOnly}: var(${tokens.textFieldColorReadOnly});
    ${rangeTokens.textFieldBackgroundColorReadOnly}: var(${tokens.textFieldBackgroundColorReadOnly});
    ${rangeTokens.textFieldPlaceholderColorReadOnly}: var(${tokens.textFieldPlaceholderColorReadOnly});
`;

export const base = css`
    display: inline-block;

    ${StyledPopover} {
        .${popoverClasses.wrapper}, .${popoverClasses.target} {
            width: inherit;
        }

        .${popoverClasses.wrapper} {
            display: grid;
        }
    }

    &.${classes.datePickerstretched} {
        width: 100%;
        ${StyledPopover} {
            .${popoverClasses.root}, ${StyledRange} {
                width: 100%;
            }
        }
    }
`;
