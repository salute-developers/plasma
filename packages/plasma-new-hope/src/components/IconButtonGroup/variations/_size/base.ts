import { css } from 'styled-components';

import { classes, tokens } from '../../IconButtonGroup.tokens';
import { buttonClasses, buttonTokens } from '../../../Button';

export const base = css`
    &.${classes.iconButtonGroupOverrideStyles} .${buttonClasses.buttonItem} {
        ${buttonTokens.buttonHeight}: var(${tokens.buttonHeight});
        ${buttonTokens.buttonWidth}: var(${tokens.buttonHeight});
        ${buttonTokens.buttonPadding}: 0;
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
