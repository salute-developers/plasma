import styled from 'styled-components';

import { applyHyphens, applySpacing } from '../mixins';
import type { BreakWordProps, SpacingProps } from '../mixins';
import {
    h1,
    h1Bold,
    h1Medium,
    h2,
    h2Bold,
    h2Medium,
    h3,
    h3Bold,
    h3Medium,
    h4,
    h4Bold,
    h4Medium,
    h5,
    h5Bold,
    h5Medium,
} from '../tokens';
import type { BoldProps, MediumProps } from '../types';

export const H1 = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h1Bold : h1)}
    ${({ medium = true }) => (medium ? h1Medium : h1)}
`;
export const H2 = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h2Bold : h2)}
    ${({ medium = true }) => (medium ? h2Medium : h2)}
`;
export const H3 = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h3Bold : h3)}
    ${({ medium = true }) => (medium ? h3Medium : h3)}
`;
export const H4 = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h4Bold : h4)}
    ${({ medium = true }) => (medium ? h4Medium : h4)}
`;
export const H5 = styled.div<SpacingProps & (BoldProps | MediumProps) & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${({ bold = true }) => (bold ? h5Bold : h5)}
    ${({ medium = true }) => (medium ? h5Medium : h5)}
`;
