import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { AutocompleteProps } from './Autocomplete.types';
import { tokens } from './Autocomplete.tokens';

export const base = css``;

export const ListWrapper = styled.div`
    padding: calc(var(${tokens.padding}) + var(${tokens.dropdownBorderWidth}, 0rem));
    border-radius: var(${tokens.borderRadius});
    box-sizing: border-box;
    background: var(${tokens.background});
    box-shadow: var(${tokens.boxShadow}),
        inset 0 0 0 var(${tokens.dropdownBorderWidth}, 0rem) var(${tokens.dropdownBorderColor}, transparent);
`;

export const Ul = styled.ul<{
    listMaxHeight: AutocompleteProps['listMaxHeight'];
    virtual: AutocompleteProps['virtual'];
}>`
    border-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
    height: auto;
    max-height: ${({ virtual, listMaxHeight }) => (virtual ? 'auto' : listMaxHeight || 'auto')};
    overflow: auto;

    margin: 0;
    padding: 0;
`;

export const InfiniteLoaderWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    min-height: var(${tokens.textFieldHeight});
`;

export const StyledLeftHelper = styled.span`
    margin: 0;
    padding: 0;
`;
