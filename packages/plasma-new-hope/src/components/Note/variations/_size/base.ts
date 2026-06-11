import { css } from 'styled-components';

import { classes, privateTokens, tokens } from '../../Note.tokens';
import {
    ActionContentContainer,
    ContentBefore,
    ContentWrapper,
    Text,
    TextBox,
    TextHelper,
    Title,
    TitleHelper,
} from '../../Note.styles';

export const base = css`
    padding: var(${tokens.padding});

    &.${classes.hasActionContent}:not(.${classes.orientationHorizontal}) {
        padding-bottom: var(${tokens.paddingBottomWithActionContent});
    }

    border-radius: var(${tokens.borderRadius});
    height: var(${privateTokens.height});
    width: var(${privateTokens.width});

    &.${classes.stretch} {
        width: 100%;
        height: 100%;
    }

    ${ContentWrapper} {
        flex: 1;
        min-height: 0;
        gap: var(${tokens.gap});
    }

    ${ContentBefore} {
        width: var(${tokens.fixedContentBeforeWidth});
        height: var(${tokens.fixedContentBeforeHeight});
        padding: var(${tokens.fixedContentBeforePadding});
        box-sizing: border-box;
    }

    ${TextBox} {
        gap: var(${tokens.contentGap});
        min-height: var(${tokens.fixedContentBeforeHeight});
        align-self: stretch;
        overflow: hidden;
    }

    &.${classes.contentAlignCenter} {
        padding: var(${tokens.paddingScalable});

        ${ContentWrapper} {
            align-items: center;
            gap: var(${tokens.gapScalable});
        }

        ${ContentBefore} {
            width: fit-content;
            height: fit-content;
            padding: unset;
        }
    }

    ${ActionContentContainer} {
        margin-left: var(${privateTokens.contentBeforeOffset});
    }

    ${Title}, ${TitleHelper} {
        width: 100%;
        min-height: var(${tokens.fixedContentBeforeHeight});
        overflow-wrap: break-word;

        font-family: var(${tokens.titleFontFamily});
        font-size: var(${tokens.titleFontSize});
        font-style: var(${tokens.titleFontStyle});
        font-weight: var(${tokens.titleFontWeight});
        letter-spacing: var(${tokens.titleLetterSpacing});
        line-height: var(${tokens.titleLineHeight});
    }

    ${Text}, ${TextHelper} {
        min-height: var(${tokens.fixedContentBeforeHeight});
        font-family: var(${tokens.textFontFamily});
        font-size: var(${tokens.textFontSize});
        font-style: var(${tokens.textFontStyle});
        font-weight: var(${tokens.textFontWeight});
        letter-spacing: var(${tokens.textLetterSpacing});
        line-height: var(${tokens.textLineHeight});

        overflow-wrap: break-word;
    }
`;
