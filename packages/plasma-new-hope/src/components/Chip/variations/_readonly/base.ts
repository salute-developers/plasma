import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';
import { StyledContentClear } from '../../Chip.styles';

export const base = css`
    &[readonly] {
        color: var(${tokens.colorReadOnly});
        background-color: var(${tokens.backgroundReadOnly});

        :hover,
        :active {
            scale: none;
            cursor: default;

            color: var(${tokens.colorReadOnlyHover});
            background-color: var(${tokens.backgroundReadOnlyHover});
        }

        ${StyledContentClear} {
            color: var(${tokens.closeIconColorReadonly});

            &:hover {
                color: var(${tokens.closeIconColorReadonly});
            }
        }
    }
`;
