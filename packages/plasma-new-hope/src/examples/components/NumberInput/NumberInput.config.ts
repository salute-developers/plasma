import { css } from '@linaria/core';

import { numberInputTokens as tokens } from '../../../components/NumberInput';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
        shape: 'cornered',
        inputBackgroundType: 'fill',
    },
    variations: {
        view: {
            default: css`
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.errorColor}: var(--text-negative);
                ${tokens.backgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.color}: var(--text-primary);
                ${tokens.colorSolid}: var(--inverse-text-primary);
                ${tokens.additionalTextColor}: var(--text-tertiary);
                ${tokens.additionalTextColorSolid}: var(--inverse-text-tertiary);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.backgroundColorSolidFocus}: var(--inverse-surface-transparent-secondary);
                ${tokens.backgroundColorSolid}: var(--surface-solid-default);

                ${tokens.iconButtonColor}: var(--inverse-text-primary);
                ${tokens.iconButtonBackgroundColor}: var(--surface-solid-default);
                ${tokens.iconButtonColorHover}: var(--inverse-text-primary);
                ${tokens.iconButtonColorSolidHover}: var(--inverse-text-primary-hover);
                ${tokens.iconButtonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${tokens.iconButtonColorActive}: var(--inverse-text-primary);
                ${tokens.iconButtonColorSolidActive}: var(--inverse-text-primary-active);
                ${tokens.iconButtonBackgroundColorActive}: var(--surface-solid-default-active);

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
            secondary: css`
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.errorColor}: var(--text-negative);
                ${tokens.backgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.color}: var(--text-primary);
                ${tokens.colorSolid}: var(--text-primary);
                ${tokens.additionalTextColor}: var(--text-tertiary);
                ${tokens.additionalTextColorSolid}: var(--text-tertiary);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.backgroundColorSolidFocus}: var(--surface-transparent-secondary);
                ${tokens.backgroundColorSolid}: var(--surface-transparent-secondary);

                ${tokens.iconButtonColor}: var(--text-primary);
                ${tokens.iconButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.iconButtonColorHover}: var(--text-primary);
                ${tokens.iconButtonColorSolidHover}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${tokens.iconButtonColorActive}: var(--text-primary);
                ${tokens.iconButtonColorSolidActive}: var(--text-primary-active);
                ${tokens.iconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
            accent: css`
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.caretColorSolid}: var(--inverse-text-primary);
                ${tokens.errorColor}: var(--text-negative);
                ${tokens.backgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.color}: var(--text-primary);
                ${tokens.colorSolid}: var(--on-dark-text-primary);
                ${tokens.additionalTextColor}: var(--text-tertiary);
                ${tokens.additionalTextColorSolid}: var(--on-dark-text-tertiary);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.backgroundColorSolidFocus}: var(--on-dark-surface-transparent-secondary);
                ${tokens.backgroundColorSolid}: var(--surface-accent);

                ${tokens.iconButtonColor}: var(--on-dark-text-primary);
                ${tokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${tokens.iconButtonColorHover}: var(--inverse-text-primary);
                ${tokens.iconButtonColorSolidHover}: var(--on-dark-text-primary-hover);
                ${tokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${tokens.iconButtonColorActive}: var(--inverse-text-primary);
                ${tokens.iconButtonColorSolidActive}: var(--on-dark-text-primary-active);
                ${tokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
            clear: css`
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.caretColorSolid}: var(--text-accent);
                ${tokens.errorColor}: var(--text-negative);
                ${tokens.backgroundErrorColor}: var(--surface-transparent-negative);

                ${tokens.color}: var(--text-primary);
                ${tokens.colorSolid}: var(--text-primary);
                ${tokens.iconButtonColorSolidHover}: var(--text-primary-hover);
                ${tokens.additionalTextColor}: var(--text-tertiary);
                ${tokens.additionalTextColorSolid}: var(--text-tertiary);
                ${tokens.backgroundColorFocus}: var(--surface-transparent-secondary);
                ${tokens.backgroundColorSolidFocus}: var(--surface-transparent-secondary);
                ${tokens.backgroundColorSolid}: transparent;

                ${tokens.iconButtonColor}: var(--text-primary);
                ${tokens.iconButtonBackgroundColor}: transparent;
                ${tokens.iconButtonColorHover}: var(--text-primary-hover);
                ${tokens.iconButtonBackgroundColorHover}: transparent;
                ${tokens.iconButtonColorActive}: var(--text-primary-active);
                ${tokens.iconButtonBackgroundColorActive}: transparent;

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
        },
        size: {
            l: css`
                ${tokens.rootMinWidth}: 11.75rem;
                ${tokens.iconButtonHeight}: 3.5rem;
                ${tokens.iconButtonWidth}: 3.5rem;
                ${tokens.iconButtonPadding}: 1.5rem;
                ${tokens.iconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.iconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.iconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.iconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.iconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.iconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.iconButtonRadius}: 0.875rem;
                ${tokens.iconButtonSegmentationRadius}: 0.375rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.875rem;
                ${tokens.textWrapperHeight}: 3.5rem;
                ${tokens.textWrapperPadding}: 1.063rem 1.125rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1.375rem;
            `,
            m: css`
                ${tokens.rootMinWidth}: 10.25rem;
                ${tokens.iconButtonHeight}: 3rem;
                ${tokens.iconButtonWidth}: 3rem;
                ${tokens.iconButtonPadding}: 1.25rem;
                ${tokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.iconButtonRadius}: 0.75rem;
                ${tokens.iconButtonSegmentationRadius}: 0.25rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.75rem;
                ${tokens.textWrapperHeight}: 3rem;
                ${tokens.textWrapperPadding}: 0.875rem 1rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1.375rem;
            `,
            s: css`
                ${tokens.rootMinWidth}: 8.75rem;
                ${tokens.iconButtonHeight}: 2.5rem;
                ${tokens.iconButtonWidth}: 2.5rem;
                ${tokens.iconButtonPadding}: 1rem;
                ${tokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.iconButtonRadius}: 0.625rem;
                ${tokens.iconButtonSegmentationRadius}: 0.25rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.625rem;
                ${tokens.textWrapperHeight}: 2.5rem;
                ${tokens.textWrapperPadding}: 0.688rem 0.875rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1.375rem;
            `,
            xs: css`
                ${tokens.rootMinWidth}: 6.875rem;
                ${tokens.iconButtonHeight}: 2rem;
                ${tokens.iconButtonWidth}: 2rem;
                ${tokens.iconButtonPadding}: 0.75rem;
                ${tokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.iconButtonRadius}: 0.5rem;
                ${tokens.iconButtonSegmentationRadius}: 0.125rem;

                ${tokens.inputWrapperMargin}: 0 0.125rem;
                ${tokens.inputWrapperBorderRadius}: 0.5rem;
                ${tokens.textWrapperHeight}: 2rem;
                ${tokens.textWrapperPadding}: 0.563rem 0.625rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.textBeforeMarginRight}: 0.25rem;
                ${tokens.textAfterMarginLeft}: 0.25rem;

                ${tokens.loaderSpinnerSize}: 1rem;
            `,
        },
        shape: {
            cornered: css``,
            pilled: css`
                ${tokens.iconButtonRadius}: 50%;
            `,
        },
        inputBackgroundType: {
            fill: css`
                ${tokens.backgroundColor}: var(--surface-transparent-primary);
                ${tokens.backgroundColorHover}: var(--surface-transparent-primary);
            `,
            clear: css`
                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
            `,
        },
        segmentation: {
            default: css``,
            segmented: css``,
            solid: css`
                ${tokens.iconButtonSegmentationRadius}: 0;
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
