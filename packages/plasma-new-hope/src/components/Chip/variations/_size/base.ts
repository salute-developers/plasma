import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';

export const base = css`
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});

    border-radius: var(${tokens.borderRadius});

    width: var(${tokens.width});
    height: var(${tokens.height});

    padding-top: var(${tokens.paddingTop});
    padding-right: var(${tokens.paddingRight});
    padding-bottom: var(${tokens.paddingBottom});
    padding-left: var(${tokens.paddingLeft});

    :hover {
        scale: var(${tokens.scaleHover});
    }

    :active {
        scale: var(${tokens.scaleActive});
    }
`;
