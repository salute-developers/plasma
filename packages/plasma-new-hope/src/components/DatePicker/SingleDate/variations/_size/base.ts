import { css } from '@linaria/core';

import { tokens } from '../../../DatePicker.tokens';
import { LeftHelper } from '../../SingleDate.styles';

export const base = css`
    ${LeftHelper} {
        margin: var(${tokens.leftHelperOffset});

        font-family: var(${tokens.leftHelperFontFamily});
        font-size: var(${tokens.leftHelperFontSize});
        font-style: var(${tokens.leftHelperFontStyle});
        font-weight: var(${tokens.leftHelperFontWeight});
        letter-spacing: var(${tokens.leftHelperLetterSpacing});
        line-height: var(${tokens.leftHelperLineHeight});
    }
`;
