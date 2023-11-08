import { styled } from '@linaria/react';

import { tokens } from '../Dropdown.tokens';

export const StyledDropdownHeader = styled.div`
    background: var(${tokens.headerBackground});

    width: var(${tokens.headerWidth});
    height: var(${tokens.headerHeight});

    padding: var(${tokens.headerPaddingTop}) var(${tokens.headerPaddingRight}) var(${tokens.headerPaddingBottom})
        var(${tokens.headerPaddingLeft});

    margin: var(${tokens.headerMarginTop}) var(${tokens.headerMarginRight}) var(${tokens.headerMarginBottom})
        var(${tokens.headerMarginLeft});
`;
