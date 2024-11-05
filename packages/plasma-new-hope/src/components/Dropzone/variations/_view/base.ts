import { css } from '@linaria/core';

import { classes, tokens } from '../../Dropzone.tokens';
import { Description, TitleWrapper } from '../../Dropzone.styles';

export const base = css`
    background: var(${tokens.background});
    border: var(${tokens.border});

    &:not(.${classes.active}):hover,
    &:not(.${classes.active}):focus-within {
        border-color: var(${tokens.borderColorHover});
        outline: none;
    }

    &.${classes.active} {
        border-color: var(${tokens.borderColorActive});

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(${tokens.overlayColorActive});
        }
    }

    ${TitleWrapper} {
        color: var(${tokens.titleColor});
    }

    ${Description} {
        color: var(${tokens.descriptionColor});
    }
`;
