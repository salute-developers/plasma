import { styled } from '@linaria/react';

import { chipConfig, chipTokens } from '../../../../../../../Chip';
import { component, mergeConfig } from '../../../../../../../../engines';
import { tokens, classes } from '../../../../../../SelectNew.tokens';
import { addFocus } from '../../../../../../../../mixins';

const mergedConfig = mergeConfig(chipConfig);
const Chip = component(mergedConfig);

export const StyledChip = styled(Chip)`
    ${chipTokens.color}: var(${tokens.chipColor});
    ${chipTokens.background}: var(${tokens.chipBackground});
    ${chipTokens.colorHover}: var(${tokens.chipColorHover});
    ${chipTokens.backgroundHover}: var(${tokens.chipBackgroundHover});
    ${chipTokens.colorActive}: var(${tokens.chipColorActive});
    ${chipTokens.backgroundActive}: var(${tokens.chipBackgroundActive});
    ${chipTokens.backgroundReadOnly}: var(${tokens.chipBackgroundReadOnly});
    ${chipTokens.colorReadOnly}: var(${tokens.chipColorReadOnly});
    ${chipTokens.backgroundReadOnlyHover}: var(${tokens.chipBackgroundReadOnlyHover});
    ${chipTokens.colorReadOnlyHover}: var(${tokens.chipColorReadOnlyHover});
    ${chipTokens.borderRadius}: var(${tokens.chipBorderRadius});
    ${chipTokens.width}: var(${tokens.chipWidth});
    ${chipTokens.height}: var(${tokens.chipHeight});
    ${chipTokens.paddingRight}: var(${tokens.chipPaddingRight});
    ${chipTokens.paddingLeft}: var(${tokens.chipPaddingLeft});
    ${chipTokens.fontFamily}: var(${tokens.chipFontFamily});
    ${chipTokens.fontSize}: var(${tokens.chipFontSize});
    ${chipTokens.fontStyle}: var(${tokens.chipFontStyle});
    ${chipTokens.fontWeight}: var(${tokens.chipFontWeight});
    ${chipTokens.letterSpacing}: var(${tokens.chipLetterSpacing});
    ${chipTokens.lineHeight}: var(${tokens.chipLineHeight});
    ${chipTokens.clearContentMarginLeft}: var(${tokens.chipClearContentMarginLeft});
    ${chipTokens.clearContentMarginRight}: var(${tokens.chipClearContentMarginRight});
    ${chipTokens.scaleHover}: var(${tokens.chipScaleHover});
    ${chipTokens.scaleActive}: var(${tokens.chipScaleActive});
    ${chipTokens.closeIconSize}: var(${tokens.chipCloseIconSize});
    ${chipTokens.closeIconColor}: var(${tokens.chipCloseIconColor});
    ${chipTokens.focusColor}: var(${tokens.focusColor});

    ${addFocus({
        outlineSize: '0',
        outlineOffset: '0',
        outlineColor: `var(${tokens.focusColor})`,
        outlineRadius: `var(${tokens.chipBorderRadius})`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.selectChipIsFocused}:before {
                outline: none;
                box-shadow: inset 0 0 0 var(${tokens.chipFocusSize}) var(${tokens.focusColor});
            }
        `,
    })};

    &[readonly] {
        opacity: var(${tokens.chipOpacityReadonly});
    }
`;
