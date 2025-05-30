import { styled } from '@linaria/react';
import { addFocus, applyEllipsis } from 'src/mixins';

import { tokens, classes } from '../../Autocomplete.tokens';

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
        outlineSize: '0',
        outlineOffset: '0',
        outlineColor: `var(${tokens.focusColor})`,
        outlineRadius: `calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem))`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.suggestionItemIsFocused}:before {
                outline: none;
                box-shadow: inset 0 0 0 0.0625rem var(${tokens.focusColor});
            }
        `,
    })};
`;
