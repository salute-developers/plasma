import {
    bodyM,
    bodyS,
    bodyXS,
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
} from '@salutejs/sdds-themes/tokens/sdds_platform_ai';
import { css, fileTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

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

                ${tokens.cellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellSubtitleLineHeight}: ${bodyXS.lineHeight};

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

                ${tokens.cellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.cellSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.cellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.cellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.cellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.cellSubtitleLineHeight}: ${bodyXS.lineHeight};

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
        },
        disabled: {
            true: css`
                ${tokens.fileDisabledOpacity}: 0.4;
            `,
        },
    },
};
