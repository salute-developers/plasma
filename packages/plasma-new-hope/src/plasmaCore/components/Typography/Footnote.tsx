import styled from 'styled-components';

import { footnote1, footnote2 } from '../../utils/tokens';
import { applyHyphens, applySpacing, BreakWordProps, SpacingProps } from '../../utils/mixins';

export const Footnote1 = styled.div<SpacingProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${footnote1}
`;
export const Footnote2 = styled.div<SpacingProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${footnote2}
`;
