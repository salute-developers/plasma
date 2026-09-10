import { css } from 'styled-components';

import { tokens } from '../../Modal.tokens';
import { ModalActions, ModalCloseButton, ModalContent, ModalImage, ModalSurface, ModalTitle } from '../../Modal.styles';

export const base = css`
    ${ModalSurface} {
        width: var(${tokens.dialogModalWidth});
        padding: var(${tokens.dialogModalPadding});
        border-radius: var(${tokens.dialogModalBorderRadius});
    }

    ${ModalCloseButton} {
        width: var(${tokens.dialogModalCloseButtonSize});
        height: var(${tokens.dialogModalCloseButtonSize});
        top: var(${tokens.dialogModalCloseButtonTop});
        right: var(${tokens.dialogModalCloseButtonRight});
        border-radius: var(${tokens.dialogModalCloseButtonRadius});
    }

    ${ModalImage} {
        margin-bottom: var(${tokens.dialogModalImageMarginBottom});
        border-radius: var(${tokens.dialogModalImageBorderRadius});
    }

    ${ModalContent} {
        padding: var(${tokens.dialogModalInnerPadding});
        gap: var(${tokens.dialogModalInnerGap});
    }

    ${ModalTitle} {
        font-family: var(${tokens.dialogModalTitleFontFamily});
        font-size: var(${tokens.dialogModalTitleFontSize});
        font-style: var(${tokens.dialogModalTitleFontStyle});
        font-weight: var(${tokens.dialogModalTitleFontWeight});
        letter-spacing: var(${tokens.dialogModalTitleLetterSpacing});
        line-height: var(${tokens.dialogModalTitleLineHeight});
    }

    ${ModalActions} {
        margin-top: var(${tokens.dialogModalActionsMarginTop});
    }
`;
