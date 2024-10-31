import { css } from '@linaria/core';

import { tooltipTokens } from '../../../Tooltip';
import { Hint } from '../../TextArea.styles';
import { tokens } from '../../TextArea.tokens';

export const base = css`
    ${Hint} {
        ${tooltipTokens.backgroundColor}: var(${tokens.tooltipBackgroundColor});
        ${tooltipTokens.boxShadow}: var(${tokens.tooltipBoxShadow});
        ${tooltipTokens.color}: var(${tokens.tooltipColor});
    }
`;
