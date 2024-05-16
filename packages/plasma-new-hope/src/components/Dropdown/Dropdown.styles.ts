import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { component } from '../../engines';
import { popoverConfig, popoverClasses } from '../Popover';

import { getCorrectHeight } from './utils';
import { DropdownProps } from './Dropdown.types';
import { tokens } from './Dropdown.tokens';

const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)`
    .${String(popoverClasses.wrapper)}, .${String(popoverClasses.target)} {
        display: block;
    }
`;

export const Ul = styled.ul<{
    listHeight: DropdownProps['listHeight'];
    listOverflow: DropdownProps['listOverflow'];
    isInnerUl?: boolean;
    listWidth?: DropdownProps['listWidth'];
}>`
    box-sizing: border-box;

    background: var(${tokens.background});
    box-shadow: var(${tokens.boxShadow});

    border-radius: var(${tokens.borderRadius});
    width: ${({ listWidth }) => listWidth || `var(${tokens.width})`};
    height: ${({ listHeight }) => (listHeight ? getCorrectHeight(listHeight) : 'auto')};
    overflow: ${({ listOverflow }) => listOverflow || 'initial'};

    margin: ${({ isInnerUl }) => (isInnerUl ? `calc(var(${tokens.padding}) * -1) 0 0 var(${tokens.padding})` : 0)};
    padding: var(${tokens.padding});
`;

export const base = css`
    display: inline-block;
`;
