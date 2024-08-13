import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import { Input, Label, StyledTextAfter, StyledTextBefore } from '../../TextField.styles';

export const base = css`
    &.${classes.outerLabelPlacement} {
        ${Label} {
            display: block;
            margin-bottom: var(${tokens.labelOffset});
            color: var(${tokens.labelColor});
        }
    }

    &.${classes.innerLabelPlacement} {
        &:not(.${classes.hideLabel}) {
            ${Input} {
                padding: var(${tokens.contentLabelInnerPadding});
            }

            ${StyledTextAfter}, ${StyledTextBefore} {
                padding: var(${tokens.contentLabelInnerPadding});
            }
        }

        ${Input}:focus ~ ${Label}, ${Input}:not(:placeholder-shown) ~ ${Label} {
            align-items: flex-start;
            padding: var(${tokens.labelInnerPadding});

            font-family: var(${tokens.labelInnerFontFamily});
            font-size: var(${tokens.labelInnerFontSize});
            font-style: var(${tokens.labelInnerFontStyle});
            font-weight: var(${tokens.labelInnerFontWeight});
            letter-spacing: var(${tokens.labelInnerLetterSpacing});
            line-height: var(${tokens.labelInnerLineHeight});
        }

        &:not(.${classes.hideLabel}) {
            ${Input}:not(:focus)::placeholder {
                color: transparent;
            }

            ${Input}:focus::placeholder {
                color: transparent;
            }
        }

        ${Label} {
            color: var(${tokens.placeholderColor});

            pointer-events: none;
            position: absolute;
            top: 0;

            display: flex;
            align-items: center;

            box-sizing: border-box;

            height: var(${tokens.height});

            padding-top: calc(var(${tokens.height}) / 4);
            padding-bottom: calc(var(${tokens.height}) / 4);
        }
    }
`;
