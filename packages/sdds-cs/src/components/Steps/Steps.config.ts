import { css, stepsTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        size: 's',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.loaderSpinnerColor}: var(--on-dark-surface-solid-primary);

                ${tokens.activeTitleColor}: var(--text-primary);
                ${tokens.activeTitleColorHover}: var(--text-primary-hover);
                ${tokens.activeIndicatorColor}: var(--inverse-text-primary);
                ${tokens.activeIndicatorBackground}: var(--on-dark-surface-solid-primary);

                ${tokens.bulletActiveIndicatorBorder}: solid var(--on-dark-surface-solid-primary);
                ${tokens.bulletActiveBackground}: var(--surface-clear);

                ${tokens.completedTitleColor}: var(--text-accent);
                ${tokens.completedTitleColorHover}: var(--text-accent-hover);
                ${tokens.completedIndicatorColor}: var(--text-positive);
                ${tokens.completedIndicatorColorHover}: var(--text-positive-hover);
                ${tokens.completedIndicatorBackground}: var(--surface-clear);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-clear);
                ${tokens.completedIndicatorBorder}: var(--surface-positive);
                ${tokens.completedIndicatorBorderHover}: var(--surface-positive-hover);

                ${tokens.completedBulletBorder}: var(--surface-positive);
                ${tokens.completedBulletBorderHover}: var(--surface-positive-hover);
                ${tokens.completedBulletBackground}: var(--surface-positive);
                ${tokens.completedBulletBackgroundHover}: var(--surface-positive-hover);

                ${tokens.inactiveTitleColor}: var(--text-primary);
                ${tokens.inactiveTitleColorHover}: var(--text-primary-hover);
                ${tokens.inactiveIndicatorColor}: var(--text-primary);
                ${tokens.inactiveIndicatorColorHover}: var(--text-primary);

                ${tokens.inactiveIndicatorBackground}: var(--surface-solid-tertiary);
                ${tokens.inactiveIndicatorBackgroundHover}: var(--surface-solid-tertiary-hover);

                ${tokens.contentColor}: var(--text-secondary);
                ${tokens.focusColor}: var(--surface-accent);

                ${tokens.dividerColor}: var(--surface-positive);
                ${tokens.dividerGradientColor}: linear-gradient(90deg, var(--surface-positive) 35%, var(--on-dark-surface-solid-primary) 100%);
                ${tokens.dividerVerticalGradientColor}: linear-gradient(180deg, var(--surface-positive) 35%, var(--on-dark-surface-solid-primary) 100%);

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
