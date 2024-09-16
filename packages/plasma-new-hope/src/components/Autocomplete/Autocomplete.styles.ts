import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { popoverClasses, popoverConfig } from '../Popover';
import { component } from '../../engines';

import { AutocompleteProps } from './Autocomplete.types';
import { tokens } from './Autocomplete.tokens';

export const base = css`
    .${popoverClasses.wrapper}, .${popoverClasses.target} {
        display: block;
    }
`;

const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)<{ listWidth: AutocompleteProps['listWidth'] }>`
    .${String(popoverClasses.root)} {
        display: block;
        width: ${({ listWidth }) => listWidth || '100%'};
    }
`;

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

    margin: 0;
    padding: var(${tokens.padding});
`;

export const LeftHelper = styled.div<{
    disabled: AutocompleteProps['disabled'];
    readOnly: AutocompleteProps['readOnly'];
}>`
    color: ${({ readOnly, disabled }) =>
        readOnly && !disabled
            ? `var(${tokens.textFieldLeftHelperColorReadOnly})`
            : `var(${tokens.textFieldLeftHelperColor})`};
    margin-top: var(${tokens.textFieldLeftHelperOffset});

    font-family: var(${tokens.textFieldLeftHelperFontFamily});
    font-size: var(${tokens.textFieldLeftHelperFontSize});
    font-style: var(${tokens.textFieldLeftHelperFontStyle});
    font-weight: var(${tokens.textFieldLeftHelperFontWeight});
    letter-spacing: var(${tokens.textFieldLeftHelperLetterSpacing});
    line-height: var(${tokens.textFieldLeftHelperLineHeight});

    opacity: var(${tokens.textFieldDisabledOpacity});
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'auto')};
`;

export const InfiniteLoaderWrapper = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    min-height: var(${tokens.textFieldHeight});
`;
