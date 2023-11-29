import { css } from '@linaria/core';

import { tooltipTokens } from '../../../../components/Tooltip';
import { popoverTokens } from '../../../../components/Popover';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            m: css`
                ${tooltipTokens.paddingTop}: 0.25rem;
                ${tooltipTokens.paddingRight}: 0.5rem;
                ${tooltipTokens.paddingBottom}: 0.25rem;
                ${tooltipTokens.paddingLeft}: 0.5rem;

                ${tooltipTokens.minHeight}: 1.5rem;
                ${tooltipTokens.borderRadius}: 0.25rem;

                ${tooltipTokens.textFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tooltipTokens.textFontSize}: var(--plasma-typo-body-s-font-size);
                ${tooltipTokens.textFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tooltipTokens.textFontWeight}: 500;
                ${tooltipTokens.textFontLetterSpacing}: 0px;
                ${tooltipTokens.textFontLineHeight}: 1rem;

                ${tooltipTokens.contentLeftMargin}: 0.25rem;
            `,
        },
        view: {
            default: css`
                ${tooltipTokens.backgroundColor}: #475056;
                ${tooltipTokens.boxShadow}: 0px 1px 2px 0px rgba(2, 13, 76, 0.15),0px 3.6px 7.1px 0px rgba(2, 13, 76, 0.12),0px 16px 32px 0px rgba(2, 13, 76, 0.2);
                ${tooltipTokens.color}: var(--on-dark-text-primary);
            `,
        },
    },
};

export const popoverCustomConfig = {
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
                ${popoverTokens.arrowBackground}: #475056;
            `,
        },
    },
};
