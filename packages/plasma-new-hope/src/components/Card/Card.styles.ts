import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { classes, tokens } from './Card.tokens';

export const CardContent = styled.div<{
    aspectRatio?: string | number;
    orientation?: 'vertical' | 'horizontal';
}>`
    position: relative;

    display: flex;
    border-radius: var(${tokens.contentBorderRadius});
    overflow: hidden;

    aspect-ratio: ${({ aspectRatio }) => aspectRatio ?? ''};
    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
`;

export const CardInnerContent = styled.div<{
    orientation?: 'vertical' | 'horizontal';
}>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    display: flex;

    flex-direction: ${({ orientation }) => (orientation === 'vertical' ? 'column' : 'row')};
`;

export const base = css`
    position: relative;
    display: inline-flex;

    box-sizing: border-box;
    z-index: 0;

    &.${classes.selected} {
        position: relative;

        :after {
            content: '';
            display: block;
            position: absolute;
            inset: calc(-1 * var(--plasma-card-border-width));
            border: var(${tokens.borderWidth}) solid var(--outline-accent);
            border-radius: var(${tokens.borderRadius});
            z-index: -1;
        }
    }

    :not(&.${classes.backgroundSolid}) {
        ${CardContent} {
            border-radius: var(${tokens.borderRadius});
        }
    }

    &.${classes.backgroundSolid} {
        padding: var(${tokens.outlineWidth});

        &.${classes.selected} {
            :after {
                inset: calc(-1 * var(${tokens.borderWidth}));
            }
        }
    }

    &.${classes.horizontal} {
        ${CardContent} {
            align-items: center;
            justify-content: center;
        }
    }

    &.${classes.vertical} {
        ${CardContent} {
            align-items: center;
            justify-content: center;
        }

        flex-direction: column;
    }
`;
