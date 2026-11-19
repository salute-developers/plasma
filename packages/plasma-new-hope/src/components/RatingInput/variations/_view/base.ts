import { css } from 'styled-components';

import { EmptyIcon, Icon, LimitLabel, Score } from '../../RatingInput.styles';
import { tokens } from '../../RatingInput.tokens';

export const base = css`
    ${Score} {
        color: var(${tokens.color});
    }

    ${Icon} {
        color: var(${tokens.iconColor});
        fill: var(${tokens.iconColor});
    }

    ${EmptyIcon} {
        color: var(${tokens.outlineIconColor});
        fill: var(${tokens.outlineIconColor});
    }

    ${LimitLabel} {
        color: var(${tokens.limitLabelColor});
    }
`;
