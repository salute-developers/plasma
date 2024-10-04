import { styled } from '@linaria/react';

import { tokens } from '../../Cell.tokens';

export const CellTextboxStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(${tokens.cellTextboxGap});
`;
