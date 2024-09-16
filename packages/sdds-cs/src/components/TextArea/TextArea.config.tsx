import { css, textAreaTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        focused: 'true',
    },
    variations: {
        size: {
            s: css`
                ${textAreaTokens.inputWidth}: 100%;
                ${textAreaTokens.inputHeight}: 7.187rem;
                ${textAreaTokens.inputMinHeight}: 0.625rem;
                ${textAreaTokens.borderRadius}: 0.625rem;
                ${textAreaTokens.borderSize}: 0.125rem;
                ${textAreaTokens.borderRadiusWithHelpers}: 0.625rem 0.625rem 0 0;
                ${textAreaTokens.inputPaddingTop}: 0.688rem;
                ${textAreaTokens.inputPaddingRight}: 0.875rem;
                ${textAreaTokens.inputPaddingRightWithRightContent}: 3.125rem;
                ${textAreaTokens.inputPaddingBottom}: 0.75rem;
                ${textAreaTokens.inputPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersPaddingTop}: 0.75rem;
                ${textAreaTokens.helpersPaddingRight}: 0.875rem;
                ${textAreaTokens.helpersPaddingBottom}: 0.75rem;
                ${textAreaTokens.helpersPaddingLeft}: 0.875rem;
                ${textAreaTokens.helpersOffset}: 0rem;
                ${textAreaTokens.rightContentTop}: 0.688rem;
                ${textAreaTokens.rightContentRight}: 0.75rem;
                ${textAreaTokens.rightContentHeight}: 1.25rem;
                ${textAreaTokens.labelMarginBottom}: 0.5rem;
                ${textAreaTokens.labelOuterFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.labelInnerFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.labelInnerFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.labelInnerFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.labelInnerFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.labelInnerLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.labelInnerLineHeight}: var(--plasma-typo-body-s-line-height);
                ${textAreaTokens.labelInnerTop}: 0.375rem;
                ${textAreaTokens.labelInnerMarginBottom}: 0.125rem;
                ${textAreaTokens.inputFontFamily}: var(--plasma-typo-body-m-font-family);
                ${textAreaTokens.inputFontSize}: var(--plasma-typo-body-m-font-size);
                ${textAreaTokens.inputFontStyle}: var(--plasma-typo-body-m-font-style);
                ${textAreaTokens.inputFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${textAreaTokens.inputLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${textAreaTokens.inputLineHeight}: var(--plasma-typo-body-m-line-height);
                ${textAreaTokens.helpersFontFamily}: var(--plasma-typo-body-s-font-family);
                ${textAreaTokens.helpersFontSize}: var(--plasma-typo-body-s-font-size);
                ${textAreaTokens.helpersFontStyle}: var(--plasma-typo-body-s-font-style);
                ${textAreaTokens.helpersFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${textAreaTokens.helpersLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${textAreaTokens.helpersLineHeight}: var(--plasma-typo-body-s-line-height);

                ${textAreaTokens.indicatorSizeInner}: 0.375rem;
                ${textAreaTokens.indicatorSizeOuter}: 0.375rem;
                ${textAreaTokens.indicatorLabelPlacementInner}: 0 0 0 0;
                /* stylelint-disable-next-line number-max-precision */
                ${textAreaTokens.indicatorLabelPlacementOuter}: 0.3125rem auto auto -0.6875rem;
                ${textAreaTokens.indicatorLabelPlacementInnerRight}: 0 0 auto auto;
                ${textAreaTokens.indicatorLabelPlacementOuterRight}: 0.25rem -0.625rem auto auto;
            `,
        },
        view: {
            default: css`
                ${textAreaTokens.borderColor}: var(--outline-solid-primary);
                ${textAreaTokens.borderColorHover}: var(--outline-solid-primary-hover);
                ${textAreaTokens.borderColorFocus}: var(--outline-accent);
                ${textAreaTokens.inputBackgroundColor}: var(--surface-solid-card);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-solid-card-hover);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-solid-card-active);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-solid-card);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-solid-card);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-solid-card-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-solid-card-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-solid-card);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--text-negative);
                ${textAreaTokens.optionalColor}: var(--text-secondary);
                ${textAreaTokens.rightContentColor}: var(--text-accent);
            `,
            /**
             * @deprecated
             * использовать `default`
             */
            primary: css`
                ${textAreaTokens.borderColor}: var(--outline-solid-primary);
                ${textAreaTokens.borderColorHover}: var(--outline-solid-primary-hover);
                ${textAreaTokens.borderColorFocus}: var(--outline-accent);
                ${textAreaTokens.inputBackgroundColor}: var(--surface-solid-card);
                ${textAreaTokens.inputBackgroundColorHover}: var(--surface-solid-card-hover);
                ${textAreaTokens.inputBackgroundColorActive}: var(--surface-solid-card-active);
                ${textAreaTokens.inputBackgroundColorFocus}: var(--surface-solid-card);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-solid-card);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-solid-card-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-solid-card-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-solid-card);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-accent);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.leftHelperColor}: var(--text-secondary);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--text-negative);
                ${textAreaTokens.optionalColor}: var(--text-secondary);
                ${textAreaTokens.rightContentColor}: var(--text-accent);
            `,
            negative: css`
                ${textAreaTokens.borderColor}: var(--outline-negative);
                ${textAreaTokens.borderColorHover}: var(--outline-negative-hover);
                ${textAreaTokens.borderColorFocus}: var(--outline-negative-focus);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-transparent-negative);
                ${textAreaTokens.helpersBackgroundColorHover}: var(--surface-transparent-negative-hover);
                ${textAreaTokens.helpersBackgroundColorActive}: var(--surface-transparent-negative-active);
                ${textAreaTokens.helpersBackgroundColorFocus}: var(--surface-transparent-negative);
                ${textAreaTokens.inputColor}: var(--text-primary);
                ${textAreaTokens.inputColorFocus}: var(--text-primary);
                ${textAreaTokens.inputCaretColor}: var(--text-negative);
                ${textAreaTokens.placeholderColor}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.leftHelperColor}: var(--text-negative);
                ${textAreaTokens.rightHelperColor}: var(--text-secondary);
                ${textAreaTokens.indicatorColor}: var(--text-negative);
                ${textAreaTokens.optionalColor}: var(--text-secondary);
                ${textAreaTokens.rightContentColor}: var(--text-accent);
            `,
        },
        disabled: {
            true: css`
                ${textAreaTokens.disabledOpacity}: 1;
                ${textAreaTokens.inputBackgroundColor}: var(--surface-solid-primary);
                ${textAreaTokens.helpersBackgroundColor}: var(--surface-solid-primary);
                ${textAreaTokens.borderColor}: var(--surface-solid-primary);
                ${textAreaTokens.borderColorHover}: var(--surface-solid-primary);
                ${textAreaTokens.borderColorFocus}: var(--surface-solid-primary);
                ${textAreaTokens.inputColor}: var(--text-secondary);
                ${textAreaTokens.inputColorFocus}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.labelOuterColor}: var(--text-primary);
                ${textAreaTokens.inputColorDisabled}: var(--text-secondary);
            `,
        },
        readOnly: {
            true: css`
                ${textAreaTokens.inputBackgroundColor}: none;
                ${textAreaTokens.helpersBackgroundColor}: none;
                ${textAreaTokens.borderColor}: transparent;
                ${textAreaTokens.borderColorHover}: transparent;
                ${textAreaTokens.borderColorFocus}: transparent;
                ${textAreaTokens.inputColor}: var(--text-secondary);
                ${textAreaTokens.inputColorFocus}: var(--text-secondary);
                ${textAreaTokens.placeholderColorFocus}: var(--text-secondary);
                ${textAreaTokens.labelOuterColor}: var(--text-secondary);
            `,
        },
    },
};
