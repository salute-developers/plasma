import { styled } from '@linaria/react';

import { classes, tokens } from '../../Carousel.tokens';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.75rem;

    --duration: 0.3s;
    --half-duration: 0.15s;
`;

export const TransitionWrapper = styled.div`
    position: relative;
    display: flex;
    transition: transform 0s ease;

    &.${classes.animating} {
        transition: transform var(--duration) ease;
    }

    & .${classes.dot} {
        width: 0.5rem;
        height: 0.5rem;
        margin: 0 0.25rem;
        cursor: pointer;
        background-color: var(${tokens.paginationDotBackground});
        border-radius: 100%;

        &.${classes.active} {
            background-color: var(${tokens.paginationDotActiveBackground});
        }

        @keyframes fadeOut {
            from {
                transform: scale(0.75);
                opacity: 1;
            }
            to {
                transform: scale(0);
                opacity: 0;
            }
        }

        &.${classes.animateOut} {
            animation: fadeOut var(--half-duration) ease forwards;
        }

        @keyframes shrinking {
            from {
                transform: scale(1);
            }
            to {
                transform: scale(0.75);
            }
        }

        &.${classes.shrinking} {
            animation: shrinking var(--half-duration) var(--half-duration) ease forwards;
        }
    }
`;

export const DotWrapper = styled.div`
    display: flex;

    &.${classes.availableDotsLeft} {
        .${classes.dot}:not(.${classes.temporaryNatural}):first-child {
            transform: scale(0.75);
        }
    }

    &.${classes.availableDotsRight} {
        .${classes.dot}:not(.${classes.temporaryNatural}):last-child {
            transform: scale(0.75);
        }
    }

    &.${classes.animating} .${classes.dot} {
        transition: background-color var(--duration) ease;
    }
`;

export const LeftAnimationWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 100%;
    bottom: 0;
    display: flex;

    & .${classes.dot} {
        transition: transform var(--duration) ease;

        @keyframes fadeIn {
            from {
                transform: scale(0);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        &.${classes.animateIn} {
            animation: fadeIn var(--half-duration) ease forwards;
        }

        &:first-child {
            @keyframes fadeInFirst {
                from {
                    transform: scale(0);
                    opacity: 0;
                }
                to {
                    transform: scale(0.75);
                    opacity: 1;
                }
            }

            &.${classes.animateIn} {
                animation: fadeInFirst var(--half-duration) ease forwards;
            }
        }
    }
`;

export const RightAnimationWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 100%;
    bottom: 0;
    display: flex;

    & .${classes.dot} {
        transition: transform var(--duration) ease;

        @keyframes fadeIn {
            from {
                transform: scale(0);
                opacity: 0;
            }
            to {
                transform: scale(1);
                opacity: 1;
            }
        }

        &.${classes.animateIn} {
            animation: fadeIn var(--half-duration) ease forwards;
        }

        &:last-child {
            @keyframes fadeInLast {
                from {
                    transform: scale(0);
                    opacity: 0;
                }
                to {
                    transform: scale(0.75);
                    opacity: 1;
                }
            }

            &.${classes.animateIn} {
                animation: fadeInLast var(--half-duration) ease forwards;
            }
        }
    }
`;
