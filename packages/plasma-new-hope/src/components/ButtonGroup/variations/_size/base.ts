import { css } from '@linaria/core';

import { classes, tokens } from '../../ButtonGroup.tokens';
import { buttonClasses, buttonTokens } from '../../../Button';

export const base = css`
    &.${classes.buttonGroupOverrideStyles} .${buttonClasses.buttonItem}  {
        ${buttonTokens.buttonHeight}: var(${tokens.buttonHeight});
        ${buttonTokens.buttonPadding}: var(${tokens.buttonPadding});
        ${buttonTokens.buttonScaleActive}: var(${tokens.buttonScaleActive});
        ${buttonTokens.buttonScaleHover}: var(${tokens.buttonScaleHover});
        ${buttonTokens.buttonFontFamily}: var(${tokens.buttonFontFamily});
        ${buttonTokens.buttonFontSize}: var(${tokens.buttonFontSize});
        ${buttonTokens.buttonFontStyle}: var(${tokens.buttonFontStyle});
        ${buttonTokens.buttonFontWeight}: var(${tokens.buttonFontWeight});
        ${buttonTokens.buttonLetterSpacing}: var(${tokens.buttonLetterSpacing});
        ${buttonTokens.buttonLineHeight}: var(${tokens.buttonLineHeight});
    }
`;
