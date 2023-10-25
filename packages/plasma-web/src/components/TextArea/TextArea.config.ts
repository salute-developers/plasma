import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

// INFO: Применяется во всех размерах для сохранения обратной совместимости
const size = css`
    ${textAreaTokens.inputWidth}: 100%;
    ${textAreaTokens.inputHeight}: 8.5rem;
    ${textAreaTokens.inputMinHeight}: 1.125rem;
    ${textAreaTokens.borderRadius}: 0.25rem;
    ${textAreaTokens.borderRadiusWithHelpers}: 0.25rem;
    ${textAreaTokens.inputPaddingTop}: 0.875rem;
    ${textAreaTokens.inputPaddingRight}: 1rem;
    ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
    ${textAreaTokens.inputPaddingBottom}: 0.875rem;
    ${textAreaTokens.inputPaddingBottomWithHelpers}: 0.875rem;
    ${textAreaTokens.inputPaddingLeft}: 1rem;
    ${textAreaTokens.helpersPaddingTop}: 0.25rem;
    ${textAreaTokens.helpersPaddingRight}: 0rem;
    ${textAreaTokens.helpersPaddingBottom}: 0rem;
    ${textAreaTokens.helpersPaddingLeft}: 0rem;
    ${textAreaTokens.helpersOffset}: 0.375rem;
    ${textAreaTokens.rightContentTop}: 0;
    ${textAreaTokens.rightContentRight}: 1rem;
    ${textAreaTokens.rightContentHeight}: 3rem;
    ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body1-font-family);
    ${textAreaTokens.inputFontSize}: var(--plasma-typo-body1-font-size);
    ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body1-font-style);
    ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body1-font-weight);
    ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body1-letter-spacing);
    ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body1-line-height);
    ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-caption-font-family);
    ${textAreaTokens.helpersFontSize}: var(--plasma-typo-caption-font-size);
    ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-caption-font-style);
    ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-caption-font-weight);
    ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-caption-letter-spacing);
    ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-caption-line-height);
`;

export const config = {
    defaults: {
        view: 'primary',
        focused: 'true',
        resize: 'both',
    },
    variations: {
        size: {
            xs: size,
            s: size,
            m: size,
            l: size,
        },
        view: {
            primary: css`
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorHover}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorActive}: var(--plasma-colors-background);
                ${textAreaTokens.inputBorderColor}: var(--plasma-colors-input-border);
                ${textAreaTokens.inputBorderColorHover}: var(--plasma-colors-input-border-hover);
                ${textAreaTokens.inputBorderColorActive}: var(--plasma-colors-input-border-hover);
                ${textAreaTokens.inputBorderColorFocus}: var(--plasma-colors-accent);
                ${textAreaTokens.inputColor}: var(--plasma-colors-primary);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-primary);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-accent);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-secondary);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-secondary);
            `,
            positive: css`
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorHover}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorActive}: var(--plasma-colors-background);
                ${textAreaTokens.inputBorderColor}: var(--plasma-colors-success);
                ${textAreaTokens.inputBorderColorHover}: var(--plasma-colors-success);
                ${textAreaTokens.inputBorderColorActive}: var(--plasma-colors-success);
                ${textAreaTokens.inputBorderColorFocus}: var(--plasma-colors-success);
                ${textAreaTokens.inputColor}: var(--plasma-colors-success);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-success);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-success);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-success);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-success);
            `,
            warning: css`
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorHover}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorActive}: var(--plasma-colors-background);
                ${textAreaTokens.inputBorderColor}: var(--plasma-colors-warning);
                ${textAreaTokens.inputBorderColorHover}: var(--plasma-colors-warning);
                ${textAreaTokens.inputBorderColorActive}: var(--plasma-colors-warning);
                ${textAreaTokens.inputBorderColorFocus}: var(--plasma-colors-warning);
                ${textAreaTokens.inputColor}: var(--plasma-colors-warning);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-warning);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-warning);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-warning);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-warning);
            `,
            negative: css`
                ${textAreaTokens.inputBackgroundColor}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorHover}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--plasma-colors-background);
                ${textAreaTokens.inputBackgroundColorActive}: var(--plasma-colors-background);
                ${textAreaTokens.inputBorderColor}: var(--plasma-colors-critical);
                ${textAreaTokens.inputBorderColorHover}: var(--plasma-colors-critical);
                ${textAreaTokens.inputBorderColorActive}: var(--plasma-colors-critical);
                ${textAreaTokens.inputBorderColorFocus}: var(--plasma-colors-critical);
                ${textAreaTokens.inputColor}: var(--plasma-colors-critical);
                ${textAreaTokens.inputColorFocus}: var(--plasma-colors-critical);
                ${textAreaTokens.inputCaretColor}: var(--plasma-colors-critical);
                ${textAreaTokens.placeholderColor}: var(--plasma-colors-tertiary);
                ${textAreaTokens.placeholderColorFocus}: var(--plasma-colors-tertiary);
                ${textAreaTokens.leftHelperColor}: var(--plasma-colors-critical);
                ${textAreaTokens.rightHelperColor}: var(--plasma-colors-critical);
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 0.4;
                ${textAreaTokens.inputColorDisabled}: var(--plasma-colors-primary);
            `,
        },
    },
};
