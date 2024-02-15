import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { Overlay } from '../Overlay';

import { Button, TOAST_Z_INDEX } from './utils';
import { classes, tokens } from './Toast.tokens';

export const base = css`
    display: inline-flex;
    align-items: center;

    flex-shrink: 0;

    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const StyledRoot = styled.div<{ position: string; isVisible: boolean; offset?: number }>`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: ${TOAST_Z_INDEX};

    display: flex;
    width: 0;

    top: ${({ position, offset = 0 }) => (position === 'top' ? `${Number(offset) + 5}rem` : 'unset')};
    bottom: ${({ position, offset = 0 }) => (position === 'bottom' ? `${Number(offset) + 5}rem` : 'unset')};

    &.${String(classes.toastShowed)} {
        animation: 0.3s showToastAnimation ease-out forwards;
    }

    &.${String(classes.toastHidden)} {
        animation: 0.3s hideToastAnimation ease-out forwards;
    }

    @keyframes showToastAnimation {
        0% {
            transform: ${({ position }) => `translate(-50%, ${position === 'top' ? '-' : ''}5rem)`};
            opacity: 0;
        }

        80% {
            transform: translate(-50%, 0);
            opacity: 0.7;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes hideToastAnimation {
        0% {
            opacity: 1;
        }

        20% {
            transform: translate(-50%, 0);
            opacity: 0.7;
        }

        100% {
            transform: ${({ position }) => `translate(-50%, ${position === 'top' ? '-' : ''}5rem)`};
            opacity: 0;
        }
    }
`;

export const CloseIconWrapper = styled(Button)`
    width: 1rem;
    height: 1rem;
    --plasma_private-close-icon-margin: var(${tokens.closeIconMargin});
    margin: var(--plasma_private-close-icon-margin);

    color: var(${tokens.closeIconColor});

    :hover {
        color: var(${tokens.closeIconColorOnHover});
    }
`;

export const StyledOverlay = styled(Overlay)`
    &&.${String(classes.toastFadeShowed)} {
        animation: 0.3s showFadeAnimation ease-out forwards;
    }

    &&.${String(classes.toastFadeHidden)} {
        animation: 0.3s hideFadeAnimation ease-out forwards;
    }

    @keyframes showFadeAnimation {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes hideFadeAnimation {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

export const StyledContentLeft = styled.div`
    display: flex;
    --plasma_private-left-content-margin: var(${tokens.leftContentMargin});
    margin: var(--plasma_private-left-content-margin);
`;

export const StyledContent = styled.div``;
