import { styled } from '@linaria/react';

import { component, mergeConfig } from '../../engines';
import { popupClasses, popupConfig } from '../Popup';
import { panelTokens, panelConfig } from '../Panel';

import type { DrawerPlacement } from './Drawer.types';
import { classes, tokens } from './Drawer.tokens';

const mergedPanelConfig = mergeConfig(panelConfig);
const Panel = component(mergedPanelConfig);

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

const templateAnimationStyle = (placement: DrawerPlacement) => `
        &.${classes[`${placement}Placement` as keyof typeof classes]} {
            && .${popupClasses.root} {
                animation: ${placement}ShowAnimation 0.2s forwards;
            }

            &&.${popupClasses.endAnimation} .${popupClasses.root} {
                animation: ${placement}HideAnimation 0.2s forwards;
            }

            @keyframes ${placement}ShowAnimation {
                0% {
                    transform: ${animationVariants[placement].show.start};
                    opacity: 0;
                }

                100% {
                    transform: ${animationVariants[placement].show.end};
                    opacity: 1;
                }
            }

            @keyframes ${placement}HideAnimation {
                0% {
                    transform: ${animationVariants[placement].hide.start};
                    opacity: 1;
                }

                100% {
                    transform: ${animationVariants[placement].hide.end};
                    opacity: 0;
                }
            }
        }
    `;

const getAnimationStyles = () => {
    return Object.keys(animationVariants).reduce((acc, placement) => {
        acc += templateAnimationStyle(placement as DrawerPlacement);
        return acc;
    }, '');
};

export const StyledPanel = styled(Panel)`
    ${panelTokens.closeColor}: var(${tokens.closeIconColor});
`;

export const StyledPopup = styled(Popup)<{
    placement: DrawerPlacement;
    width?: number | string;
    height?: number | string;
}>`
    &&.${classes.overlay} {
        animation: fadeIn 0.2s forwards;
        scrollbar-gutter: stable;
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
        width: ${({ width }) => width || 'auto'};
        height: ${({ height }) => height || 'auto'};
    }

    ${getAnimationStyles()}
`;
