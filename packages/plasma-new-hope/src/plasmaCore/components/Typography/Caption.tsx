import styled from 'styled-components';

import { caption } from '../../utils/tokens';
import { applyHyphens, applySpacing, BreakWordProps, SpacingProps } from '../../utils/mixins';

export const Caption = styled.div<SpacingProps & BreakWordProps>`
    ${applyHyphens}
    ${applySpacing}
    ${caption}
`;
