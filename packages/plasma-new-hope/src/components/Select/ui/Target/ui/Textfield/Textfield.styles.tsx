import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../../../../../engines';
import { textFieldConfig, textFieldTokens } from '../../../../../TextField';
import { tokens, classes } from '../../../../Select.tokens';
import { IconDisclosureDownCentered } from '../../../../../_Icon';

const mergedConfig = mergeConfig(textFieldConfig);
const TextField = component(mergedConfig);

export const StyledTextField = styled(TextField)<{ opened: boolean }>`
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

    ${textFieldTokens.chipHeight}: var(${tokens.textFieldChipHeight});
    ${textFieldTokens.chipBorderRadius}: var(${tokens.textFieldChipBorderRadius});
    ${textFieldTokens.chipGap}: var(${tokens.textFieldChipGap});
    ${textFieldTokens.chipColor}: var(${tokens.textFieldChipColor});
    ${textFieldTokens.chipColorHover}: var(${tokens.textFieldChipColorHover});
    ${textFieldTokens.chipScaleHover}: var(${tokens.textFieldChipScaleHover});
    ${textFieldTokens.chipBackground}: var(${tokens.textFieldChipBackground});
    ${textFieldTokens.chipBackgroundActive}: var(${tokens.textFieldChipBackgroundActive});
    ${textFieldTokens.chipColorActive}: var(${tokens.textFieldChipColorActive});
    ${textFieldTokens.chipScaleActive}: var(${tokens.textFieldChipScaleActive});
    ${textFieldTokens.chipCloseIconColor}: var(${tokens.textFieldChipCloseIconColor});
    ${textFieldTokens.chipOutlineSize}: var(${tokens.textFieldChipOutlineSize});
    ${textFieldTokens.chipWidth}: var(${tokens.textFieldChipWidth});
    ${textFieldTokens.chipPaddingTop}: var(${tokens.textFieldChipPaddingTop});
    ${textFieldTokens.chipPaddingRight}: var(${tokens.textFieldChipPaddingRight});
    ${textFieldTokens.chipPaddingBottom}: var(${tokens.textFieldChipPaddingBottom});
    ${textFieldTokens.chipPaddingLeft}: var(${tokens.textFieldChipPaddingLeft});
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
    ${textFieldTokens.clearIndicatorLabelPlacementInnerRight}:
        var(${tokens.textFieldClearIndicatorLabelPlacementInnerRight});
    ${textFieldTokens.clearIndicatorHintInnerRight}: var(${tokens.textFieldClearIndicatorHintInnerRight});

    ${textFieldTokens.focusColor}: var(${tokens.textFieldFocusColor});

    /* TODO: #1544 */
    & div.input-wrapper:focus-within {
        background-color: var(${tokens.textFieldBackgroundColorFocus});
    }
`;

export const IconArrowWrapper = styled.div<{ disabled: boolean }>`
    line-height: 0;
    color: var(${tokens.disclosureIconColor});
    cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};

    .${classes.arrowInverse} {
        transform: rotate(-180deg);
    }

    &:hover,
    &:active {
        color: ${({ disabled }) =>
            disabled ? `var(${tokens.disclosureIconColor})` : `var(${tokens.disclosureIconColorHover})`};
    }
`;

export const StyledArrow = styled(IconDisclosureDownCentered)``;
