import { css } from '@linaria/core';

import { tokens } from '../TextField.tokens';
import { Input, InputWrapper, LeftHelper } from '../TextField.styles';

export const base = css`
    ${InputWrapper} {
        color: var(${tokens.contentColor}, var(${tokens.color}));
        background-color: var(${tokens.backgroundColor});
        caret-color: var(${tokens.caretColor});

        --plasma_private-textfield-border-color: var(${tokens.borderColor});
        transition: box-shadow 0.1s ease-in, background-color 0.1s ease-in, color 0.1s ease-in;
    }
    ${InputWrapper}:hover {
        --plasma_private-textfield-border-color: var(${tokens.borderColorHover});
        background-color: var(${tokens.backgroundColorHover}, var(${tokens.backgroundColor}));
    }
    ${InputWrapper}:focus-within {
        --plasma_private-textfield-border-color: var(${tokens.borderColorFocus});
        background-color: var(${tokens.backgroundColorFocus}, var(${tokens.backgroundColor}));
    }
    ${Input}::placeholder {
        color: var(${tokens.placeholderColor});
    }
    ${Input} {
        color: var(${tokens.color});
    }
    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }
`;
