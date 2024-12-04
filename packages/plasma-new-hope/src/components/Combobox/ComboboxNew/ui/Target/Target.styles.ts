import { styled } from '@linaria/react';

import { textFieldConfig, textFieldTokens } from '../../../../TextField';
import { component, mergeConfig } from '../../../../../engines';
import { tokens as comboboxTokens } from '../../Combobox.tokens';

const mergedConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedConfig);

export const StyledTextField = styled(TextField)`
    ${textFieldTokens.color}: var(${comboboxTokens.textFieldColor});
    ${textFieldTokens.clearColor}: var(${comboboxTokens.textFieldColor});

    ${textFieldTokens.backgroundColor}: var(${comboboxTokens.textFieldBackgroundColor});
    ${textFieldTokens.backgroundColorHover}: var(${comboboxTokens.textFieldBackgroundColorHover});
    ${textFieldTokens.backgroundColorFocus}: var(${comboboxTokens.textFieldBackgroundColorFocus});

    ${textFieldTokens.borderColor}: var(${comboboxTokens.textFieldBorderColor});
    ${textFieldTokens.borderColorHover}: var(${comboboxTokens.textFieldBorderColorHover});
    ${textFieldTokens.borderColorFocus}: var(${comboboxTokens.textFieldBorderColorFocus});

    ${textFieldTokens.colorReadOnly}: var(${comboboxTokens.textFieldColorReadOnly});
    ${textFieldTokens.backgroundColorReadOnly}: var(${comboboxTokens.textFieldBackgroundColorReadOnly});
    ${textFieldTokens.borderColorReadOnly}: var(${comboboxTokens.textFieldBorderColorReadOnly});
    ${textFieldTokens.placeholderColorReadOnly}: var(${comboboxTokens.textFieldPlaceholderColorReadOnly});

    ${textFieldTokens.caretColor}: var(${comboboxTokens.textFieldCaretColor});
    ${textFieldTokens.placeholderColor}: var(${comboboxTokens.textFieldPlaceholderColor});
    ${textFieldTokens.placeholderColorFocus}: var(${comboboxTokens.textFieldPlaceholderColorFocus});
    ${textFieldTokens.clearPlaceholderColor}: var(${comboboxTokens.textFieldClearPlaceholderColor});
    ${textFieldTokens.clearPlaceholderColorFocus}: var(${comboboxTokens.textFieldClearPlaceholderColorFocus});
    ${textFieldTokens.optionalColor}: var(${comboboxTokens.textFieldOptionalColor});

    ${textFieldTokens.height}: var(${comboboxTokens.textFieldHeight});
    ${textFieldTokens.borderWidth}: var(${comboboxTokens.textFieldBorderWidth});
    ${textFieldTokens.borderRadius}: var(${comboboxTokens.textFieldBorderRadius});

    ${textFieldTokens.padding}: var(${comboboxTokens.textFieldPadding});
    ${textFieldTokens.paddingWithChips}: var(${comboboxTokens.textFieldPaddingWithChips});

    ${textFieldTokens.leftContentMargin}: var(${comboboxTokens.textFieldLeftContentMargin});
    ${textFieldTokens.rightContentMargin}: var(${comboboxTokens.textFieldRightContentMargin});

    ${textFieldTokens.fontFamily}: var(${comboboxTokens.textFieldFontFamily});
    ${textFieldTokens.fontStyle}: var(${comboboxTokens.textFieldFontStyle});
    ${textFieldTokens.fontSize}: var(${comboboxTokens.textFieldFontSize});
    ${textFieldTokens.fontWeight}: var(${comboboxTokens.textFieldFontWeight});
    ${textFieldTokens.letterSpacing}: var(${comboboxTokens.textFieldLetterSpacing});
    ${textFieldTokens.lineHeight}: var(${comboboxTokens.textFieldLineHeight});

    ${textFieldTokens.contentSlotColor}: var(${comboboxTokens.textFieldContentSlotColor});
    ${textFieldTokens.contentSlotColorHover}: var(${comboboxTokens.textFieldContentSlotColorHover});
    ${textFieldTokens.contentSlotColorActive}: var(${comboboxTokens.textFieldContentSlotColorActive});

    ${textFieldTokens.contentSlotRightColor}: var(${comboboxTokens.textFieldContentSlotRightColor});
    ${textFieldTokens.contentSlotRightColorHover}: var(${comboboxTokens.textFieldContentSlotRightColorHover});
    ${textFieldTokens.contentSlotRightColorActive}: var(${comboboxTokens.textFieldContentSlotRightColorActive});

    ${textFieldTokens.labelColor}: var(${comboboxTokens.textFieldLabelColor});
    ${textFieldTokens.labelColorReadOnly}: var(${comboboxTokens.textFieldLabelColorReadOnly});
    ${textFieldTokens.labelOffset}: var(${comboboxTokens.textFieldLabelOffset});
    ${textFieldTokens.clearLabelOffset}: var(${comboboxTokens.textFieldClearLabelOffset});

    ${textFieldTokens.labelFontFamily}: var(${comboboxTokens.textFieldLabelFontFamily});
    ${textFieldTokens.labelFontStyle}: var(${comboboxTokens.textFieldLabelFontStyle});
    ${textFieldTokens.labelFontSize}: var(${comboboxTokens.textFieldLabelFontSize});
    ${textFieldTokens.labelFontWeight}: var(${comboboxTokens.textFieldLabelFontWeight});
    ${textFieldTokens.labelLetterSpacing}: var(${comboboxTokens.textFieldLabelLetterSpacing});
    ${textFieldTokens.labelLineHeight}: var(${comboboxTokens.textFieldLabelLineHeight});

    ${textFieldTokens.labelInnerFontFamily}: var(${comboboxTokens.textFieldLabelInnerFontFamily});
    ${textFieldTokens.labelInnerFontStyle}: var(${comboboxTokens.textFieldLabelInnerFontStyle});
    ${textFieldTokens.labelInnerFontSize}: var(${comboboxTokens.textFieldLabelInnerFontSize});
    ${textFieldTokens.labelInnerFontWeight}: var(${comboboxTokens.textFieldLabelInnerFontWeight});
    ${textFieldTokens.labelInnerLetterSpacing}: var(${comboboxTokens.textFieldLabelInnerLetterSpacing});
    ${textFieldTokens.labelInnerLineHeight}: var(${comboboxTokens.textFieldLabelInnerLineHeight});

    ${textFieldTokens.labelInnerPadding}: var(${comboboxTokens.textFieldLabelInnerPadding});
    ${textFieldTokens.contentLabelInnerPadding}: var(${comboboxTokens.textFieldContentLabelInnerPadding});

    ${textFieldTokens.titleCaptionColor}: var(${comboboxTokens.textFieldTitleCaptionColor});
    ${textFieldTokens.titleCaptionColorReadOnly}: var(${comboboxTokens.textFieldTitleCaptionColorReadOnly});
    ${textFieldTokens.titleCaptionInnerLabelOffset}: var(${comboboxTokens.textFieldTitleCaptionInnerLabelOffset});

    ${textFieldTokens.titleCaptionFontFamily}: var(${comboboxTokens.textFieldTitleCaptionFontFamily});
    ${textFieldTokens.titleCaptionFontStyle}: var(${comboboxTokens.textFieldTitleCaptionFontStyle});
    ${textFieldTokens.titleCaptionFontSize}: var(${comboboxTokens.textFieldTitleCaptionFontSize});
    ${textFieldTokens.titleCaptionFontWeight}: var(${comboboxTokens.textFieldTitleCaptionFontWeight});
    ${textFieldTokens.titleCaptionLetterSpacing}: var(${comboboxTokens.textFieldTitleCaptionLetterSpacing});
    ${textFieldTokens.titleCaptionLineHeight}: var(${comboboxTokens.textFieldTitleCaptionLineHeight});

    ${textFieldTokens.leftHelperColor}: var(${comboboxTokens.textFieldLeftHelperColor});
    ${textFieldTokens.leftHelperColorReadOnly}: var(${comboboxTokens.textFieldLeftHelperColorReadOnly});
    ${textFieldTokens.leftHelperOffset}: var(${comboboxTokens.textFieldLeftHelperOffset});

    ${textFieldTokens.leftHelperFontFamily}: var(${comboboxTokens.textFieldLeftHelperFontFamily});
    ${textFieldTokens.leftHelperFontStyle}: var(${comboboxTokens.textFieldLeftHelperFontStyle});
    ${textFieldTokens.leftHelperFontSize}: var(${comboboxTokens.textFieldLeftHelperFontSize});
    ${textFieldTokens.leftHelperFontWeight}: var(${comboboxTokens.textFieldLeftHelperFontWeight});
    ${textFieldTokens.leftHelperLetterSpacing}: var(${comboboxTokens.textFieldLeftHelperLetterSpacing});
    ${textFieldTokens.leftHelperLineHeight}: var(${comboboxTokens.textFieldLeftHelperLineHeight});

    ${textFieldTokens.textBeforeColor}: var(${comboboxTokens.textFieldTextBeforeColor});
    ${textFieldTokens.textAfterColor}: var(${comboboxTokens.textFieldTextAfterColor});
    ${textFieldTokens.textBeforeMargin}: var(${comboboxTokens.textFieldTextBeforeMargin});
    ${textFieldTokens.textAfterMargin}: var(${comboboxTokens.textFieldTextAfterMargin});

    ${textFieldTokens.disabledOpacity}: var(${comboboxTokens.textFieldDisabledOpacity});

    ${textFieldTokens.chipHeight}: var(${comboboxTokens.textFieldChipHeight});
    ${textFieldTokens.chipBorderRadius}: var(${comboboxTokens.textFieldChipBorderRadius});
    ${textFieldTokens.chipGap}: var(${comboboxTokens.textFieldChipGap});
    ${textFieldTokens.chipBackground}: var(${comboboxTokens.textFieldChipBackground});
    ${textFieldTokens.chipColor}: var(${comboboxTokens.textFieldChipColor});
    ${textFieldTokens.chipBackgroundHover}: var(${comboboxTokens.textFieldChipBackgroundHover});
    ${textFieldTokens.chipColorHover}: var(${comboboxTokens.textFieldChipColorHover});
    ${textFieldTokens.chipScaleHover}: var(${comboboxTokens.textFieldChipScaleHover});
    ${textFieldTokens.chipBackgroundReadOnly}: var(${comboboxTokens.textFieldChipBackgroundReadOnly});
    ${textFieldTokens.chipColorReadOnly}: var(${comboboxTokens.textFieldChipColorReadOnly});
    ${textFieldTokens.chipBackgroundReadOnlyHover}: var(${comboboxTokens.textFieldChipBackgroundReadOnlyHover});
    ${textFieldTokens.chipColorReadOnlyHover}: var(${comboboxTokens.textFieldChipColorReadOnlyHover});
    ${textFieldTokens.chipBackgroundActive}: var(${comboboxTokens.textFieldChipBackgroundActive});
    ${textFieldTokens.chipColorActive}: var(${comboboxTokens.textFieldChipColorActive});
    ${textFieldTokens.chipScaleActive}: var(${comboboxTokens.textFieldChipScaleActive});
    ${textFieldTokens.chipCloseIconColor}: var(${comboboxTokens.textFieldChipCloseIconColor});
    ${textFieldTokens.chipOutlineSize}: var(${comboboxTokens.textFieldChipOutlineSize});
    ${textFieldTokens.chipWidth}: var(${comboboxTokens.textFieldChipWidth});
    ${textFieldTokens.chipPadding}: var(${comboboxTokens.textFieldChipPadding});
    ${textFieldTokens.chipCloseIconSize}: var(${comboboxTokens.textFieldChipCloseIconSize});
    ${textFieldTokens.chipFontFamily}: var(${comboboxTokens.textFieldChipFontFamily});
    ${textFieldTokens.chipFontSize}: var(${comboboxTokens.textFieldChipFontSize});
    ${textFieldTokens.chipFontStyle}: var(${comboboxTokens.textFieldChipFontStyle});
    ${textFieldTokens.chipFontWeight}: var(${comboboxTokens.textFieldChipFontWeight});
    ${textFieldTokens.chipLetterSpacing}: var(${comboboxTokens.textFieldChipLetterSpacing});
    ${textFieldTokens.chipLineHeight}: var(${comboboxTokens.textFieldChipLineHeight});
    ${textFieldTokens.chipClearContentMarginLeft}: var(${comboboxTokens.textFieldChipClearContentMarginLeft});
    ${textFieldTokens.chipClearContentMarginRight}: var(${comboboxTokens.textFieldChipClearContentMarginRight});
    ${textFieldTokens.chipOpacityReadonly}: var(${comboboxTokens.textFieldChipOpacityReadonly});

    ${textFieldTokens.focusColor}: var(${comboboxTokens.textFieldFocusColor});

    ${textFieldTokens.indicatorColor}: var(${comboboxTokens.textFieldIndicatorColor});
    ${textFieldTokens.indicatorSizeInner}: var(${comboboxTokens.textFieldIndicatorSizeInner});
    ${textFieldTokens.indicatorSizeOuter}: var(${comboboxTokens.textFieldIndicatorSizeOuter});
    ${textFieldTokens.indicatorLabelPlacementInner}: var(${comboboxTokens.textFieldIndicatorLabelPlacementInner});
    ${textFieldTokens.indicatorLabelPlacementOuter}: var(${comboboxTokens.textFieldIndicatorLabelPlacementOuter});
    ${textFieldTokens.indicatorLabelPlacementInnerRight}: var(${comboboxTokens.textFieldIndicatorLabelPlacementInnerRight});
    ${textFieldTokens.indicatorLabelPlacementOuterRight}: var(${comboboxTokens.textFieldIndicatorLabelPlacementOuterRight});
    ${textFieldTokens.clearIndicatorLabelPlacementInner}: var(${comboboxTokens.textFieldClearIndicatorLabelPlacementInner});
    ${textFieldTokens.clearIndicatorLabelPlacementInnerRight}: var(${comboboxTokens.textFieldClearIndicatorLabelPlacementInnerRight});
    ${textFieldTokens.clearIndicatorHintInnerRight}: var(${comboboxTokens.textFieldClearIndicatorHintInnerRight});
`;
