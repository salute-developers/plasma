import { css } from '@linaria/core';

import { tokens } from '../../File.tokens';

export const base = css`
    padding: var(${tokens.filePadding});
    padding-left: var(${tokens.filePaddingLeft}, var(${tokens.filePadding}));
    padding-right: var(${tokens.filePaddingRight}, var(${tokens.filePadding}));
    border-radius: var(${tokens.fileRadius});
`;
