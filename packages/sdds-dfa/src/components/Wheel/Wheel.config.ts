import { css } from 'styled-components';
import { wheelTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    dsplL,
    dsplLBold,
    dsplM,
    dsplMBold,
    dsplS,
    dsplSBold,
    h1,
    h1Bold,
    h2,
    h2Bold,
    h3,
    h3Bold,
    h4,
    h4Bold,
    h5,
    h5Bold,
    surfaceTransparentTertiary,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_dfa';

const commonView = css`
    ${tokens.animationDuration}: 200ms;
    ${tokens.animationEasing}: cubic-bezier(0.2, 0, 0, 1);
    ${tokens.color}: ${textPrimary};
    ${tokens.controlColor}: ${textSecondary};
    ${tokens.dividerColor}: ${surfaceTransparentTertiary};
    ${tokens.focusColor}: ${textAccent};
`;

export const config = {
    defaults: { size: 'displayL', view: 'default' },
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
        },
        size: {
            displayL: css`
                ${tokens.columnGap}: 3.75rem;
                ${tokens.dotColumnGap}: 1.375rem;
                ${tokens.dividerColumnGap}: 1.84375rem;
                ${tokens.itemGap}: 2.5rem;
                ${tokens.descriptionGap}: 1rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 1.25rem;
                ${tokens.dotSize}: 1rem;
                ${tokens.dotGap}: 1.25rem;
                ${tokens.dotOffset}: 2.25rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${dsplL.fontFamily};
                ${tokens.fontSize}: ${dsplL.fontSize};
                ${tokens.fontStyle}: ${dsplL.fontStyle};
                ${tokens.fontWeight}: ${dsplLBold.fontWeight};
                ${tokens.letterSpacing}: ${dsplL.letterSpacing};
                ${tokens.lineHeight}: ${dsplL.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyL.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyL.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyL.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyLBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyL.lineHeight};
            `,
            displayM: css`
                ${tokens.columnGap}: 3rem;
                ${tokens.dotColumnGap}: 1.125rem;
                ${tokens.dividerColumnGap}: 1.46875rem;
                ${tokens.itemGap}: 2.25rem;
                ${tokens.descriptionGap}: 0.875rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 1rem;
                ${tokens.dotSize}: 0.75rem;
                ${tokens.dotGap}: 1rem;
                ${tokens.dotOffset}: 1.125rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${dsplM.fontFamily};
                ${tokens.fontSize}: ${dsplM.fontSize};
                ${tokens.fontStyle}: ${dsplM.fontStyle};
                ${tokens.fontWeight}: ${dsplMBold.fontWeight};
                ${tokens.letterSpacing}: ${dsplM.letterSpacing};
                ${tokens.lineHeight}: ${dsplM.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyM.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyM.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyM.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodyMBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyM.lineHeight};
            `,
            displayS: css`
                ${tokens.columnGap}: 2.25rem;
                ${tokens.dotColumnGap}: 0.875rem;
                ${tokens.dividerColumnGap}: 1.09375rem;
                ${tokens.itemGap}: 1.5rem;
                ${tokens.descriptionGap}: 0.75rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 0.75rem;
                ${tokens.dotSize}: 0.5rem;
                ${tokens.dotGap}: 0.75rem;
                ${tokens.dotOffset}: 1rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${dsplS.fontFamily};
                ${tokens.fontSize}: ${dsplS.fontSize};
                ${tokens.fontStyle}: ${dsplS.fontStyle};
                ${tokens.fontWeight}: ${dsplSBold.fontWeight};
                ${tokens.letterSpacing}: ${dsplS.letterSpacing};
                ${tokens.lineHeight}: ${dsplS.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodySBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
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
            h2: css`
                ${tokens.columnGap}: 2rem;
                ${tokens.dotColumnGap}: 0.875rem;
                ${tokens.dividerColumnGap}: 0.96875rem;
                ${tokens.itemGap}: 1rem;
                ${tokens.descriptionGap}: 0.5rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 2.25rem;
                ${tokens.controlGap}: 0.375rem;
                ${tokens.dotSize}: 0.25rem;
                ${tokens.dotGap}: 0.5rem;
                ${tokens.dotOffset}: 1.625rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${h2.fontFamily};
                ${tokens.fontSize}: ${h2.fontSize};
                ${tokens.fontStyle}: ${h2.fontStyle};
                ${tokens.fontWeight}: ${h2Bold.fontWeight};
                ${tokens.letterSpacing}: ${h2.letterSpacing};
                ${tokens.lineHeight}: ${h2.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodySBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            h3: css`
                ${tokens.columnGap}: 1.75rem;
                ${tokens.dotColumnGap}: 0.75rem;
                ${tokens.dividerColumnGap}: 0.84375rem;
                ${tokens.itemGap}: 0.75rem;
                ${tokens.descriptionGap}: 0.375rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.375rem;
                ${tokens.dotSize}: 0.25rem;
                ${tokens.dotGap}: 0.5rem;
                ${tokens.dotOffset}: 1.5rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${h3.fontFamily};
                ${tokens.fontSize}: ${h3.fontSize};
                ${tokens.fontStyle}: ${h3.fontStyle};
                ${tokens.fontWeight}: ${h3Bold.fontWeight};
                ${tokens.letterSpacing}: ${h3.letterSpacing};
                ${tokens.lineHeight}: ${h3.lineHeight};

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
            h5: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.descriptionGap}: 0.25rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.25rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.25rem;
                ${tokens.dotOffset}: 1.375rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${h5.fontFamily};
                ${tokens.fontSize}: ${h5.fontSize};
                ${tokens.fontStyle}: ${h5.fontStyle};
                ${tokens.fontWeight}: ${h5Bold.fontWeight};
                ${tokens.letterSpacing}: ${h5.letterSpacing};
                ${tokens.lineHeight}: ${h5.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodySBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            l: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.625rem;
                ${tokens.descriptionGap}: 0.125rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.125rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.375rem;
                ${tokens.dotOffset}: 1.375rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyLBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodySBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            m: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.5rem;
                ${tokens.descriptionGap}: 0.25rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1.5rem;
                ${tokens.controlGap}: 0.125rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.375rem;
                ${tokens.dotOffset}: 1.3125rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${tokens.descriptionFontSize}: ${bodyS.fontSize};
                ${tokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${tokens.descriptionFontWeight}: ${bodySBold.fontWeight};
                ${tokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
            s: css`
                ${tokens.columnGap}: 1.25rem;
                ${tokens.dotColumnGap}: 0.5625rem;
                ${tokens.dividerColumnGap}: 0.59375rem;
                ${tokens.itemGap}: 0.5rem;
                ${tokens.descriptionGap}: 0.25rem;
                ${tokens.textAfterGap}: 0.125rem;
                ${tokens.controlSize}: 1rem;
                ${tokens.controlGap}: 0.125rem;
                ${tokens.dotSize}: 0.125rem;
                ${tokens.dotGap}: 0.375rem;
                ${tokens.dotOffset}: 1.4375rem;
                ${tokens.secondaryScale}: 0.7;
                ${tokens.tertiaryScale}: 0.35;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodySBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

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
