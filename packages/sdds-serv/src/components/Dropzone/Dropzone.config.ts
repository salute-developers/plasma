import {
    bodyS,
    h4,
    h4Bold,
    outlineAccent,
    outlineSolidSecondary,
    outlineSolidSecondaryHover,
    overlaySoft,
    surfaceSolidCard,
    surfaceSolidCardHover,
    textPrimary,
    textSecondary,
} from '@salutejs/sdds-themes/tokens/sdds_serv';
import { css, dropzoneTokens } from '@salutejs/plasma-new-hope/styled-components';

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
                ${dropzoneTokens.borderColor}: ${outlineSolidSecondary};
                ${dropzoneTokens.borderColorHover}: ${outlineSolidSecondaryHover};
                ${dropzoneTokens.borderColorActive}: ${outlineAccent};
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

                ${dropzoneTokens.titleFontFamily}: ${h4.fontFamily};
                ${dropzoneTokens.titleFontSize}: ${h4.fontSize};
                ${dropzoneTokens.titleFontStyle}: ${h4.fontStyle};
                ${dropzoneTokens.titleFontWeight}: ${h4Bold.fontWeight};
                ${dropzoneTokens.titleLetterSpacing}: ${h4.letterSpacing};
                ${dropzoneTokens.titleLineHeight}: ${h4.lineHeight};

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
