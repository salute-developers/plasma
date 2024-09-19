import { css } from '@linaria/core';

import { tokens } from '../../Editable.tokens';
import { EditButton } from '../../Editable.styles';

export const base = css`
    ${EditButton} {
        background: var(
            --plasma-editable-icon-background,
            linear-gradient(270deg, var(${tokens.editButtonBackground}) 70%, rgba(0, 0, 0, 0) 120%)
        );
        color: var(${tokens.editButtonColor});
    }

    &:hover > ${EditButton} {
        color: var(${tokens.editButtonColorHover});
    }
`;
