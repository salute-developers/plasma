import { css, editableTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${editableTokens.editButtonBackground}: var(--background-primary);
                ${editableTokens.editButtonColor}: var(--text-tertiary);
                ${editableTokens.editButtonColorHover}: var(--text-primary);
                ${editableTokens.placeholderColor}: var(--text-secondary);
                ${editableTokens.caretColor}: var(--text-accent);
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
