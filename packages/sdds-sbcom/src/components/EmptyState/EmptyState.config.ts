import { bodyL, bodyM, bodyS, bodyXS } from '@salutejs/sdds-themes/tokens/sdds_sbcom';
import { css, emptyStateTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 'l',
    },
    variations: {
        size: {
            l: css`
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.padding}: 2rem 1rem 1rem 1rem;
                ${tokens.iconMargin}: 0 0 0.5rem 0;
                ${tokens.descriptionMargin}: 0 0 1rem 0;
                ${tokens.buttonMargin}: -1rem 0 0 0;
                ${tokens.buttonHeight}: 3.5rem;
                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyL.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.padding}: 1.625rem 1rem 0.875rem 1rem;
                ${tokens.iconMargin}: 0 0 0.375rem 0;
                ${tokens.descriptionMargin}: 0 0 0.875rem 0;
                ${tokens.buttonMargin}: -0.875rem 0 0 0;
                ${tokens.buttonHeight}: 3rem;
                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyM.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.padding}: 1.375rem 0.875rem 0.625rem 0.875rem;
                ${tokens.iconMargin}: 0 0 0.25rem 0;
                ${tokens.descriptionMargin}: 0 0 0.625rem 0;
                ${tokens.buttonMargin}: -0.625rem 0 0 0;
                ${tokens.buttonHeight}: 2.5rem;
                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodyS.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.padding}: 1rem 0.625rem 0.5rem 0.625rem;
                ${tokens.iconMargin}: 0 0 0.25rem 0;
                ${tokens.descriptionMargin}: 0 0 0.5rem 0;
                ${tokens.buttonMargin}: -0.5rem 0 0 0;
                ${tokens.buttonHeight}: 2rem;
                ${tokens.fontFamily}: ${bodyXS.fontFamily};
                ${tokens.fontSize}: ${bodyXS.fontSize};
                ${tokens.fontStyle}: ${bodyXS.fontStyle};
                ${tokens.fontWeight}: ${bodyXS.fontWeight};
                ${tokens.fontLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fontLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
