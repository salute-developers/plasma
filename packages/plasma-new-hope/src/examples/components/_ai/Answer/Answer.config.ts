import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
    h3,
    h4,
    h5,
    surfaceSolidDefault,
    surfaceTransparentNegative,
    textPrimary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
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
                ${tokens.titleColor}: ${textPrimary};
                ${tokens.textContentColor}: ${textPrimary};
                ${tokens.loadingTitleColor}: ${textPrimary};
                ${tokens.spinnerColor}: ${surfaceSolidDefault};
                ${tokens.errorContainerBackgroundColor}: ${surfaceTransparentNegative};
                ${tokens.errorTitleColor}: ${textPrimary};
                ${tokens.errorTextContentColor}: ${textPrimary};
            `,
        },
        size: {
            xl: css`
                ${tokens.titleContentGap}: 1.875rem;
                ${tokens.contentFooterGap}: 1.25rem;

                ${tokens.titleFontFamily}: ${h3.fontFamily};
                ${tokens.titleFontSize}: ${h3.fontSize};
                ${tokens.titleFontStyle}: ${h3.fontStyle};
                ${tokens.titleFontWeight}: ${h3.fontWeight};
                ${tokens.titleLetterSpacing}: ${h3.letterSpacing};
                ${tokens.titleLineHeight}: ${h3.lineHeight};

                ${tokens.textContentFontFamily}: ${bodyL.fontFamily};
                ${tokens.textContentFontSize}: ${bodyL.fontSize};
                ${tokens.textContentFontStyle}: ${bodyL.fontStyle};
                ${tokens.textContentFontWeight}: ${bodyL.fontWeight};
                ${tokens.textContentLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textContentLineHeight}: ${bodyL.lineHeight};

                ${tokens.loadingTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.loadingTitleFontSize}: ${bodyL.fontSize};
                ${tokens.loadingTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.loadingTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.loadingTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.loadingTitleLineHeight}: ${bodyL.lineHeight};

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.875rem;
                ${tokens.errorContainerPadding}: 1.5rem 1.875rem;
                ${tokens.errorContainerGap}: 0.25rem;

                ${tokens.errorTitleFontFamily}: ${bodyLBold.fontFamily};
                ${tokens.errorTitleFontSize}: ${bodyLBold.fontSize};
                ${tokens.errorTitleFontStyle}: ${bodyLBold.fontStyle};
                ${tokens.errorTitleFontWeight}: ${bodyLBold.fontWeight};
                ${tokens.errorTitleLetterSpacing}: ${bodyLBold.letterSpacing};
                ${tokens.errorTitleLineHeight}: ${bodyLBold.lineHeight};

                ${tokens.errorTextContentFontFamily}: ${bodyL.fontFamily};
                ${tokens.errorTextContentFontSize}: ${bodyL.fontSize};
                ${tokens.errorTextContentFontStyle}: ${bodyL.fontStyle};
                ${tokens.errorTextContentFontWeight}: ${bodyL.fontWeight};
                ${tokens.errorTextContentLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.errorTextContentLineHeight}: ${bodyL.lineHeight};
            `,
            l: css`
                ${tokens.titleContentGap}: 1.625rem;
                ${tokens.contentFooterGap}: 1rem;

                ${tokens.titleFontFamily}: ${h3.fontFamily};
                ${tokens.titleFontSize}: ${h3.fontSize};
                ${tokens.titleFontStyle}: ${h3.fontStyle};
                ${tokens.titleFontWeight}: ${h3.fontWeight};
                ${tokens.titleLetterSpacing}: ${h3.letterSpacing};
                ${tokens.titleLineHeight}: ${h3.lineHeight};

                ${tokens.textContentFontFamily}: ${bodyL.fontFamily};
                ${tokens.textContentFontSize}: ${bodyL.fontSize};
                ${tokens.textContentFontStyle}: ${bodyL.fontStyle};
                ${tokens.textContentFontWeight}: ${bodyL.fontWeight};
                ${tokens.textContentLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textContentLineHeight}: ${bodyL.lineHeight};

                ${tokens.loadingTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.loadingTitleFontSize}: ${bodyL.fontSize};
                ${tokens.loadingTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.loadingTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.loadingTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.loadingTitleLineHeight}: ${bodyL.lineHeight};

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.875rem;
                ${tokens.errorContainerPadding}: 1.5rem 1.875rem;
                ${tokens.errorContainerGap}: 0.25rem;

                ${tokens.errorTitleFontFamily}: ${bodyLBold.fontFamily};
                ${tokens.errorTitleFontSize}: ${bodyLBold.fontSize};
                ${tokens.errorTitleFontStyle}: ${bodyLBold.fontStyle};
                ${tokens.errorTitleFontWeight}: ${bodyLBold.fontWeight};
                ${tokens.errorTitleLetterSpacing}: ${bodyLBold.letterSpacing};
                ${tokens.errorTitleLineHeight}: ${bodyLBold.lineHeight};

                ${tokens.errorTextContentFontFamily}: ${bodyL.fontFamily};
                ${tokens.errorTextContentFontSize}: ${bodyL.fontSize};
                ${tokens.errorTextContentFontStyle}: ${bodyL.fontStyle};
                ${tokens.errorTextContentFontWeight}: ${bodyL.fontWeight};
                ${tokens.errorTextContentLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.errorTextContentLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${tokens.titleContentGap}: 1.375rem;
                ${tokens.contentFooterGap}: 0.75rem;

                ${tokens.titleFontFamily}: ${h4.fontFamily};
                ${tokens.titleFontSize}: ${h4.fontSize};
                ${tokens.titleFontStyle}: ${h4.fontStyle};
                ${tokens.titleFontWeight}: ${h4.fontWeight};
                ${tokens.titleLetterSpacing}: ${h4.letterSpacing};
                ${tokens.titleLineHeight}: ${h4.lineHeight};

                ${tokens.textContentFontFamily}: ${bodyM.fontFamily};
                ${tokens.textContentFontSize}: ${bodyM.fontSize};
                ${tokens.textContentFontStyle}: ${bodyM.fontStyle};
                ${tokens.textContentFontWeight}: ${bodyM.fontWeight};
                ${tokens.textContentLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textContentLineHeight}: ${bodyM.lineHeight};

                ${tokens.loadingTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.loadingTitleFontSize}: ${bodyM.fontSize};
                ${tokens.loadingTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.loadingTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.loadingTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.loadingTitleLineHeight}: ${bodyM.lineHeight};

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.75rem;
                ${tokens.errorContainerPadding}: 1.25rem 1.5rem;
                ${tokens.errorContainerGap}: 0.125rem;

                ${tokens.errorTitleFontFamily}: ${bodyMBold.fontFamily};
                ${tokens.errorTitleFontSize}: ${bodyMBold.fontSize};
                ${tokens.errorTitleFontStyle}: ${bodyMBold.fontStyle};
                ${tokens.errorTitleFontWeight}: ${bodyMBold.fontWeight};
                ${tokens.errorTitleLetterSpacing}: ${bodyMBold.letterSpacing};
                ${tokens.errorTitleLineHeight}: ${bodyMBold.lineHeight};

                ${tokens.errorTextContentFontFamily}: ${bodyM.fontFamily};
                ${tokens.errorTextContentFontSize}: ${bodyM.fontSize};
                ${tokens.errorTextContentFontStyle}: ${bodyM.fontStyle};
                ${tokens.errorTextContentFontWeight}: ${bodyM.fontWeight};
                ${tokens.errorTextContentLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.errorTextContentLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${tokens.titleContentGap}: 1.25rem;
                ${tokens.contentFooterGap}: 0.625rem;

                ${tokens.titleFontFamily}: ${h5.fontFamily};
                ${tokens.titleFontSize}: ${h5.fontSize};
                ${tokens.titleFontStyle}: ${h5.fontStyle};
                ${tokens.titleFontWeight}: ${h5.fontWeight};
                ${tokens.titleLetterSpacing}: ${h5.letterSpacing};
                ${tokens.titleLineHeight}: ${h5.lineHeight};

                ${tokens.textContentFontFamily}: ${bodyS.fontFamily};
                ${tokens.textContentFontSize}: ${bodyS.fontSize};
                ${tokens.textContentFontStyle}: ${bodyS.fontStyle};
                ${tokens.textContentFontWeight}: ${bodyS.fontWeight};
                ${tokens.textContentLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textContentLineHeight}: ${bodyS.lineHeight};

                ${tokens.loadingTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.loadingTitleFontSize}: ${bodyS.fontSize};
                ${tokens.loadingTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.loadingTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.loadingTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.loadingTitleLineHeight}: ${bodyS.lineHeight};

                ${tokens.spinnerSize}: 1.5rem;

                ${tokens.errorContainerBorderRadius}: 0.625rem;
                ${tokens.errorContainerPadding}: 1rem 1.25rem;
                ${tokens.errorContainerGap}: 0.125rem;

                ${tokens.errorTitleFontFamily}: ${bodySBold.fontFamily};
                ${tokens.errorTitleFontSize}: ${bodySBold.fontSize};
                ${tokens.errorTitleFontStyle}: ${bodySBold.fontStyle};
                ${tokens.errorTitleFontWeight}: ${bodySBold.fontWeight};
                ${tokens.errorTitleLetterSpacing}: ${bodySBold.letterSpacing};
                ${tokens.errorTitleLineHeight}: ${bodySBold.lineHeight};

                ${tokens.errorTextContentFontFamily}: ${bodyS.fontFamily};
                ${tokens.errorTextContentFontSize}: ${bodyS.fontSize};
                ${tokens.errorTextContentFontStyle}: ${bodyS.fontStyle};
                ${tokens.errorTextContentFontWeight}: ${bodyS.fontWeight};
                ${tokens.errorTextContentLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.errorTextContentLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${tokens.titleContentGap}: 1.125rem;
                ${tokens.contentFooterGap}: 0.5rem;

                ${tokens.titleFontFamily}: ${h5.fontFamily};
                ${tokens.titleFontSize}: ${h5.fontSize};
                ${tokens.titleFontStyle}: ${h5.fontStyle};
                ${tokens.titleFontWeight}: ${h5.fontWeight};
                ${tokens.titleLetterSpacing}: ${h5.letterSpacing};
                ${tokens.titleLineHeight}: ${h5.lineHeight};

                ${tokens.textContentFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textContentFontSize}: ${bodyXS.fontSize};
                ${tokens.textContentFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textContentFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textContentLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textContentLineHeight}: ${bodyXS.lineHeight};

                ${tokens.loadingTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.loadingTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.loadingTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.loadingTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.loadingTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.loadingTitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.spinnerSize}: 1rem;

                ${tokens.errorContainerBorderRadius}: 0.5rem;
                ${tokens.errorContainerPadding}: 0.75rem 1rem;
                ${tokens.errorContainerGap}: 0.125rem;

                ${tokens.errorTitleFontFamily}: ${bodyXSBold.fontFamily};
                ${tokens.errorTitleFontSize}: ${bodyXSBold.fontSize};
                ${tokens.errorTitleFontStyle}: ${bodyXSBold.fontStyle};
                ${tokens.errorTitleFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.errorTitleLetterSpacing}: ${bodyXSBold.letterSpacing};
                ${tokens.errorTitleLineHeight}: ${bodyXSBold.lineHeight};

                ${tokens.errorTextContentFontFamily}: ${bodyXS.fontFamily};
                ${tokens.errorTextContentFontSize}: ${bodyXS.fontSize};
                ${tokens.errorTextContentFontStyle}: ${bodyXS.fontStyle};
                ${tokens.errorTextContentFontWeight}: ${bodyXS.fontWeight};
                ${tokens.errorTextContentLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.errorTextContentLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
