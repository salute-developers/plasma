import {
    backgroundPrimary,
    textAccent,
    textPrimary,
    textSecondary,
    textTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_web';
import { css, editableTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${editableTokens.editButtonBackground}: ${backgroundPrimary};
                ${editableTokens.editButtonColor}: ${textTertiary};
                ${editableTokens.editButtonColorHover}: ${textPrimary};
                ${editableTokens.placeholderColor}: ${textSecondary};
                ${editableTokens.caretColor}: ${textAccent};
            `,
        },
        size: {
            m: css`
                ${editableTokens.editButtonPaddingLeft}: 1rem;
                ${editableTokens.textBoxPaddingRight}: 1rem;
                ${editableTokens.textBoxMarginRight}: -1rem;
            `,
        },
    },
};
