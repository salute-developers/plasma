import { css } from 'styled-components';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    &.${classes.segmentPilled} {
        border-radius: var(${tokens.groupPilledBorderRadius});
    }
`;
