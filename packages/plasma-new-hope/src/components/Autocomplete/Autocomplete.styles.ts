import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { AutocompleteProps } from './Autocomplete.types';
import { tokens } from './Autocomplete.tokens';

export const base = css``;

export const Ul = styled.ul<{
    listMaxHeight: AutocompleteProps['listMaxHeight'];
}>`
    box-sizing: border-box;

    background: var(${tokens.background});
    box-shadow: var(${tokens.boxShadow});

    border-radius: var(${tokens.borderRadius});
    height: auto;
    max-height: ${({ listMaxHeight }) => listMaxHeight || 'none'};
    overflow-y: scroll;
    border: var(${tokens.dropdownBorderWidth}) solid var(${tokens.dropdownBorderColor});

    margin: var(${tokens.margin}) 0 0 0;
    padding: var(${tokens.padding});
`;

export const InfiniteLoaderWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    min-height: var(${tokens.textFieldHeight});
`;
