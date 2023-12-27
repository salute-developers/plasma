import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { classes, tokens } from '../../Dropdown.tokens';

export const StyledContentLeft = styled.div`
    display: inline-flex;

    width: var(${tokens.itemContentLeftWidth});
    color: var(${tokens.itemContentLeftColor});
`;

export const StyledContentRight = styled.div`
    display: inline-flex;

    width: var(${tokens.itemContentRightWidth});
    color: var(${tokens.itemContentRightColor});
`;

export const base = css`
    display: flex;
    align-items: center;
    user-select: none;

    width: 100%;

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

    &:hover:not(.${classes.dropdownItemIsDisabled}) {
        cursor: pointer;
        background: var(${tokens.itemBackgroundHover});
    }

    &.${String(classes.dropdownItemIsSelected)} {
        color: var(${tokens.itemColorSelected});
        background: var(${tokens.itemBackgroundSelected});

        &:hover:not(.${classes.dropdownItemIsDisabled}) {
            background: var(${tokens.itemBackgroundSelectedHover});
        }
    }

    &.${classes.dropdownItemIsDisabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
