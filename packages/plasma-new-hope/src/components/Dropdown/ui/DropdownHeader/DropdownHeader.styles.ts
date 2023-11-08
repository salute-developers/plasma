import { styled } from '@linaria/react';

import { tokens } from '../../Dropdown.tokens';

export const StyledDropdownHeader = styled.div`
    background: var(${tokens.headerBackground});

    font-family: var(${tokens.headerFontFamily});
    font-size: var(${tokens.headerFontSize});
    font-style: var(${tokens.headerFontStyle});
    font-weight: var(${tokens.headerFontWeightBold});
    letter-spacing: var(${tokens.headerFontLetterSpacing});
    line-height: var(${tokens.headerFontLineHeight});

    width: var(${tokens.headerWidth});
    height: var(${tokens.headerHeight});

    padding: var(${tokens.headerPaddingTop}) var(${tokens.headerPaddingRight}) var(${tokens.headerPaddingBottom})
        var(${tokens.headerPaddingLeft});

    margin: var(${tokens.headerMarginTop}) var(${tokens.headerMarginRight}) var(${tokens.headerMarginBottom})
        var(${tokens.headerMarginLeft});
`;
