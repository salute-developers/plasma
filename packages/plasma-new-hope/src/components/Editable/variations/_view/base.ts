import { css } from 'styled-components';

import { tokens } from '../../Editable.tokens';
import { EditButton } from '../../Editable.styles';

export const base = css`
    ${EditButton} {
        background: var(
            --plasma-editable-icon-background,
            linear-gradient(
                to left,
                var(${tokens.editButtonBackground}) calc(100% - var(${tokens.iconGap})),
                transparent
            )
        );
        color: var(${tokens.editButtonColor});
    }

    &:hover > ${EditButton} {
        color: var(${tokens.editButtonColorHover});
    }
`;
