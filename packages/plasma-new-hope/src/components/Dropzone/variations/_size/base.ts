import { css } from '@linaria/core';

import { classes, privateTokens, tokens } from '../../Dropzone.tokens';
import {
    Description,
    DescriptionHelper,
    DropzoneHandlerOverlay,
    Title,
    TitleHelper,
    ContentWrapper,
    IconWrapper,
} from '../../Dropzone.styles';

export const base = css`
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    height: var(${privateTokens.height});
    width: var(${privateTokens.width});

    &.${classes.stretch} {
        width: 100%;
        height: 100%;
    }

    ${DropzoneHandlerOverlay} {
        border-radius: var(${tokens.borderRadius});
    }

    ${IconWrapper} {
        width: 100%;
        gap: var(${tokens.contentGap});

        ${ContentWrapper} {
            display: flex;
            justify-content: center;
            flex-direction: column;

            gap: var(${tokens.contentWrapperGap});
        }

        &.${classes.verticalContentPlacing} {
            flex-direction: column;
            gap: var(${tokens.contentColumnGap});

            text-align: center;
        }
    }

    ${Title}, ${TitleHelper} {
        font-family: var(${tokens.titleFontFamily});
        font-size: var(${tokens.titleFontSize});
        font-style: var(${tokens.titleFontStyle});
        font-weight: var(${tokens.titleFontWeight});
        letter-spacing: var(${tokens.titleLetterSpacing});
        line-height: var(${tokens.titleLineHeight});
        word-wrap: break-word;
    }

    ${Description}, ${DescriptionHelper} {
        font-family: var(${tokens.descriptionFontFamily});
        font-size: var(${tokens.descriptionFontSize});
        font-style: var(${tokens.descriptionFontStyle});
        font-weight: var(${tokens.descriptionFontWeight});
        letter-spacing: var(${tokens.descriptionLetterSpacing});
        line-height: var(${tokens.descriptionLineHeight});
        word-wrap: break-word;
    }

    ${Description} {
        max-width: 100%;
    }
`;
