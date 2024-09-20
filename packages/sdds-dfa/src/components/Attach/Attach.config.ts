import { css, attachTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${attachTokens.buttonColor}: var(--inverse-text-primary);
                ${attachTokens.buttonValueColor}: var(--inverse-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-solid-default);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}:x var(--inverse-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${attachTokens.buttonColorActive}: var(--inverse-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-solid-default-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--inverse-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-solid-default);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--inverse-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-solid-default-hover);
                ${attachTokens.iconButtonColorActive}: var(--inverse-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-solid-default-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            accent: css`
                ${attachTokens.buttonColor}: var(--on-dark-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-accent);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-accent-hover);
                ${attachTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-accent-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-accent);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-accent-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            secondary: css`
                ${attachTokens.buttonColor}: var(--text-primary);
                ${attachTokens.buttonValueColor}: var(--text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-transparent-secondary);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${attachTokens.buttonColorActive}: var(--text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-transparent-secondary-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-transparent-secondary);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
                ${attachTokens.iconButtonColorActive}: var(--text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            clear: css`
                ${attachTokens.buttonColor}: var(--text-primary);
                ${attachTokens.buttonValueColor}: var(--text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-clear);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--text-primary-hover);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.buttonColorActive}: var(--text-primary-active);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--text-primary-hover);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonColorActive}: var(--text-primary-active);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            success: css`
                ${attachTokens.buttonColor}: var(--on-dark-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-positive);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-positive-hover);
                ${attachTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-positive-active);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-positive);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-positive-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-positive-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            warning: css`
                ${attachTokens.buttonColor}: var(--on-dark-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-warning);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-warning-hover);
                ${attachTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-warning-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-warning);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-warning-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-warning-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            critical: css`
                ${attachTokens.buttonColor}: var(--on-dark-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--surface-negative);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--surface-negative-hover);
                ${attachTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--surface-negative-active);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--surface-negative);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--surface-negative-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--surface-negative-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            dark: css`
                ${attachTokens.buttonColor}: var(--on-dark-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${attachTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--on-light-surface-transparent-deep);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--on-light-surface-transparent-deep-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--on-light-surface-transparent-deep-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            black: css`
                ${attachTokens.buttonColor}: var(--on-dark-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-dark-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--on-light-surface-solid-default);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${attachTokens.buttonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--on-light-surface-solid-default-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--on-light-surface-solid-default);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--on-light-surface-solid-default-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-dark-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--on-light-surface-solid-default-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
            white: css`
                ${attachTokens.buttonColor}: var(--on-light-text-primary);
                ${attachTokens.buttonValueColor}: var(--on-light-text-secondary);
                ${attachTokens.buttonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${attachTokens.buttonLoadingBackgroundColor}: var(${attachTokens.buttonBackgroundColor});
                ${attachTokens.buttonColorHover}: var(--on-light-text-primary);
                ${attachTokens.buttonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${attachTokens.buttonColorActive}: var(--on-light-text-primary);
                ${attachTokens.buttonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);

                ${attachTokens.buttonDisabledOpacity}: 0.4;
                ${attachTokens.buttonFocusColor}: var(--surface-accent);

                ${attachTokens.cellColor}: var(--text-primary);
                ${attachTokens.cellLabelColor}: var(--text-secondary);
                ${attachTokens.cellTitleColor}: var(--text-primary);
                ${attachTokens.cellSubtitleColor}: var(--text-secondary);
                ${attachTokens.cellBackgroundColor}: transparent;

                ${attachTokens.iconButtonColor}: var(--on-light-text-primary);
                ${attachTokens.iconButtonBackgroundColor}: var(--on-dark-surface-solid-default);
                ${attachTokens.iconButtonLoadingBackgroundColor}: var(${attachTokens.iconButtonBackgroundColor});
                ${attachTokens.iconButtonColorHover}: var(--on-light-text-primary);
                ${attachTokens.iconButtonBackgroundColorHover}: var(--on-dark-surface-solid-default-hover);
                ${attachTokens.iconButtonColorActive}: var(--on-light-text-primary);
                ${attachTokens.iconButtonBackgroundColorActive}: var(--on-dark-surface-solid-default-active);

                ${attachTokens.iconButtonDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonFocusColor}: var(--surface-accent);

                ${attachTokens.iconButtonCancelColor}: var(--text-secondary);
                ${attachTokens.iconButtonCancelBackgroundColor}: var(--surface-clear);
                ${attachTokens.iconButtonCancelLoadingBackgroundColor}: var(${attachTokens.iconButtonCancelBackgroundColor});
                ${attachTokens.iconButtonCancelColorHover}: var(--text-secondary-hover);
                ${attachTokens.iconButtonCancelBackgroundColorHover}: var(--surface-clear);
                ${attachTokens.iconButtonCancelColorActive}: var(--text-secondary-active);
                ${attachTokens.iconButtonCancelBackgroundColorActive}: var(--surface-clear);

                ${attachTokens.iconButtonCancelDisabledOpacity}: 0.4;
                ${attachTokens.iconButtonCancelFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            l: css`
                ${attachTokens.horizontalGap}: 1.5rem;
                ${attachTokens.verticalGap}: 0.5rem;

                ${attachTokens.buttonHeight}: 3.5rem;
                ${attachTokens.buttonWidth}: 12.5rem;
                ${attachTokens.buttonPadding}: 1.5rem;
                ${attachTokens.buttonRadius}: 0.875rem;
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-l-font-size);
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.5rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.5rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.375rem;

                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.cellTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${attachTokens.cellTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${attachTokens.cellTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${attachTokens.cellTitleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${attachTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${attachTokens.cellTitleLineHeight}: var(--plasma-typo-body-l-line-height);

                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.iconButtonHeight}: 3.5rem;
                ${attachTokens.iconButtonWidth}: 3.5rem;
                ${attachTokens.iconButtonPadding}: 1.5rem;
                ${attachTokens.iconButtonRadius}: 0.875rem;
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-l-font-family);
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-l-font-size);
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-l-font-style);
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-l-line-height);

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;
            `,
            m: css`
                ${attachTokens.horizontalGap}: 1.25rem;
                ${attachTokens.verticalGap}: 0.5rem;

                ${attachTokens.buttonHeight}: 3rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1.25rem;
                ${attachTokens.buttonRadius}: 0.75rem;
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.375rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.375rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.375rem;

                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${attachTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.iconButtonHeight}: 3rem;
                ${attachTokens.iconButtonWidth}: 3rem;
                ${attachTokens.iconButtonPadding}: 1.25rem;
                ${attachTokens.iconButtonRadius}: 0.75rem;
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-m-font-family);
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-m-font-size);
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-m-font-style);
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-m-line-height);

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;
            `,
            s: css`
                ${attachTokens.horizontalGap}: 1rem;
                ${attachTokens.verticalGap}: 0.375rem;

                ${attachTokens.buttonHeight}: 2.5rem;
                ${attachTokens.buttonWidth}: 11.25rem;
                ${attachTokens.buttonPadding}: 1rem;
                ${attachTokens.buttonRadius}: 0.625rem;
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.buttonSpinnerSize}: 1.375rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.375rem;

                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.cellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.cellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.cellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.cellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${attachTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.cellTitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonHeight}: 2.5rem;
                ${attachTokens.iconButtonWidth}: 2.5rem;
                ${attachTokens.iconButtonPadding}: 1rem;
                ${attachTokens.iconButtonRadius}: 0.625rem;
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-s-font-family);
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-s-font-size);
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-s-font-style);
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-s-line-height);

                ${attachTokens.iconButtonSpinnerSize}: 1.375rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;
            `,
            xs: css`
                ${attachTokens.horizontalGap}: 0.75rem;
                ${attachTokens.verticalGap}: 0.25rem;

                ${attachTokens.buttonHeight}: 2rem;
                ${attachTokens.buttonWidth}: 10rem;
                ${attachTokens.buttonPadding}: 0.75rem;
                ${attachTokens.buttonRadius}: 0.5rem;
                ${attachTokens.buttonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.buttonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.buttonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.buttonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${attachTokens.buttonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.buttonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.buttonSpinnerSize}: 1rem;
                ${attachTokens.buttonSpinnerColor}: inherit;

                ${attachTokens.buttonLeftContentMargin}: 0 0.25rem 0 -0.125rem;
                ${attachTokens.buttonRightContentMargin}: 0 -0.125rem 0 0.25rem;
                ${attachTokens.buttonValueMargin}: 0 0 0 0.25rem;

                ${attachTokens.cellWidth}: fit-content;

                ${attachTokens.cellPadding}: 0rem;
                ${attachTokens.cellPaddingLeftContent}: 0rem;
                ${attachTokens.cellPaddingContent}: 0rem;
                ${attachTokens.cellPaddingRightContent}: 0rem;

                ${attachTokens.cellTextboxGap}: 0.125rem;
                ${attachTokens.cellGap}: 0.25rem;

                ${attachTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${attachTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${attachTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${attachTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonHeight}: 2rem;
                ${attachTokens.iconButtonWidth}: 2rem;
                ${attachTokens.iconButtonPadding}: 0.75rem;
                ${attachTokens.iconButtonRadius}: 0.5rem;
                ${attachTokens.iconButtonFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.iconButtonFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.iconButtonFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.iconButtonFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${attachTokens.iconButtonLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.iconButtonLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonSpinnerSize}: 1rem;
                ${attachTokens.iconButtonSpinnerColor}: inherit;

                ${attachTokens.iconButtonCancelHeight}: 2rem;
                ${attachTokens.iconButtonCancelWidth}: 2rem;
                ${attachTokens.iconButtonCancelPadding}: 0.75rem;
                ${attachTokens.iconButtonCancelRadius}: 0.5rem;
                ${attachTokens.iconButtonCancelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${attachTokens.iconButtonCancelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${attachTokens.iconButtonCancelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${attachTokens.iconButtonCancelFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${attachTokens.iconButtonCancelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${attachTokens.iconButtonCancelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${attachTokens.iconButtonCancelSpinnerSize}: 1rem;
                ${attachTokens.iconButtonCancelSpinnerColor}: inherit;
            `,
        },
    },
};
