import { styled } from '@linaria/react';

import { chipConfig, chipTokens } from '../../../../../../../Chip';
import { component, mergeConfig } from '../../../../../../../../engines';
import { tokens, classes, constants } from '../../../../../../SelectNew.tokens';
import { addFocus } from '../../../../../../../../mixins';

const mergedConfig = mergeConfig(chipConfig);
const Chip = component(mergedConfig);

export const StyledChip = styled(Chip)`
    ${chipTokens.color}: var(--text-primary);
    ${chipTokens.background}: var(--surface-transparent-secondary);
    ${chipTokens.backgroundHover}: var(--surface-transparent-secondary-hover);
    ${chipTokens.backgroundActive}: var(--surface-transparent-secondary-active);
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
    ${chipTokens.closeIconColor}: var(--text-secondary);
    ${chipTokens.focusColor}: var(${constants.focusColor});

    ${addFocus({
        outlineSize: '0',
        outlineOffset: '0',
        outlineColor: `var(${constants.focusColor})`,
        outlineRadius: `var(${tokens.chipBorderRadius})`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.selectChipIsFocused}:before {
                outline: none;
                box-shadow: inset 0 0 0 var(${tokens.chipFocusSize}) var(${constants.focusColor});
            }
        `,
    })};
`;
