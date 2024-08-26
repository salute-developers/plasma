import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import { Input, InputContainer, Label, StyledTextAfter, StyledTextBefore } from '../../TextField.styles';

export const base = css`
    &.${classes.outerLabelPlacement} {
        ${Label} {
            position: relative;
            display: inline-block;
            margin-bottom: var(${tokens.labelOffset});
            color: var(${tokens.labelColor});
        }
    }

    &.${classes.innerLabelPlacement} {
        ${InputContainer} {
            padding: var(${tokens.contentLabelInnerPadding});
        }

        ${StyledTextAfter}, ${StyledTextBefore} {
            padding: var(${tokens.contentLabelInnerPadding});
        }

        /* поднимает label вверх при фокусе, наличии значения */
        ${Input}:focus ~ ${Label}, ${Input}.${classes.hasValue} ~ ${Label} {
            align-items: flex-start;
            padding: var(${tokens.labelInnerPadding});

            font-family: var(${tokens.labelInnerFontFamily});
            font-size: var(${tokens.labelInnerFontSize});
            font-style: var(${tokens.labelInnerFontStyle});
            font-weight: var(${tokens.labelInnerFontWeight});
            letter-spacing: var(${tokens.labelInnerLetterSpacing});
            line-height: var(${tokens.labelInnerLineHeight});
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

            padding-top: calc(calc(var(${tokens.height}) - var(${tokens.labelLineHeight})) / 2);
            padding-bottom: calc(calc(var(${tokens.height}) - var(${tokens.labelLineHeight})) / 2);
        }
    }
`;
