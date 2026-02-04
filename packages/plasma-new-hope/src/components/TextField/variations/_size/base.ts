import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import {
    HintTargetWrapper,
    Input,
    InputContainer,
    InputWrapper,
    Label,
    LeftHelper,
    StyledContentRight,
    StyledContentRightWrapper,
    StyledHintWrapper,
    StyledOptionalText,
    StyledTextAfter,
    StyledTextBefore,
    TitleCaption,
} from '../../TextField.styles';

export const base = css`
    ${tokens.tourBorderRadius}: var(${tokens.borderRadius});

    ${Input} {
        width: 100%;
        font: inherit;
        letter-spacing: inherit;        
        line-height: var(${tokens.lineHeight});
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

    ${Label}, &:not(.${classes.innerLabelPlacement}) ${StyledOptionalText} {
        font-family: var(${tokens.labelFontFamily});
        font-size: var(${tokens.labelFontSize});
        font-style: var(${tokens.labelFontStyle});
        font-weight: var(${tokens.labelFontWeight});
        letter-spacing: var(${tokens.labelLetterSpacing});
        line-height: var(${tokens.labelLineHeight});
    }

    ${StyledHintWrapper} {
        margin: var(${tokens.hintMargin});
        width: var(${tokens.hintTargetSize});
        height: var(${tokens.hintTargetSize});
    }

    ${HintTargetWrapper} {
        width: var(${tokens.hintTargetSize});
        height: var(${tokens.hintTargetSize});
    }

    ${TitleCaption} {
        font-family: var(${tokens.titleCaptionFontFamily});
        font-size: var(${tokens.titleCaptionFontSize});
        font-style: var(${tokens.titleCaptionFontStyle});
        font-weight: var(${tokens.titleCaptionFontWeight});
        letter-spacing: var(${tokens.titleCaptionLetterSpacing});
        line-height: var(${tokens.titleCaptionLineHeight});
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
        align-self: end;

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

    ${StyledContentRightWrapper}.${classes.contentRightCompensationMargin} {
        gap: var(${tokens.contentRightWrapperGap});
        margin: var(${tokens.contentRightWrapperMargin});

        ${StyledContentRight} {
            margin: var(${tokens.rightContentWithHintMargin});
        }
    }
`;
