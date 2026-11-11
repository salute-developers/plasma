import { css } from 'styled-components';

import { editableTokens } from '../../../components/Editable';

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
                ${editableTokens.iconGap}: 1rem;
            `,
        },
    },
};
