import { css } from '@linaria/core';

import { tokens } from '../../Range.tokens';
import { StyledContentLeft, StyledContentRight } from '../../Range.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        ${StyledContentLeft}, ${StyledContentRight} {
            color: var(${tokens.contentSlotColor});

            &:hover,
            &:active {
                color: var(${tokens.contentSlotColor});
            }
        }

        ${StyledContentRight} {
            pointer-events: none;
        }
    }
`;
