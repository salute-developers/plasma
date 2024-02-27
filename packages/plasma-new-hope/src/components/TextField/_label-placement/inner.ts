import { css } from '@linaria/core';

import { Input, Label } from '../TextField.styles';
import { tokens } from '../TextField.tokens';

export const labelPlacement_inner = css`
    ${Input} {
        padding-top: calc(var(${tokens.labelOffset}) + var(${tokens.labelInnerLineHeight}));
        padding-bottom: var(${tokens.labelOffset});
    }

    ${Input}:focus ~ ${Label}, ${Input}:not(:placeholder-shown) ~ ${Label} {
        height: auto;
        padding-top: var(${tokens.labelOffset});

        font-family: var(${tokens.labelInnerFontFamily});
        font-size: var(${tokens.labelInnerFontSize});
        font-style: var(${tokens.labelInnerFontStyle});
        font-weight: var(${tokens.labelInnerFontWeight});
        letter-spacing: var(${tokens.labelInnerLetterSpacing});
        line-height: var(${tokens.labelInnerLineHeight});
    }

    ${Input}:not(:focus)::placeholder {
        color: transparent;
    }

    ${Input}:focus::placeholder {
        color: transparent;
    }

    ${Label} {
        color: var(${tokens.placeholderColor});

        pointer-events: none;
        position: absolute;
        top: 0;

        display: flex;
        align-items: center;

        box-sizing: border-box;

        transition: all 0.1s ease-in-out 0s;

        height: var(--plasma-textfield-height);

        padding-top: calc(var(--plasma-textfield-height) / 4);
        padding-bottom: calc(var(--plasma-textfield-height) / 4);
    }
`;
