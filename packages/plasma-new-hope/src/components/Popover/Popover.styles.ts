import { styled } from '@linaria/react';

import { DEFAULT_Z_INDEX } from '../Popup/utils';

import { classes, tokens } from './Popover.tokens';
import { PopoverProps } from './Popover.types';

export const StyledRoot = styled.div`
    display: inline-flex;
    box-sizing: border-box;
    position: relative;
`;

export const StyledWrapper = styled.div`
    display: inline-block;

    &.${classes.targetAsRef} {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        ${StyledRoot} {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
`;

export const StyledArrow = styled.div`
    width: var(${tokens.arrowMaskWidth});
    height: var(${tokens.arrowMaskHeight});

    &::before {
        position: absolute;
        width: var(${tokens.arrowMaskWidth});
        height: var(${tokens.arrowMaskHeight});
        mask-image: var(${tokens.arrowMaskImage});
        background: var(${tokens.arrowBackground});

        content: '';
        transform: rotate(0deg);
    }
`;

export const StyledPopover = styled.div<Pick<PopoverProps, 'zIndex'>>`
    position: absolute;
    z-index: ${({ zIndex }) => zIndex || DEFAULT_Z_INDEX};

    opacity: 0;
    visibility: hidden;

    &.${classes.animate} {
        transition: opacity 0.2s ease-in-out, transform 0s ease-in-out, visibility 0.2s;
    }

    &.${classes.open} {
        opacity: 1;
        visibility: visible;
    }

    /* пустой блок между target и popover, чтобы ловить onMouseEnter */
    &:before {
        content: '';
        display: block;
        position: absolute;
        background: transparent;
    }

    &[data-popper-placement^='top'] > .${classes.arrow} {
        bottom: calc(0px - var(${tokens.arrowHeight}));
    }

    &[data-popper-placement^='bottom'] > .${classes.arrow} {
        top: calc(0px - var(${tokens.arrowHeight}));
        &::before {
            transform: rotate(180deg);
        }
    }

    &[data-popper-placement^='left'] > .${classes.arrow} {
        right: calc(0px - var(${tokens.arrowHeight}));
        &::before {
            transform: rotate(-90deg);
        }
    }

    &[data-popper-placement^='right'] > .${classes.arrow} {
        left: calc(0px - var(${tokens.arrowHeight}));
        &::before {
            transform: rotate(90deg);
        }
    }

    &[data-popper-placement^='top-start'] > .${classes.arrow} {
        bottom: calc(0px - var(${tokens.arrowHeight}));
        left: var(${tokens.arrowEdgeMargin}) !important;
        transform: unset !important;
    }

    &[data-popper-placement^='top-end'] > .${classes.arrow} {
        bottom: calc(0px - var(${tokens.arrowHeight}));
        left: unset !important;
        right: var(${tokens.arrowEdgeMargin}) !important;
        transform: unset !important;
    }

    &[data-popper-placement^='bottom-start'] > .${classes.arrow} {
        top: calc(0px - var(${tokens.arrowHeight}));
        left: var(${tokens.arrowEdgeMargin}) !important;
        transform: unset !important;

        &::before {
            transform: rotate(180deg);
        }
    }

    &[data-popper-placement^='bottom-end'] > .${classes.arrow} {
        top: calc(0px - var(${tokens.arrowHeight}));
        left: unset !important;
        right: var(${tokens.arrowEdgeMargin}) !important;
        transform: unset !important;

        &::before {
            transform: rotate(180deg);
        }
    }

    &[data-popper-placement^='left-start']
        > .${classes.arrow},
        &[data-popper-placement^='right-start']
        > .${classes.arrow} {
        top: var(${tokens.arrowEdgeMargin}) !important;
        transform: unset !important;
    }

    &[data-popper-placement^='left-end']
        > .${classes.arrow},
        &[data-popper-placement^='right-end']
        > .${classes.arrow} {
        top: unset !important;
        bottom: var(${tokens.arrowEdgeMargin}) !important;
        transform: unset !important;
    }

    &[data-popper-placement^='top'],
    &[data-popper-placement^='top-start'],
    &[data-popper-placement^='top-end'] {
        &:before {
            top: unset;
            left: 0;
            right: 0;
            height: var(${tokens.arrowHeight});
            bottom: calc(-1 * var(${tokens.arrowHeight}));
        }
    }

    &[data-popper-placement^='bottom'],
    &[data-popper-placement^='bottom-start'],
    &[data-popper-placement^='bottom-end'] {
        &:before {
            top: calc(-1 * var(${tokens.arrowHeight}));
            left: 0;
            right: 0;
            bottom: var(${tokens.arrowHeight});
            height: var(${tokens.arrowHeight});
        }
    }

    &[data-popper-placement^='left'],
    &[data-popper-placement^='left-start'],
    &[data-popper-placement^='left-end'] {
        &:before {
            width: var(${tokens.arrowHeight});
            height: 100%;
            top: 0;
            right: calc(-1 * var(${tokens.arrowHeight}));
            bottom: 0;
        }
    }

    &[data-popper-placement^='right'],
    &[data-popper-placement^='right-start'],
    &[data-popper-placement^='right-end'] {
        &:before {
            width: var(${tokens.arrowHeight});
            height: 100%;
            top: 0;
            left: calc(-1 * var(${tokens.arrowHeight}));
            bottom: 0;
        }
    }

    & .${classes.popoverChildRootBlock} {
        box-shadow: var(${tokens.boxShadow});
    }
`;
