import { dsplS, dsplSBold, dsplSMedium } from '@salutejs/sdds-themes/tokens/sdds_sbcom';
import { css, typographyTokens } from '@salutejs/plasma-new-hope/styled-components';

export const configS = {
    defaults: {
        size: 's',
    },
    variations: {
        size: {
            s: css`
                ${typographyTokens.typoFontFamily}: ${dsplS.fontFamily};
                ${typographyTokens.typoFontSize}: ${dsplS.fontSize};
                ${typographyTokens.typoFontStyle}: ${dsplS.fontStyle};
                ${typographyTokens.typoFontWeight}: ${dsplS.fontWeight};
                ${typographyTokens.typoFontWeightMedium}: ${dsplSMedium.fontWeight};
                ${typographyTokens.typoFontWeightBold}: ${dsplSBold.fontWeight};
                ${typographyTokens.typoFontWeightExtraBold}: 700;
                ${typographyTokens.typoFontLetterSpacing}: ${dsplS.letterSpacing};
                ${typographyTokens.typoFontLineHeight}: ${dsplS.lineHeight};
            `,
        },
    },
};
