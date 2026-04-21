import { surfaceTransparentSecondary, textAccent, textSecondary } from '@salutejs/sdds-themes/tokens/sdds_scan';
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
                ${segmentTokens.groupFilledBackgroundColor}: ${textAccent};
            `,
            filled: css`
                ${segmentTokens.arrowColor}: ${textSecondary};
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.groupFilledBackgroundColor}: ${textAccent};
            `,
        },
        size: {
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
