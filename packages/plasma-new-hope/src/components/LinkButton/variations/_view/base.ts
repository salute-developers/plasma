import { css } from 'styled-components';

import { LinkButtonText, StyledContentLeft, StyledContentRight } from '../../LinkButton.styles';
import { tokens } from '../../LinkButton.tokens';

export const base = css`
    background: var(${tokens.linkButtonBackgroundColor});

    :not([disabled]):hover {
        ${LinkButtonText} {
            color: var(${tokens.linkButtonTextColorHover});
        }

        ${StyledContentLeft},
        ${StyledContentRight} {
            color: var(${tokens.linkButtonIconColorHover});
        }
    }

    :not([disabled]):active {
        ${LinkButtonText} {
            color: var(${tokens.linkButtonTextColorActive});
        }

        ${StyledContentLeft},
        ${StyledContentRight} {
            color: var(${tokens.linkButtonIconColorActive});
        }
    }
`;
