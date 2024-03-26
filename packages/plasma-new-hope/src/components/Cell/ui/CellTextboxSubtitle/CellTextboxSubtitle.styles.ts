import styled from 'styled-components';

import { tokens } from '../../Cell.tokens';

export const StyledTextboxSubtitle = styled.div`
    color: var(${tokens.cellSubtitleColor});
    font-size: var(${tokens.cellSubtitleFontSize});
    font-weight: var(${tokens.cellSubtitleFontWeight});
    font-family: var(${tokens.cellSubtitleFontFamily});
    font-style: var(${tokens.cellSubtitleFontStyle});
    line-height: var(${tokens.cellSubtitleLineHeight});
    letter-spacing: var(${tokens.cellSubtitleLetterSpacing});
`;
