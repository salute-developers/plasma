import { styled } from '@linaria/react';

import { tokens } from '../Dropdown.tokens';

export const StyledDropdownFooter = styled.div`
    background: var(${tokens.footerBackground});

    width: var(${tokens.footerWidth});
    height: var(${tokens.footerHeight});

    padding: var(${tokens.footerPaddingTop}) var(${tokens.footerPaddingRight}) var(${tokens.footerPaddingBottom})
        var(${tokens.footerPaddingLeft});

    margin: var(${tokens.footerMarginTop}) var(${tokens.footerMarginRight}) var(${tokens.footerMarginBottom})
        var(${tokens.footerMarginLeft});
`;
