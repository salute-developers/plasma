import { css } from 'styled-components';

import { StyledVisibleLine } from '../../LineSkeleton.styles';
import { tokens } from '../../../tokens';

export const base = css`
    height: var(${tokens.lineHeight});

    & ${StyledVisibleLine} {
        height: var(${tokens.visibleLineHeight});
    }
`;
