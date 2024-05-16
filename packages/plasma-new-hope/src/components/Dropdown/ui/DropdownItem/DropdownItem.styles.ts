import { styled } from '@linaria/react';

import { classes, tokens } from '../../Dropdown.tokens';
import { addFocus, applyEllipsis } from '../../../../mixins';
import { DropdownProps } from '../../Dropdown.types';

export const StyledContentLeft = styled.div`
    display: inline-flex;
`;

export const StyledContentRight = styled.div`
    margin-left: auto;
    display: inline-flex;
`;

export const DisclosureIconWrapper = styled.div`
    line-height: 0;
    color: var(${tokens.disclosureIconColor});
`;

export const StyledText = styled.div`
    ${applyEllipsis()};
    flex: 1;
`;

export const Wrapper = styled.li<{ variant: DropdownProps['variant'] }>`
    display: flex;
    align-items: center;
    margin: 0;
    box-sizing: content-box;
    padding-top: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemPaddingTopTight : tokens.itemPaddingTop})`};
    padding-right: var(${tokens.itemPaddingRight});
    padding-bottom: ${({ variant }) =>
        `var(${variant === 'tight' ? tokens.itemPaddingBottomTight : tokens.itemPaddingBottom})`};
    padding-left: var(${tokens.itemPaddingLeft});
    font-family: var(${tokens.itemFontFamily});
    font-size: var(${tokens.itemFontSize});
    font-style: var(${tokens.itemFontStyle});
    font-weight: var(${tokens.itemFontWeightBold});
    letter-spacing: var(${tokens.itemFontLetterSpacing});
    line-height: var(${tokens.itemFontLineHeight});
    background: var(${tokens.itemBackground});
    color: var(${tokens.itemColor});
    border-radius: var(${tokens.itemBorderRadius});
    user-select: none;

    &:hover:not(.${classes.dropdownItemIsDisabled}) {
        cursor: pointer;
        background: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsActive} {
        background: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsDisabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
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
            &.${classes.dropdownItemIsFocused}:before {
                outline: none;
                box-shadow: 0 0 0 0.0625rem var(${tokens.focusColor});
            }
        `,
    })};
`;
