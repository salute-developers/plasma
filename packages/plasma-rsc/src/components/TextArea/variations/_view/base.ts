import { css } from '@linaria/core';

import { tokens, classes } from '../../TextArea.tokens';

const { styledContainer, styledTextAreaWrapper, styledHelpers } = classes;

const exclusionSelectors = 'not([disabled]):not([readonly]):not(:focus-within)';

export const base = css`
    .${String(styledContainer)} {
        transition: box-shadow 0.1s ease-in-out;
        border-radius: var(${tokens.borderRadius});
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.borderColor});
    }

    .${String(styledTextAreaWrapper)} {
        transition: background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.inputBorderColor});
    }

    &:focus-within:not([readonly]) .${String(styledTextAreaWrapper)} {
        background-color: var(${tokens.inputBackgroundColorFocus});
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.inputBorderColorFocus});
    }

    &:focus-within:not([readonly]) .${String(styledContainer)} {
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.borderColorFocus});
    }

    &:focus-within:not([readonly]) .${String(styledHelpers)} {
        background-color: var(${tokens.helpersBackgroundColorFocus});
    }

    &:hover:${exclusionSelectors} .${String(styledContainer)} {
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.borderColorHover});
    }

    &:hover:${exclusionSelectors} .${String(styledTextAreaWrapper)} {
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.inputBorderColorHover});
        background-color: var(${tokens.inputBackgroundColorHover});
    }

    &:hover:${exclusionSelectors} .${String(styledTextAreaWrapper)} + .${String(styledHelpers)} {
        background-color: var(${tokens.helpersBackgroundColorHover});
    }

    &:active:${exclusionSelectors} .${String(styledTextAreaWrapper)} {
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.inputBorderColorActive});
        background-color: var(${tokens.inputBackgroundColorActive});
    }

    &:active:${exclusionSelectors} .${String(styledTextAreaWrapper)} + .${String(styledHelpers)} {
        background-color: var(${tokens.helpersBackgroundColorActive});
    }
`;
