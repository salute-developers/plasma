import styled from 'styled-components';

import { button1, button2 } from '../../utils/tokens';
import { applyHyphens, applySpacing, BreakWordProps, SpacingProps } from '../../utils/mixins';

export const Button1 = styled.div<SpacingProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${button1}
`;
export const Button2 = styled.div<SpacingProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${button2}
`;
