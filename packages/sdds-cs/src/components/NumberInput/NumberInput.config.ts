import { css, numberInputTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
        segmentation: 'solid',
        shape: 'cornered',
        inputBackgroundType: 'clear',
    },
    variations: {
        view: {
            default: css`
                ${tokens.caretColor}: var(--text-accent);
                ${tokens.errorColor}: var(--text-negative);

                ${tokens.colorSolid}: var(--text-primary);
                ${tokens.additionalTextColorSolid}: var(--text-tertiary);
                ${tokens.backgroundColorSolid}: var(--surface-solid-card);
                ${tokens.wrapperBorderColor}: var(--outline-solid-primary);
                ${tokens.wrapperBorderColorFocus}: var(--outline-accent);

                ${tokens.iconButtonColor}: var(--text-accent);
                ${tokens.iconButtonBackgroundColor}: var(--surface-solid-card);
                ${tokens.iconButtonColorSolidHover}: var(--text-accent-minor);
                ${tokens.iconButtonColorSolidActive}: var(--text-accent-active);

                ${tokens.actionButtonDisabledOpacity}: 0.4;

                ${tokens.loaderSpinnerColor}: inherit;
                ${tokens.loaderSpinnerColorSolid}: inherit;
            `,
        },
        size: {
            s: css`
                ${tokens.rootMinWidth}: 8.75rem;
                ${tokens.iconButtonHeight}: 2.625rem;
                ${tokens.iconButtonWidth}: 2.625rem;
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
                ${tokens.textWrapperHeight}: 2.625rem;
                ${tokens.textWrapperPadding}: 0.688rem 0.875rem;
                ${tokens.rootBorderWidth}: 0.125rem;

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
        },
        shape: {
            cornered: css``,
            pilled: css`
                ${tokens.iconButtonRadius}: 50%;
            `,
        },
        inputBackgroundType: {
            clear: css`
                ${tokens.backgroundColor}: transparent;
                ${tokens.backgroundColorHover}: transparent;
            `,
        },
        segmentation: {
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
