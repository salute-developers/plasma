import { css } from '@linaria/core';

import { paginationDotsTokens as tokens } from '../../../../components/PaginationDots';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.itemBackground}: #0808081f;
                ${tokens.activeItemBackground}: #080808;
            `,
        },
        size: {
            s: css`
                ${tokens.dotPadding}: 0 0.375rem;
                ${tokens.verticalDotPadding}: 0.375rem 0;

                ${tokens.dotSizeM}: 0.75rem;
                ${tokens.dotSizeS}: 0.5rem;
                ${tokens.dotSizeXS}: 0.375rem;
                ${tokens.dotBorderRadius}: 50%;

                ${tokens.lineWidth}: 2rem;
                ${tokens.lineHeight}: 0.5rem;
                ${tokens.lineBorderRadius}: 0.375rem;

                ${tokens.verticalLineWidth}: 0.5rem;
                ${tokens.verticalLineHeight}: 2rem;
            `,
            m: css`
                ${tokens.dotPadding}: 0 0.375rem;
                ${tokens.verticalDotPadding}: 0.375rem 0;

                ${tokens.dotBorderRadius}: 50%;
                ${tokens.dotSizeM}: 0.75rem;
                ${tokens.dotSizeS}: 0.5rem;
                ${tokens.dotSizeXS}: 0.375rem;

                ${tokens.lineWidth}: 3rem;
                ${tokens.lineHeight}: 0.75rem;
                ${tokens.lineBorderRadius}: 0.375rem;

                ${tokens.verticalLineWidth}: 0.75rem;
                ${tokens.verticalLineHeight}: 3rem;
            `,
        },
    },
};
