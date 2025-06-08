import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { component, mergeConfig } from 'src/engines';
import { iconButtonConfig, iconButtonTokens } from 'src/components/IconButton';

import { classes } from './Carousel.tokens';

const mergedConfig = mergeConfig(iconButtonConfig);
export const IconButtonComponent = component(mergedConfig);

export const base = css`
    position: relative;
`;

export const CarouselWrapper = styled.div`
    position: relative;
    margin-left: calc(var(--plasma_private-carousel-padding) * -1);
    margin-right: calc(var(--plasma_private-carousel-padding) * -1);
    padding: 0;
    list-style: none;

    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    overflow-x: auto;
    overflow-y: hidden;

    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    --plasma_private-carousel-padding: 0.625rem;
`;

export const CarouselTrack = styled.div`
    display: inline-flex;
    flex-direction: row;
`;

export const IconButton = styled(IconButtonComponent)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.75rem;
    z-index: 10;

    ${iconButtonTokens.iconButtonColor}: var(--text-primary);
    ${iconButtonTokens.iconButtonBackgroundColor}: var(--surface-transparent-secondary);
    ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${iconButtonTokens.iconButtonBackgroundColor});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(--surface-transparent-secondary-hover);
    ${iconButtonTokens.iconButtonBackgroundColorActive}: var(--surface-transparent-secondary-active);

    ${iconButtonTokens.iconButtonHeight}: 2.5rem;
    ${iconButtonTokens.iconButtonWidth}: 2.5rem;
    ${iconButtonTokens.iconButtonPadding}: 1rem;
    ${iconButtonTokens.iconButtonRadius}: 0.625rem;

    &.${classes.rightControlButton} {
        left: auto;
        right: 0.75rem;
    }
`;

export const ControlsWrapper = styled.div`
    position: relative;
`;
