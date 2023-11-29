import { styled } from '@linaria/react';

import { DEFAULT_Z_INDEX } from '../Popup/utils';

import { tokens } from './Popover.tokens';
import { PopoverProps } from './Popover.types';

export const StyledRoot = styled.div`
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
`;

export const StyledArrow = styled.div`
    visibility: hidden;

    &,
    &::before {
        position: absolute;
        width: var(${String(tokens.arrowMaskWidth)});
        height: var(${String(tokens.arrowMaskHeight)});
        mask-image: var(${String(tokens.arrowMaskImage)});
        background: var(${String(tokens.arrowBackground)});
    }

    &::before {
        visibility: visible;
        content: '';
        transform: rotate(0deg);
    }
`;

export const StyledPopover = styled.div<Pick<PopoverProps, 'zIndex'>>`
    position: absolute;
    z-index: ${({ zIndex }) => zIndex || DEFAULT_Z_INDEX};

    &[data-popper-placement^='top'] > .popover-arrow {
        bottom: calc(0px - var(${String(tokens.arrowHeight)}));
    }

    &[data-popper-placement^='bottom'] > .popover-arrow {
        top: calc(0px - var(${String(tokens.arrowHeight)}));
        &::before {
            transform: rotate(180deg);
        }
    }

    &[data-popper-placement^='left'] > .popover-arrow {
        right: calc(0px - var(${String(tokens.arrowHeight)}));
        &::before {
            transform: rotate(-90deg);
        }
    }

    &[data-popper-placement^='right'] > .popover-arrow {
        left: calc(0px - var(${String(tokens.arrowHeight)}));
        &::before {
            transform: rotate(90deg);
        }
    }

    &[data-popper-placement^='top-start'] > .popover-arrow {
        bottom: calc(0px - var(${String(tokens.arrowHeight)}));
        left: var(${String(tokens.arrowEdgeMargin)}) !important;
        transform: unset !important;
    }

    &[data-popper-placement^='top-end'] > .popover-arrow {
        bottom: calc(0px - var(${String(tokens.arrowHeight)}));
        left: unset !important;
        right: var(${String(tokens.arrowEdgeMargin)}) !important;
        transform: unset !important;
    }

    &[data-popper-placement^='bottom-start'] > .popover-arrow {
        top: calc(0px - var(${String(tokens.arrowHeight)}));
        left: var(${String(tokens.arrowEdgeMargin)}) !important;
        transform: unset !important;

        &::before {
            transform: rotate(180deg);
        }
    }

    &[data-popper-placement^='bottom-end'] > .popover-arrow {
        top: calc(0px - var(${String(tokens.arrowHeight)}));
        left: unset !important;
        right: var(${String(tokens.arrowEdgeMargin)}) !important;
        transform: unset !important;

        &::before {
            transform: rotate(180deg);
        }
    }
`;
