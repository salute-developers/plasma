import styled from 'styled-components';

import { applyHyphens, applySpacing } from '../mixins';
import type { BreakWordProps, SpacingProps } from '../mixins';
import { h1, h1Bold, h2, h2Bold, h3, h3Bold, h4, h4Bold, h5, h5Bold } from '../tokens';
import type { BoldProps } from '../types';

export const H1 = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h1Bold : h1)}
`;
export const H2 = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h2Bold : h2)}
`;
export const H3 = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h3Bold : h3)}
`;
export const H4 = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h4Bold : h4)}
`;
export const H5 = styled.div<SpacingProps & BoldProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h5Bold : h5)}
`;
