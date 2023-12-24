import { css } from '@linaria/core';

import { tokens } from '../TextField.tokens';
import { Input, InputLabelWrapper, InputWrapper, Label, LeftHelper, _tokenBorderWidth } from '../TextField.styles';

export const base = css`
--plasma_private-textfield-br: var(${tokens.borderRadius}, calc(var(${tokens.height}) / 4));
--plasma_private-textfield-padding: var(${tokens.padding}, calc(var(${tokens.height}) * 1.618 / 4));
/* import { _tokenBorderWidth } from '../TextField.styles'; */
--plasma_private-textfield-border-width: var(${tokens.borderWidth});

    ${Input} {
        height: var(${tokens.height});

        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }
    
    ${InputWrapper} {
        border-radius: var(--plasma_private-textfield-br);
        /** offset between Icon And Input */
        gap: var(${tokens.contentOffset});
    }

    ${InputWrapper} > ${InputLabelWrapper}:first-child {
        /** offset without Icon(LeftContent) */
        margin-left: var(--plasma_private-textfield-padding);
    }
    ${InputWrapper} > :not(${InputLabelWrapper}):first-child {
        /** offset with Icon(LeftContent) */
        margin-left: var(${tokens.paddingWithContent}, var(--plasma_private-textfield-padding));
    }
    ${InputWrapper} > ${InputLabelWrapper}:last-child {
        margin-right: var(--plasma_private-textfield-padding);
    }
    ${InputWrapper} > :not(${InputLabelWrapper}):last-child {
        margin-right: var(${tokens.paddingWithContent}, var(--plasma_private-textfield-padding));
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
`;
