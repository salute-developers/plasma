import styled from 'styled-components';

import { applyHyphens, applySpacing } from '../mixins';
import type { BreakWordProps, SpacingProps } from '../mixins';
import {
    textL,
    textLBold,
    textLMedium,
    textM,
    textMBold,
    textMMedium,
    textS,
    textSBold,
    textSMedium,
    textXS,
    textXSBold,
    textXSMedium,
} from '../tokens';
import type { BoldProps, MediumProps } from '../types';

export const TextL = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? textLBold : textL)}
    ${({ medium }) => (medium ? textLMedium : textL)}
`;
export const TextM = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? textMBold : textM)}
    ${({ medium }) => (medium ? textMMedium : textM)}
`;
export const TextS = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? textSBold : textS)}
    ${({ medium }) => (medium ? textSMedium : textS)}
`;
export const TextXS = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold }) => (bold ? textXSBold : textXS)}
    ${({ medium }) => (medium ? textXSMedium : textXS)}
`;
