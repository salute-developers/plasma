import { styled } from '@linaria/react';

import { chipConfig, chipTokens } from '../../../Chip';
import { component, mergeConfig } from '../../../../engines';
import { tokens } from '../../Select.tokens';
import { addFocus } from '../../../../mixins';

// issue #823
const mergedConfig = mergeConfig(chipConfig);
const Chip = component(mergedConfig);

// NOTE: Необходимое переопределение токенов из компонента Chip т.к. используются его части
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
        outlineOffset: '0.125rem',
        outlineSize: '0.125rem',
        outlineRadius: `calc(var(${tokens.chipBorderRadius}) - 0.1rem)`,
        outlineColor: `var(${tokens.focusColor})`,
    })}

    &[readonly] {
        opacity: var(${tokens.chipOpacityReadonly});
    }
`;
