import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { getCorrectHeight } from './utils';
import { DropdownProps } from './Dropdown.types';
import { tokens, constants } from './Dropdown.tokens';

export const ListWrapper = styled.div<{
    listWidth?: DropdownProps['listWidth'];
}>`
    width: ${({ listWidth }) => listWidth || `var(${tokens.width})`};
    padding: calc(var(${tokens.padding}) + var(${tokens.borderWidth}, 0rem));
    border-radius: var(${tokens.borderRadius});
    box-sizing: border-box;
    background: var(${constants.background});
    box-shadow: ${constants.boxShadow},
        inset 0 0 0 var(${tokens.borderWidth}, 0) var(${tokens.borderColor}, transparent);
`;

export const Ul = styled.ul<{
    listMaxHeight: DropdownProps['listHeight'];
}>`
    max-height: ${({ listMaxHeight }) => (listMaxHeight ? getCorrectHeight(listMaxHeight) : 'auto')};
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.borderWidth}, 0rem));
    margin: 0;
    padding: 0;
`;

export const base = css``;
