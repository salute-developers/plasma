import { styled } from '@linaria/react';

import { chipConfig, chipTokens } from '../../../Chip';
import { component, mergeConfig } from '../../../../engines';
import { tokens } from '../../TextField.tokens';
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
    ${chipTokens.padding}: var(${tokens.chipPadding});
    ${chipTokens.fontFamily}: var(${tokens.chipFontFamily});
    ${chipTokens.fontSize}: var(${tokens.chipFontSize});
    ${chipTokens.fontStyle}: var(${tokens.chipFontStyle});
    ${chipTokens.fontWeight}: var(${tokens.chipFontWeight});
    ${chipTokens.letterSpacing}: var(${tokens.chipLetterSpacing});
    ${chipTokens.lineHeight}: var(${tokens.chipLineHeight});
    ${chipTokens.clearContentMarginLeft}: var(${tokens.chipClearContentMarginLeft});
    ${chipTokens.clearContentMarginRight}: var(${tokens.chipClearContentMarginRight});
    ${chipTokens.closeIconSize}: var(${tokens.chipCloseIconSize});
    ${chipTokens.closeIconColor}: var(${tokens.chipCloseIconColor});
    ${chipTokens.closeIconColorHover}: var(${tokens.chipCloseIconColorHover});
    ${chipTokens.focusColor}: var(${tokens.focusColor});

    scroll-snap-align: center;
    scroll-snap-stop: normal;

    ${addFocus({
        outlineOffset: '0.0625rem',
        outlineSize: '0.0625rem',
        outlineRadius: `calc(var(${tokens.chipBorderRadius}) - 0.1rem)`,
        outlineColor: `var(${tokens.focusColor})`,
    })}

    &[readonly] {
        opacity: var(${tokens.chipOpacityReadonly});
    }
`;

export const TextChip = styled.button`
    display: block;
    flex: none;
    background: none;
    border: none;
    outline: none;
    padding: 0;
    white-space: nowrap;
    cursor: pointer;

    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
    color: var(${tokens.color});

    ${addFocus({
        outlineOffset: '0.0625rem',
        outlineSize: '0.0625rem',
        outlineRadius: `calc(var(${tokens.chipBorderRadius}) - 0.1rem)`,
        outlineColor: `var(${tokens.focusColor})`,
    })}

    &:after {
        content: ',';
    }

    &:last-child {
        &:after {
            content: '';
        }
    }
`;
