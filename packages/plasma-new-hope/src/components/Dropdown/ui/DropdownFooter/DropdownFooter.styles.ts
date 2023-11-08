import { styled } from '@linaria/react';

import { tokens } from '../../Dropdown.tokens';

export const StyledDropdownFooter = styled.div`
    background: var(${tokens.footerBackground});

    font-family: var(${tokens.footerFontFamily});
    font-size: var(${tokens.footerFontSize});
    font-style: var(${tokens.footerFontStyle});
    font-weight: var(${tokens.footerFontWeightBold});
    letter-spacing: var(${tokens.footerFontLetterSpacing});
    line-height: var(${tokens.footerFontLineHeight});

    width: var(${tokens.footerWidth});
    height: var(${tokens.footerHeight});

    padding: var(${tokens.footerPaddingTop}) var(${tokens.footerPaddingRight}) var(${tokens.footerPaddingBottom})
        var(${tokens.footerPaddingLeft});

    margin: var(${tokens.footerMarginTop}) var(${tokens.footerMarginRight}) var(${tokens.footerMarginBottom})
        var(${tokens.footerMarginLeft});
`;
