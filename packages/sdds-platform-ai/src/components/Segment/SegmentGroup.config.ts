import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.arrowColor}: var(--text-secondary);
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.groupFilledBackgroundColor}: var(--text-accent);
            `,
            filled: css`
                ${segmentTokens.arrowColor}: var(--text-secondary);
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.groupFilledBackgroundColor}: var(--text-accent);
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.groupBorderRadius}: 0.625rem;
                ${segmentTokens.groupPilledBorderRadius}: 1.125rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 0.25rem 0.75rem;
                ${segmentTokens.groupVerticalArrowPadding}: 0.75rem 0;
            `,
            m: css`
                ${segmentTokens.groupBorderRadius}: 0.875rem;
                ${segmentTokens.groupPilledBorderRadius}: 1.625rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 0.75rem 1.25rem;
                ${segmentTokens.groupVerticalArrowPadding}: 1.25rem 0;
            `,
        },
        disabled: {
            true: css`
                ${segmentTokens.disabledOpacity}: 0.4;
            `,
        },
        pilled: {
            true: css``,
        },
        stretch: {
            true: css``,
        },
        filledBackground: {
            true: css`
                ${segmentTokens.groupFilledBackgroundColor}: var(--surface-transparent-secondary);
            `,
        },
        orientation: {
            vertical: css``,
        },
    },
};
