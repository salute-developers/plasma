import { css } from '@linaria/core';

import { classes, iconSizePrefixes, privateTokens, tokens } from '../../Rating.tokens';
import { Content, HelperText, Score, Star, StarsWrapper, Wrapper } from '../../Rating.styles';
import { screenGroupBreakpoints } from '../../../../utils/constants';

const getIconMediaQueries = (prefix = iconSizePrefixes.multiple) => {
    return Object.entries(screenGroupBreakpoints)
        .map(([name, minWidth]) => {
            return `
@media (min-width: ${minWidth}) {
    width: var(${prefix}_${name}-screen, var(${tokens.iconSize}));
    height: var(${prefix}_${name}-screen, var(${tokens.iconSize}));
}`;
        })
        .join('\n');
};

export const base = css`
    gap: var(${tokens.gap});

    ${Content} {
        gap: var(${tokens.contentGap});

        &.${classes.singleIconContent} {
            gap: var(${tokens.singleIconContentGap});
        }

        &.${classes.valueAfter} {
            flex-direction: row-reverse;
            justify-content: flex-end;
        }
    }

    ${Score} {
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }

    ${HelperText} {
        font-family: var(${tokens.helperTextFontFamily});
        font-size: var(${tokens.helperTextFontSize});
        font-style: var(${tokens.helperTextFontStyle});
        font-weight: var(${tokens.helperTextFontWeight});
        letter-spacing: var(${tokens.helperTextLetterSpacing});
        line-height: var(${tokens.helperTextLineHeight});
    }

    ${Wrapper} {
        gap: var(${tokens.wrapperGap});
    }

    ${StarsWrapper} {
        gap: var(${tokens.starsWrapperGap});
    }

    ${Star} {
        margin-bottom: var(${tokens.iconMarginBottom}, 0);
        width: var(${tokens.iconSize});
        height: var(${tokens.iconSize});

        ${getIconMediaQueries()}
        
        ${privateTokens.iconSize}: var(${tokens.actualIconSize}, 100%);

        .${classes.customIconSizing} {
            display: inline-block;
            width: var(${tokens.actualIconSize}, 100%);
            height: var(${tokens.actualIconSize}, 100%);
        }

        svg {
            width: var(${tokens.actualIconSize}, 100%);
            height: var(${tokens.actualIconSize}, 100%);
            transform-origin: top left;
            transform: scale(var(${tokens.scaleFactor}, 1));
        }

        &.${classes.singleIcon} {
            margin-bottom: var(${tokens.singleIconMarginBottom}, 0);
            width: var(${tokens.singleIconSize});
            height: var(${tokens.singleIconSize});

            ${getIconMediaQueries(iconSizePrefixes.single)}
        }
    }
`;
