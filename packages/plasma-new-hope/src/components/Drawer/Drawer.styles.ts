import styled from 'styled-components';

import { component } from '../../engines';
import { popupClasses, popupConfig } from '../Popup';

import type { DrawerPlacement } from './Drawer.types';
import { classes } from './Drawer.tokens';

const Popup = component(popupConfig);

const animationVariants = {
    right: {
        show: {
            start: 'translate(100%, -50%)',
            end: 'translate(0, -50%)',
        },
        hide: {
            start: 'translate(0, -50%)',
            end: 'translate(100%, -50%)',
        },
    },
    bottom: {
        show: {
            start: 'translate(-50%, 100%)',
            end: 'translate(-50%, 0)',
        },
        hide: {
            start: 'translate(-50%, 0)',
            end: 'translate(-50%, 100%)',
        },
    },
    left: {
        show: {
            start: 'translate(-100%, -50%)',
            end: 'translate(0, -50%)',
        },
        hide: {
            start: 'translate(0, -50%)',
            end: 'translate(-100%, -50%)',
        },
    },
    top: {
        show: {
            start: 'translate(-50%, -100%)',
            end: 'translate(-50%, 0)',
        },
        hide: {
            start: 'translate(-50%, 0)',
            end: 'translate(-50%, -100%)',
        },
    },
};

export const StyledPopup = styled(Popup)<{
    placement: DrawerPlacement;
    width?: number | string;
    height?: number | string;
}>`
    &&.${classes.overlay} {
        animation: fadeIn 0.2s forwards;
    }

    &&.${popupClasses.endAnimation} .${classes.overlay} {
        animation: fadeOut 0.2s forwards;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    && .${popupClasses.root}, && .${popupClasses.root} > div {
        width: ${({ width }) => width};
        height: ${({ height }) => height};
    }

    && .${popupClasses.root} {
        animation: showAnimation 0.2s forwards;
    }

    &&.${popupClasses.endAnimation} .${popupClasses.root} {
        animation: hideAnimation 0.2s forwards;
    }

    @keyframes showAnimation {
        0% {
            transform: ${({ placement }) => animationVariants[placement].show.start};
            opacity: 0;
        }

        100% {
            transform: ${({ placement }) => animationVariants[placement].show.end};
            opacity: 1;
        }
    }

    @keyframes hideAnimation {
        0% {
            transform: ${({ placement }) => animationVariants[placement].hide.start};
            opacity: 1;
        }

        100% {
            transform: ${({ placement }) => animationVariants[placement].hide.end};
            opacity: 0;
        }
    }
`;
