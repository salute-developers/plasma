import { css } from 'styled-components';

import { classes, tokens } from '../../TextField.tokens';
import { Input, InputContainer, Label, StyledIndicator } from '../../TextField.styles';

export const base = css`
    &.${classes.outerLabelPlacement} {
        ${Label} {
            position: relative;
            display: inline-block;
            color: var(${tokens.labelColor});
        }
    }

    &.${classes.innerLabelPlacement} {
        ${InputContainer} {
            padding: var(${tokens.contentLabelInnerPadding});
        }

        /* поднимает label вверх при фокусе, наличии значения */
        ${Input}:not(.${classes.readOnlyInput}):focus ~ ${Label}, ${Input}.${classes.hasValue} ~ ${Label}, ${Input}.${classes.keepPlaceholder} ~ ${Label} {
            color: var(${tokens.placeholderColor});
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

            height: 100%;
            width: 100%;
            transition: top 0.1s ease-in-out, transform 0.1s ease-in-out, padding 0.1s ease-in-out, color 0.1s ease-in-out, font-size 0.1s ease-in-out, font-weight 0.1s ease-in-out, letter-spacing 0.1s ease-in-out, line-height 0.1s ease-in-out;
        }
    }
        
    &.${classes.hasHint}.${classes.clear} {
        ${StyledIndicator} {
            &.${classes.innerLabelPlacement}.${classes.requiredAlignRight} {
                inset: var(${tokens.clearIndicatorHintInnerRight});
            }
        }
    }
`;
