import { css } from 'styled-components';
import { applyHover } from 'src/mixins';

import { classes, tokens } from '../../Dropzone.tokens';
import { Description, DropzoneHandlerOverlay, ContentWrapper } from '../../Dropzone.styles';

const hoverLike = `
    background: var(${tokens.backgroundHover});
    outline: none;
    border-color: var(${tokens.borderColorHover});
`;

export const base = css`
    background: var(${tokens.background});
    border: 0.063rem dashed var(${tokens.borderColor});

    &:not(.${classes.active}):focus-within {
        ${hoverLike}
    }

    ${applyHover(`
        &:not(.${classes.active}):hover {
            ${hoverLike}
        }
    `)}

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
