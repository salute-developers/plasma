import { css, loaderTokens } from '@salutejs/plasma-new-hope/styled-components';

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

                ${loaderTokens.spinnerColor}: #657179;

                ${loaderTokens.overlayColor}: var(--overlay-soft);
            `,
            secondary: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-transparent-secondary);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-secondary);

                ${loaderTokens.overlayColor}: var(--overlay-soft);
            `,
            accent: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-accent);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-accent);

                ${loaderTokens.overlayColor}: var(--overlay-soft);
            `,
            positive: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-positive);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-positive);

                ${loaderTokens.overlayColor}: var(--overlay-soft);
            `,
            warning: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-warning);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-warning);

                ${loaderTokens.overlayColor}: var(--overlay-soft);
            `,
            negative: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-negative);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-negative);

                ${loaderTokens.overlayColor}: var(--overlay-soft);
            `,
            info: css`
                ${loaderTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${loaderTokens.progressBarCircularStroke}: var(--surface-info);
                ${loaderTokens.progressBarCircularContentColor}: var(--text-primary);

                ${loaderTokens.spinnerColor}: var(--text-info);

                ${loaderTokens.overlayColor}: var(--overlay-soft);
            `,
        },
        size: {
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
            `,
            l: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 48;
                ${loaderTokens.progressBarCircularHeight}: 3rem;
                ${loaderTokens.progressBarCircularWidth}: 3rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-l-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-l-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-l-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-l-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-l-line-height);

                ${loaderTokens.spinnerSize}: 3rem;
            `,
            s: css`
                ${loaderTokens.width}: 100%;
                ${loaderTokens.height}: 100%;

                ${loaderTokens.progressBarCircularSize}: 24;
                ${loaderTokens.progressBarCircularHeight}: 1.5rem;
                ${loaderTokens.progressBarCircularWidth}: 1.5rem;
                ${loaderTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${loaderTokens.progressBarCircularStrokeSize}: 2;
                ${loaderTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${loaderTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-s-font-size);
                ${loaderTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${loaderTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-s-body-font-weight);
                ${loaderTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${loaderTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-s-line-height);

                ${loaderTokens.spinnerSize}: 1.5rem;
            `,
        },
    },
};
