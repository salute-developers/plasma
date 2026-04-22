import { css, fileTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    surfaceAccent,
    surfaceNegative,
    surfaceSolidDefault,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
    textNegative,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.embedIconButtonColor}: ${textPrimary};
                ${tokens.embedIconButtonColorHover}: ${textPrimaryHover};
                ${tokens.embedIconButtonColorActive}: ${textPrimaryActive};
                ${tokens.embedIconButtonFocusColor}: ${surfaceAccent};

                ${tokens.cellTitleColor}: ${textPrimary};
                ${tokens.cellSubtitleColor}: ${textSecondary};

                ${tokens.progressBarCircularContentColor}: ${textPrimary};
                ${tokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${tokens.progressBarCircularStroke}: ${surfaceSolidDefault};

                ${tokens.progressTrackBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.progressFilledBackgroundColor}: ${surfaceSolidDefault};
            `,
            negative: css`
                ${tokens.embedIconButtonColor}: ${textPrimary};
                ${tokens.embedIconButtonColorHover}: ${textPrimaryHover};
                ${tokens.embedIconButtonColorActive}: ${textPrimaryActive};
                ${tokens.embedIconButtonFocusColor}: ${surfaceAccent};

                ${tokens.cellTitleColor}: ${textPrimary};
                ${tokens.cellSubtitleColor}: ${textNegative};

                ${tokens.progressBarCircularContentColor}: ${textPrimary};
                ${tokens.progressBarCircularBackgroundStroke}: ${surfaceTransparentTertiary};
                ${tokens.progressBarCircularStroke}: ${surfaceNegative};

                ${tokens.progressTrackBackgroundColor}: ${surfaceTransparentSecondary};
                ${tokens.progressFilledBackgroundColor}: ${surfaceNegative};
            `,
        },
        size: {
            l: css`
                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.cellHeight}: 2.5rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.75rem;
                ${tokens.cellPaddingRightContent}: 0.75rem;

                ${tokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyL.lineHeight};

                ${tokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.progressBarCircularSize}: 36;
                ${tokens.progressBarCircularHeight}: 2.25rem;
                ${tokens.progressBarCircularWidth}: 2.25rem;

                ${tokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${tokens.progressBarCircularStrokeSize}: 2;

                ${tokens.progressTrackHeight}: 0.25rem;
                ${tokens.progressTrackBorderRadius}: 0.125rem;
                ${tokens.progressFilledHeight}: 0.25rem;
                ${tokens.progressFilledBorderRadius}: 0.375rem;

                ${tokens.progressLinearGap}: 0.5rem;

                ${tokens.fileThumbSize}: 2.5rem;
                ${tokens.fileThumbRadius}: 0.625rem;
            `,
            m: css`
                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.cellHeight}: 2.5rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellPaddingRightContent}: 0.625rem;

                ${tokens.cellTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyM.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyM.lineHeight};

                ${tokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.progressBarCircularSize}: 36;
                ${tokens.progressBarCircularHeight}: 2.25rem;
                ${tokens.progressBarCircularWidth}: 2.25rem;

                ${tokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${tokens.progressBarCircularStrokeSize}: 2;

                ${tokens.progressTrackHeight}: 0.25rem;
                ${tokens.progressTrackBorderRadius}: 0.125rem;
                ${tokens.progressFilledHeight}: 0.25rem;
                ${tokens.progressFilledBorderRadius}: 0.375rem;

                ${tokens.progressLinearGap}: 0.5rem;

                ${tokens.fileThumbSize}: 2.25rem;
                ${tokens.fileThumbRadius}: 0.625rem;
            `,
            s: css`
                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.cellHeight}: 2.5rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.5rem;
                ${tokens.cellPaddingRightContent}: 0.5rem;

                ${tokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.progressBarCircularSize}: 36;
                ${tokens.progressBarCircularHeight}: 2.25rem;
                ${tokens.progressBarCircularWidth}: 2.25rem;

                ${tokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${tokens.progressBarCircularStrokeSize}: 2;

                ${tokens.progressTrackHeight}: 0.25rem;
                ${tokens.progressTrackBorderRadius}: 0.125rem;
                ${tokens.progressFilledHeight}: 0.25rem;
                ${tokens.progressFilledBorderRadius}: 0.375rem;

                ${tokens.progressLinearGap}: 0.5rem;

                ${tokens.fileThumbSize}: 2.25rem;
                ${tokens.fileThumbRadius}: 0.625rem;
            `,
            xs: css`
                ${tokens.embedIconButtonHeight}: 2rem;
                ${tokens.embedIconButtonWidth}: 2rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.5rem;

                ${tokens.cellHeight}: 2rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellPaddingRightContent}: 0.375rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.progressBarCircularSize}: 24;
                ${tokens.progressBarCircularHeight}: 1.5rem;
                ${tokens.progressBarCircularWidth}: 1.5rem;

                ${tokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${tokens.progressBarCircularStrokeSize}: 2;

                ${tokens.progressTrackHeight}: 0.25rem;
                ${tokens.progressTrackBorderRadius}: 0.125rem;
                ${tokens.progressFilledHeight}: 0.25rem;
                ${tokens.progressFilledBorderRadius}: 0.375rem;

                ${tokens.progressLinearGap}: 0.5rem;

                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.fileDisabledOpacity}: 0.4;
            `,
        },
    },
};
