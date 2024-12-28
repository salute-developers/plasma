import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { getCorrectHeight } from './utils';
import { SelectProps } from './Select.types';
import { tokens, constants } from './Select.tokens';

export const Ul = styled.ul<{
    listOverflow?: SelectProps['listOverflow'];
    listHeight?: SelectProps['listHeight'];
    listWidth?: SelectProps['listWidth'];
    isInnerUl?: boolean;
}>`
    box-sizing: border-box;

    background: var(${constants.background});
    box-shadow: ${constants.boxShadow},
        inset 0 0 0 var(${tokens.dropdownBorderWidth}, 0rem) var(${tokens.dropdownBorderColor}, transparent);

    border-radius: var(${tokens.borderRadius});
    width: ${({ listWidth }) => listWidth || '100%'};
    max-height: ${({ listHeight }) => (listHeight ? getCorrectHeight(listHeight) : 'auto')};
    overflow: ${({ listOverflow }) => listOverflow || 'initial'};

    margin: ${({ isInnerUl }) =>
        isInnerUl ? `calc(var(${tokens.padding}) * -1) 0 0 0` : `var(${tokens.margin}) 0 0 0`};
    padding: calc(var(${tokens.padding}) + var(${tokens.dropdownBorderWidth}, 0rem)) 0;
`;

export const base = css``;
