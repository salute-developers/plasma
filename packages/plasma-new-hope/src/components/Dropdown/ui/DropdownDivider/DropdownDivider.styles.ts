import { styled } from '@linaria/react';

import { tokens } from '../../Dropdown.tokens';

export const StyledDropdownDivider = styled.div`
    background: var(${tokens.dividerColor});

    width: var(${tokens.dividerWidth});
    height: var(${tokens.dividerHeight});

    margin: var(${tokens.dividerMarginTop}) var(${tokens.dividerMarginRight}) var(${tokens.dividerMarginBottom})
        var(${tokens.dividerMarginLeft});
`;
