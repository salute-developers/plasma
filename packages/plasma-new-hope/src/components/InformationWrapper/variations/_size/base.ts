import { css } from '@linaria/core';

import {
    Helpers,
    HintTargetWrapper,
    HintWrapper,
    Label,
    LeftHelper,
    OptionalText,
    RightHelper,
    TitleCaption,
} from '../../InformationWrapper.styles';
import { tokens } from '../../InformationWrapper.tokens';

export const base = css`
    ${Label}, ${OptionalText} {
        font-family: var(${tokens.labelFontFamily});
        font-size: var(${tokens.labelFontSize});
        font-style: var(${tokens.labelFontStyle});
        font-weight: var(${tokens.labelFontWeight});
        letter-spacing: var(${tokens.labelLetterSpacing});
        line-height: var(${tokens.labelLineHeight});
    }

    ${HintWrapper} {
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

    ${Helpers} {
        padding: var(${tokens.helpersPadding});
        gap: var(${tokens.helpersGap});
    }

    ${LeftHelper} {
        font-family: var(${tokens.leftHelperFontFamily});
        font-size: var(${tokens.leftHelperFontSize});
        font-style: var(${tokens.leftHelperFontStyle});
        font-weight: var(${tokens.leftHelperFontWeight});
        letter-spacing: var(${tokens.leftHelperLetterSpacing});
        line-height: var(${tokens.leftHelperLineHeight});
    }

    ${RightHelper} {
        font-family: var(${tokens.rightHelperFontFamily});
        font-size: var(${tokens.rightHelperFontSize});
        font-style: var(${tokens.rightHelperFontStyle});
        font-weight: var(${tokens.rightHelperFontWeight});
        letter-spacing: var(${tokens.rightHelperLetterSpacing});
        line-height: var(${tokens.rightHelperLineHeight});
    }
`;
