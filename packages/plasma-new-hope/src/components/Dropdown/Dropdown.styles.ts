import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { getCorrectHeight } from './utils';
import { DropdownProps } from './Dropdown.types';
import { tokens, constants } from './Dropdown.tokens';

export const Ul = styled.ul<{
    listHeight: DropdownProps['listHeight'];
    listOverflow: DropdownProps['listOverflow'];
    listWidth?: DropdownProps['listWidth'];
    isInnerUl?: boolean;
}>`
    box-sizing: border-box;
    width: ${({ listWidth }) => listWidth || `var(${tokens.width})`};
    height: ${({ listHeight }) => (listHeight ? getCorrectHeight(listHeight) : 'auto')};
    margin: ${({ isInnerUl }) => (isInnerUl ? `calc(var(${tokens.padding}) * -1) 0.125rem 0` : 0)};
    padding: var(${tokens.padding}) 0;
    overflow: ${({ listOverflow }) => listOverflow || 'initial'};
    background: var(${constants.background});
    box-shadow: ${constants.boxShadow};
    border-radius: var(${tokens.borderRadius});
    border: var(${tokens.borderWidth}) solid var(${tokens.borderColor});
`;

export const base = css``;
