import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import {
    Input,
    InputContainer,
    InputWrapper,
    Label,
    LeftHelper,
    StyledTextAfter,
    StyledTextBefore,
} from '../../TextField.styles';

export const base = css`
    ${Input} {
        width: 100%;
        font: inherit;
        letter-spacing: inherit;
        line-height: inherit;
    }

    ${InputContainer} {
        width: 100%;
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }

    ${InputWrapper} {
        height: var(${tokens.height});
        border-radius: var(${tokens.borderRadius});
        padding: var(${tokens.padding});

        &.${classes.hasChips} {
            padding-top: var(${tokens.paddingWithChips});
            padding-bottom: var(${tokens.paddingWithChips});
        }

        &.${classes.hasEmptyContentLeft} {
            padding-left: var(${tokens.paddingWithChips});
        }

        &.${classes.hasEmptyContentRight} {
            padding-right: var(${tokens.paddingWithChips});
        }
    }

    ${Label} {
        font-family: var(${tokens.labelFontFamily});
        font-size: var(${tokens.labelFontSize});
        font-style: var(${tokens.labelFontStyle});
        font-weight: var(${tokens.labelFontWeight});
        letter-spacing: var(${tokens.labelLetterSpacing});
        line-height: var(${tokens.labelLineHeight});
    }

    ${LeftHelper} {
        margin-top: var(${tokens.leftHelperOffset});

        font-family: var(${tokens.leftHelperFontFamily});
        font-size: var(${tokens.leftHelperFontSize});
        font-style: var(${tokens.leftHelperFontStyle});
        font-weight: var(${tokens.leftHelperFontWeight});
        letter-spacing: var(${tokens.leftHelperLetterSpacing});
        line-height: var(${tokens.leftHelperLineHeight});
    }

    ${StyledTextBefore}, ${StyledTextAfter} {
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }

    ${StyledTextBefore} {
        margin: var(${tokens.textBeforeMargin});
    }

    ${StyledTextAfter} {
        margin: var(${tokens.textAfterMargin});
    }
`;
