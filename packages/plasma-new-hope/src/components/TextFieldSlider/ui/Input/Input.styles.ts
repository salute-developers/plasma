import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { textFieldConfig, textFieldTokens } from 'src/components/TextField';

import { tokens } from '../../TextFieldSlider.tokens';

const mergedTextFieldConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedTextFieldConfig);

// NOTE: переопределение токенов TextField
export const StyledInput = styled(TextField)`
    ${textFieldTokens.color}: var(${tokens.textFieldColor});
    ${textFieldTokens.placeholderColor}: var(${tokens.textFieldPlaceholderColor});
    ${textFieldTokens.placeholderColorFocus}: var(${tokens.textFieldPlaceholderColorFocus});
    ${textFieldTokens.caretColor}: var(${tokens.textFieldCaretColor});
    ${textFieldTokens.focusColor}: var(${tokens.textFieldFocusColor});

    ${textFieldTokens.backgroundColor}: var(${tokens.textFieldBackgroundColor});
    ${textFieldTokens.backgroundColorHover}: var(${tokens.textFieldBackgroundColorHover});
    ${textFieldTokens.backgroundColorFocus}: var(${tokens.textFieldBackgroundColorFocus});
    
    ${textFieldTokens.borderWidth}: var(${tokens.textFieldBorderWidth});
    ${textFieldTokens.borderRadius}: var(${tokens.textFieldBorderRadius});
    ${textFieldTokens.borderColor}: var(${tokens.textFieldBorderColor});
    ${textFieldTokens.borderColorHover}: var(${tokens.textFieldBorderColorHover});
    ${textFieldTokens.borderColorFocus}: var(${tokens.textFieldBorderColorFocus});

    ${textFieldTokens.colorReadOnly}: var(${tokens.textFieldColorReadOnly});
    ${textFieldTokens.backgroundColorReadOnly}: var(${tokens.textFieldBackgroundColorReadOnly});
    ${textFieldTokens.readOnlyOpacity}: var(${tokens.textFieldReadOnlyOpacity});
    ${textFieldTokens.borderColorReadOnly}: var(${tokens.textFieldBorderColorReadOnly});
    ${textFieldTokens.placeholderColorReadOnly}: var(${tokens.textFieldPlaceholderColorReadOnly});

    ${textFieldTokens.height}: var(${tokens.textFieldHeight});
    ${textFieldTokens.padding}: var(${tokens.textFieldPadding});

    ${textFieldTokens.labelInnerPadding}: var(${tokens.labelInnerPadding});
    ${textFieldTokens.contentLabelInnerPadding}: var(${tokens.contentLabelInnerPadding});

    ${textFieldTokens.optionalColor}: var(${tokens.optionalColor});
    ${textFieldTokens.labelOffset}: var(${tokens.labelOffset});

    ${textFieldTokens.labelFontFamily}: var(${tokens.labelFontFamily});
    ${textFieldTokens.labelFontStyle}: var(${tokens.labelFontStyle});
    ${textFieldTokens.labelFontSize}: var(${tokens.labelFontSize});
    ${textFieldTokens.labelFontWeight}: var(${tokens.labelFontWeight});
    ${textFieldTokens.labelLetterSpacing}: var(${tokens.labelLetterSpacing});
    ${textFieldTokens.labelLineHeight}: var(${tokens.labelLineHeight});

    ${textFieldTokens.labelInnerFontFamily}: var(${tokens.labelInnerFontFamily});
    ${textFieldTokens.labelInnerFontSize}: var(${tokens.labelInnerFontSize});
    ${textFieldTokens.labelInnerFontStyle}: var(${tokens.labelInnerFontStyle});
    ${textFieldTokens.labelInnerFontWeight}: var(${tokens.labelInnerFontWeight});
    ${textFieldTokens.labelInnerLetterSpacing}: var(${tokens.labelInnerLetterSpacing});
    ${textFieldTokens.labelInnerLineHeight}: var(${tokens.labelInnerLineHeight});
    ${textFieldTokens.labelColorReadOnly}: var(${tokens.labelColorReadOnly});

    ${textFieldTokens.titleCaptionColor}: var(${tokens.titleCaptionColor});
    ${textFieldTokens.titleCaptionColorReadOnly}: var(${tokens.titleCaptionColorReadOnly});
    ${textFieldTokens.titleCaptionInnerLabelOffset}: var(${tokens.titleCaptionInnerLabelOffset});
    ${textFieldTokens.titleCaptionFontFamily}: var(${tokens.titleCaptionFontFamily});
    ${textFieldTokens.titleCaptionFontStyle}: var(${tokens.titleCaptionFontStyle});
    ${textFieldTokens.titleCaptionFontSize}: var(${tokens.titleCaptionFontSize});
    ${textFieldTokens.titleCaptionFontWeight}: var(${tokens.titleCaptionFontWeight});
    ${textFieldTokens.titleCaptionLetterSpacing}: var(${tokens.titleCaptionLetterSpacing});
    ${textFieldTokens.titleCaptionLineHeight}: var(${tokens.titleCaptionLineHeight});

    ${textFieldTokens.indicatorColor}: var(${tokens.indicatorColor});
    ${textFieldTokens.indicatorSizeInner}: var(${tokens.indicatorSize});
    ${textFieldTokens.indicatorSizeOuter}: var(${tokens.indicatorSizeOuter});
    ${textFieldTokens.indicatorLabelPlacementInner}: var(${tokens.indicatorPlacement});
    ${textFieldTokens.indicatorLabelPlacementOuter}: var(${tokens.indicatorOuterPlacement});
    ${textFieldTokens.indicatorLabelPlacementInnerRight}: var(${tokens.indicatorPlacementRight});
    ${textFieldTokens.indicatorLabelPlacementOuterRight}: var(${tokens.indicatorOuterPlacementRight});

    ${textFieldTokens.leftContentMargin}: var(${tokens.textFieldLeftContentMargin});
    ${textFieldTokens.rightContentMargin}: var(${tokens.textFieldRightContentMargin});

    ${textFieldTokens.fontFamily}: var(${tokens.textFieldFontFamily});
    ${textFieldTokens.fontSize}: var(${tokens.textFieldFontSize});
    ${textFieldTokens.fontStyle}: var(${tokens.textFieldFontStyle});
    ${textFieldTokens.fontWeight}: var(${tokens.textFieldFontWeight});
    ${textFieldTokens.letterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${textFieldTokens.lineHeight}: var(${tokens.textFieldLineHeight});

    ${textFieldTokens.disabledOpacity}: var(${tokens.disabledOpacity});
    
    ${textFieldTokens.textBeforeColor}: var(${tokens.textFieldTextBeforeColor});
    ${textFieldTokens.textAfterColor}: var(${tokens.textFieldTextAfterColor});
    ${textFieldTokens.textBeforeMargin}: var(${tokens.textFieldTextBeforeMargin});
    ${textFieldTokens.textAfterMargin}: var(${tokens.textFieldTextAfterMargin});

    ${textFieldTokens.contentSlotColor}: var(${tokens.textFieldContentSlotColor}, var(${tokens.textFieldColor}));
    ${textFieldTokens.contentSlotColorHover}: var(${tokens.textFieldContentSlotColorHover}, var(${tokens.textFieldColor}));
    ${textFieldTokens.contentSlotColorActive}: var(${tokens.textFieldContentSlotColorActive}, var(${tokens.textFieldColor}));

    ${textFieldTokens.contentSlotRightColor}: var(${tokens.textFieldContentRightSlotColor}, var(${textFieldTokens.contentSlotColor}));
    ${textFieldTokens.contentSlotRightColorHover}: var(${tokens.textFieldContentRightSlotColorHover}, var(${textFieldTokens.contentSlotRightColor}));
    ${textFieldTokens.contentSlotRightOpacityReadOnly}: var(${tokens.textFieldContentSlotRightOpacityReadOnly});

    ${textFieldTokens.hintMargin}: var(${tokens.hintMargin});
    ${textFieldTokens.hintTargetSize}: var(${tokens.hintTargetSize});
    ${textFieldTokens.hintCustomIconTargetSize}: var(${tokens.hintCustomIconTargetSize});
    ${textFieldTokens.hintIconColor}: var(${tokens.hintIconColor});
    ${textFieldTokens.hintInnerLabelPlacementOffset}: var(${tokens.hintInnerLabelPlacementOffset});

    ${textFieldTokens.tooltipPaddingTop} var(${tokens.hintTooltipPaddingTop});
    ${textFieldTokens.tooltipPaddingRight} var(${tokens.hintTooltipPaddingRight});
    ${textFieldTokens.tooltipPaddingBottom} var(${tokens.hintTooltipPaddingBottom});
    ${textFieldTokens.tooltipPaddingLeft} var(${tokens.hintTooltipPaddingLeft});
    ${textFieldTokens.tooltipMinHeight} var(${tokens.hintTooltipMinHeight});
    ${textFieldTokens.tooltipBackgroundColor} var(${tokens.hintTooltipBackgroundColor});
    ${textFieldTokens.tooltipBoxShadow} var(${tokens.hintTooltipBoxShadow});
    ${textFieldTokens.tooltipBorderRadius} var(${tokens.hintTooltipBorderRadius});
    ${textFieldTokens.tooltipColor} var(${tokens.hintTooltipColor});
    ${textFieldTokens.tooltipTextFontFamily} var(${tokens.hintTooltipTextFontFamily});
    ${textFieldTokens.tooltipTextFontSize} var(${tokens.hintTooltipTextFontSize});
    ${textFieldTokens.tooltipTextFontStyle} var(${tokens.hintTooltipTextFontStyle});
    ${textFieldTokens.tooltipTextFontWeight} var(${tokens.hintTooltipTextFontWeight});
    ${textFieldTokens.tooltipTextFontLetterSpacing} var(${tokens.hintTooltipTextFontLetterSpacing});
    ${textFieldTokens.tooltipTextFontLineHeight} var(${tokens.hintTooltipTextFontLineHeight});
    ${textFieldTokens.tooltipContentLeftMargin} var(${tokens.hintTooltipContentLeftMargin});
    ${textFieldTokens.tooltipArrowMaskWidth} var(${tokens.hintTooltipArrowMaskWidth});
    ${textFieldTokens.tooltipArrowMaskHeight} var(${tokens.hintTooltipArrowMaskHeight});
    ${textFieldTokens.tooltipArrowMaskImage} var(${tokens.hintTooltipArrowMaskImage});
    ${textFieldTokens.tooltipArrowBackground} var(${tokens.hintTooltipArrowBackground});
    ${textFieldTokens.tooltipArrowHeight} var(${tokens.hintTooltipArrowHeight});
    ${textFieldTokens.tooltipArrowEdgeMargin} var(${tokens.hintTooltipArrowEdgeMargin});
`;
