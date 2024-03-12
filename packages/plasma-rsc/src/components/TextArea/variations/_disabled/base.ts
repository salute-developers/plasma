import { css } from '@linaria/core';

import { tokens, classes } from '../../TextArea.tokens';

const { styledTextArea } = classes;

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        &:hover,
        &:active {
            transform: none;
        }
    }

    .${styledTextArea} {
        &:disabled {
            cursor: not-allowed;
            color: var(${tokens.inputColorDisabled});
        }
    }
`;
