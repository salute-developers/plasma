import { css } from 'styled-components';
import { wheelTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    bodySBold,
    h1,
    h1Bold,
    h4,
    h4Bold,
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_homeds';

const commonView = css`
    ${tokens.animationDuration}: 200ms;
    ${tokens.animationEasing}: cubic-bezier(0.2, 0, 0, 1);
    ${tokens.color}: ${textPrimary};
    ${tokens.controlColor}: ${textSecondary};
    ${tokens.dividerColor}: ${surfaceTransparentTertiary};
    ${tokens.focusColor}: ${textAccent};
`;

export const config = {
    defaults: { size: 'h1', view: 'default' },
    variations: {
        view: {
            default: css`
                ${commonView}
                ${tokens.textAfterColor}: ${textSecondary};
                ${tokens.selectionBackgroundColor}: transparent;
                ${tokens.selectionBorderRadius}: 0;
                ${tokens.secondaryOpacity}: 0.4;
                ${tokens.tertiaryOpacity}: 0.16;
            `,
            highlighted: css`
                ${commonView}
                ${tokens.textAfterColor}: ${textPrimary};
                ${tokens.selectionBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.selectionBorderRadius}: 1.25rem;
                ${tokens.secondaryOpacity}: 0.5;
                ${tokens.tertiaryOpacity}: 0.2;
            `,
        },
        size: {
            h1: css`
                ${tokens.columnGap}: 2.5rem;
                ${tokens.dotColumnGap}: 1.0625rem;
                ${tokens.dividerColumnGap}: 1.21875rem;
                ${tokens.itemGap}: 1.25rem;
                ${tokens.descriptionGap}: 0.5rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 0.5rem;
                ${tokens.dotSize}: 0.375rem;
                ${tokens.dotGap}: 0.625rem;
                ${tokens.dotOffset}: 1.3125rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${h1.fontFamily};
                ${tokens.fontSize}: ${h1.fontSize};
                ${tokens.fontStyle}: ${h1.fontStyle};
                ${tokens.fontWeight}: ${h1Bold.fontWeight};
                ${tokens.letterSpacing}: ${h1.letterSpacing};
                ${tokens.lineHeight}: ${h1.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodySBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            h4: css`
                ${tokens.columnGap}: 1.5rem;
                ${tokens.dotColumnGap}: 0.6875rem;
                ${tokens.dividerColumnGap}: 0.71875rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.descriptionGap}: 0.375rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.25rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.25rem;
                ${tokens.dotOffset}: 1.5625rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${h4.fontFamily};
                ${tokens.fontSize}: ${h4.fontSize};
                ${tokens.fontStyle}: ${h4.fontStyle};
                ${tokens.fontWeight}: ${h4Bold.fontWeight};
                ${tokens.letterSpacing}: ${h4.letterSpacing};
                ${tokens.lineHeight}: ${h4.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodySBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
        },
        disabled: {
            true: css`
                ${tokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
