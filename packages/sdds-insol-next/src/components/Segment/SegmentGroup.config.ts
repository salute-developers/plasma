import { css, segmentTokens } from '@salutejs/plasma-new-hope/styled-components';
import { surfaceSolidSecondary, textAccent, textSecondary } from '@salutejs/sdds-themes/tokens/sdds_insol_next';

export const config = {
    defaults: {
        view: 'clear',
        size: 'xl',
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
            xs: css`
                ${segmentTokens.groupBorderRadius}: 0.625rem;
                ${segmentTokens.verticalGroupPilledBorderRadius}: 1.125rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 0.25rem 0.75rem;
                ${segmentTokens.groupVerticalArrowPadding}: 0.75rem 0;
            `,
            s: css`
                ${segmentTokens.groupBorderRadius}: 0.75rem;
                ${segmentTokens.verticalGroupPilledBorderRadius}: 1.375rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 0.5rem 0.875rem;
                ${segmentTokens.groupVerticalArrowPadding}: 0.875rem 0;
            `,
            m: css`
                ${segmentTokens.groupBorderRadius}: 0.875rem;
                ${segmentTokens.verticalGroupPilledBorderRadius}: 1.625rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 0.75rem 1.25rem;
                ${segmentTokens.groupVerticalArrowPadding}: 1.25rem 0;
            `,
            l: css`
                ${segmentTokens.groupBorderRadius}: 1rem;
                ${segmentTokens.verticalGroupPilledBorderRadius}: 1.875rem;
                ${segmentTokens.groupWidth}: auto;
                ${segmentTokens.groupHeight}: auto;
                ${segmentTokens.groupArrowPadding}: 1rem 1.375rem;
                ${segmentTokens.groupVerticalArrowPadding}: 1.375rem 0;
            `,
            xl: css`
                ${segmentTokens.groupBorderRadius}: 1.125rem;
                ${segmentTokens.verticalGroupPilledBorderRadius}: 1.875rem;
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
            true: css`
                // NOTE: change groupPilledBorderRadius on token when added
                ${segmentTokens.groupPilledBorderRadius}: 1000px;
            `,
        },
        stretch: {
            true: css``,
        },
        filledBackground: {
            true: css`
                ${segmentTokens.groupFilledBackgroundColor}: ${surfaceSolidSecondary};
            `,
        },
        orientation: {
            vertical: css``,
        },
    },
};
