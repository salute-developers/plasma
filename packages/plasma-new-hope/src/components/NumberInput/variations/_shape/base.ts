import { css } from '@linaria/core';

import { tokens } from '../../NumberInput.tokens';
import { iconButtonTokens } from '../../../IconButton';
import { StyledIconButton } from '../../ui/ActionButton/ActionButton.styles';

export const base = css`
    ${StyledIconButton} {
        ${iconButtonTokens.iconButtonRadius}: var(${tokens.iconButtonRadius});
    }
`;
