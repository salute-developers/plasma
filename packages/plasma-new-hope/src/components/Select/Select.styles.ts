import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { component, mergeConfig } from 'src/engines';
import { emptyStateConfig, emptyStateTokens } from 'src/components/EmptyState';

import { getCorrectHeight } from './utils';
import { SelectProps } from './Select.types';
import { tokens, constants, classes } from './Select.tokens';

const mergedConfig = mergeConfig(emptyStateConfig);
const EmptyState = component(mergedConfig);

export const ListWrapper = styled.div<{
    listWidth?: SelectProps['listWidth'];
}>`
    width: ${({ listWidth }) => listWidth || '100%'};
    padding: calc(var(${tokens.padding}) + var(${tokens.dropdownBorderWidth}, 0rem));
    border-radius: var(${tokens.borderRadius});
    box-sizing: border-box;
    background: var(${constants.background});
    box-shadow: ${constants.boxShadow},
        inset 0 0 0 var(${tokens.dropdownBorderWidth}, 0rem) var(${tokens.dropdownBorderColor}, transparent);
`;

export const Ul = styled.ul<{
    virtual: SelectProps['virtual'];
    listMaxHeight?: SelectProps['listMaxHeight'];
}>`
    max-height: ${({ virtual, listMaxHeight }) =>
        // eslint-disable-next-line no-nested-ternary
        virtual ? 'auto' : listMaxHeight ? getCorrectHeight(listMaxHeight) : 'auto'};
    overflow-x: hidden;
    overflow-y: ${({ virtual }) => (virtual ? 'visible' : 'auto')};
    border-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
    margin: 0;
    padding: 0;

    .${classes.emptyStateWrapper} {
        box-shadow: none;
    }
`;

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

export const base = css``;
