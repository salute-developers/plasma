import { css } from '@linaria/core';

import { fileTokens } from '../../../components/File';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${fileTokens.fileColor}: var(--text-primary);

                ${fileTokens.fileLabelColor}: var(--text-primary);
                ${fileTokens.fileDescriptionColor}: var(--text-secondary);

                ${fileTokens.fileDisabledOpacity}: 0.4;

                ${fileTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${fileTokens.progressBarCircularStroke}: var(--surface-solid-default);
                ${fileTokens.progressBarCircularContentColor}: var(--text-primary);

                ${fileTokens.progressTrackBackgroundColor}: var(--surface-transparent-secondary);
                ${fileTokens.progressFilledBackgroundColor}: var(--surface-solid-default);
            `,
            negative: css`
                ${fileTokens.fileColor}: var(--text-primary);

                ${fileTokens.fileLabelColor}: var(--text-primary);
                ${fileTokens.fileDescriptionColor}: var(--text-secondary);

                ${fileTokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${fileTokens.progressBarCircularStroke}: var(--surface-negative);
                ${fileTokens.progressBarCircularContentColor}: var(--text-primary);

                ${fileTokens.progressTrackBackgroundColor}: var(--surface-transparent-secondary);
                ${fileTokens.progressFilledBackgroundColor}: var(--surface-negative);
            `,
        },
        size: {
            l: css`
                ${fileTokens.fileHeight}: 2.5rem;
                ${fileTokens.filePadding}: 0rem;
                ${fileTokens.fileRadius}: 0rem;

                ${fileTokens.fileLabelFontFamily}: var(--plasma-typo-body-l-font-family);
                ${fileTokens.fileLabelFontSize}: var(--plasma-typo-body-l-font-size);
                ${fileTokens.fileLabelFontStyle}: var(--plasma-typo-body-l-font-style);
                ${fileTokens.fileLabelFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${fileTokens.fileLabelLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${fileTokens.fileLabelLineHeight}: var(--plasma-typo-body-l-line-height);

                ${fileTokens.fileDescriptionFontFamily}: var(--plasma-typo-body-s-font-family);
                ${fileTokens.fileDescriptionFontSize}: var(--plasma-typo-body-s-font-size);
                ${fileTokens.fileDescriptionFontStyle}: var(--plasma-typo-body-s-font-style);
                ${fileTokens.fileDescriptionFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${fileTokens.fileDescriptionLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${fileTokens.fileDescriptionLineHeight}: var(--plasma-typo-body-s-line-height);

                ${fileTokens.fileThumbSize}: 3rem;
                ${fileTokens.fileThumbMargin}: 0 0.75rem 0 0;
                ${fileTokens.fileThumbRadius}: 0.5rem;

                ${fileTokens.fileActionMargin}: 0 0 0 0.75rem;
                ${fileTokens.fileActionSize}: 2rem;

                ${fileTokens.iconCloseSize}: 1.5rem;
                ${fileTokens.iconCloseColor}: var(--text-primary);

                ${fileTokens.progressBarCircularSize}: 48;
                ${fileTokens.progressBarCircularHeight}: 3rem;
                ${fileTokens.progressBarCircularWidth}: 3rem;
                ${fileTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${fileTokens.progressBarCircularStrokeSize}: 2;
                ${fileTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-m-font-family);
                ${fileTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-m-font-size);
                ${fileTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-m-font-style);
                ${fileTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${fileTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${fileTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-m-line-height);

                ${fileTokens.progressTrackHeight}: 0.25rem;
                ${fileTokens.progressTrackBorderRadius}: 0.125rem;
                ${fileTokens.progressFilledHeight}: 0.375rem;
                ${fileTokens.progressFilledBorderRadius}: 0.375rem;

                ${fileTokens.fileLinearLoaderHeight}: 0.75rem;
            `,
            m: css`
                ${fileTokens.fileHeight}: 2.5rem;
                ${fileTokens.filePadding}: 0;
                ${fileTokens.fileRadius}: 0;

                ${fileTokens.fileLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                ${fileTokens.fileLabelFontSize}: var(--plasma-typo-body-m-font-size);
                ${fileTokens.fileLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                ${fileTokens.fileLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${fileTokens.fileLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${fileTokens.fileLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${fileTokens.fileDescriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${fileTokens.fileDescriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${fileTokens.fileDescriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${fileTokens.fileDescriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${fileTokens.fileDescriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${fileTokens.fileDescriptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${fileTokens.fileThumbSize}: 2.5rem;
                ${fileTokens.fileThumbMargin}: 0 0.625rem 0 0;
                ${fileTokens.fileThumbRadius}: 0.375rem;

                ${fileTokens.fileActionMargin}: 0 0 0 0.625rem;
                ${fileTokens.fileActionSize}: 1.5rem;

                ${fileTokens.iconCloseSize}: 1rem;
                ${fileTokens.iconCloseColor}: var(--text-primary);

                ${fileTokens.progressBarCircularSize}: 40;
                ${fileTokens.progressBarCircularHeight}: 2.5rem;
                ${fileTokens.progressBarCircularWidth}: 2.5rem;
                ${fileTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${fileTokens.progressBarCircularStrokeSize}: 2;
                ${fileTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-s-font-family);
                ${fileTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-s-font-size);
                ${fileTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-s-font-style);
                ${fileTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${fileTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${fileTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-s-line-height);

                ${fileTokens.progressTrackHeight}: 0.25rem;
                ${fileTokens.progressTrackBorderRadius}: 0.125rem;
                ${fileTokens.progressFilledHeight}: 0.375rem;
                ${fileTokens.progressFilledBorderRadius}: 0.375rem;

                ${fileTokens.fileLinearLoaderHeight}: 0.75rem;
            `,
            s: css`
                ${fileTokens.fileHeight}: 2.5rem;
                ${fileTokens.filePadding}: 0rem;
                ${fileTokens.fileRadius}: 0rem;

                ${fileTokens.fileLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${fileTokens.fileLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${fileTokens.fileLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${fileTokens.fileLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${fileTokens.fileLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${fileTokens.fileLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${fileTokens.fileDescriptionFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${fileTokens.fileDescriptionFontSize}: var(--plasma-typo-body-xs-font-size);
                ${fileTokens.fileDescriptionFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${fileTokens.fileDescriptionFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${fileTokens.fileDescriptionLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${fileTokens.fileDescriptionLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${fileTokens.fileThumbSize}: 2rem;
                ${fileTokens.fileThumbMargin}: 0 0.5rem 0 0;
                ${fileTokens.fileThumbRadius}: 0.25rem;

                ${fileTokens.fileActionMargin}: 0 0 0 0.5rem;
                ${fileTokens.fileActionSize}: 1.5rem;

                ${fileTokens.iconCloseSize}: 1rem;
                ${fileTokens.iconCloseColor}: var(--text-primary);

                ${fileTokens.progressBarCircularSize}: 32;
                ${fileTokens.progressBarCircularHeight}: 2rem;
                ${fileTokens.progressBarCircularWidth}: 2rem;
                ${fileTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${fileTokens.progressBarCircularStrokeSize}: 2;
                ${fileTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${fileTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-xs-font-size);
                ${fileTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${fileTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${fileTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${fileTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${fileTokens.progressTrackHeight}: 0.25rem;
                ${fileTokens.progressTrackBorderRadius}: 0.125rem;
                ${fileTokens.progressFilledHeight}: 0.375rem;
                ${fileTokens.progressFilledBorderRadius}: 0.375rem;

                ${fileTokens.fileLinearLoaderHeight}: 0.75rem;
            `,
            xs: css`
                ${fileTokens.fileHeight}: 2rem;
                ${fileTokens.filePadding}: 0rem;
                ${fileTokens.fileRadius}: 0rem;

                ${fileTokens.fileLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${fileTokens.fileLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${fileTokens.fileLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${fileTokens.fileLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${fileTokens.fileLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${fileTokens.fileLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${fileTokens.fileDescriptionFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${fileTokens.fileDescriptionFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${fileTokens.fileDescriptionFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${fileTokens.fileDescriptionFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${fileTokens.fileDescriptionLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${fileTokens.fileDescriptionLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${fileTokens.fileThumbSize}: 1.75rem;
                ${fileTokens.fileThumbMargin}: 0 0.375rem 0 0;
                ${fileTokens.fileThumbRadius}: 0.25rem;

                ${fileTokens.fileActionMargin}: 0 0 0 0.375rem;
                ${fileTokens.fileActionSize}: 1.25rem;

                ${fileTokens.iconCloseSize}: 0.75rem;
                ${fileTokens.iconCloseColor}: var(--text-primary);

                ${fileTokens.progressBarCircularSize}: 24;
                ${fileTokens.progressBarCircularHeight}: 1.5rem;
                ${fileTokens.progressBarCircularWidth}: 1.5rem;
                ${fileTokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${fileTokens.progressBarCircularStrokeSize}: 2;
                ${fileTokens.progressBarCircularContentFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${fileTokens.progressBarCircularContentFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${fileTokens.progressBarCircularContentFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${fileTokens.progressBarCircularContentFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${fileTokens.progressBarCircularContentLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${fileTokens.progressBarCircularContentLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${fileTokens.progressTrackHeight}: 0.25rem;
                ${fileTokens.progressTrackBorderRadius}: 0.125rem;
                ${fileTokens.progressFilledHeight}: 0.375rem;
                ${fileTokens.progressFilledBorderRadius}: 0.375rem;

                ${fileTokens.fileLinearLoaderHeight}: 0.75rem;
            `,
        },
    },
};
