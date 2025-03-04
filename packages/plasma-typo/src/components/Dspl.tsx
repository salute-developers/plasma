import styled from 'styled-components';

import { applyHyphens, applySpacing } from '../mixins';
import type { BreakWordProps, SpacingProps } from '../mixins';
import { dsplL, dsplLBold, dsplLMedium, dsplM, dsplMBold, dsplMMedium, dsplS, dsplSBold, dsplSMedium } from '../tokens';
import type { BoldProps, MediumProps } from '../types';

export const DsplL = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? dsplLBold : dsplL)}
    ${({ medium = true }) => (medium ? dsplLMedium : dsplL)}
`;
export const DsplM = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? dsplMBold : dsplM)}
    ${({ medium = true }) => (medium ? dsplMMedium : dsplM)}
`;
export const DsplS = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? dsplSBold : dsplS)}
    ${({ medium = true }) => (medium ? dsplSMedium : dsplS)}
`;
