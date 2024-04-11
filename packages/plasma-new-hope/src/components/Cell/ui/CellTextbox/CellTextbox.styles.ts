import styled from 'styled-components';

import { tokens } from '../../Cell.tokens';

export const CellTextboxStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(${tokens.cellTextboxGap});
`;
