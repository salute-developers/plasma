import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 's',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.arrowColor}: var(--text-accent);
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.outlineFocusColor}: var(--text-accent);
            `,
            filled: css`
                ${segmentTokens.arrowColor}: var(--text-accent);
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.outlineFocusColor}: var(--text-accent);
            `,
        },
        size: {
            s: css`
                ${segmentTokens.groupBorderRadius}: 0.75rem;
                ${segmentTokens.groupPilledBorderRadius}: 1.375rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
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
                ${segmentTokens.groupFilledBackgroundColor}: var(--surface-solid-primary);
            `,
        },
        orientation: {
            vertical: css``,
        },
    },
};
