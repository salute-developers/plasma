import { styled } from '@linaria/react';
import { SelectProps } from 'src/components/Select';

import { constants, tokens } from '../../Combobox.tokens';

export const ListWrapper = styled.div`
    width: 100%;
    padding: calc(var(${tokens.padding}) + var(${tokens.dropdownBorderWidth}, 0rem));
    border-radius: var(${tokens.borderRadius});
    box-sizing: border-box;
    background: var(${constants.background});
    box-shadow: ${constants.boxShadow},
        inset 0 0 0 var(${tokens.dropdownBorderWidth}, 0rem) var(${tokens.dropdownBorderColor}, transparent);
`;

export const ScrollContainer = styled.div<{
    listMaxHeight?: SelectProps['listMaxHeight'];
}>`
    max-height: ${({ listMaxHeight }) => listMaxHeight || 'auto'};
    overflow-x: hidden;
    overflow-y: auto;
    border-radius: calc(var(${tokens.borderRadius}) - 0.125rem - var(${tokens.dropdownBorderWidth}, 0rem));
`;
