import { tourCardTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.titleColor}: var(--text-primary);
                ${tokens.descriptionColor}: var(--text-primary);
                ${tokens.dotBackground}: var(--surface-transparent-tertiary);
                ${tokens.dotBackgroundHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.dotBackgroundActive}: var(--surface-transparent-tertiary-active);
                ${tokens.dotActiveBackground}: var(--surface-solid-default);
                ${tokens.dotActiveBackgroundHover}: var(--surface-solid-default-hover);
                ${tokens.dotActiveBackgroundActive}: var(--surface-solid-default-active);
                ${tokens.closeButtonColor}: var(--inverse-text-primary);
                ${tokens.closeButtonBackgroundColor}: var(--surface-solid-default);
                ${tokens.closeButtonColorHover}: var(--inverse-text-primary-hover);
                ${tokens.closeButtonColorActive}: var(--inverse-text-primary-active);
                ${tokens.closeButtonFocusColor}: var(--surface-accent);
            `,
        },
        size: {
            s: css`
                ${tokens.padding}: 0.625rem;
                ${tokens.borderRadius}: 2rem;
                ${tokens.gap}: 1.5rem;

                ${tokens.textGap}: 0.25rem;
                ${tokens.textPadding}: 0.625rem 0.5rem 0.5rem 0.5rem;
                ${tokens.textPaddingExtra}: 0.625rem 0.5rem 1.5rem 0.5rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h4-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h4-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h4-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h4-bold-font-weight);
                ${tokens.titleFontLineHeight}: var(--plasma-typo-h4-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.descriptionFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.dotsGap}: 0.5rem;
                ${tokens.dotSize}: 0.5rem;
                ${tokens.dotContainerMargin}: 1rem 0 0.5rem 0;

                ${tokens.actionButtonsMargin}: 1.125rem 0 0 0;

                ${tokens.skipButtonMargin}: 0.25rem 0 0 0;

                ${tokens.closeButtonWidth}: 2rem;
                ${tokens.closeButtonHeight}: 2rem;
                ${tokens.closeButtonRadius}: 100%;
            `,
        },
    },
};
