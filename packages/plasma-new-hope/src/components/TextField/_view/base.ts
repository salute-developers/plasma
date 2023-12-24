import { css } from '@linaria/core';

import { tokens } from '../TextField.tokens';
import { Input, InputWrapper, LeftHelper, _tokenBorderColor, _tokenBorderWidth } from '../TextField.styles';

export const base = css`
    ${InputWrapper} {
        color: var(${tokens.contentColor}, var(${tokens.color}));
        background-color: var(${tokens.backgroundColor});
        caret-color: var(${tokens.caretColor});

        --plasma_private-textfield-border-color-hack: var(${tokens.borderColor});
        ${_tokenBorderColor}: var(--plasma_private-textfield-border-color-hack);

        transition: box-shadow 0.1s ease-in, background-color 0.1s ease-in, color 0.1s ease-in;
    }
    ${InputWrapper}:hover {
        --plasma_private-textfield-hack: var(${tokens.borderColorHover});
        ${_tokenBorderColor}: var(--plasma_private-textfield-hack);
    }
    ${InputWrapper}:focus-within {
        --plasma_private-textfield-hack: var(${tokens.borderColorFocus});
        ${_tokenBorderColor}: var(--plasma_private-textfield-hack);
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
