import { css } from '@linaria/core';

import { tokens } from '../../../../components/_ai/Markdown/Markdown.tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.textColor}: var(--text-primary);
                ${tokens.headingColor}: var(--text-primary);
                ${tokens.mutedColor}: var(--text-secondary);
                ${tokens.linkColor}: var(--text-accent);
                ${tokens.linkHoverColor}: var(--text-accent-hover, var(--text-accent));
                ${tokens.hrColor}: var(--surface-transparent-secondary);

                ${tokens.blockquoteBackgroundColor}: linear-gradient(
                    180deg,
                    rgba(11, 117, 106, 0.09) 0%,
                    rgba(11, 117, 106, 0.03) 100%
                );
                ${tokens.blockquoteBorderColor}: var(--text-accent);
                ${tokens.blockquoteTextColor}: var(--text-primary);

                ${tokens.tableBorderColor}: var(--surface-transparent-secondary);
                ${tokens.tableHeaderBackgroundColor}: rgba(11, 117, 106, 0.08);
                ${tokens.tableCellBackgroundColor}: transparent;

                ${tokens.inlineCodeColor}: var(--text-primary);
                ${tokens.inlineCodeBackgroundColor}: rgba(11, 117, 106, 0.08);
                ${tokens.inlineCodeBorderColor}: rgba(11, 117, 106, 0.14);

                ${tokens.codeBlockBorderColor}: rgba(11, 117, 106, 0.16);
                ${tokens.codeBlockBackgroundColor}: linear-gradient(
                        180deg,
                        rgba(11, 117, 106, 0.08) 0%,
                        rgba(11, 117, 106, 0.03) 100%
                    ),
                    transparent;
                ${tokens.codeBlockHeaderBackgroundColor}: rgba(11, 117, 106, 0.08);
                ${tokens.codeBlockLanguageColor}: var(--text-secondary);

                ${tokens.imageBorderColor}: rgba(11, 117, 106, 0.14);
                ${tokens.imageBackgroundColor}: rgba(11, 117, 106, 0.04);

                ${tokens.streamingCursorColor}: var(--text-accent);
            `,
        },
        size: {
            xl: css`
                ${tokens.bodyFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.bodyFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.bodyFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.bodyFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.bodyLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.bodyLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.codeFontSize}: 0.92rem;
                ${tokens.codeFontLineHeight}: 1.7;

                ${tokens.blockGap}: 1.25rem;
                ${tokens.nestedGap}: 0.5rem;
                ${tokens.blockquotePadding}: 1.125rem 1.25rem;
                ${tokens.blockquoteBorderRadius}: 1rem;
                ${tokens.tableCellPadding}: 0.875rem 1rem;
                ${tokens.inlineCodePadding}: 0.1875rem 0.4375rem;
                ${tokens.inlineCodeBorderRadius}: 0.5rem;
                ${tokens.codeBlockBorderRadius}: 1rem;
                ${tokens.codeBlockHeaderPadding}: 0.75rem 1rem;
                ${tokens.codeBlockPadding}: 1rem 1.125rem;
            `,
            l: css`
                ${tokens.bodyFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.bodyFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.bodyFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.bodyFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.bodyLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.bodyLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.codeFontSize}: 0.9rem;
                ${tokens.codeFontLineHeight}: 1.7;

                ${tokens.blockGap}: 1.125rem;
                ${tokens.nestedGap}: 0.5rem;
                ${tokens.blockquotePadding}: 1rem 1.125rem;
                ${tokens.blockquoteBorderRadius}: 1rem;
                ${tokens.tableCellPadding}: 0.8125rem 0.9375rem;
                ${tokens.inlineCodePadding}: 0.1875rem 0.4375rem;
                ${tokens.inlineCodeBorderRadius}: 0.5rem;
                ${tokens.codeBlockBorderRadius}: 1rem;
                ${tokens.codeBlockHeaderPadding}: 0.75rem 0.9375rem;
                ${tokens.codeBlockPadding}: 0.9375rem 1rem;
            `,
            m: css`
                ${tokens.bodyFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.bodyFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.bodyFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.bodyFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.bodyLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.bodyLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.codeFontSize}: 0.875rem;
                ${tokens.codeFontLineHeight}: 1.65;

                ${tokens.blockGap}: 1rem;
                ${tokens.nestedGap}: 0.4375rem;
                ${tokens.blockquotePadding}: 0.9375rem 1rem;
                ${tokens.blockquoteBorderRadius}: 0.875rem;
                ${tokens.tableCellPadding}: 0.75rem 0.875rem;
                ${tokens.inlineCodePadding}: 0.125rem 0.375rem;
                ${tokens.inlineCodeBorderRadius}: 0.5rem;
                ${tokens.codeBlockBorderRadius}: 0.875rem;
                ${tokens.codeBlockHeaderPadding}: 0.625rem 0.875rem;
                ${tokens.codeBlockPadding}: 0.875rem 1rem;
            `,
            s: css`
                ${tokens.bodyFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.bodyFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.bodyFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.bodyFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.bodyLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.bodyLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.codeFontSize}: 0.8125rem;
                ${tokens.codeFontLineHeight}: 1.6;

                ${tokens.blockGap}: 0.875rem;
                ${tokens.nestedGap}: 0.375rem;
                ${tokens.blockquotePadding}: 0.875rem 0.9375rem;
                ${tokens.blockquoteBorderRadius}: 0.8125rem;
                ${tokens.tableCellPadding}: 0.6875rem 0.75rem;
                ${tokens.inlineCodePadding}: 0.125rem 0.3125rem;
                ${tokens.inlineCodeBorderRadius}: 0.4375rem;
                ${tokens.codeBlockBorderRadius}: 0.8125rem;
                ${tokens.codeBlockHeaderPadding}: 0.5625rem 0.75rem;
                ${tokens.codeBlockPadding}: 0.75rem 0.875rem;
            `,
            xs: css`
                ${tokens.bodyFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.bodyFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.bodyFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.bodyFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.bodyLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.bodyLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.codeFontSize}: 0.75rem;
                ${tokens.codeFontLineHeight}: 1.55;

                ${tokens.blockGap}: 0.75rem;
                ${tokens.nestedGap}: 0.3125rem;
                ${tokens.blockquotePadding}: 0.75rem 0.8125rem;
                ${tokens.blockquoteBorderRadius}: 0.75rem;
                ${tokens.tableCellPadding}: 0.625rem 0.6875rem;
                ${tokens.inlineCodePadding}: 0.0625rem 0.25rem;
                ${tokens.inlineCodeBorderRadius}: 0.375rem;
                ${tokens.codeBlockBorderRadius}: 0.75rem;
                ${tokens.codeBlockHeaderPadding}: 0.5rem 0.6875rem;
                ${tokens.codeBlockPadding}: 0.6875rem 0.75rem;
            `,
        },
    },
};
