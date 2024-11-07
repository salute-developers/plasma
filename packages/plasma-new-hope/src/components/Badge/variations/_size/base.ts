import { css } from '@linaria/core';

import { classes, tokens } from '../../Badge.tokens';
import { StyledContentLeft } from '../../Badge.styles';

export const base = css`
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});

    border-radius: var(${tokens.borderRadius});

    height: var(${tokens.height});

    padding: var(${tokens.padding});

    &.${classes.iconOnly} {
        padding: var(${tokens.paddingIconOnly});

        ${StyledContentLeft} {
            margin: 0;
        }
    }
`;
