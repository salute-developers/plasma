import { css } from 'styled-components';

import { tokens } from '../../Modal.tokens';
import { ModalCloseButton, ModalSurface, ModalTitle } from '../../Modal.styles';

export const base = css`
    ${ModalSurface} {
        background: var(${tokens.dialogModalBackground});
        color: var(${tokens.dialogModalColor});
        box-shadow: var(${tokens.dialogModalBoxShadow});
    }

    ${ModalCloseButton} {
        color: var(${tokens.dialogModalCloseButtonColor});
        background: var(${tokens.dialogModalCloseButtonBackground});

        &:hover {
            color: var(${tokens.dialogModalCloseButtonHoverColor});
            background: var(${tokens.dialogModalCloseButtonHoverBackground});
        }

        &:active {
            color: var(${tokens.dialogModalCloseButtonActiveColor});
            background: var(${tokens.dialogModalCloseButtonActiveBackground});
        }
    }

    ${ModalTitle} {
        color: var(${tokens.dialogModalTitleColor});
    }
`;
