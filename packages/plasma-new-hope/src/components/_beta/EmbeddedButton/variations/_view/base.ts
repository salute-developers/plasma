import { css } from 'styled-components';

import { tokens } from '../../EmbeddedButton.tokens';
import { IconContainer } from '../../EmbeddedButton.styles';

export const base = css`
    background: var(${tokens.backgroundColor});
    box-shadow: inset 0 0 0 0.063rem var(${tokens.borderColor}, inset 0 0 0 0 transparent);

    ${IconContainer} {
        color: var(${tokens.color});
    }

    @media (hover: hover) and (pointer: fine) {
        :hover {
            background: var(${tokens.backgroundColorHover}, var(${tokens.backgroundColor}));
            box-shadow: inset 0 0 0 0.063rem var(${tokens.borderColorHover}, inset 0 0 0 0 transparent);

            ${IconContainer} {
                color: var(${tokens.colorHover});
            }
        }
    }

    :active {
        background: var(${tokens.backgroundColorActive}, var(${tokens.backgroundColor}));
        box-shadow: inset 0 0 0 0.063rem var(${tokens.borderColorActive}, inset 0 0 0 0 transparent);

        ${IconContainer} {
            color: var(${tokens.colorActive});
        }
    }
`;
