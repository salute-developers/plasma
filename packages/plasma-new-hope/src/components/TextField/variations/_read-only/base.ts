import { css } from '@linaria/core';

import { tokens } from '../../TextField.tokens';
import { Input, InputPlaceholder, InputWrapper, Label, LeftHelper } from '../../TextField.styles';

export const base = css`
    &[readonly] {
        ${InputWrapper} {
            color: var(${tokens.colorReadOnly});
            background-color: var(${String(tokens.backgroundColorReadOnly)});
            box-shadow: inset 0 0 0 var(${String(tokens.borderWidth)}) var(${String(tokens.borderColorReadOnly)});
        }

        ${InputWrapper}:hover {
            background-color: var(${tokens.backgroundColorReadOnly});
        }

        ${InputPlaceholder} {
            color: var(${tokens.placeholderColorReadOnly});
        }

        ${Input} {
            color: var(${tokens.colorReadOnly});
            cursor: default;
            min-width: unset;
        }

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }

        ${Label} {
            color: var(${tokens.labelColorReadOnly});
        }
    }
`;
