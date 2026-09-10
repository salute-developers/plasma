import { css, dialogModalTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.dialogModalOverlayWithBlurColor}: rgba(35, 35, 35, 0.2);
                ${tokens.dialogModalOverlayColor}: var(--overlay-soft);

                ${tokens.dialogModalBackground}: var(--surface-solid-card);
                ${tokens.dialogModalColor}: var(--text-primary);
                ${tokens.dialogModalBoxShadow}: var(--shadow-down-soft-l);

                ${tokens.dialogModalCloseButtonBackground}: var(--surface-transparent-secondary);
                ${tokens.dialogModalCloseButtonColor}: var(--text-primary);
                ${tokens.dialogModalCloseButtonHoverBackground}: var(--surface-transparent-secondary-hover);
                ${tokens.dialogModalCloseButtonHoverColor}: var(--text-primary-hover);
                ${tokens.dialogModalCloseButtonActiveBackground}: var(--surface-transparent-secondary-active);
                ${tokens.dialogModalCloseButtonActiveColor}: var(--text-primary-active);
                ${tokens.dialogModalCloseButtonFocusColor}: var(--surface-accent);

                ${tokens.dialogModalTitleColor}: var(--text-primary);
            `,
        },
        size: {
            m: css`
                ${tokens.dialogModalWidth}: 24.375rem;
                ${tokens.dialogModalBorderRadius}: var(--border-radius-xxl);
                ${tokens.dialogModalPadding}: 1rem;
                ${tokens.dialogModalInnerPadding}: 0.5rem 0.5rem 0 0.5rem;
                ${tokens.dialogModalInnerGap}: 0.5rem;
                ${tokens.dialogModalImageMarginBottom}: 0.5rem;

                ${tokens.dialogModalActionsMarginTop}: 1.5rem;

                ${tokens.dialogModalCloseButtonSize}: 2rem;
                ${tokens.dialogModalCloseButtonRadius}: 50%;
                ${tokens.dialogModalCloseButtonTop}: 1.5rem;
                ${tokens.dialogModalCloseButtonRight}: 1.5rem;

                ${tokens.dialogModalImageBorderRadius}: var(--border-radius-xl);

                ${tokens.dialogModalTitleFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.dialogModalTitleFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.dialogModalTitleFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.dialogModalTitleFontWeight}: 600;
                ${tokens.dialogModalTitleLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.dialogModalTitleLineHeight}: var(--plasma-typo-h3-line-height);
            `,
            s: css`
                ${tokens.dialogModalWidth}: 26.25rem;
                ${tokens.dialogModalBorderRadius}: var(--border-radius-xl);
                ${tokens.dialogModalPadding}: 1.5rem;
                ${tokens.dialogModalInnerPadding}: 0 0.5rem;
                ${tokens.dialogModalInnerGap}: 0.5rem;
                ${tokens.dialogModalImageMarginBottom}: 0.5rem;

                ${tokens.dialogModalActionsMarginTop}: 2rem;

                ${tokens.dialogModalCloseButtonSize}: 2rem;
                ${tokens.dialogModalCloseButtonRadius}: 50%;
                ${tokens.dialogModalCloseButtonTop}: 1.5rem;
                ${tokens.dialogModalCloseButtonRight}: 1.5rem;

                ${tokens.dialogModalImageBorderRadius}: var(--border-radius-l);

                ${tokens.dialogModalTitleFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.dialogModalTitleFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.dialogModalTitleFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.dialogModalTitleFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.dialogModalTitleLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.dialogModalTitleLineHeight}: var(--plasma-typo-h3-line-height);
            `,
        },
    },
};
