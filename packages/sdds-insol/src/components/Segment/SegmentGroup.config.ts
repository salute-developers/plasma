import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xl',
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
            s: css`
                ${segmentTokens.groupBorderRadius}: 0.75rem;
                ${segmentTokens.groupPilledBorderRadius}: 1.375rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 0.5rem 0.875rem;
                ${segmentTokens.groupVerticalArrowPadding}: 0.875rem 0;
            `,
            m: css`
                ${segmentTokens.groupBorderRadius}: 0.875rem;
                ${segmentTokens.groupPilledBorderRadius}: 1.625rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 0.75rem 1.25rem;
                ${segmentTokens.groupVerticalArrowPadding}: 1.25rem 0;
            `,
            l: css`
                ${segmentTokens.groupBorderRadius}: 1rem;
                ${segmentTokens.groupPilledBorderRadius}: 1.875rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 1rem 1.375rem;
                ${segmentTokens.groupVerticalArrowPadding}: 1.375rem 0;
            `,
            xl: css`
                ${segmentTokens.groupBorderRadius}: 1.125rem;
                ${segmentTokens.groupPilledBorderRadius}: 1.875rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 1rem 1.375rem;
                ${segmentTokens.groupVerticalArrowPadding}: 1.375rem 0;
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
                ${segmentTokens.groupFilledBackgroundColor}: var(--surface-solid-secondary);
            `,
        },
        orientation: {
            vertical: css``,
        },
    },
};
