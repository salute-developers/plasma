import styled from 'styled-components';

import { tokens } from '../../Cell.tokens';

export const StyledTextboxTitle = styled.div`
    color: var(${tokens.cellTitleColor});
    font-size: var(${tokens.cellTitleFontSize});
    font-weight: var(${tokens.cellTitleFontWeight});
    font-family: var(${tokens.cellTitleFontFamily});
    font-style: var(${tokens.cellTitleFontStyle});
    line-height: var(${tokens.cellTitleLineHeight});
    letter-spacing: var(${tokens.cellTitleLetterSpacing});
`;
