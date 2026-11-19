import { css } from 'styled-components';

import { privateTokens, tokens } from '../../Chip.tokens';
import { StyledContentClear } from '../../Chip.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            scale: none;

            color: var(${privateTokens.customColor}, var(${tokens.color}));
            background-color: var(${privateTokens.customBackground}, var(${tokens.background}));
        }

        ${StyledContentClear} {
            color: var(${tokens.closeIconColor});

            &:hover {
                color: var(${tokens.closeIconColor});
            }
        }
    }
`;
