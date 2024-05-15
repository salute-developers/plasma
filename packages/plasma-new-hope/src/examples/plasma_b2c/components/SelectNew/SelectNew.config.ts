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

                ${selectNewTokens.itemHeight}: 1rem;
                ${selectNewTokens.itemPaddingTop}: 0.5rem;
                ${selectNewTokens.itemPaddingRight}: 0.5rem;
                ${selectNewTokens.itemPaddingBottom}: 0.5rem;
                ${selectNewTokens.itemPaddingLeft}: 0.375rem;
                ${selectNewTokens.itemBorderRadius}: 0.375rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.25rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.25rem;
                ${selectNewTokens.itemIconSize}: 1rem;
                ${selectNewTokens.itemIconMargin}: 0 0.25rem 0 0;

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

                ${selectNewTokens.indicatorSize}: 0.375rem;
            `,
            s: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 12.5rem;
                ${selectNewTokens.borderRadius}: 0.625rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPaddingTop}: 0.5rem;
                ${selectNewTokens.itemPaddingRight}: 0.75rem;
                ${selectNewTokens.itemPaddingBottom}: 0.5rem;
                ${selectNewTokens.itemPaddingLeft}: 0.675rem;
                ${selectNewTokens.itemBorderRadius}: 0.5rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.25rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.25rem;
                ${selectNewTokens.itemIconSize}: 1.5rem;
                ${selectNewTokens.itemIconMargin}: 0 0.375rem 0 0;

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

                ${selectNewTokens.indicatorSize}: 0.375rem;
            `,
            m: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 15rem;
                ${selectNewTokens.borderRadius}: 0.75rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPaddingTop}: 0.75rem;
                ${selectNewTokens.itemPaddingRight}: 0.75rem;
                ${selectNewTokens.itemPaddingBottom}: 0.75rem;
                ${selectNewTokens.itemPaddingLeft}: 0.75rem;
                ${selectNewTokens.itemBorderRadius}: 0.625rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.5rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.5rem;
                ${selectNewTokens.itemIconMargin}: 0 0.375rem 0 0;
                ${selectNewTokens.itemIconSize}: 1.5rem;

                ${selectNewTokens.itemFontFamily}: var(--plasma-typo-body-m-font-family);
                ${selectNewTokens.itemFontSize}: var(--plasma-typo-body-m-font-size);
                ${selectNewTokens.itemFontStyle}: var(--plasma-typo-body-m-font-style);
                ${selectNewTokens.itemFontWeightBold}: var(--plasma-typo-body-m-font-weight);
                ${selectNewTokens.itemFontLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${selectNewTokens.itemFontLineHeight}: var(--plasma-typo-body-m-line-height);

                ${selectNewTokens.checkboxMargin}: 0;
                ${selectNewTokens.checkboxTriggerMargin}: 0;
                ${selectNewTokens.checkboxTriggerSize}: 1.25rem;
                ${selectNewTokens.checkboxTriggerBorderRadius}: 0.375rem;
                ${selectNewTokens.checkboxFillColor}: var(--text-accent);
                ${selectNewTokens.checkboxIconColor}: var(--on-dark-text-primary);
                ${selectNewTokens.checkboxTriggerBorderColor}: var(--text-secondary);

                ${selectNewTokens.indicatorSize}: 0.375rem;
            `,
            l: css`
                ${selectNewTokens.padding}: 0.125rem;
                ${selectNewTokens.width}: 17.5rem;
                ${selectNewTokens.borderRadius}: 0.875rem;

                ${selectNewTokens.itemHeight}: 1.5rem;
                ${selectNewTokens.itemPaddingTop}: 1rem;
                ${selectNewTokens.itemPaddingRight}: 1rem;
                ${selectNewTokens.itemPaddingBottom}: 1rem;
                ${selectNewTokens.itemPaddingLeft}: 0.875rem;
                ${selectNewTokens.itemBorderRadius}: 0.75rem;
                ${selectNewTokens.itemPaddingTopTight}: 0.75rem;
                ${selectNewTokens.itemPaddingBottomTight}: 0.75rem;
                ${selectNewTokens.itemIconMargin}: 0 0.5rem 0 0;
                ${selectNewTokens.itemIconSize}: 1.5rem;

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

                ${selectNewTokens.indicatorSize}: 0.375rem;
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
