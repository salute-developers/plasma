import { css, dropzoneTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: h4, h4Bold, outlineAccent, outlineSolidSecondary
     * outlineSolidSecondaryHover
     */
    bodyS,
    overlaySoft,
    surfaceSolidCard,
    surfaceSolidCardHover,
    textPrimary,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${dropzoneTokens.background}: ${surfaceSolidCard};
                ${dropzoneTokens.backgroundHover}: ${surfaceSolidCardHover};
                ${dropzoneTokens.overlayColorActive}: ${overlaySoft};
                /* NOTE: no token outlineSolidSecondary in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.borderColor}: var(--outline-solid-secondary);
                /* NOTE: no token outlineSolidSecondaryHover in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.borderColorHover}: var(--outline-solid-secondary-hover);
                /* NOTE: no token outlineAccent in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.borderColorActive}: var(--outline-accent);
                ${dropzoneTokens.titleColor}: ${textPrimary};
                ${dropzoneTokens.descriptionColor}: ${textSecondary};
            `,
        },
        size: {
            m: css`
                ${dropzoneTokens.padding}: 1.5rem;
                ${dropzoneTokens.borderRadius}: 1.25rem;
                ${dropzoneTokens.contentWrapperGap}: 0.75rem;
                ${dropzoneTokens.contentGap}: 0.375rem;
                ${dropzoneTokens.contentColumnGap}: 0.5rem;

                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.titleFontFamily}: var(--plasma-typo-h4-font-family);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.titleFontSize}: var(--plasma-typo-h4-font-size);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.titleFontStyle}: var(--plasma-typo-h4-font-style);
                /* NOTE: no token h4Bold in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.titleFontWeight}: var(--plasma-typo-h4-bold-font-weight);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.titleLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                /* NOTE: no token h4 in @salutejs/sdds-themes/tokens */
                ${dropzoneTokens.titleLineHeight}: var(--plasma-typo-h4-line-height);

                ${dropzoneTokens.descriptionFontFamily}: ${bodyS.fontFamily};
                ${dropzoneTokens.descriptionFontSize}: ${bodyS.fontSize};
                ${dropzoneTokens.descriptionFontStyle}: ${bodyS.fontStyle};
                ${dropzoneTokens.descriptionFontWeight}: ${bodyS.fontWeight};
                ${dropzoneTokens.descriptionLetterSpacing}: ${bodyS.letterSpacing};
                ${dropzoneTokens.descriptionLineHeight}: ${bodyS.lineHeight};
            `,
        },
        disabled: {
            true: css`
                ${dropzoneTokens.disabledOpacity}: 0.4;
            `,
        },
    },
};
