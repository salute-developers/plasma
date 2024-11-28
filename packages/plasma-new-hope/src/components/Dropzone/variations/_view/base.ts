import { css } from '@linaria/core';

import { classes, tokens } from '../../Dropzone.tokens';
import { Description, DropzoneHandlerOverlay, ContentWrapper } from '../../Dropzone.styles';

export const base = css`
    background: var(${tokens.background});
    border: 0.063rem dashed var(${tokens.borderColor});

    &:not(.${classes.active}):hover,
    &:not(.${classes.active}):focus-within {
        background: var(${tokens.backgroundHover});
        outline: none;
        border-color: var(${tokens.borderColorHover});
    }

    &.${classes.active} {
        border-color: var(${tokens.borderColorActive});
        background: var(${tokens.backgroundHover});

        ${DropzoneHandlerOverlay} {
            background: var(${tokens.overlayColorActive});
        }
    }

    ${ContentWrapper} {
        color: var(${tokens.titleColor});
    }

    ${Description} {
        color: var(${tokens.descriptionColor});
    }
`;
