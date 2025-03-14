import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from './Card.tokens';

export const CardContent = styled.div<{
    aspectRatio?: string | number;
    orientation?: 'vertical' | 'horizontal';
}>`
    position: relative;

    display: flex;
    flex: 1;
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
    border-radius: var(${tokens.borderRadius});
    border-width: var(${tokens.borderWidth});

    z-index: 0;

    &.selected {
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

    :not(&.backgroundSolid):not(&.backgroundColor) {
        ${CardContent} {
            border-radius: var(${tokens.borderRadius});
        }
    }

    &.backgroundSolid {
        padding: var(${tokens.outlineWidth});
        background: var(--surface-solid-card);

        &.selected {
            :after {
                inset: calc(-1 * var(${tokens.borderWidth}));
            }
        }
    }

    &.backgroundColor {
        padding: var(${tokens.outlineWidth});
        background: var(--surface-transparent-accent);

        &.selected {
            position: relative;

            :after {
                inset: calc(-1 * var(${tokens.borderWidth}));
            }
        }
    }

    &.horizontal {
        ${CardContent} {
            align-items: center;
            justify-content: center;
        }
    }

    &.vertical {
        ${CardContent} {
            align-items: center;
            justify-content: center;
        }

        flex-direction: column;
    }
`;
