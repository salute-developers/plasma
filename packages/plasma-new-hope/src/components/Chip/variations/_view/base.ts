import { css } from 'styled-components';

import { privateTokens, tokens } from '../../Chip.tokens';

export const base = css`
    color: var(${privateTokens.customColor}, var(${tokens.color}));
    background-color: var(${privateTokens.customBackground}, var(${tokens.background}));

    @media (hover: hover) and (pointer: fine) {
        :hover {
            color: var(${privateTokens.customColor}, var(${tokens.colorHover}));
            background-color: var(${privateTokens.customBackgroundHover}, var(${tokens.backgroundHover}));
        }
    }

    :active {
        color: var(${privateTokens.customColor}, var(${tokens.colorActive}));
        background-color: var(${privateTokens.customBackgroundActive}, var(${tokens.backgroundActive}));
    }
`;
