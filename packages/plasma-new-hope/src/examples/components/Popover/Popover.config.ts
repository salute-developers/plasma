import { css } from '@linaria/core';

import { popoverTokens } from '../../../components/Popover';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${popoverTokens.boxShadow}: var(--shadow-down-hard-m);

                ${popoverTokens.arrowMaskWidth}: 1rem;
                ${popoverTokens.arrowMaskHeight}: 1rem;
                ${popoverTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMCw5Ljg1bDE2LDBjLTQuNDEsMCAtOCwyLjY5IC04LDZjMCwtMy4zMSAtMy41OSwtNiAtOCwtNnoiIGZpbGw9IiMxNzE3MTciIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9IlRhaWwiLz4KPC9zdmc+");
                ${popoverTokens.arrowHeight}: 0.375rem;
                ${popoverTokens.arrowEdgeMargin}: 0.5625rem;
                ${popoverTokens.arrowBackground}: var(--surface-solid-tertiary);
            `,
        },
    },
};
