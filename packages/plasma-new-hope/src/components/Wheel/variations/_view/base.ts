import { css } from 'styled-components';

import { classes, tokens } from '../../Wheel.tokens';

export const base = css`
    position: relative;
    isolation: isolate;

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 0;
        right: 0;
        height: calc(var(${tokens.lineHeight}) + var(${tokens.itemGap}));
        border-radius: var(${tokens.selectionBorderRadius}, 0);
        background-color: var(${tokens.selectionBackgroundColor}, transparent);
        transform: translateY(-50%);
        pointer-events: none;
    }

    &.${classes.hasDescription}::before {
        height: calc(
            var(${tokens.lineHeight}) + var(${tokens.itemGap}) + var(${tokens.descriptionGap}) +
                var(${tokens.descriptionLineHeight})
        );
    }
`;
