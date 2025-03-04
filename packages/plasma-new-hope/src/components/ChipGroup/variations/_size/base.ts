import { css } from '@linaria/core';

import { classes, tokens } from '../../ChipGroup.tokens';
import { chipClasses, chipTokens } from '../../../Chip';

export const base = css`
    &.${classes.chipGroupOverrideStyles} .${chipClasses.chipItem}  {
        ${chipTokens.height}: var(${tokens.chipHeight});
        ${chipTokens.width}: var(${tokens.chipWidth});
        ${chipTokens.borderRadius}: var(${tokens.chipBorderRadius});
        ${chipTokens.padding}: var(${tokens.chipPadding});
        ${chipTokens.closeIconSize}: var(${tokens.chipCloseIconSize});

        ${chipTokens.fontFamily}: var(${tokens.chipFontFamily});
        ${chipTokens.fontSize}: var(${tokens.chipFontSize});
        ${chipTokens.fontStyle}: var(${tokens.chipFontStyle});
        ${chipTokens.fontWeight}: var(${tokens.chipFontWeight});
        ${chipTokens.letterSpacing}: var(${tokens.chipLetterSpacing});
        ${chipTokens.lineHeight}: var(${tokens.chipLineHeight});

        ${chipTokens.leftContentMarginLeft}: var(${tokens.chipLeftContentMarginLeft});
        ${chipTokens.leftContentMarginRight}: var(${tokens.chipLeftContentMarginRight});
        ${chipTokens.rightContentMarginLeft}: var(${tokens.chipRightContentMarginLeft});
        ${chipTokens.rightContentMarginRight}: var(${tokens.chipRightContentMarginRight});
        ${chipTokens.clearContentMarginLeft}: var(${tokens.chipClearContentMarginLeft});
        ${chipTokens.clearContentMarginRight}: var(${tokens.chipClearContentMarginRight});
    }
`;
