import { css } from '@linaria/core';

import { loaderTokens } from '../../../components/Loader';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-solid-default);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-primary);

                ${loaderTokens.overlayColor}: var(--overlay-soft);

                ${loaderTokens.textColor}: var(--text-primary);
            `,
            secondary: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-transparent-secondary);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-secondary);

                ${loaderTokens.overlayColor}: var(--overlay-soft);

                ${loaderTokens.textColor}: var(--text-primary);
            `,
            accent: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-accent);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-accent);

                ${loaderTokens.overlayColor}: var(--overlay-soft);

                ${loaderTokens.textColor}: var(--text-primary);
            `,
            positive: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-positive);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-positive);

                ${loaderTokens.overlayColor}: var(--overlay-soft);

                ${loaderTokens.textColor}: var(--text-primary);
            `,
            warning: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-warning);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-warning);

                ${loaderTokens.overlayColor}: var(--overlay-soft);

                ${loaderTokens.textColor}: var(--text-primary);
            `,
            negative: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-negative);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-negative);

                ${loaderTokens.overlayColor}: var(--overlay-soft);

                ${loaderTokens.textColor}: var(--text-primary);
            `,
            info: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-info);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-info);

                ${loaderTokens.overlayColor}: var(--overlay-soft);

                ${loaderTokens.textColor}: var(--text-primary);
            `,
        },
        size: {
            xxl: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 128;
                ${loaderTokens.progressBarCircularHeight}: 8rem;
                ${loaderTokens.progressBarCircularWidth}: 8rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.25rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 4;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-h2-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-h2-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-h2-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-h2-bold-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-h2-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-h2-line-height);

                ${loaderTokens.spinnerSize}: 8rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-l-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-l-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-l-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-l-line-height);
                ${loaderTokens.textMarginLeft}: 1rem;
                ${loaderTokens.textMarginTop}: 1rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-l-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-l-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-l-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-l-line-height);
                ${loaderTokens.textMarginLeft}: 1rem;
                ${loaderTokens.textMarginTop}: 1rem;
            `,
            xl: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 88;
                ${loaderTokens.progressBarCircularHeight}: 5.5rem;
                ${loaderTokens.progressBarCircularWidth}: 5.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.25rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 4;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-h5-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-h5-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-h5-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-h5-bold-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-h5-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-h5-line-height);

                ${loaderTokens.spinnerSize}: 5.5rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-l-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-l-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-l-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-l-line-height);
                ${loaderTokens.textMarginLeft}: 1rem;
                ${loaderTokens.textMarginTop}: 1rem;
            `,
            l: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 56;
                ${loaderTokens.progressBarCircularHeight}: 3.5rem;
                ${loaderTokens.progressBarCircularWidth}: 3.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-l-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-l-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-l-line-height);

                ${loaderTokens.spinnerSize}: 3.5rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-l-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-l-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-l-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-l-line-height);
                ${loaderTokens.textMarginLeft}: 1rem;
                ${loaderTokens.textMarginTop}: 1rem;
            `,
            m: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 48;
                ${loaderTokens.progressBarCircularHeight}: 3rem;
                ${loaderTokens.progressBarCircularWidth}: 3rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-m-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-m-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-m-line-height);

                ${loaderTokens.spinnerSize}: 3rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-m-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-m-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-m-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-m-line-height);
                ${loaderTokens.textMarginLeft}: 0.75rem;
                ${loaderTokens.textMarginTop}: 0.625rem;
            `,
            s: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 32;
                ${loaderTokens.progressBarCircularHeight}: 2.25rem;
                ${loaderTokens.progressBarCircularWidth}: 2.25rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-s-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-s-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-s-line-height);

                ${loaderTokens.spinnerSize}: 2.25rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-s-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-s-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-s-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-s-line-height);
                ${loaderTokens.textMarginLeft}: 0.5rem;
                ${loaderTokens.textMarginTop}: 0.5rem;
            `,
            xs: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 24;
                ${loaderTokens.progressBarCircularHeight}: 1.5rem;
                ${loaderTokens.progressBarCircularWidth}: 1.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xs-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${loaderTokens.spinnerSize}: 1.5rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-xs-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${loaderTokens.textMarginLeft}: 0.5rem;
                ${loaderTokens.textMarginTop}: 0.5rem;
            `,
            xxs: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 16;
                ${loaderTokens.progressBarCircularHeight}: 1rem;
                ${loaderTokens.progressBarCircularWidth}: 1rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xxs-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${loaderTokens.spinnerSize}: 1rem;

                ${loaderTokens.textFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${loaderTokens.textFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${loaderTokens.textFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${loaderTokens.textFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${loaderTokens.textLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${loaderTokens.textLineHeight}: var(--plasma-typo-body-xxs-line-height);
                ${loaderTokens.textMarginLeft}: 0.5rem;
                ${loaderTokens.textMarginTop}: 0.5rem;
            `,
        },
    },
};
