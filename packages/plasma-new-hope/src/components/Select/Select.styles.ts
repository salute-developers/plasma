import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { getCorrectHeight } from './utils';
import { SelectProps } from './Select.types';
import { tokens, constants } from './Select.tokens';

export const Ul = styled.ul<{
    virtual: SelectProps['virtual'];
    listOverflow?: SelectProps['listOverflow'];
    listMaxHeight?: SelectProps['listMaxHeight'];
    listWidth?: SelectProps['listWidth'];
    isInnerUl?: boolean;
}>`
    background: var(${constants.background});
    box-shadow: ${constants.boxShadow},
        inset 0 0 0 var(${tokens.dropdownBorderWidth}, 0rem) var(${tokens.dropdownBorderColor}, transparent);

    border-radius: var(${tokens.borderRadius});
    width: ${({ listWidth }) => listWidth || '100%'};

    max-height: ${({ virtual, listMaxHeight }) =>
        // eslint-disable-next-line no-nested-ternary
        virtual ? 'auto' : listMaxHeight ? getCorrectHeight(listMaxHeight) : 'auto'};
    overflow-y: ${({ virtual, listOverflow }) => (virtual ? 'visible' : listOverflow || 'visible')};

    margin: ${({ isInnerUl }) =>
        isInnerUl ? `calc(var(${tokens.padding}) * -1) 0 0 0` : `var(${tokens.margin}) 0 0 0`};
    padding: calc(var(${tokens.padding}) + var(${tokens.dropdownBorderWidth}, 0rem)) 0;
`;

export const base = css``;
