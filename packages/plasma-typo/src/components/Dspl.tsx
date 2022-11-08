import styled from 'styled-components';

import { applyHyphens, applySpacing } from '../mixins';
import type { BreakWordProps, SpacingProps } from '../mixins';
import { dsplL, dsplLBold, dsplM, dsplMBold, dsplS, dsplSBold } from '../tokens';
import type { BoldProps } from '../types';

export const DsplL = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? dsplLBold : dsplL)}
`;
export const DsplM = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? dsplMBold : dsplM)}
`;
export const DsplS = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? dsplSBold : dsplS)}
`;
