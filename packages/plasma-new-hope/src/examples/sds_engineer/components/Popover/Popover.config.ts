import { css } from '@linaria/core';

import { popoverTokens } from '../../../../components/Popover';

export const config = {
    defaults: {
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${popoverTokens.arrowMaskWidth}: 16px;
                ${popoverTokens.arrowMaskHeight}: 16px;
                ${popoverTokens.arrowMaskImage}: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZD0ibTgsMTUuNzhsLTIuMjQsLTQuMzRjLTAuOTIsLTEuNzkgLTEuMzgsLTIuNjggLTIuMTUsLTMuMTdjLTAuNzcsLTAuNDkgLTEuNzIsLTAuNDkgLTMuNjEsLTAuNDlsMTYsMGMtMS44OSwwIC0yLjgzLDAgLTMuNiwwLjQ5Yy0wLjc4LDAuNDkgLTEuMjQsMS4zOCAtMi4xNiwzLjE2bC0yLjI0LDQuMzV6IiBmaWxsPSIjMTcxNzE3IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaWQ9InBvaW50ZXIiLz4KPC9zdmc+");
                ${popoverTokens.arrowHeight}: 8px;
                ${popoverTokens.arrowEdgeMargin}: 0.625rem;
                ${popoverTokens.arrowBackground}: var(--plasma-colors-surface-solid03);
            `,
        },
    },
};
