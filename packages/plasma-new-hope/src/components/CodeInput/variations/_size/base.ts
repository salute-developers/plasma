import { css } from '@linaria/core';

import { CaptionWrapper, CodeGroup, CodeWrapper, ItemInput } from '../../CodeInput.styles';
import { tokens, privateTokens, TokensType } from '../../CodeInput.tokens';
import { screenGroupBreakpoints } from '../../../../utils/constants';

const getIconMediaQueries = () => {
    return Object.entries(screenGroupBreakpoints)
        .map(([name, minWidth]) => {
            return `
                @media (min-width: ${minWidth}) {
                    ${privateTokens.fontSize}: var(${tokens[`${name}FontSize` as TokensType]});
                    ${privateTokens.lineHeight}: var(${tokens[`${name}CodeItemHeight` as TokensType]});
                    ${privateTokens.itemWidth}: var(${tokens[`${name}CodeItemWidth` as TokensType]});
                    ${privateTokens.itemHeight}: var(${tokens[`${name}LineHeight` as TokensType]});
                }
            `;
        })
        .join('\n');
};

export const base = css`
    ${getIconMediaQueries()}
    gap: var(${tokens.captionGap});

    ${CodeWrapper}, ${CodeGroup} {
        gap: var(${tokens.codeItemsGap});
    }

    ${ItemInput} {
        font-size: var(${privateTokens.fontSize});
        font-family: var(${tokens.fontFamily});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${privateTokens.lineHeight});
        width: var(${privateTokens.itemWidth});
        height: var(${privateTokens.itemHeight});
    }

    ${CaptionWrapper} {
        font-family: var(${tokens.captionFontFamily});
        font-size: var(${tokens.captionFontSize});
        font-style: var(${tokens.captionFontStyle});
        font-weight: var(${tokens.captionFontWeight});
        letter-spacing: var(${tokens.captionLetterSpacing});
        line-height: var(${tokens.captionLineHeight});
    }
`;
