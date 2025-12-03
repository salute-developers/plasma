import { css } from '@linaria/core';

import { tokens } from '../../File.tokens';
import { StyledCell } from '../../ui/Cell/Cell.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.fileDisabledOpacity});
        cursor: not-allowed;

        ${StyledCell} {
            pointer-events: none;
        }
    }
`;
