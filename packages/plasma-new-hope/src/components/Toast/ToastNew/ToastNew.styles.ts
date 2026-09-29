import type { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { component, mergeConfig } from 'src/engines';

import { buttonConfig } from '../../Button';

import { tokens } from './ToastNew.tokens';

const mergedButtonConfig = mergeConfig(buttonConfig);
const Button = component(mergedButtonConfig);

export const base = css``;

const toastAnimationStyles = `
    @keyframes toast-enter-top {
        0% {
            transform: translate3d(0, -200%, 0) scale(0.6);
            opacity: 0.5;
        }

        100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
        }
    }

    @keyframes toast-enter-bottom {
        0% {
            transform: translate3d(0, 200%, 0) scale(0.6);
            opacity: 0.5;
        }

        100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 1;
        }
    }

    @keyframes toast-exit-top {
        0% {
            transform: translate3d(0, 0, -1px) scale(1);
            opacity: 1;
        }

        100% {
            transform: translate3d(0, -150%, -1px) scale(0.6);
            opacity: 0;
        }
    }

    @keyframes toast-exit-bottom {
        0% {
            transform: translate3d(0, 0, -1px) scale(1);
            opacity: 1;
        }

        100% {
            transform: translate3d(0, 150%, -1px) scale(0.6);
            opacity: 0;
        }
    }

    @keyframes toast-fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes toast-fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    &[data-visible='true'][data-position^='top'] {
        animation: toast-enter-top 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
    }

    &[data-visible='true'][data-position^='bottom'] {
        animation: toast-enter-bottom 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
    }

    &[data-visible='false'][data-position^='top'] {
        animation: toast-exit-top 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;
    }

    &[data-visible='false'][data-position^='bottom'] {
        animation: toast-exit-bottom 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;
    }

    &[data-custom-animation='true'][data-visible] {
        animation: var(--plasma-private-toast-animation);
    }

    @media (prefers-reduced-motion: reduce) {
        &[data-visible='true'][data-position] {
            animation: toast-fade-in 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards;
        }

        &[data-visible='false'][data-position] {
            animation: toast-fade-out 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards;
        }
    }
`;

export const ToastAnimationWrapper = styled.div`
    ${toastAnimationStyles}

    display: inline-flex;
    width: fit-content;
    max-width: none;
    align-items: initial;
`;

export const Toast = styled.div<{
    width: CSSProperties['width'];
    textColor: CSSProperties['color'];
}>`
    ${toastAnimationStyles}

    display: flex;
    align-items: center;
    background: var(${tokens.background});
    color: ${({ textColor }) => textColor || `var(${tokens.color})`};
    padding: var(${tokens.padding});
    border-radius: var(${tokens.borderRadius});
    max-width: var(${tokens.maxWidth});
    width: ${({ width }) => width || 'auto'};
    box-shadow: var(${tokens.boxShadow});

    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
`;

export const CloseIconWrapper = styled(Button)`
    height: var(${tokens.closeIconButtonSize});
    margin: var(${tokens.closeIconMargin});
    color: var(${tokens.closeIconColor});

    :hover {
        color: var(${tokens.closeIconColorOnHover});
    }
`;

export const StyledContentLeft = styled.div`
    margin: var(${tokens.contentLeftMargin});
    color: var(${tokens.contentLeftColor});
    line-height: 0;
`;
