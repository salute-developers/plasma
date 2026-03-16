import { css } from '@linaria/core';

import { tokens } from '../../../../components/_ai/Answer/Answer.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.titleColor}: var(--text-primary);
                ${tokens.textContentColor}: var(--text-primary);
                ${tokens.loadingTitleColor}: var(--text-primary);
                ${tokens.spinnerColor}: var(--surface-solid-default);
                ${tokens.errorContainerBackgroundColor}: var(--surface-transparent-negative);
                ${tokens.errorTitleColor}: var(--text-primary);
                ${tokens.errorTextContentColor}: var(--text-primary);
            `,
        },
        size: {
            xl: css`
                ${tokens.titleContentGap}: 1.875rem;
                ${tokens.contentFooterGap}: 1.25rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.textContentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textContentFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textContentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textContentFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textContentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textContentLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.loadingTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.loadingTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.loadingTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.loadingTitleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.loadingTitleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.loadingTitleLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.875rem;
                ${tokens.errorContainerPadding}: 1.5rem 1.875rem;
                ${tokens.errorContainerGap}: 0.25rem;

                ${tokens.errorTitleFontFamily}: var(--plasma-typo-body-l-bold-font-family);
                ${tokens.errorTitleFontSize}: var(--plasma-typo-body-l-bold-font-size);
                ${tokens.errorTitleFontStyle}: var(--plasma-typo-body-l-bold-font-style);
                ${tokens.errorTitleFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.errorTitleLetterSpacing}: var(--plasma-typo-body-l-bold-letter-spacing);
                ${tokens.errorTitleLineHeight}: var(--plasma-typo-body-l-bold-line-height);

                ${tokens.errorTextContentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.errorTextContentFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.errorTextContentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.errorTextContentFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.errorTextContentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.errorTextContentLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            l: css`
                ${tokens.titleContentGap}: 1.625rem;
                ${tokens.contentFooterGap}: 1rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h3-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h3-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h3-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h3-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h3-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h3-line-height);

                ${tokens.textContentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textContentFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textContentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textContentFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textContentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textContentLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.loadingTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.loadingTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.loadingTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.loadingTitleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.loadingTitleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.loadingTitleLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.875rem;
                ${tokens.errorContainerPadding}: 1.5rem 1.875rem;
                ${tokens.errorContainerGap}: 0.25rem;

                ${tokens.errorTitleFontFamily}: var(--plasma-typo-body-l-bold-font-family);
                ${tokens.errorTitleFontSize}: var(--plasma-typo-body-l-bold-font-size);
                ${tokens.errorTitleFontStyle}: var(--plasma-typo-body-l-bold-font-style);
                ${tokens.errorTitleFontWeight}: var(--plasma-typo-body-l-bold-font-weight);
                ${tokens.errorTitleLetterSpacing}: var(--plasma-typo-body-l-bold-letter-spacing);
                ${tokens.errorTitleLineHeight}: var(--plasma-typo-body-l-bold-line-height);

                ${tokens.errorTextContentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.errorTextContentFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.errorTextContentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.errorTextContentFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.errorTextContentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.errorTextContentLineHeight}: var(--plasma-typo-body-l-line-height);
            `,
            m: css`
                ${tokens.titleContentGap}: 1.375rem;
                ${tokens.contentFooterGap}: 0.75rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h4-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h4-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h4-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h4-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h4-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h4-line-height);

                ${tokens.textContentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textContentFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textContentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textContentFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textContentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textContentLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.loadingTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.loadingTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.loadingTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.loadingTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.loadingTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.loadingTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.75rem;
                ${tokens.errorContainerPadding}: 1.25rem 1.5rem;
                ${tokens.errorContainerGap}: 0.125rem;

                ${tokens.errorTitleFontFamily}: var(--plasma-typo-body-m-bold-font-family);
                ${tokens.errorTitleFontSize}: var(--plasma-typo-body-m-bold-font-size);
                ${tokens.errorTitleFontStyle}: var(--plasma-typo-body-m-bold-font-style);
                ${tokens.errorTitleFontWeight}: var(--plasma-typo-body-m-bold-font-weight);
                ${tokens.errorTitleLetterSpacing}: var(--plasma-typo-body-m-bold-letter-spacing);
                ${tokens.errorTitleLineHeight}: var(--plasma-typo-body-m-bold-line-height);

                ${tokens.errorTextContentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.errorTextContentFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.errorTextContentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.errorTextContentFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.errorTextContentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.errorTextContentLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            s: css`
                ${tokens.titleContentGap}: 1.25rem;
                ${tokens.contentFooterGap}: 0.625rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.textContentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textContentFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textContentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textContentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textContentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textContentLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.loadingTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.loadingTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.loadingTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.loadingTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.loadingTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.loadingTitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.625rem;
                ${tokens.errorContainerPadding}: 1rem 1.25rem;
                ${tokens.errorContainerGap}: 0.125rem;

                ${tokens.errorTitleFontFamily}: var(--plasma-typo-body-s-bold-font-family);
                ${tokens.errorTitleFontSize}: var(--plasma-typo-body-s-bold-font-size);
                ${tokens.errorTitleFontStyle}: var(--plasma-typo-body-s-bold-font-style);
                ${tokens.errorTitleFontWeight}: var(--plasma-typo-body-s-bold-font-weight);
                ${tokens.errorTitleLetterSpacing}: var(--plasma-typo-body-s-bold-letter-spacing);
                ${tokens.errorTitleLineHeight}: var(--plasma-typo-body-s-bold-line-height);

                ${tokens.errorTextContentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.errorTextContentFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.errorTextContentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.errorTextContentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.errorTextContentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.errorTextContentLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${tokens.titleContentGap}: 1.125rem;
                ${tokens.contentFooterGap}: 0.5rem;

                ${tokens.titleFontFamily}: var(--plasma-typo-h5-font-family);
                ${tokens.titleFontSize}: var(--plasma-typo-h5-font-size);
                ${tokens.titleFontStyle}: var(--plasma-typo-h5-font-style);
                ${tokens.titleFontWeight}: var(--plasma-typo-h5-font-weight);
                ${tokens.titleLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${tokens.titleLineHeight}: var(--plasma-typo-h5-line-height);

                ${tokens.textContentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textContentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textContentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textContentFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textContentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textContentLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.loadingTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.loadingTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.loadingTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.loadingTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.loadingTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.loadingTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.spinnerSize}: 1rem;

                ${tokens.errorContainerBorderRadius}: 0.5rem;
                ${tokens.errorContainerPadding}: 0.75rem 1rem;
                ${tokens.errorContainerGap}: 0.125rem;

                ${tokens.errorTitleFontFamily}: var(--plasma-typo-body-xs-bold-font-family);
                ${tokens.errorTitleFontSize}: var(--plasma-typo-body-xs-bold-font-size);
                ${tokens.errorTitleFontStyle}: var(--plasma-typo-body-xs-bold-font-style);
                ${tokens.errorTitleFontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.errorTitleLetterSpacing}: var(--plasma-typo-body-xs-bold-letter-spacing);
                ${tokens.errorTitleLineHeight}: var(--plasma-typo-body-xs-bold-line-height);

                ${tokens.errorTextContentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.errorTextContentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.errorTextContentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.errorTextContentFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.errorTextContentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.errorTextContentLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
