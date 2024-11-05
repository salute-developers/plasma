import { css } from '@linaria/core';

import { classes, privateTokens, tokens } from '../../Dropzone.tokens';
import { Content, Description, Title, TitleWrapper } from '../../Dropzone.styles';

export const base = css`
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    height: var(${privateTokens.height});
    width: var(${privateTokens.width});

    &.${classes.stretch} {
        width: 100%;
    }

    ${Content} {
        gap: var(${tokens.contentGap});
    }

    ${TitleWrapper} {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: var(${tokens.titleWrapperGap});

        &.${classes.verticalContentPlacing} {
            flex-direction: column;
            gap: var(${tokens.titleWrapperGapColumn});
        }
    }

    ${Title} {
        font-family: var(${tokens.titleFontFamily});
        font-size: var(${tokens.titleFontSize});
        font-style: var(${tokens.titleFontStyle});
        font-weight: var(${tokens.titleFontWeight});
        letter-spacing: var(${tokens.titleLetterSpacing});
        line-height: var(${tokens.titleLineHeight});
    }

    ${Description} {
        font-family: var(${tokens.descriptionFontFamily});
        font-size: var(${tokens.descriptionFontSize});
        font-style: var(${tokens.descriptionFontStyle});
        font-weight: var(${tokens.descriptionFontWeight});
        letter-spacing: var(${tokens.descriptionLetterSpacing});
        line-height: var(${tokens.descriptionLineHeight});
    }
`;
