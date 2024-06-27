import { styled } from '@linaria/react';

import { chipConfig, chipTokens } from '../../../../../../../Chip';
import { component, mergeConfig } from '../../../../../../../../engines';
import { tokens, classes, constants } from '../../../../../../Select.tokens';
import { addFocus } from '../../../../../../../../mixins';

const mergedConfig = mergeConfig(chipConfig);
const Chip = component(mergedConfig);

export const StyledChip = styled(Chip)`
    ${chipTokens.color}: var(${tokens.chipColor});
    ${chipTokens.colorHover}: var(${tokens.chipColor});
    ${chipTokens.colorActive}: var(${tokens.chipColor});
    ${chipTokens.background}: var(${tokens.chipBackground});
    ${chipTokens.backgroundHover}: var(${tokens.chipBackgroundHover});
    ${chipTokens.backgroundActive}: var(${tokens.chipBackgroundActive});
    ${chipTokens.borderRadius}: var(${tokens.chipBorderRadius});
    ${chipTokens.height}: var(${tokens.chipHeight});
    ${chipTokens.paddingRight}: var(${tokens.chipPaddingRight});
    ${chipTokens.paddingLeft}: var(${tokens.chipPaddingLeft});
    ${chipTokens.fontFamily}: var(${tokens.fontFamily});
    ${chipTokens.fontSize}: var(${tokens.fontSize});
    ${chipTokens.fontStyle}: var(${tokens.fontStyle});
    ${chipTokens.fontWeight}: var(${tokens.fontWeight});
    ${chipTokens.letterSpacing}: var(${tokens.fontLetterSpacing});
    ${chipTokens.lineHeight}: var(${tokens.fontLineHeight});
    ${chipTokens.clearContentMarginLeft}: var(${tokens.chipClearContentMarginLeft});
    ${chipTokens.clearContentMarginRight}: var(${tokens.chipClearContentMarginRight});
    ${chipTokens.closeIconSize}: var(${tokens.chipCloseIconSize});
    ${chipTokens.closeIconColor}: var(${tokens.chipColor});
    ${chipTokens.focusColor}: var(${constants.focusColor});

    ${addFocus({
        outlineOffset: `calc(var(${tokens.focusOffset}) * -1)`,
        outlineRadius: `calc(var(${tokens.chipBorderRadius}) + var(${tokens.focusOffset}))`,
        customFocusRules: `
            &.${classes.selectChipIsFocused}:before {
                outline: none;
                box-shadow: 0 0 0 ${constants.focusSize} var(${constants.focusColor});
            }
        `,
    })};
`;
