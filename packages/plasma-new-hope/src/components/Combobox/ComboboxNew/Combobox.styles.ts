import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { emptyStateConfig, emptyStateTokens } from '../../EmptyState';
import { IconDisclosureDownCentered } from '../../_Icon';
import { component, mergeConfig } from '../../../engines';

import { ComboboxProps } from './Combobox.types';
import { tokens, constants, classes } from './Combobox.tokens';

const mergedConfig = mergeConfig(emptyStateConfig);
const EmptyState = component(mergedConfig);

export const Ul = styled.ul<{
    virtual: ComboboxProps['virtual'];
    listOverflow?: ComboboxProps['listOverflow'];
    listMaxHeight?: ComboboxProps['listMaxHeight'];
    listWidth?: ComboboxProps['listWidth'];
    isInnerUl?: boolean;
}>`
    background: var(${constants.background});
    box-shadow: ${constants.boxShadow};

    border-radius: var(${tokens.borderRadius});
    width: ${({ listWidth }) => listWidth || '100%'};
    max-height: ${({ virtual, listMaxHeight }) => (virtual ? 'auto' : listMaxHeight || 'auto')};
    overflow-y: ${({ virtual, listOverflow }) => (virtual ? 'visible' : listOverflow || 'visible')};
    border: var(${tokens.dropdownBorderWidth}) solid var(${tokens.dropdownBorderColor});
    margin: ${({ isInnerUl }) =>
        isInnerUl ? `calc(var(${tokens.padding}) * -1) 0 0 0` : `var(${tokens.margin}) 0 0 0`};
    padding: var(${tokens.padding}) 0;

    .${classes.emptyStateWrapper} {
        box-shadow: none;
    }
`;

export const IconArrowWrapper = styled.div<{ disabled: boolean }>`
    line-height: 0;
    color: var(${tokens.disclosureIconColor});
    cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};

    .${classes.arrowInverse} {
        transform: rotate(-180deg);
    }

    &:hover,
    &:active {
        color: ${({ disabled }) =>
            disabled ? `var(${tokens.disclosureIconColor})` : `var(${tokens.disclosureIconColorHover})`};
    }
`;

// TODO: Удалить после поддержки JS переменных в конфиге компонент
export const sizeMap: Record<string, string> = {
    xs: '1rem',
    s: '1.5rem',
};

export const StyledArrow = styled(IconDisclosureDownCentered)`
    width: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
    height: ${({ size = 'xs' }) => `var(${tokens.disclosureIconSize}, ${sizeMap[size]})`};
`;

export const base = css``;

export const StyledEmptyState = styled(EmptyState)`
    ${emptyStateTokens.borderRadius}: var(${tokens.textFieldBorderRadius});
    ${emptyStateTokens.padding}: var(${tokens.emptyStatePadding});
    ${emptyStateTokens.fontFamily}: var(${tokens.textFieldFontFamily});
    ${emptyStateTokens.fontSize}: var(${tokens.textFieldFontSize});
    ${emptyStateTokens.fontStyle}: var(${tokens.textFieldFontStyle});
    ${emptyStateTokens.fontWeight}: var(${tokens.textFieldFontWeight});
    ${emptyStateTokens.fontLetterSpacing}: var(${tokens.textFieldLetterSpacing});
    ${emptyStateTokens.fontLineHeight}: var(${tokens.textFieldLineHeight});
`;

export const StyledLeftHelper = styled.span`
    margin: 0;
    padding: 0;
`;
