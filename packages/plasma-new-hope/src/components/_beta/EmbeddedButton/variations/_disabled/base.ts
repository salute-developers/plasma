import { css } from 'styled-components';

import { tokens } from '../../EmbeddedButton.tokens';
import { IconContainer } from '../../EmbeddedButton.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        @media (hover: hover) and (pointer: fine) {
            :hover,
            :active {
                background: var(${tokens.backgroundColor});
                box-shadow: inset 0 0 0 0.063rem var(${tokens.borderColor}, inset 0 0 0 0 transparent);

                ${IconContainer} {
                    color: var(${tokens.color});
                }
            }
        }
    }
`;
