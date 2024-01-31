import { css } from '@linaria/core';

import { classes, tokens as avatarTokens } from '../Avatar/Avatar.tokens';

export const base = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & .${classes.avatarItem} {
        margin-left: calc(var(${avatarTokens.avatarSize}) * -0.2);
        mask-repeat: no-repeat;
        mask: radial-gradient(
            circle at calc(var(${avatarTokens.avatarSize}) * 1.3) center,
            #0000 calc(var(${avatarTokens.avatarSize}) * 0.58),
            #000 0
        );

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            -webkit-mask-image: none;
        }

        &:hover, &:focus-visible {
            position: relative;
            mask: none;
            cursor: pointer;

            & + .${classes.avatarItem} {
                mask: radial-gradient(
                    circle at calc(var(${avatarTokens.avatarSize}) * 1.3) center,
                    #0000 calc(var(${avatarTokens.avatarSize}) * 0.58),
                    #000 0
                ),
                radial-gradient(
                    circle at calc(var(${avatarTokens.avatarSize}) * -0.3) center,
                    #0000 calc(var(${avatarTokens.avatarSize}) * 0.58),
                    #000 0
                );
                mask-composite: intersect;

                &:last-child {
                    mask: radial-gradient(
                        circle at calc(var(${avatarTokens.avatarSize}) * -0.3) center,
                        #0000 calc(var(${avatarTokens.avatarSize}) * 0.58),
                        #000 0
                    );
                }
            }
        }
    }
}
`;
