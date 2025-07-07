import { css, tooltipTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 's',
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

                ${tooltipTokens.textFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tooltipTokens.textFontSize}: var(--plasma-typo-body-s-font-size);
                ${tooltipTokens.textFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tooltipTokens.textFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tooltipTokens.textFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tooltipTokens.textFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tooltipTokens.contentLeftMargin}: 0.25rem;

                ${tooltipTokens.arrowMaskWidth}: 1rem;
                ${tooltipTokens.arrowMaskHeight}: 1rem;
                ${tooltipTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tooltipTokens.arrowHeight}: 0.375rem;
                ${tooltipTokens.arrowEdgeMargin}: 0.5625rem;
            `,
        },
        view: {
            // TODO заменить тень на токен https://github.com/salute-developers/plasma/issues/1131
            default: css`
                ${tooltipTokens.backgroundColor}: var(--inverse-surface-solid-card);
                ${tooltipTokens.arrowBackground}: var(--inverse-surface-solid-card);
                ${tooltipTokens.boxShadow}: 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08);
                ${tooltipTokens.color}: var(--inverse-text-primary);
            `,
            secondary: css`
                ${tooltipTokens.backgroundColor}: var(--on-dark-surface-solid-secondary);
                ${tooltipTokens.arrowBackground}: var(--on-dark-surface-solid-secondary);
                ${tooltipTokens.boxShadow}: 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08);
                ${tooltipTokens.color}: var(--inverse-text-primary);
            `,
        },
    },
};
