import { css, chipTokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyS,
    inverseTextPrimary,
    inverseTextSecondary,
    inverseTextSecondaryHover,
    onDarkTextPrimary,
    surfaceAccent,
    surfaceSolidDefault,
    surfaceTransparentTertiary,
    textAccent,
    textPrimary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXxs
 */
export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
        size: 's',
    },
    variations: {
        view: {
            default: css`
                ${chipTokens.color}: ${textPrimary};
                ${chipTokens.background}: ${surfaceTransparentTertiary};
                ${chipTokens.colorHover}: ${onDarkTextPrimary};
                ${chipTokens.backgroundHover}: ${surfaceAccent};
                ${chipTokens.colorActive}: ${inverseTextPrimary};
                ${chipTokens.backgroundActive}: ${surfaceAccent};
                ${chipTokens.backgroundReadOnly}: ${surfaceSolidDefault};
                ${chipTokens.colorReadOnly}: ${inverseTextPrimary};
                ${chipTokens.backgroundReadOnlyHover}: ${surfaceSolidDefault};
                ${chipTokens.colorReadOnlyHover}: ${inverseTextPrimary};
                ${chipTokens.closeIconColor}: ${inverseTextSecondary};
                ${chipTokens.closeIconColorHover}: ${inverseTextSecondaryHover};
                ${chipTokens.leftContentColor}: ${inverseTextPrimary};
            `,
        },
        size: {
            s: css`
                ${chipTokens.borderRadius}: 0.5rem;
                ${chipTokens.pilledBorderRadius}: 1rem;
                ${chipTokens.width}: auto;
                ${chipTokens.height}: 1.625rem;
                ${chipTokens.padding}: 0 0.875rem;

                ${chipTokens.fontFamily}: ${bodyS.fontFamily};
                ${chipTokens.fontSize}: ${bodyS.fontSize};
                ${chipTokens.fontStyle}: ${bodyS.fontStyle};
                ${chipTokens.fontWeight}: ${bodyS.fontWeight};
                ${chipTokens.letterSpacing}: ${bodyS.letterSpacing};
                ${chipTokens.lineHeight}: ${bodyS.lineHeight};

                ${chipTokens.leftContentMarginLeft}: -0.813rem;
                ${chipTokens.leftContentMarginRight}: 0.25rem;
                ${chipTokens.rightContentMarginLeft}: 0.25rem;
                ${chipTokens.rightContentMarginRight}: -0.125rem;
                ${chipTokens.clearContentMarginLeft}: 0.375rem;
                ${chipTokens.clearContentMarginRight}: -0.25rem;
                ${chipTokens.closeIconSize}: 1rem;
            `,
        },
        disabled: {
            true: css`
                ${chipTokens.disabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${chipTokens.focusColor}: ${textAccent};
            `,
        },
        pilled: {
            true: css``,
        },
    },
};
