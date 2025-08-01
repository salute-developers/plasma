import { css } from '@linaria/core';
import { tooltipTokens } from 'src/components/Tooltip';

import { tokens } from '../../InformationWrapper.tokens';
import { Hint } from '../../InformationWrapper.styles';

export const base = css`
    ${Hint} {
        ${tooltipTokens.backgroundColor}: var(${tokens.tooltipBackgroundColor});
        ${tooltipTokens.boxShadow}: var(${tokens.tooltipBoxShadow});
        ${tooltipTokens.color}: var(${tokens.tooltipColor});
    }
`;
