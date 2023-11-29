import { styled } from '@linaria/react';

import { tokens } from './Dropdown.tokens';

export const StyledDropdown = styled.div`
    box-sizing: border-box;

    background: var(${tokens.background});
    box-shadow: var(${tokens.boxShadow});

    border-radius: var(${tokens.borderRadius});
    width: var(${tokens.width});
    height: var(${tokens.height});

    padding: var(${tokens.paddingTop}) var(${tokens.paddingRight}) var(${tokens.paddingBottom})
        var(${tokens.paddingLeft});
`;
