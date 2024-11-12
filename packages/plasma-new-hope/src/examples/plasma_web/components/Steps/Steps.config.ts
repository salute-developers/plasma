import { css } from '@linaria/core';

import { stepsTokens as tokens } from '../../../../components/Steps';

export const config = {
    defaults: {
        size: 'm',
        view: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.activeTitleColor}: var(--text-primary);
                ${tokens.activeTitleColorHover}: var(--text-primary-hover);
                ${tokens.activeIndicatorBorder}: solid var(--surface-solid-default);
                ${tokens.activeIndicatorColor}: var(--text-primary);
                ${tokens.activeIndicatorBackground}: var(--surface-clear);

                ${tokens.completedIndicatorColor}: var(--inverse-text-primary);
                ${tokens.completedIndicatorColorHover}: var(--inverse-text-primary);
                ${tokens.completedIndicatorBackground}: var(--surface-solid-default);
                ${tokens.completedIndicatorBackgroundHover}: var(--surface-solid-default-hover);

                ${tokens.inactiveTitleColor}: var(--text-secondary);
                ${tokens.inactiveTitleColorHover}: var(--text-secondary-hover);
                ${tokens.inactiveIndicatorColor}: var(--text-secondary);
                ${tokens.inactiveIndicatorColorHover}: var(--text-secondary);
                ${tokens.inactiveIndicatorBackground}: var(--surface-transparent-secondary);
                ${tokens.inactiveIndicatorBackgroundHover}: var(--surface-transparent-secondary-hover);

                ${tokens.contentColor}: var(--text-secondary);
                ${tokens.focusColor}: var(--surface-accent);

                ${tokens.disabledOpacity}: 0.4;
            `,
        },
        size: {
            l: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 2.25rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.75rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 2rem;
                ${tokens.contentVerticalPadding}: 1.0625rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 1rem;
                ${tokens.largeIndicatorIndentHeight}: 0.625rem;
                ${tokens.smallBulletIndentHeight}: 1.5rem;
                ${tokens.largeBulletIndentHeight}: 1.25rem;

                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.activeIndicatorFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.activeIndicatorFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.activeIndicatorFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.activeIndicatorFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.activeIndicatorLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.activeIndicatorLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.titleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.contentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.contentFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.contentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.contentFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.contentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.contentLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.dividerThickness}: 0.125rem;
            `,
            m: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 2.25rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.625rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 1.75rem;
                ${tokens.contentVerticalPadding}: 0.875rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 0.75rem;
                ${tokens.largeIndicatorIndentHeight}: 0.4375rem;
                ${tokens.smallBulletIndentHeight}: 1.25rem;
                ${tokens.largeBulletIndentHeight}: 1.125rem;

                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

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
            s: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.375rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.6875rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 0.5rem;
                ${tokens.largeIndicatorIndentHeight}: 0.5rem;
                ${tokens.smallBulletIndentHeight}: 1rem;
                ${tokens.largeBulletIndentHeight}: 0.75rem;

                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.activeIndicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.activeIndicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.activeIndicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.activeIndicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.activeIndicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.activeIndicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.contentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.contentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.contentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.contentFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.contentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.contentLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.dividerThickness}: 0.125rem;
            `,
            xs: css`
                ${tokens.indicatorSize}: 1.5rem;
                ${tokens.activeIndicatorSize}: 1.5rem;
                ${tokens.bulletSize}: 0.5rem;
                ${tokens.activeBulletSize}: 1rem;

                ${tokens.titlePaddingTop}: 0.5rem;
                ${tokens.contentPaddingTop}: 0.25rem;
                ${tokens.contentSidePadding}: 1.5rem;
                ${tokens.contentVerticalPadding}: 0.5625rem;
                ${tokens.verticalContentPaddingLeft}: 0.75rem;

                ${tokens.smallIndicatorIndentHeight}: 0.25rem;
                ${tokens.largeIndicatorIndentHeight}: 0.25rem;
                ${tokens.smallBulletIndentHeight}: 0.75rem;
                ${tokens.largeBulletIndentHeight}: 0.5rem;

                ${tokens.indicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.indicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.indicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.indicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.indicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.indicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.activeIndicatorFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.activeIndicatorFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.activeIndicatorFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.activeIndicatorFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.activeIndicatorLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.activeIndicatorLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.titleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.contentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.contentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.contentFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.contentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.contentLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.dividerThickness}: 0.125rem;
            `,
        },
    },
};
