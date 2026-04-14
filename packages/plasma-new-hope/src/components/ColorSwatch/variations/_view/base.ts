import { css } from '@linaria/core';

import { tokens } from '../../ColorSwatch.tokens';

export const base = css`
    --plasma-cs-size: var(${tokens.colorSwatchSize}, '1.75rem');
    --plasma-cs-radius: var(${tokens.colorSwatchRadius});
    --plasma-alpha-overlay-color: var(${tokens.alphaOverlayColor});
    --plasma-alpha-overlay-bg: var(${tokens.alphaOverlayBackground});
`;
