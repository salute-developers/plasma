import { css } from '@linaria/core';

import { Input, Label, StyledTextAfter, StyledTextBefore } from '../../TextField.styles';
import { tokens } from '../../TextField.tokens';

export const labelPlacement_inner = css`
    ${Input} {
        padding: var(${tokens.contentLabelInnerPadding});
    }

    ${StyledTextAfter}, ${StyledTextBefore} {
        padding: var(${tokens.contentLabelInnerPadding});
    }

    ${Input}:focus ~ ${Label}, ${Input}:not(:placeholder-shown) ~ ${Label} {
        height: auto;
        padding: var(${tokens.labelInnerPadding});

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

        transition: padding 0.1s ease-in-out, height 0s;

        height: var(${tokens.height});

        padding-top: calc(var(${tokens.height}) / 4);
        padding-bottom: calc(var(${tokens.height}) / 4);
    }
`;
