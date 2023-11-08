import { styled } from '@linaria/react';

import { tokens } from '../../Dropdown.tokens';

export const StyledDropdownGroup = styled.div`
    background: var(${tokens.groupBackground});

    width: var(${tokens.groupWidth});
    height: var(${tokens.groupHeight});

    padding: var(${tokens.groupPaddingTop}) var(${tokens.groupPaddingRight}) var(${tokens.groupPaddingBottom})
        var(${tokens.groupPaddingLeft});

    margin: var(${tokens.groupMarginTop}) var(${tokens.groupMarginRight}) var(${tokens.groupMarginBottom})
        var(${tokens.groupMarginLeft});
`;

export const StyledDropdownLabel = styled.div`
    font-family: var(${tokens.groupLabelFontFamily});
    font-size: var(${tokens.groupLabelFontSize});
    font-style: var(${tokens.groupLabelFontStyle});
    font-weight: var(${tokens.groupLabelFontWeight});
    letter-spacing: var(${tokens.groupLabelLetterSpacing});
    line-height: var(${tokens.groupLabelLineHeight});

    color: var(${tokens.groupLabelColor});

    padding: var(${tokens.groupLabelPaddingTop}) var(${tokens.groupLabelPaddingRight})
        var(${tokens.groupLabelPaddingBottom}) var(${tokens.groupLabelPaddingLeft});

    margin: var(${tokens.groupLabelMarginTop}) var(${tokens.groupLabelMarginRight})
        var(${tokens.groupLabelMarginBottom}) var(${tokens.groupLabelMarginLeft});
`;
