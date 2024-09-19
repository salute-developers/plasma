import { css } from '@linaria/core';

import { classes, tokens } from '../../ChipGroup.tokens';
import { chipClasses, chipTokens } from '../../../Chip';

export const base = css`
    &.${classes.chipGroupOverrideStyles} .${chipClasses.chipItem} {
        ${chipTokens.background}: var(${tokens.chipBackground});
        ${chipTokens.color}: var(${tokens.chipColor});
        ${chipTokens.backgroundHover}: var(${tokens.chipBackgroundHover});
        ${chipTokens.colorHover}: var(${tokens.chipColorHover});
        ${chipTokens.scaleHover}: var(${tokens.chipScaleHover});
        ${chipTokens.backgroundActive}: var(${tokens.chipBackgroundActive});
        ${chipTokens.colorActive}: var(${tokens.chipColorActive});
        ${chipTokens.scaleActive}: var(${tokens.chipScaleActive});
        ${chipTokens.focusColor}: var(${tokens.chipFocusColor});
        ${chipTokens.outlineSize}: var(${tokens.chipOutlineSize});
        ${chipTokens.closeIconColor}: var(${tokens.chipCloseIconColor});
        ${chipTokens.closeIconColorHover}: var(${tokens.chipCloseIconColorHover});
        ${chipTokens.closeIconColorActive}: var(${tokens.chipCloseIconColorActive});
    }
`;
