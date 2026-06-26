import { css, codeAreaTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    surfaceSolidCard,
    surfaceTransparentPrimary,
    surfaceTransparentTertiary,
    textPrimary,
    textTertiary,
    syntaxOrange,
    syntaxPink,
    syntaxRed,
    syntaxSkyBlue,
    syntaxSpring,
    syntaxYellow,
} from '@salutejs/plasma-themes/tokens/plasma_giga';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.wrapperBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.fieldBackgroundColor}: ${surfaceSolidCard};

                ${tokens.codeColor}: ${textPrimary};
                ${tokens.lineNumberColor}: ${textTertiary};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};

                ${tokens.scrollTrackColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollThumbColor}: ${surfaceTransparentTertiary};

                ${tokens.syntaxYellow}: ${syntaxYellow};
                ${tokens.syntaxOrange}: ${syntaxOrange};
                ${tokens.syntaxPink}: ${syntaxPink};
                ${tokens.syntaxSpring}: ${syntaxSpring};
                ${tokens.syntaxSkyBlue}: ${syntaxSkyBlue};
                ${tokens.syntaxRed}: ${syntaxRed};
            `,
        },
        size: {
            xl: css`
                ${tokens.wrapperPadding}: 1.25rem;
                ${tokens.wrapperGap}: 1.25rem;
                ${tokens.wrapperBorderRadius}: 2.25rem;

                ${tokens.overlayBorderRadius}: 1rem;
                ${tokens.overlayPadding}: 1.25rem 1.125rem;

                ${tokens.headerMarginBottom}: 1.25rem;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.lineNumberGap}: 0.5rem;
                ${tokens.numerationPaddingRight}: 0.5rem;
                ${tokens.codeMarginRight}: -1rem;
                ${tokens.codePaddingRight}: 2.875rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.scrollWidth}: 0.125rem;
            `,
            l: css`
                ${tokens.wrapperPadding}: 1rem;
                ${tokens.wrapperGap}: 1rem;
                ${tokens.wrapperBorderRadius}: 1.875rem;

                ${tokens.overlayBorderRadius}: 0.875rem;
                ${tokens.overlayPadding}: 1rem;

                ${tokens.headerMarginBottom}: 1rem;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.lineNumberGap}: 0.5rem;
                ${tokens.numerationPaddingRight}: 0.5rem;
                ${tokens.codeMarginRight}: -0.875rem;
                ${tokens.codePaddingRight}: 2.75rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.scrollWidth}: 0.125rem;
            `,
            m: css`
                ${tokens.wrapperPadding}: 0.75rem;
                ${tokens.wrapperGap}: 0.75rem;
                ${tokens.wrapperBorderRadius}: 1.5rem;

                ${tokens.overlayBorderRadius}: 0.75rem;
                ${tokens.overlayPadding}: 0.75rem 0.875rem;

                ${tokens.headerMarginBottom}: 0.75rem;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.lineNumberGap}: 0.375rem;
                ${tokens.numerationPaddingRight}: 0.375rem;
                ${tokens.codeMarginRight}: -0.75rem;
                ${tokens.codePaddingRight}: 2.5rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.scrollWidth}: 0.125rem;
            `,
            s: css`
                ${tokens.wrapperPadding}: 0.5rem;
                ${tokens.wrapperGap}: 0.5rem;
                ${tokens.wrapperBorderRadius}: 1.125rem;

                ${tokens.overlayBorderRadius}: 0.625rem;
                ${tokens.overlayPadding}: 0.5rem 0.75rem;

                ${tokens.headerMarginBottom}: 0.5rem;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.lineNumberGap}: 0.25rem;
                ${tokens.numerationPaddingRight}: 0.25rem;
                ${tokens.codeMarginRight}: -0.625rem;
                ${tokens.codePaddingRight}: 2.375rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.scrollWidth}: 0.125rem;
            `,
            xs: css`
                ${tokens.wrapperPadding}: 0.5rem;
                ${tokens.wrapperGap}: 0.5rem;
                ${tokens.wrapperBorderRadius}: 1rem;

                ${tokens.overlayBorderRadius}: 0.5rem;
                ${tokens.overlayPadding}: 0.5rem;

                ${tokens.headerMarginBottom}: 0.5rem;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.lineNumberGap}: 0.25rem;
                ${tokens.numerationPaddingRight}: 0.25rem;
                ${tokens.codeMarginRight}: -0.375rem;
                ${tokens.codePaddingRight}: 1.5rem;

                ${tokens.fontFamily}: 'SB Sans Text Mono', sans-serif;
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.letterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.lineHeight}: ${bodyXS.lineHeight};

                ${tokens.scrollWidth}: 0.125rem;
            `,
        },
    },
};
