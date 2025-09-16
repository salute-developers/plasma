import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { IconDisclosureDownCentered } from 'src/components/_Icon';
import { textFieldConfig, textFieldTokens } from 'src/components/TextField';

import { tokens, classes } from '../../../../Select.tokens';

const mergedConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedConfig);

export const StyledTextField = styled(TextField)<{ opened: boolean; disabled?: boolean }>`
    ${textFieldTokens.color}: var(${tokens.textFieldColor});
    ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundColor});
    ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColor});
    ${textFieldTokens.placeholderColor}: var(${tokens.textFieldPlaceholderColor});
    ${textFieldTokens.labelColor}: var(${tokens.textFieldLabelColor});
    ${textFieldTokens.leftHelperColor}: var(${tokens.textFieldLeftHelperColor});

    ${textFieldTokens.colorReadOnly}: var(${tokens.textFieldColor});
    ${textFieldTokens.backgroundColorReadOnly}: ${({ opened }) =>
    opened ? `var(${tokens.textFieldBackgroundColorFocus})` : `var(${tokens.textFieldBackgroundColor})`};
    ${textFieldTokens.placeholderColorReadOnly}: ${({ opened }) =>
    opened ? `var(${tokens.textFieldPlaceholderColorFocus})` : `var(${tokens.textFieldPlaceholderColor})`};
    ${textFieldTokens.leftHelperColorReadOnly}: var(${tokens.textFieldLeftHelperColor});
    ${textFieldTokens.labelColorReadOnly}: var(${tokens.textFieldLabelColor});
    ${textFieldTokens.borderColorReadOnly}: ${({ opened }) =>
    opened ? `var(${tokens.textFieldBorderColorFocus})` : `var(${tokens.textFieldBorderColor})`};

    ${textFieldTokens.placeholderColor}: var(${tokens.textFieldPlaceholderColor});

    ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorHover});
    ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorFocus});

    ${textFieldTokens.optionalColor}: var(${tokens.textFieldOptionalColor});

    ${textFieldTokens.height}: var(${tokens.textFieldHeight});
    ${textFieldTokens.borderWidth}: var(${tokens.textFieldBorderWidth});
    ${textFieldTokens.borderRadius}: var(${tokens.textFieldBorderRadius});

    ${textFieldTokens.padding}: var(${tokens.textFieldPadding});
    ${textFieldTokens.paddingWithChips}: var(${tokens.textFieldPaddingWithChips});

    ${textFieldTokens.leftContentMargin}: var(${tokens.textFieldLeftContentMargin});
    ${textFieldTokens.rightContentMargin}: var(${tokens.textFieldRightContentMargin});

    ${textFieldTokens.rightContentWithHintMargin}: var(${tokens.textFieldRightContentWithHintMargin});
    ${textFieldTokens.contentRightWrapperGap}: var(${tokens.textFieldContentRightWrapperGap});
    ${textFieldTokens.contentRightWrapperMargin}: var(${tokens.textFieldContentRightWrapperMargin});

    ${textFieldTokens.fontFamily}: var(${tokens.textFieldFontFamily});
    ${textFieldTokens.fontStyle}: var(${tokens.textFieldFontStyle});
    ${textFieldTokens.fontSize}: var(${tokens.textFieldFontSize});
    ${textFieldTokens.fontWeight}: var(${tokens.textFieldFontWeight});
    ${textFieldTokens.letterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${textFieldTokens.lineHeight}: var(${tokens.textFieldLineHeight});

    ${textFieldTokens.contentSlotColor}: var(${tokens.textFieldContentSlotColor});
    ${textFieldTokens.contentSlotColorHover}: var(${tokens.textFieldContentSlotColorHover});
    ${textFieldTokens.contentSlotColorActive}: var(${tokens.textFieldContentSlotColorActive});

    ${textFieldTokens.contentSlotRightColor}: var(${tokens.textFieldContentSlotRightColor});
    ${textFieldTokens.contentSlotRightColorHover}: var(${tokens.textFieldContentSlotRightColorHover});
    ${textFieldTokens.contentSlotRightColorActive}: var(${tokens.textFieldContentSlotRightColorActive});

    ${textFieldTokens.labelOffset}: var(${tokens.textFieldLabelOffset});

    ${textFieldTokens.labelFontFamily}: var(${tokens.textFieldLabelFontFamily});
    ${textFieldTokens.labelFontStyle}: var(${tokens.textFieldLabelFontStyle});
    ${textFieldTokens.labelFontSize}: var(${tokens.textFieldLabelFontSize});
    ${textFieldTokens.labelFontWeight}: var(${tokens.textFieldLabelFontWeight});
    ${textFieldTokens.labelLetterSpacing}: var(${tokens.textFieldLabelLetterSpacing});
    ${textFieldTokens.labelLineHeight}: var(${tokens.textFieldLabelLineHeight});

    ${textFieldTokens.labelInnerFontFamily}: var(${tokens.textFieldLabelInnerFontFamily});
    ${textFieldTokens.labelInnerFontStyle}: var(${tokens.textFieldLabelInnerFontStyle});
    ${textFieldTokens.labelInnerFontSize}: var(${tokens.textFieldLabelInnerFontSize});
    ${textFieldTokens.labelInnerFontWeight}: var(${tokens.textFieldLabelInnerFontWeight});
    ${textFieldTokens.labelInnerLetterSpacing}: var(${tokens.textFieldLabelInnerLetterSpacing});
    ${textFieldTokens.labelInnerLineHeight}: var(${tokens.textFieldLabelInnerLineHeight});

    ${textFieldTokens.labelInnerPadding}: var(${tokens.textFieldLabelInnerPadding});
    ${textFieldTokens.contentLabelInnerPadding}: var(${tokens.textFieldContentLabelInnerPadding});

    ${textFieldTokens.titleCaptionColor}: var(${tokens.textFieldTitleCaptionColor});
    ${textFieldTokens.titleCaptionInnerLabelOffset}: var(${tokens.textFieldTitleCaptionInnerLabelOffset});

    ${textFieldTokens.titleCaptionFontFamily}: var(${tokens.textFieldTitleCaptionFontFamily});
    ${textFieldTokens.titleCaptionFontStyle}: var(${tokens.textFieldTitleCaptionFontStyle});
    ${textFieldTokens.titleCaptionFontSize}: var(${tokens.textFieldTitleCaptionFontSize});
    ${textFieldTokens.titleCaptionFontWeight}: var(${tokens.textFieldTitleCaptionFontWeight});
    ${textFieldTokens.titleCaptionLetterSpacing}: var(${tokens.textFieldTitleCaptionLetterSpacing});
    ${textFieldTokens.titleCaptionLineHeight}: var(${tokens.textFieldTitleCaptionLineHeight});

    ${textFieldTokens.leftHelperOffset}: var(${tokens.textFieldLeftHelperOffset});

    ${textFieldTokens.leftHelperFontFamily}: var(${tokens.textFieldLeftHelperFontFamily});
    ${textFieldTokens.leftHelperFontStyle}: var(${tokens.textFieldLeftHelperFontStyle});
    ${textFieldTokens.leftHelperFontSize}: var(${tokens.textFieldLeftHelperFontSize});
    ${textFieldTokens.leftHelperFontWeight}: var(${tokens.textFieldLeftHelperFontWeight});
    ${textFieldTokens.leftHelperLetterSpacing}: var(${tokens.textFieldLeftHelperLetterSpacing});
    ${textFieldTokens.leftHelperLineHeight}: var(${tokens.textFieldLeftHelperLineHeight});

    ${textFieldTokens.textBeforeColor}: var(${tokens.textFieldTextBeforeColor});
    ${textFieldTokens.textAfterColor}: var(${tokens.textFieldTextAfterColor});
    ${textFieldTokens.textBeforeMargin}: var(${tokens.textFieldTextBeforeMargin});
    ${textFieldTokens.textAfterMargin}: var(${tokens.textFieldTextAfterMargin});

    ${textFieldTokens.disabledOpacity}: var(${tokens.textFieldDisabledOpacity});

    ${textFieldTokens.hintCustomIconTargetSize}: var(${tokens.textFieldHintCustomIconTargetSize});
    ${textFieldTokens.hintMargin}: var(${tokens.textFieldHintMargin});
    ${textFieldTokens.hintTargetSize}: var(${tokens.textFieldHintTargetSize});
    ${textFieldTokens.hintIconColor}: var(${tokens.textFieldHintIconColor});
    ${textFieldTokens.hintInnerLabelPlacementOffset}: var(${tokens.textFieldHintInnerLabelPlacementOffset});
    ${textFieldTokens.clearHintInnerLabelPlacementOffset}: var(${tokens.textFieldClearHintInnerLabelPlacementOffset});
    ${textFieldTokens.tooltipBackgroundColor}: var(${tokens.textFieldTooltipBackgroundColor});
    ${textFieldTokens.tooltipBoxShadow}: var(${tokens.textFieldTooltipBoxShadow});
    ${textFieldTokens.tooltipColor}: var(${tokens.textFieldTooltipColor});
    ${textFieldTokens.tooltipPaddingTop}: var(${tokens.textFieldTooltipPaddingTop});
    ${textFieldTokens.tooltipPaddingRight}: var(${tokens.textFieldTooltipPaddingRight});
    ${textFieldTokens.tooltipPaddingBottom}: var(${tokens.textFieldTooltipPaddingBottom});
    ${textFieldTokens.tooltipPaddingLeft}: var(${tokens.textFieldTooltipPaddingLeft});
    ${textFieldTokens.tooltipMinHeight}: var(${tokens.textFieldTooltipMinHeight});
    ${textFieldTokens.tooltipBorderRadius}: var(${tokens.textFieldTooltipBorderRadius});
    ${textFieldTokens.tooltipTextFontFamily}: var(${tokens.textFieldTooltipTextFontFamily});
    ${textFieldTokens.tooltipTextFontSize}: var(${tokens.textFieldTooltipTextFontSize});
    ${textFieldTokens.tooltipTextFontStyle}: var(${tokens.textFieldTooltipTextFontStyle});
    ${textFieldTokens.tooltipTextFontWeight}: var(${tokens.textFieldTooltipTextFontWeight});
    ${textFieldTokens.tooltipTextFontLetterSpacing}: var(${tokens.textFieldTooltipTextFontLetterSpacing});
    ${textFieldTokens.tooltipTextFontLineHeight}: var(${tokens.textFieldTooltipTextFontLineHeight});
    ${textFieldTokens.tooltipContentLeftMargin}: var(${tokens.textFieldTooltipContentLeftMargin});
    ${textFieldTokens.tooltipArrowMaskWidth}: var(${tokens.textFieldTooltipArrowMaskWidth});
    ${textFieldTokens.tooltipArrowMaskHeight}: var(${tokens.textFieldTooltipArrowMaskHeight});
    ${textFieldTokens.tooltipArrowMaskImage}: var(${tokens.textFieldTooltipArrowMaskImage});
    ${textFieldTokens.tooltipArrowHeight}: var(${tokens.textFieldTooltipArrowHeight});
    ${textFieldTokens.tooltipArrowEdgeMargin}: var(${tokens.textFieldTooltipArrowEdgeMargin});
    ${textFieldTokens.tooltipArrowBackground}: var(${tokens.textFieldTooltipArrowBackground});

    ${textFieldTokens.chipHeight}: var(${tokens.textFieldChipHeight});
    ${textFieldTokens.chipBorderRadius}: var(${tokens.textFieldChipBorderRadius});
    ${textFieldTokens.chipGap}: var(${tokens.textFieldChipGap});
    ${textFieldTokens.chipColor}: var(${tokens.textFieldChipColor});
    ${textFieldTokens.chipColorHover}: var(${tokens.textFieldChipColorHover});
    ${textFieldTokens.chipBackground}: var(${tokens.textFieldChipBackground});
    ${textFieldTokens.chipBackgroundActive}: var(${tokens.textFieldChipBackgroundActive});
    ${textFieldTokens.chipColorActive}: var(${tokens.textFieldChipColorActive});
    ${textFieldTokens.chipCloseIconColor}: var(${tokens.textFieldChipCloseIconColor});
    ${textFieldTokens.chipCloseIconColorHover}: var(${tokens.textFieldChipCloseIconColorHover});
    ${textFieldTokens.chipCloseIconColorReadonly}: var(${tokens.textFieldChipCloseIconColorReadonly});
    ${textFieldTokens.chipOutlineSize}: var(${tokens.textFieldChipOutlineSize});
    ${textFieldTokens.chipWidth}: var(${tokens.textFieldChipWidth});
    ${textFieldTokens.chipPadding}: var(${tokens.textFieldChipPadding});
    ${textFieldTokens.chipCloseIconSize}: var(${tokens.textFieldChipCloseIconSize});
    ${textFieldTokens.chipFontFamily}: var(${tokens.textFieldChipFontFamily});
    ${textFieldTokens.chipFontSize}: var(${tokens.textFieldChipFontSize});
    ${textFieldTokens.chipFontStyle}: var(${tokens.textFieldChipFontStyle});
    ${textFieldTokens.chipFontWeight}: var(${tokens.textFieldChipFontWeight});
    ${textFieldTokens.chipLetterSpacing}: var(${tokens.textFieldChipLetterSpacing});
    ${textFieldTokens.chipLineHeight}: var(${tokens.textFieldChipLineHeight});
    ${textFieldTokens.chipColorReadOnly}: var(${tokens.textFieldChipColor});
    ${textFieldTokens.chipColorReadOnlyHover}: var(${tokens.textFieldChipColor});
    ${textFieldTokens.chipBackgroundReadOnly}: var(${tokens.textFieldChipBackground});
    ${textFieldTokens.chipBackgroundReadOnlyHover}: var(${tokens.textFieldChipBackgroundHover});
    ${textFieldTokens.chipClearContentMarginLeft}: var(${tokens.textFieldChipClearContentMarginLeft});
    ${textFieldTokens.chipClearContentMarginRight}: var(${tokens.textFieldChipClearContentMarginRight});

    ${textFieldTokens.indicatorColor}: var(${tokens.textFieldIndicatorColor});
    ${textFieldTokens.indicatorSizeInner}: var(${tokens.textFieldIndicatorSizeInner});
    ${textFieldTokens.indicatorSizeOuter}: var(${tokens.textFieldIndicatorSizeOuter});
    ${textFieldTokens.indicatorLabelPlacementInner}: var(${tokens.textFieldIndicatorLabelPlacementInner});
    ${textFieldTokens.indicatorLabelPlacementOuter}: var(${tokens.textFieldIndicatorLabelPlacementOuter});
    ${textFieldTokens.indicatorLabelPlacementInnerRight}: var(${tokens.textFieldIndicatorLabelPlacementInnerRight});
    ${textFieldTokens.indicatorLabelPlacementOuterRight}: var(${tokens.textFieldIndicatorLabelPlacementOuterRight});
    ${textFieldTokens.clearIndicatorLabelPlacementInner}: var(${tokens.textFieldClearIndicatorLabelPlacementInner});
    /* stylelint-disable */
    ${textFieldTokens.clearIndicatorLabelPlacementInnerRight}: var(${
    tokens.textFieldClearIndicatorLabelPlacementInnerRight
});
    /* stylelint-enable */
    ${textFieldTokens.clearIndicatorHintInnerRight}: var(${tokens.textFieldClearIndicatorHintInnerRight});

    ${textFieldTokens.focusColor}: var(${tokens.textFieldFocusColor});

    ${textFieldTokens.boxShadow}: ${({ disabled }) => (disabled ? 'none' : `var(${tokens.textFieldBoxShadow})`)};

    /* TODO: #1544 */

    & div.input-wrapper:focus-within {
        background-color: var(${tokens.textFieldBackgroundColorFocus});
    }

    /* TextField изначально в readOnly состоянии */

    &.${classes.readOnly} {
        ${textFieldTokens.colorReadOnly}: var(${tokens.textFieldColorReadOnly});
        ${textFieldTokens.backgroundColorReadOnly}: var(${tokens.textFieldBackgroundColorReadOnly});
        ${textFieldTokens.placeholderColorReadOnly}: var(${tokens.textFieldPlaceholderColorReadOnly});
        ${textFieldTokens.dividerColorReadOnly}: var(${tokens.textFieldDividerColorReadOnly});
        ${textFieldTokens.leftHelperColorReadOnly}: var(${tokens.textFieldLeftHelperColorReadOnly});
        ${textFieldTokens.labelColorReadOnly}: var(${tokens.textFieldLabelColorReadOnly});
        ${textFieldTokens.titleCaptionColorReadOnly}: var(${tokens.textFieldTitleCaptionColorReadOnly});
        ${textFieldTokens.borderColorReadOnly}: var(${tokens.textFieldBorderColorReadOnly});
        ${textFieldTokens.readOnlyOpacity}: var(${tokens.textFieldReadOnlyOpacity});

        ${textFieldTokens.chipColorReadOnly}: var(${tokens.textFieldChipColorReadOnly});
        ${textFieldTokens.chipColorReadOnlyHover}: var(${tokens.textFieldChipColorReadOnlyHover});
        ${textFieldTokens.chipBackgroundReadOnly}: var(${tokens.textFieldChipBackgroundReadOnly});
        ${textFieldTokens.chipBackgroundReadOnlyHover}: var(${tokens.textFieldChipBackgroundReadOnlyHover});
        ${textFieldTokens.chipOpacityReadonly}: var(${tokens.textFieldChipOpacityReadonly});

        ${textFieldTokens.boxShadow}: none;
    }
`;

export const IconArrowWrapper = styled.div<{ disabled?: boolean; readOnly?: boolean }>`
    line-height: 0;
    color: var(${tokens.disclosureIconColor});
    cursor: ${({ disabled, readOnly }) => (disabled || readOnly ? 'inherit' : 'pointer')};

    .${classes.arrowInverse} {
        transform: rotate(-180deg);
    }

    &:hover,
    &:active {
        color: ${({ disabled, readOnly }) =>
            disabled || readOnly ? `var(${tokens.disclosureIconColor})` : `var(${tokens.disclosureIconColorHover})`};
    }

    opacity: ${({ readOnly }) => (readOnly ? `var(${tokens.disclosureIconOpacityReadOnly})` : '')};
`;

// TODO: Удалить после поддержки JS переменных в конфиге компонент
export const sizeMap: Record<string, string> = {
    xs: '1rem',
    s: '1.5rem',
};

export const StyledArrow = styled(IconDisclosureDownCentered)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
`;

export const StyledLeftHelper = styled.span`
    margin: 0;
    padding: 0;
`;
