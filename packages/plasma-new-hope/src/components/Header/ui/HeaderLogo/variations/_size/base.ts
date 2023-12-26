import { css } from '@linaria/core';

import { classes, tokens } from '../../../../Header.tokens';

export const base = css`
    .${String(classes.headerLogoImage)} {
        --plasma_private-header-size: var(${tokens.headerHeight});

        width: var(--plasma_private-header-size);
        height: var(--plasma_private-header-size);
        flex: 0 0 var(--plasma_private-header-size);

        margin-right: var(${tokens.headerLogoMarginRight});
    }
`;
