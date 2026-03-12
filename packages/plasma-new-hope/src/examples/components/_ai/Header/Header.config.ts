import { css } from '@linaria/core';

import { headerTokens as tokens } from '../../../../components/_ai/Header';

export const config = {
    defaults: {
        view: 'default',
        size: 'xl',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
                ${tokens.titleColor}: var(--text-primary);
                ${tokens.descriptionColor}: var(--text-primary);
            `,
            secondary: css`
                ${tokens.backgroundColor}: var(--surface-transparent-primary);
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
                ${tokens.titleColor}: var(--text-primary);
                ${tokens.descriptionColor}: var(--text-primary);
            `,
            clear: css`
                ${tokens.backgroundColor}: transparent;
                ${tokens.dividerColor}: var(--surface-transparent-tertiary);
                ${tokens.titleColor}: var(--text-primary);
                ${tokens.descriptionColor}: var(--text-primary);
            `,
        },
        size: {
            xl: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 1.063rem 1.125rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-l-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-l-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-l-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-l-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-l-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            l: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.813rem 0.75rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-l-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-l-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-l-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-l-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-l-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            m: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.625rem 0.5rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-m-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-m-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-m-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-m-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            s: css`
                ${tokens.padding}: 0.375rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.contentPadding}: 0.438rem 0.625rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-s-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-s-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-s-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-s-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-s-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xs: css`
                ${tokens.padding}: 0.25rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.contentPadding}: 0.563rem 0.625rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-body-xs-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-body-xs-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-body-xs-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-body-xs-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-body-xs-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            h2: css`
                ${tokens.padding}: 0.5rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.625rem 1.125rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h2-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h2-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h2-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h2-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h2-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h2-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            h3: css`
                ${tokens.padding}: 0.5rem;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.5rem;
                ${tokens.contentPadding}: 0.563rem 0.75rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h3-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h3-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h3-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h3-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h3-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h3-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            h4: css`
                ${tokens.padding}: 0.5rem;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.contentPadding}: 0.438rem 0.5rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h4-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h4-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h4-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h4-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h4-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h4-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            h5: css`
                ${tokens.padding}: 0.375rem 0;
                ${tokens.gap}: 0;
                ${tokens.borderRadius}: 0;
                ${tokens.contentGap}: 0.25rem;
                ${tokens.contentPadding}: 0.25rem 0.625rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h5-bold-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h5-bold-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h5-bold-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h5-bold-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h5-bold-line-height);

                ${tokens.descriptionFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.descriptionFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.descriptionFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.descriptionFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.descriptionLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.descriptionLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
        },
    },
};
