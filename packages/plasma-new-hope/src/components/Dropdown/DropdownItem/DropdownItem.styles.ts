import { styled } from '@linaria/react';

import { tokens } from '../Dropdown.tokens';

export const StyledDropdownItem = styled.label`
    display: flex;
    align-items: center;
    user-select: none;

    background: var(${tokens.itemBackground});

    width: var(${tokens.itemWidth});
    height: var(${tokens.itemHeight});

    padding: var(${tokens.itemPaddingTop}) var(${tokens.itemPaddingRight}) var(${tokens.itemPaddingBottom})
        var(${tokens.itemPaddingLeft});

    margin: var(${tokens.itemMarginTop}) var(${tokens.itemMarginRight}) var(${tokens.itemMarginBottom})
        var(${tokens.itemMarginLeft});

    &:hover:not([disabled]) {
        background: var(${tokens.itemBackgroundHover});
    }
`;
