import { css, tooltipTokens, popoverTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            s: css`
                ${tooltipTokens.paddingTop}: 0.5rem;
                ${tooltipTokens.paddingRight}: 0.75rem;
                ${tooltipTokens.paddingBottom}: 0.5rem;
                ${tooltipTokens.paddingLeft}: 0.75rem;

                ${tooltipTokens.minHeight}: 2rem;
                ${tooltipTokens.borderRadius}: 0.5rem;

                ${tooltipTokens.textFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tooltipTokens.textFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tooltipTokens.textFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tooltipTokens.textFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tooltipTokens.textFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tooltipTokens.textFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tooltipTokens.contentLeftMargin}: 0.25rem;
            `,
            m: css`
                ${tooltipTokens.paddingTop}: 0.6875rem;
                ${tooltipTokens.paddingRight}: 0.875rem;
                ${tooltipTokens.paddingBottom}: 0.6875rem;
                ${tooltipTokens.paddingLeft}: 0.875rem;

                ${tooltipTokens.minHeight}: 2.5rem;
                ${tooltipTokens.borderRadius}: 0.625rem;

                ${tooltipTokens.textFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tooltipTokens.textFontSize}: var(--plasma-typo-body-s-font-size);
                ${tooltipTokens.textFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tooltipTokens.textFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tooltipTokens.textFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tooltipTokens.textFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tooltipTokens.contentLeftMargin}: 0.375rem;
            `,
        },
        view: {
            default: css`
                ${tooltipTokens.backgroundColor}: var(--plasma-colors-background-primary);
                ${tooltipTokens.boxShadow}: 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08);
                ${tooltipTokens.color}: var(--plasma-colors-primary);
            `,
        },
    },
};

export const popoverCustomConfigS = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${popoverTokens.arrowMaskWidth}: 1rem;
                ${popoverTokens.arrowMaskHeight}: 1rem;
                ${popoverTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${popoverTokens.arrowHeight}: 0.375rem;
                ${popoverTokens.arrowEdgeMargin}: 0.5625rem;
                ${popoverTokens.arrowBackground}: var(--plasma-colors-background-primary);
            `,
        },
    },
};

export const popoverCustomConfigM = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${popoverTokens.arrowMaskWidth}: 1.25rem;
                ${popoverTokens.arrowMaskHeight}: 1.25rem;
                ${popoverTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${popoverTokens.arrowHeight}: 0.5rem;
                ${popoverTokens.arrowEdgeMargin}: 0.625rem;
                ${popoverTokens.arrowBackground}: var(--plasma-colors-background-primary);
            `,
        },
    },
};
