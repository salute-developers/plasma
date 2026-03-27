import { surfaceSolidPrimary, textAccent } from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xs',
    },
    variations: {
        view: {
            clear: css`
                ${segmentTokens.arrowColor}: ${textAccent};
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
            filled: css`
                ${segmentTokens.arrowColor}: ${textAccent};
                ${segmentTokens.groupBackgroundColor}: transparent;
                ${segmentTokens.outlineFocusColor}: ${textAccent};
            `,
        },
        size: {
            xs: css`
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
                ${segmentTokens.groupFilledBackgroundColor}: ${surfaceSolidPrimary};
            `,
        },
        orientation: {
            vertical: css``,
        },
    },
};
