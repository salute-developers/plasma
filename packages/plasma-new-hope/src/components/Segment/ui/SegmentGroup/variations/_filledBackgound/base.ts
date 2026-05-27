import { css } from 'styled-components';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    position: relative;

    &.${classes.segmentGroupFilledBackground} {
        background-color: var(${tokens.groupFilledBackgroundColor});
        padding: 0.125rem;
    }
`;
