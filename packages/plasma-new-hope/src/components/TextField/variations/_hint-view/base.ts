import { css } from '@linaria/core';

import { tokens } from '../../TextField.tokens';
import { tooltipTokens } from '../../../Tooltip';
import { Hint } from '../../TextField.styles';

export const base = css`
    ${Hint} {
        ${tooltipTokens.backgroundColor}: var(${tokens.tooltipBackgroundColor});
        ${tooltipTokens.boxShadow}: var(${tokens.tooltipBoxShadow});
        ${tooltipTokens.color}: var(${tokens.tooltipColor});
    }
`;
