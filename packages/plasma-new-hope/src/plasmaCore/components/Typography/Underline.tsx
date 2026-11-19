import styled from 'styled-components';

import { underline } from '../../utils/tokens';
import { applyHyphens, applySpacing, BreakWordProps, SpacingProps } from '../../utils/mixins';

export const Underline = styled.div<SpacingProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${underline}

    text-transform: uppercase;
`;
