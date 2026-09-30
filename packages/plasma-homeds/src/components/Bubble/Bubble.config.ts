import { css } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyXS,
    onDarkTextPrimary,
    outlineTransparentPrimary,
    surfacePositive,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';

import { bubbleTokens as tokens } from './component';

export const config = {
    invariants: css`
        ${tokens.backgroundColor}: ${surfacePositive};
        ${tokens.outlineColor}: ${outlineTransparentPrimary};
        ${tokens.iconColor}: ${onDarkTextPrimary};
        ${tokens.color}: ${onDarkTextPrimary};

        ${tokens.triggerSize}: 2rem;
        ${tokens.iconSize}: 1rem;
        ${tokens.decorStarSize}: 1.375rem;
        ${tokens.borderRadius}: 0.75rem;
        ${tokens.borderRadiusJoin}: 0.34375rem;
        ${tokens.neckOffset}: 2.25rem;
        ${tokens.bodyWidth}: 5.625rem;
        ${tokens.contentPadding}: 0.375rem 0.5rem;

        ${tokens.fontFamily}: ${bodyXS.fontFamily};
        ${tokens.fontSize}: ${bodyXS.fontSize};
        ${tokens.fontStyle}: ${bodyXS.fontStyle};
        ${tokens.fontWeight}: ${bodyXS.fontWeight};
        ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
        ${tokens.lineHeight}: ${bodyXS.lineHeight};

        ${tokens.duration}: 0.6s;
        ${tokens.delay}: 0s;
        ${tokens.easing}: cubic-bezier(0.3, 0, 0, 1);
    `,
};
