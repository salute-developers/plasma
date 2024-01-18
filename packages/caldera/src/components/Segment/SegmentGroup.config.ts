import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.groupBackgroundColor}: tranparent;
                ${segmentTokens.arrowColor}: var(--plasma-colors-secondary);

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
            filled: css`
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.arrowColor}: var(--plasma-colors-secondary);

                ${segmentTokens.outlineFocusColor}: var(--plasma-colors-button-focused);
            `,
        },
        size: {
            xs: css`
                ${segmentTokens.groupBorderRadius}: 0.5rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
            `,
            s: css`
                ${segmentTokens.groupBorderRadius}: 0.625rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
            `,
            m: css`
                ${segmentTokens.groupBorderRadius}: 0.75rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
            `,
            l: css`
                ${segmentTokens.groupBorderRadius}: 0.75rem;
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
            true: css`
                ${segmentTokens.groupPilledBorderRadius}: 1.75rem;
            `,
        },
        filledBackground: {
            true: css`
                ${segmentTokens.groupFilledBackgroundColor}: var(--plasma-colors-surface-liquid01);
            `,
        },
        stretch: {
            true: css``,
        },
    },
};
