import { css } from '@linaria/core';

import { selectNewTokens } from '../../../../components/SelectNew';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xs: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 10rem;
                ${selectNewTokens.borderRadius}: 0.5rem;

                ${selectNewTokens.itemPaddingTop}: 0.5625rem;
                ${selectNewTokens.itemPaddingRight}: 0.5rem;
                ${selectNewTokens.itemPaddingBottom}: 0.5625rem;
                ${selectNewTokens.itemPaddingLeft}: 0.5rem;
                ${selectNewTokens.itemBorderRadius}: 0.375rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.3125rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.3125rem;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${selectNewTokens.checkboxMargin}: 0 0 0.188rem 0.188rem;
                ${selectNewTokens.checkboxTriggerMargin}: 0.188rem 0;
                ${selectNewTokens.checkboxTriggerSize}: 0.875rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.25rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);
            `,
            s: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 12.5rem;
                ${selectNewTokens.borderRadius}: 0.625rem;

                ${selectNewTokens.itemPaddingTop}: 0.6875rem;
                ${selectNewTokens.itemPaddingRight}: 0.75rem;
                ${selectNewTokens.itemPaddingBottom}: 0.6875rem;
                ${selectNewTokens.itemPaddingLeft}: 0.75rem;
                ${selectNewTokens.itemBorderRadius}: 0.5rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.4375rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.4375rem;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-s-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-s-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-s-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-s-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-s-line-height);

                ${selectNewTokens.checkboxMargin}: 0 0 0.188rem 0.188rem;
                ${selectNewTokens.checkboxTriggerMargin}: 0.188rem 0;
                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);
            `,
            m: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 15rem;
                ${selectNewTokens.borderRadius}: 0.75rem;

                ${selectNewTokens.itemPaddingTop}: 0.875rem;
                ${selectNewTokens.itemPaddingRight}: 0.875rem;
                ${selectNewTokens.itemPaddingBottom}: 0.875rem;
                ${selectNewTokens.itemPaddingLeft}: 0.875rem;
                ${selectNewTokens.itemBorderRadius}: 0.625rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.625rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.625rem;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.checkboxMargin}: 0 0 0.188rem 0.188rem;
                ${selectNewTokens.checkboxTriggerMargin}: 0.188rem 0;
                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);
            `,
            l: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 17.5rem;
                ${selectNewTokens.borderRadius}: 0.875rem;

                ${selectNewTokens.itemPaddingTop}: 1.0625rem;
                ${selectNewTokens.itemPaddingRight}: 1rem;
                ${selectNewTokens.itemPaddingBottom}: 1.0625rem;
                ${selectNewTokens.itemPaddingLeft}: 1rem;
                ${selectNewTokens.itemBorderRadius}: 0.75rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.8125rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.8125rem;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-l-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-l-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-l-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-l-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-l-line-height);

                ${selectNewTokens.checkboxMargin}: 0 0 0.188rem 0.188rem;
                ${selectNewTokens.checkboxTriggerMargin}: 0.188rem 0;
                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);
            `,
        },
        view: {
            default: css`
                ${selectNewTokens.disabledOpacity}: 0.4;
                ${selectNewTokens.focusColor}: var(--surface-accent);
                ${selectNewTokens.background}: var(--surface-solid-card);
                ${selectNewTokens.boxShadow}: var(--shadow-down-soft-s);
                ${selectNewTokens.disclosureIconColor}: var(--text-secondary);
                ${selectNewTokens.itemBackground}: var(--plasma-colors-transparent);
                ${selectNewTokens.itemBackgroundHover}: var(--surface-transparent-secondary);
                ${selectNewTokens.itemColor}: var(--text-primary);
            `,
        },
    },
};
