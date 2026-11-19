import { css } from 'styled-components';

import { tabBarTokens as tokens } from '../../../components/TabBar';

const bodyXXSBold = {
    fontFamily: 'var(--plasma-typo-body-xxs-bold-font-family)',
    fontSize: 'var(--plasma-typo-body-xxs-bold-font-size)',
    fontStyle: 'var(--plasma-typo-body-xxs-bold-font-style)',
    fontWeight: 'var(--plasma-typo-body-xxs-bold-font-weight)',
    letterSpacing: 'var(--plasma-typo-body-xxs-bold-letter-spacing)',
    lineHeight: 'var(--plasma-typo-body-xxs-bold-line-height)',
};

const bodyXXS = {
    fontFamily: 'var(--plasma-typo-body-xxs-font-family)',
    fontSize: 'var(--plasma-typo-body-xxs-font-size)',
    fontStyle: 'var(--plasma-typo-body-xxs-font-style)',
    fontWeight: 'var(--plasma-typo-body-xxs-font-weight)',
    letterSpacing: 'var(--plasma-typo-body-xxs-letter-spacing)',
    lineHeight: 'var(--plasma-typo-body-xxs-line-height)',
};

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.blur}: 0;
                ${tokens.boxShadow}: var(--shadow-up-soft-m);
                ${tokens.islandBoxShadow}: var(--shadow-down-soft-m);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemColor}: var(--text-secondary);
                ${tokens.itemColorSelected}: var(--text-primary);
                ${tokens.itemColorSelectedBackground}: var(--inverse-text-primary);
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundSelected}: var(--surface-solid-default);
                ${tokens.itemFocusColor}: var(--surface-accent);

                ${tokens.counterBackground}: var(--surface-negative);
                ${tokens.counterColor}: var(--on-dark-text-primary);

                ${tokens.homeIndicatorColor}: var(--text-primary);
            `,
            accent: css`
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.blur}: 0;
                ${tokens.boxShadow}: var(--shadow-up-soft-m);
                ${tokens.islandBoxShadow}: var(--shadow-down-soft-m);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemColor}: var(--text-secondary);
                ${tokens.itemColorSelected}: var(--text-accent);
                ${tokens.itemColorSelectedBackground}: var(--text-accent);
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundSelected}: var(--surface-transparent-accent);
                ${tokens.itemFocusColor}: var(--surface-accent);

                ${tokens.counterBackground}: var(--surface-negative);
                ${tokens.counterColor}: var(--on-dark-text-primary);

                ${tokens.homeIndicatorColor}: var(--text-primary);
            `,
            secondary: css`
                ${tokens.background}: var(--surface-solid-card);
                ${tokens.blur}: 0;
                ${tokens.boxShadow}: var(--shadow-up-soft-m);
                ${tokens.islandBoxShadow}: var(--shadow-down-soft-m);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);

                ${tokens.itemColor}: var(--text-secondary);
                ${tokens.itemColorSelected}: var(--text-secondary);
                ${tokens.itemColorSelectedBackground}: var(--text-primary);
                ${tokens.itemBackground}: transparent;
                ${tokens.itemBackgroundSelected}: var(--surface-transparent-secondary);
                ${tokens.itemFocusColor}: var(--surface-accent);

                ${tokens.counterBackground}: var(--surface-negative);
                ${tokens.counterColor}: var(--on-dark-text-primary);

                ${tokens.homeIndicatorColor}: var(--text-primary);
            `,
        },
        size: {
            m: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.paddingBottom}: 0.125rem;
                ${tokens.gap}: 0.125rem;
                ${tokens.borderRadius}: 1rem;
                ${tokens.dividerWidth}: 0.0625rem;

                ${tokens.itemPadding}: 0.625rem 0 0.5rem;
                ${tokens.itemGap}: 0.125rem;
                ${tokens.itemBorderRadius}: 0.875rem;
                ${tokens.itemIconSize}: 1.5rem;

                ${tokens.itemLabelFontFamily}: ${bodyXXSBold.fontFamily};
                ${tokens.itemLabelFontSize}: ${bodyXXSBold.fontSize};
                ${tokens.itemLabelFontStyle}: ${bodyXXSBold.fontStyle};
                ${tokens.itemLabelFontWeight}: ${bodyXXSBold.fontWeight};
                ${tokens.itemLabelLetterSpacing}: ${bodyXXSBold.letterSpacing};
                ${tokens.itemLabelLineHeight}: ${bodyXXSBold.lineHeight};

                ${tokens.counterHeight}: 1rem;
                ${tokens.counterPadding}: 0 0.25rem;
                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.homeIndicatorWidth}: 8.8125rem;
                ${tokens.homeIndicatorHeight}: 0.25rem;
                ${tokens.homeIndicatorRadius}: 6.25rem;
                ${tokens.homeIndicatorPadding}: 1rem 0 0.5rem;
            `,
            l: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.paddingBottom}: 0.125rem;
                ${tokens.gap}: 0.125rem;
                ${tokens.borderRadius}: 1.125rem;
                ${tokens.dividerWidth}: 0.0625rem;

                ${tokens.itemPadding}: 0.75rem 0;
                ${tokens.itemGap}: 0;
                ${tokens.itemBorderRadius}: 1rem;
                ${tokens.itemIconSize}: 2.25rem;

                ${tokens.itemLabelFontFamily}: ${bodyXXSBold.fontFamily};
                ${tokens.itemLabelFontSize}: ${bodyXXSBold.fontSize};
                ${tokens.itemLabelFontStyle}: ${bodyXXSBold.fontStyle};
                ${tokens.itemLabelFontWeight}: ${bodyXXSBold.fontWeight};
                ${tokens.itemLabelLetterSpacing}: ${bodyXXSBold.letterSpacing};
                ${tokens.itemLabelLineHeight}: ${bodyXXSBold.lineHeight};

                ${tokens.counterHeight}: 1.25rem;
                ${tokens.counterPadding}: 0 0.375rem;
                ${tokens.counterBorderRadius}: 1rem;
                ${tokens.counterFontFamily}: ${bodyXXS.fontFamily};
                ${tokens.counterFontSize}: ${bodyXXS.fontSize};
                ${tokens.counterFontStyle}: ${bodyXXS.fontStyle};
                ${tokens.counterFontWeight}: ${bodyXXS.fontWeight};
                ${tokens.counterLetterSpacing}: ${bodyXXS.letterSpacing};
                ${tokens.counterLineHeight}: ${bodyXXS.lineHeight};

                ${tokens.homeIndicatorWidth}: 8.8125rem;
                ${tokens.homeIndicatorHeight}: 0.25rem;
                ${tokens.homeIndicatorRadius}: 6.25rem;
                ${tokens.homeIndicatorPadding}: 1rem 0 0.5rem;
            `,
        },
    },
};
