import { surfaceTransparentSecondary, textAccent, textSecondary } from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.arrowColor}: ${textSecondary};
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
            filled: css`
                ${segmentTokens.arrowColor}: ${textSecondary};
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.outlineFocusColor}: ${textAccent};
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
                // NOTE: change on token when added
                ${segmentTokens.groupPilledBorderRadius}: 1000px;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 1.25rem 1.5rem;
                ${segmentTokens.groupVerticalArrowPadding}: 1.5rem 0;
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
                ${segmentTokens.groupFilledBackgroundColor}: ${surfaceTransparentSecondary};
            `,
        },
        orientation: {
            vertical: css``,
        },
    },
};
