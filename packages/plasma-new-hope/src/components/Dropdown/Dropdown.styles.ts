import { styled } from '@linaria/react';

import { component } from '../../engines';
import { popoverConfig, popoverClasses } from '../Popover';

import { tokens } from './Dropdown.tokens';

// issue #823
const Popover = component(popoverConfig);

export const StyledPopover = styled(Popover)`
    .${String(popoverClasses.target)} {
        display: block;
    }
`;

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
