import { css } from '@linaria/core';

import { classes, tokens } from '../../Dropdown.tokens';

export const base = css`
    display: flex;
    align-items: center;
    user-select: none;

    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeightBold});
    letter-spacing: var(${tokens.itemFontLetterSpacing});
    line-height: var(${tokens.itemFontLineHeight});

    background: var(${tokens.itemBackground});
    color: var(${tokens.itemColor});
    border-radius: var(${tokens.itemBorderRadius});

    width: var(${tokens.itemWidth});
    height: var(${tokens.itemHeight});

    padding: var(${tokens.itemPaddingTop}) var(${tokens.itemPaddingRight}) var(${tokens.itemPaddingBottom})
        var(${tokens.itemPaddingLeft});

    margin: var(${tokens.itemMarginTop}) var(${tokens.itemMarginRight}) var(${tokens.itemMarginBottom})
        var(${tokens.itemMarginLeft});

    &:hover:not(.${classes.dropdownItemIsDisbaled}) {
        cursor: pointer;
        background: var(${tokens.itemBackgroundHover});
    }

    &.${String(classes.dropdownItemIsSelected)} {
        color: var(${tokens.itemColorSelected});
        background: var(${tokens.itemBackgroundSelected});
    }

    &.${classes.dropdownItemIsDisbaled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
