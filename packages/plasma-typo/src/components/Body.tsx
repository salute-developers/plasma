import styled from 'styled-components';

import { applyHyphens, applySpacing } from '../mixins';
import type { BreakWordProps, SpacingProps } from '../mixins';
import {
    bodyL,
    bodyLBold,
    bodyLMedium,
    bodyM,
    bodyMBold,
    bodyMMedium,
    bodyS,
    bodySBold,
    bodySMedium,
    bodyXS,
    bodyXSBold,
    bodyXSMedium,
    bodyXXS,
    bodyXXSBold,
    bodyXXSMedium,
} from '../tokens';
import type { BoldProps, MediumProps } from '../types';

export const BodyL = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? bodyLBold : bodyL)}
    ${({ medium }) => (medium ? bodyLMedium : bodyL)}
`;
export const BodyM = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? bodyMBold : bodyM)}
    ${({ medium }) => (medium ? bodyMMedium : bodyM)}
`;
export const BodyS = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? bodySBold : bodyS)}
    ${({ medium }) => (medium ? bodySMedium : bodyS)}
`;
export const BodyXS = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? bodyXSBold : bodyXS)}
    ${({ medium }) => (medium ? bodyXSMedium : bodyXS)}
`;
export const BodyXXS = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? bodyXXSBold : bodyXXS)}
    ${({ medium }) => (medium ? bodyXXSMedium : bodyXXS)}
`;
