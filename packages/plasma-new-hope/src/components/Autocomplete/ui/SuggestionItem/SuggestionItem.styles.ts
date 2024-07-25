import { styled } from '@linaria/react';

import { tokens, classes } from '../../Autocomplete.tokens';
import { addFocus, applyEllipsis } from '../../../../mixins';

export const StyledText = styled.div`
    ${applyEllipsis()};
    flex: 1;
`;

export const Wrapper = styled.li`
    display: flex;
    align-items: center;
    margin: 0;
    box-sizing: content-box;
    padding: var(${tokens.itemPadding});
    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeight});
    letter-spacing: var(${tokens.itemFontLetterSpacing});
    line-height: var(${tokens.itemFontLineHeight});
    background: var(${tokens.itemBackground});
    color: var(${tokens.itemColor});
    border-radius: var(${tokens.itemBorderRadius});
    user-select: none;

    &:hover {
        cursor: pointer;
        background: var(${tokens.itemBackgroundHover});
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0.0625rem',
        outlineOffset: '0',
        outlineColor: `var(${tokens.focusColor})`,
        outlineRadius: `var(${tokens.itemBorderRadius})`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.suggestionItemIsFocused}:before {
                outline: none;
                box-shadow: 0 0 0 0.0625rem var(${tokens.focusColor});
            }
        `,
    })};
`;
