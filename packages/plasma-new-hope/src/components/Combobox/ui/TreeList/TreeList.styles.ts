import styled from 'styled-components';

import { ComboboxProps } from '../../Combobox.types';
import { constants, tokens, classes } from '../../Combobox.tokens';

export const ListWrapper = styled.div`
    width: 100%;
    padding: calc(var(${tokens.padding}) + var(${tokens.dropdownBorderWidth}, 0rem));
    border-radius: var(${tokens.borderRadius});
    box-sizing: border-box;
    background: var(${constants.background});
    box-shadow: ${constants.boxShadow},
        inset 0 0 0 var(${tokens.dropdownBorderWidth}, 0rem) var(${tokens.dropdownBorderColor}, transparent);

    .${classes.emptyStateWrapper} {
        box-shadow: none;
    }
`;

export const ScrollContainer = styled.div<{
    listMaxHeight?: ComboboxProps['listMaxHeight'];
}>`
    max-height: ${({ listMaxHeight }) => listMaxHeight || 'auto'};
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
`;
