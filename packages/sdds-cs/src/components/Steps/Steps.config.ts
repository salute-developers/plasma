import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        size: 's',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.activeTitleColor}: var(--text-accent);
                ${tokens.activeTitleColorHover}: var(--text-accent);
                ${tokens.activeIndicatorBorder}: solid var(--text-accent);
                ${tokens.activeIndicatorColor}: var(--text-positive);
                ${tokens.activeIndicatorBackground}: var(--surface-clear);

                ${tokens.completedIndicatorColor}: var(--inverse-text-primary);
                ${tokens.completedIndicatorColorHover}: var(--inverse-text-primary);
                ${tokens.completedIndicatorBackground}: var(--surface-accent);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-accent-hover);

                ${tokens.inactiveTitleColor}: var(--text-secondary);
                ${tokens.inactiveTitleColorHover}: var(--text-secondary-hover);
                ${tokens.inactiveIndicatorColor}: var(--text-primary);
                ${tokens.inactiveIndicatorColorHover}: var(--text-primary);
                ${tokens.inactiveIndicatorBackground}: var(--outline-solid-primary);
                ${tokens.inactiveIndicatorBackgroundHover}: #e9eef2;

                ${tokens.contentColor}: var(--text-secondary);
                ${tokens.focusColor}: var(--surface-accent);

                ${tokens.dividerColor}: var(--text-positive);

                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        size: {
            s: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.25rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.5rem;
                ${tokens.verticalContentPaddingLeft}: 1rem;

                ${tokens.smallIndicatorIndentHeight}: 0.5rem;
                ${tokens.largeIndicatorIndentHeight}: 0.5rem;
                ${tokens.smallBulletIndentHeight}: 1rem;
                ${tokens.largeBulletIndentHeight}: 0.75rem;

                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.activeIndicatorFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.activeIndicatorFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.activeIndicatorFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.activeIndicatorFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.activeIndicatorLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.activeIndicatorLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.titleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.contentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.contentFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.contentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.contentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.contentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.contentLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.dividerThickness}: 0.125rem;
            `,
        },
    },
};
