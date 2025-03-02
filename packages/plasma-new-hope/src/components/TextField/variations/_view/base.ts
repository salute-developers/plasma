import { css } from '@linaria/core';

import { tokens } from '../../TextField.tokens';
import {
    Input,
    InputPlaceholder,
    InputWrapper,
    LeftHelper,
    StyledTextAfter,
    StyledTextBefore,
    TitleCaption,
} from '../../TextField.styles';

export const base = css`
    ${InputWrapper} {
        --plasma_private-textfield-border-color: var(${String(tokens.borderColor)});
        --plasma_private-textfield-bg-color: var(${String(tokens.backgroundColor)});

        color: var(${tokens.color});
        background-color: var(--plasma_private-textfield-bg-color);
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(--plasma_private-textfield-border-color),
            var(${tokens.boxShadow}, inset 0 0 0 0 transparent);
        caret-color: var(${tokens.caretColor});

        transition: background-color 0.1s ease-in, color 0.1s ease-in, box-shadow 0.1s ease-in;
    }

    &:not([disabled]) ${InputWrapper}:hover {
        --plasma_private-textfield-border-color: var(${tokens.borderColorHover}, var(${String(tokens.borderColor)}));
        --plasma_private-textfield-bg-color: var(
            ${tokens.backgroundColorHover},
            var(${String(tokens.backgroundColor)})
        );
    }

    ${Input} {
        color: var(${tokens.color});
    }

    ${InputPlaceholder} {
        color: var(${tokens.placeholderColor});
    }

    ${InputWrapper}:focus-within {
        --plasma_private-textfield-border-color: var(${tokens.borderColorFocus}, var(${String(tokens.borderColor)}));
        --plasma_private-textfield-bg-color: var(
            ${tokens.backgroundColorFocus},
            var(${String(tokens.backgroundColor)})
        );

        ${InputPlaceholder} {
            color: var(${tokens.placeholderColorFocus});
        }
    }

    ${TitleCaption} {
        color: var(${tokens.titleCaptionColor});
    }

    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }

    ${StyledTextBefore} {
        color: var(${tokens.textBeforeColor});
    }

    ${StyledTextAfter} {
        color: var(${tokens.textAfterColor});
    }
`;
