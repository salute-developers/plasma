import { css } from '@linaria/core';

import { classes, tokens } from '../../Editable.tokens';
import { EditButton } from '../../Editable.styles';

export const base = css`
    ${EditButton} {
        padding-left: var(${tokens.editButtonPaddingLeft});
    }

    .${classes.editableTextBox} {
        margin-right: var(${tokens.textBoxMarginRight});
        padding-right: var(${tokens.textBoxPaddingRight});
    }
`;
