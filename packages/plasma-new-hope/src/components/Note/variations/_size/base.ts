import { css } from '@linaria/core';

import { classes, privateTokens, tokens } from '../../Note.tokens';
import { ContentBefore, ContentWrapper, Text, TextHelper, Title, TitleHelper } from '../../Note.styles';
import { applyEllipsis } from '../../../../mixins';

export const base = css`
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    height: var(${privateTokens.height});
    width: var(${privateTokens.width});
    gap: var(${tokens.gap});

    &.${classes.stretch} {
        width: 100%;
        height: 100%;
    }

    ${ContentBefore} {
        width: var(${tokens.fixedContentBeforeWidth});
        height: var(${tokens.fixedContentBeforeHeight});
        padding: var(${tokens.fixedContentBeforePadding});
        box-sizing: border-box;
    }

    &.${classes.contentAlignCenter} {
        align-items: center;
        padding: var(${tokens.paddingScalable});
        gap: var(${tokens.gapScalable});

        ${ContentBefore} {
            width: fit-content;
            height: fit-content;
            padding: unset;
        }
    }

    ${ContentWrapper} {
        width: var(${privateTokens.contentWidthWithOffset});
        gap: var(${tokens.contentGap});
    }

    ${Title}, ${TitleHelper} {
        width: 100%;
        min-height: var(${tokens.titleLineHeight});

        font-family: var(${tokens.titleFontFamily});
        font-size: var(${tokens.titleFontSize});
        font-style: var(${tokens.titleFontStyle});
        font-weight: var(${tokens.titleFontWeight});
        letter-spacing: var(${tokens.titleLetterSpacing});
        line-height: var(${tokens.titleLineHeight});

        ${applyEllipsis()}
    }

    ${Text}, ${TextHelper} {
        font-family: var(${tokens.textFontFamily});
        font-size: var(${tokens.textFontSize});
        font-style: var(${tokens.textFontStyle});
        font-weight: var(${tokens.textFontWeight});
        letter-spacing: var(${tokens.textLetterSpacing});
        line-height: var(${tokens.textLineHeight});

        word-break: break-all;
    }
`;
