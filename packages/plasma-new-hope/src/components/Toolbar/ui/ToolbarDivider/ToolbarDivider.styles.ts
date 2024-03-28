import { css } from '@linaria/core';

import { tokens } from '../../Toolbar.tokens';
import { dividerTokens } from '../../../Divider';

// NOTE: Необходимое переопределение токенов из компонента Divider
export const mappingOverride = css`
    align-self: center;
    ${dividerTokens.background}: var(${tokens.dividerColor});
    ${dividerTokens.borderRadius}: var(${tokens.dividerBorderRadius});
`;

export const base = mappingOverride;
