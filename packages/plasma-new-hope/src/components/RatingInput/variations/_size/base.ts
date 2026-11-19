import { css } from 'styled-components';

import { LimitLabel, Score } from '../../RatingInput.styles';
import { tokens } from '../../RatingInput.tokens';

export const base = css`
    ${Score} {
        font-family: var(${tokens.fontFamily});
        font-size: var(${tokens.fontSize});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
    }

    ${LimitLabel} {
        font-family: var(${tokens.limitLabelFontFamily});
        font-size: var(${tokens.limitLabelFontSize});
        font-style: var(${tokens.limitLabelFontStyle});
        font-weight: var(${tokens.limitLabelFontWeight});
        letter-spacing: var(${tokens.limitLabelLetterSpacing});
        line-height: var(${tokens.limitLabelLineHeight});
    }
`;
