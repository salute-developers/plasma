import { css, popoverTokens } from '@salutejs/plasma-new-hope/styled-components';
import { shadowDownHardM, surfaceSolidTertiary } from '@salutejs-ds/sdds_sbcom/theme/tokens';
/*
 * NOTE: Raw var(--…) follows the SBCOM theme CSS. Prefer @salutejs-ds/sdds_sbcom/theme/tokens when the same
 * name exists there; keep raw values only for DS gaps (e.g. surfaceAccent).
 */

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${popoverTokens.boxShadow}: ${shadowDownHardM};

                ${popoverTokens.arrowMaskWidth}: 1rem;
                ${popoverTokens.arrowMaskHeight}: 1rem;
                ${popoverTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${popoverTokens.arrowHeight}: 0.375rem;
                ${popoverTokens.arrowEdgeMargin}: 0.5625rem;
                ${popoverTokens.arrowBackground}: ${surfaceSolidTertiary};
            `,
        },
    },
};
