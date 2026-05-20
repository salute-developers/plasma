import styled from 'styled-components';
import { addFocus } from 'src/mixins';
import { CSSProperties } from 'react';
import { IconDisclosureRightCentered } from 'src/components/_Icon';

import type { ComboboxProps } from '../../../../Combobox.types';
import { classes, tokens, constants } from '../../../../Combobox.tokens';

export const ItemWrapper = styled.div``;

// TODO: Удалить после поддержки JS переменных в конфиге компонент
export const sizeMap: Record<string, string> = {
    xs: '1rem',
    s: '1.5rem',
};

export const StyledArrowLeft = styled(IconDisclosureRightCentered)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};

    &.${classes.arrowInverse} {
        transform: rotate(90deg);
    }
`;

export const StyledArrowRight = styled(IconDisclosureRightCentered)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    transform: rotate(90deg);

    &.${classes.arrowInverse} {
        transform: rotate(-90deg);
    }
`;

export const DisclosureIconWrapper = styled.div<{ visibility: CSSProperties['visibility'] }>`
    line-height: 0;
    color: var(${tokens.disclosureIconColor});
    visibility: ${({ visibility }) => visibility || 'visible'};

    &:hover {
        color: var(${tokens.disclosureIconColorHover});
    }
`;

export const Wrapper = styled.div<{ variant: ComboboxProps['variant'] }>`
    display: flex;
    align-items: center;
    gap: var(${tokens.itemGap});
    min-height: var(${tokens.itemHeight});
    margin: 0;
    box-sizing: content-box;
    padding: ${({ variant }) => `var(${variant === 'tight' ? tokens.itemPaddingTight : tokens.itemPadding})`};
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.fontLetterSpacing});
    line-height: var(${tokens.fontLineHeight});
    background-color: var(${constants.itemBackground});
    color: var(--text-primary);
    border-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
    user-select: none;
    background-clip: padding-box;

    &:hover:not(.${classes.dropdownItemIsDisabled}) {
        cursor: pointer;
        background-color: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsActive} {
        background-color: var(${tokens.itemBackgroundHover});
    }

    &.${classes.dropdownItemIsDisabled} {
        opacity: ${constants.opacity};
        cursor: not-allowed;
    }

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineSize: '0',
        outlineOffset: '0',
        outlineColor: `var(${constants.focusColor})`,
        outlineRadius: `calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem))`,
        hasTransition: false,
        customFocusRules: `
            &.${classes.dropdownItemIsFocused}:before {
                outline: none;
                box-shadow: inset 0 0 0 0.0625rem var(${constants.focusColor});
            }
        `,
    })};
`;

export const ChildItems = styled.div``;

export const Offset = styled.div<{ depth: number }>`
    width: calc(${({ depth }) => depth || 0} * var(${tokens.itemTreeOffsetWidth}));
    flex: none;
    margin-right: calc(var(${tokens.itemGap}) * -1);
`;
