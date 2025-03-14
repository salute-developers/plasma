import { css, selectTokens } from '@salutejs/plasma-new-hope/styled-components';
import { selectTokens as tokens } from '@salutejs/plasma-new-hope';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        labelPlacement: 'outer',
        chipView: 'default',
    },
    variations: {
        view: {
            default: css`
                ${selectTokens.textFieldColor}: var(--text-primary);
                ${selectTokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${selectTokens.textFieldBackgroundColor}: var(--surface-solid-card);
                ${selectTokens.textFieldBackgroundColorFocus}: var(--surface-solid-card);
                ${selectTokens.textFieldLabelColor}: var(--text-primary);
                ${selectTokens.textFieldLeftHelperColor}: var(--text-secondary);
                ${selectTokens.textFieldContentSlotColor}: var(--text-secondary);
                ${selectTokens.textFieldBorderColor}: var(--outline-solid-primary);
                ${selectTokens.textFieldBorderColorHover}: var(--outline-solid-primary-hover);
                ${selectTokens.textFieldBorderColorFocus}: var(--outline-accent);

                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${selectTokens.buttonColor}: var(--text-accent);
                ${selectTokens.buttonColorHover}: #1A9E32;
                ${selectTokens.buttonColorActive}: var(--text-accent-active);
                ${selectTokens.buttonArrowColor}: var(--text-primary);
                ${selectTokens.buttonArrowColorHover}: var(--text-primary-hover);
                ${selectTokens.buttonArrowColorActive}: var(--text-primary-hover);
                ${selectTokens.buttonBackgroundColor}: var(--surface-solid-primary);
                ${selectTokens.buttonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${selectTokens.buttonBackgroundColorActive}: var(--surface-solid-primary-active);

                ${selectTokens.disclosureIconColor}: var(--text-accent);
                ${selectTokens.disclosureIconColorHover}: #1A9E32;
                ${selectTokens.itemBackgroundHover}: var(--surface-transparent-accent);

                ${selectTokens.dropdownBorderColor}: var(--outline-solid-primary);
                ${selectTokens.checkboxIconColor}: var(--text-accent);
            `,
            negative: css`
                ${selectTokens.textFieldColor}: var(--text-primary);
                ${selectTokens.textFieldPlaceholderColor}: var(--text-secondary);
                ${selectTokens.textFieldBackgroundColor}: var(--surface-solid-card);
                ${selectTokens.textFieldBackgroundColorFocus}: var(--surface-solid-card);
                ${selectTokens.textFieldLabelColor}: var(--text-primary);
                ${selectTokens.textFieldLeftHelperColor}: var(--text-negative);
                ${selectTokens.textFieldContentSlotColor}: var(--text-secondary);
                ${selectTokens.textFieldBorderColor}: var(--outline-negative);
                ${selectTokens.textFieldBorderColorHover}: var(--outline-negative-hover);
                ${selectTokens.textFieldBorderColorFocus}: var(--outline-accent);

                ${tokens.textFieldIndicatorColor}: var(--surface-negative);
                ${tokens.textFieldOptionalColor}: var(--text-tertiary);

                ${selectTokens.buttonColor}: var(--text-accent);
                ${selectTokens.buttonColorHover}: #1A9E32;
                ${selectTokens.buttonColorActive}: var(--text-accent-active);
                ${selectTokens.buttonArrowColor}: var(--text-primary);
                ${selectTokens.buttonArrowColorHover}: var(--text-primary-hover);
                ${selectTokens.buttonArrowColorActive}: var(--text-primary-hover);
                ${selectTokens.buttonBackgroundColor}: var(--surface-solid-primary);
                ${selectTokens.buttonBackgroundColorHover}: var(--surface-solid-primary-hover);
                ${selectTokens.buttonBackgroundColorActive}: var(--surface-solid-primary-active);

                ${selectTokens.disclosureIconColor}: var(--text-accent);
                ${selectTokens.disclosureIconColorHover}: #1A9E32;
                ${selectTokens.itemBackgroundHover}: var(--surface-transparent-accent);

                ${selectTokens.dropdownBorderColor}: var(--outline-solid-primary);
                ${selectTokens.checkboxIconColor}: var(--text-accent);
            `,
        },
        size: {
            s: css`
                ${tokens.textFieldHeight}: 2.5rem;
                ${tokens.textFieldPadding}: 0.6875rem 0.875rem 0.6875rem 0.875rem;
                ${tokens.textFieldPaddingWithChips}: 0.375rem;
                ${tokens.textFieldBorderRadius}: 0.625rem;
                ${tokens.textFieldBorderWidth}: 0.125rem;

                ${tokens.textFieldLeftContentMargin}: -0.1875rem 0.25rem -0.1875rem -0.125rem;
                ${tokens.textFieldRightContentMargin}: -0.1875rem -0.125rem -0.1875rem 0.75rem;

                ${tokens.textFieldTextBeforeMargin}: 0 0.25rem 0 0;
                ${tokens.textFieldTextAfterMargin}: 0 0 0 0.25rem;

                ${tokens.textFieldFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFieldFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFieldFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFieldFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textFieldLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textFieldLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textFieldLabelOffset}: 0.5rem;
                ${tokens.textFieldLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLeftHelperOffset}: 0.25rem;
                ${tokens.textFieldLeftHelperFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldLeftHelperFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldLeftHelperFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldLeftHelperFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldLeftHelperLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldLeftHelperLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textFieldLabelInnerPadding}: 0.3125rem 0 0 0;
                ${tokens.textFieldContentLabelInnerPadding}: 1.0625rem 0 0.3125rem 0;

                ${tokens.textFieldIndicatorSizeInner}: 0.375rem;
                ${tokens.textFieldIndicatorSizeOuter}: 0.375rem;
                ${tokens.textFieldIndicatorLabelPlacementInner}: 0 0 0 0;
                ${tokens.textFieldIndicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${tokens.textFieldIndicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${tokens.textFieldIndicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
                ${tokens.textFieldClearIndicatorLabelPlacementInner}: 1.063rem auto auto -0.75rem;
                ${tokens.textFieldClearIndicatorLabelPlacementInnerRight}: 1.063rem -0.75rem auto auto;
                ${tokens.textFieldClearIndicatorHintInnerRight}: 1.063rem -2.125rem auto auto;

                ${tokens.textFieldChipGap}: 0.25rem;
                ${tokens.textFieldChipBorderRadius}: 0.25rem;
                ${tokens.textFieldChipWidth}: auto;
                ${tokens.textFieldChipHeight}: 1.75rem;
                ${tokens.textFieldChipPadding}: 0 0.5rem 0 0.75rem;
                ${tokens.textFieldChipClearContentMarginLeft}: 0.375rem;
                ${tokens.textFieldChipClearContentMarginRight}: 0rem;
                ${tokens.textFieldChipCloseIconSize}: 1rem;
                ${tokens.textFieldChipFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFieldChipFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFieldChipFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFieldChipFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textFieldChipLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textFieldChipLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.buttonArrowMargin}: 0 -0.125rem 0 0.25rem;
                ${tokens.targetHeight}: 2.5rem;
                ${tokens.buttonPadding}: 1rem 0 1rem;

                ${tokens.padding}: 0.125rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.dropdownBorderWidth}: 0.125rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.5rem 0.75rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.5rem;
                ${tokens.itemIconSize}: 1.5rem;
                ${tokens.itemIconSizeTight}: 1rem;
                ${tokens.itemIconMargin}: 0 0.375rem 0 0;

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.checkboxTriggerSize}: 1.25rem;
                ${tokens.checkboxTriggerSizeTight}: 0.875rem;
                ${tokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${tokens.checkboxTriggerBorderRadiusTight}: 0.25rem;
                ${tokens.checkboxFillColor}: var(--text-accent);
                ${tokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${tokens.checkboxTriggerBorderColor}: var(--outline-accent);

                ${tokens.indicatorSize}: 0.375rem;
            `,
        },
        labelPlacement: {
            inner: css`
                ${tokens.textFieldPlaceholderColor}: var(--plasma-input-label-color, var(--plasma-input-placeholder-color, var(--plasma-colors-secondary)));
                ${tokens.textFieldLabelInnerFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFieldLabelInnerFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFieldLabelInnerFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFieldLabelInnerFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textFieldLabelInnerLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textFieldLabelInnerLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            outer: css``,
        },
        chipView: {
            default: css`
                ${tokens.textFieldChipColor}: var(--inverse-text-primary);
                ${tokens.textFieldChipBackground}: var(--surface-solid-default);
                ${tokens.textFieldChipBackgroundHover}: var(--surface-solid-default-hover);
                ${tokens.textFieldChipCloseIconColor}: var(--inverse-text-primary);
                ${tokens.textFieldChipOpacityReadonly}: 1;
            `,
        },
        disabled: {
            true: css`
                ${tokens.textFieldDisabledOpacity}: 1;
                ${tokens.textFieldBackgroundColor}: var(--surface-solid-primary);
                ${tokens.textFieldBackgroundColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColor}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorHover}: var(--surface-solid-primary);
                ${tokens.textFieldBorderColorFocus}: var(--surface-solid-primary);
                ${tokens.textFieldColor}: var(--text-secondary);
            `,
        },
        readOnly: {
            true: css`
                ${tokens.disclosureIconOpacityReadOnly}: 0.4;
                ${tokens.textFieldColorReadOnly}: var(--text-primary);
                ${tokens.textFieldBackgroundColorReadOnly}: var(--surface-transparent-primary);
                ${tokens.textFieldPlaceholderColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLeftHelperColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldTitleCaptionColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldLabelColorReadOnly}: var(--text-secondary);
                ${tokens.textFieldDividerColorReadOnly}: var(--surface-transparent-primary);
            `,
        },
    },
};
