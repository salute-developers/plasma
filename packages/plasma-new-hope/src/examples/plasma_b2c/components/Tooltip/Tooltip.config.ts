import { css } from '@linaria/core';

import { tooltipTokens } from '../../../../components/Tooltip';

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

                ${tooltipTokens.arrowMaskWidth}: 1rem;
                ${tooltipTokens.arrowMaskHeight}: 1rem;
                ${tooltipTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tooltipTokens.arrowHeight}: 0.375rem;
                ${tooltipTokens.arrowEdgeMargin}: 0.5625rem;
                ${tooltipTokens.arrowBackground}: var(--surface-solid-card);
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

                ${tooltipTokens.arrowMaskWidth}: 1.25rem;
                ${tooltipTokens.arrowMaskHeight}: 1.25rem;
                ${tooltipTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tooltipTokens.arrowHeight}: 0.5rem;
                ${tooltipTokens.arrowEdgeMargin}: 0.625rem;
                ${tooltipTokens.arrowBackground}: var(--surface-solid-card);
            `,
        },
        view: {
            default: css`
                ${tooltipTokens.backgroundColor}: var(--surface-solid-card);
                ${tooltipTokens.boxShadow}: var(--shadow-down-hard-s);
                ${tooltipTokens.color}: var(--text-primary);
            `,
        },
    },
};
