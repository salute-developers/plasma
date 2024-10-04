import { styled } from '@linaria/react';

import { tokens } from '../../Cell.tokens';

export const StyledTextboxLabel = styled.div`
    color: var(${tokens.cellLabelColor});
    font-size: var(${tokens.cellLabelFontSize});
    font-weight: var(${tokens.cellLabelFontWeight});
    font-family: var(${tokens.cellLabelFontFamily});
    font-style: var(${tokens.cellLabelFontStyle});
    line-height: var(${tokens.cellLabelLineHeight});
    letter-spacing: var(${tokens.cellLabelLetterSpacing});
`;
