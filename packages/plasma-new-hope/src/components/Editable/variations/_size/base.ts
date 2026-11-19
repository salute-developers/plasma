import { css } from 'styled-components';

import { classes, tokens } from '../../Editable.tokens';
import { EditButton } from '../../Editable.styles';

export const base = css`
    ${tokens.editButtonPaddingLeft}: var(${tokens.iconGap});
    ${tokens.textBoxPaddingRight}: var(${tokens.iconGap});
    ${tokens.textBoxMarginRight}: calc(var(${tokens.iconGap}) * -1);

    ${EditButton} {
        padding-left: var(${tokens.editButtonPaddingLeft});
    }

    .${classes.textClip} {
        margin-right: var(${tokens.textBoxMarginRight});
        padding-right: var(${tokens.textBoxPaddingRight});
    }
`;
