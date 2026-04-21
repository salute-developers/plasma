import { bodyS, bodyXS, surfaceSolidCardBrightness, textPrimary } from '@salutejs/sdds-themes/tokens/sdds_dfa';
import { css, tooltipTokens } from '@salutejs/plasma-new-hope/styled-components';

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

                ${tooltipTokens.textFontFamily}: ${bodyXS.fontFamily};
                ${tooltipTokens.textFontSize}: ${bodyXS.fontSize};
                ${tooltipTokens.textFontStyle}: ${bodyXS.fontStyle};
                ${tooltipTokens.textFontWeight}: ${bodyXS.fontWeight};
                ${tooltipTokens.textFontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tooltipTokens.textFontLineHeight}: ${bodyXS.lineHeight};

                ${tooltipTokens.contentLeftMargin}: 0.25rem;

                ${tooltipTokens.arrowMaskWidth}: 1rem;
                ${tooltipTokens.arrowMaskHeight}: 1rem;
                ${tooltipTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${tooltipTokens.arrowHeight}: 0.375rem;
                ${tooltipTokens.arrowEdgeMargin}: 0.5625rem;
                ${tooltipTokens.arrowBackground}: ${surfaceSolidCardBrightness};
            `,
            m: css`
                ${tooltipTokens.paddingTop}: 0.6875rem;
                ${tooltipTokens.paddingRight}: 0.875rem;
                ${tooltipTokens.paddingBottom}: 0.6875rem;
                ${tooltipTokens.paddingLeft}: 0.875rem;

                ${tooltipTokens.minHeight}: 2.5rem;
                ${tooltipTokens.borderRadius}: 0.625rem;

                ${tooltipTokens.textFontFamily}: ${bodyS.fontFamily};
                ${tooltipTokens.textFontSize}: ${bodyS.fontSize};
                ${tooltipTokens.textFontStyle}: ${bodyS.fontStyle};
                ${tooltipTokens.textFontWeight}: ${bodyS.fontWeight};
                ${tooltipTokens.textFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tooltipTokens.textFontLineHeight}: ${bodyS.lineHeight};

                ${tooltipTokens.contentLeftMargin}: 0.375rem;

                ${tooltipTokens.arrowMaskWidth}: 1.25rem;
                ${tooltipTokens.arrowMaskHeight}: 1.25rem;
                ${tooltipTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMC4xNywxMS44M2wyMCwwYy01LjUyLDAgLTEwLDMuNTkgLTEwLDhjMCwtNC40MSAtNC40OCwtOCAtMTAsLTh6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJUYWlsIi8+Cjwvc3ZnPg==");
                ${tooltipTokens.arrowHeight}: 0.5rem;
                ${tooltipTokens.arrowEdgeMargin}: 0.625rem;
                ${tooltipTokens.arrowBackground}: ${surfaceSolidCardBrightness};
            `,
        },
        view: {
            // TODO заменить тень на токен https://github.com/salute-developers/plasma/issues/1131
            default: css`
                ${tooltipTokens.backgroundColor}: ${surfaceSolidCardBrightness};
                ${tooltipTokens.boxShadow}: 0px 4px 12px 0px rgba(0, 0, 0, 0.16),0px 1px 4px 0px rgba(0, 0, 0, 0.08);
                ${tooltipTokens.color}: ${textPrimary};
            `,
        },
    },
};
