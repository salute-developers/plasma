import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { component, mergeConfig } from 'src/engines';
import { iconButtonConfig, iconButtonTokens } from 'src/components/IconButton';

import { CarouselNewProps as CarouselProps } from './Carousel.types';
import { classes, tokens } from './Carousel.tokens';

const mergedConfig = mergeConfig(iconButtonConfig);
export const IconButtonComponent = component(mergedConfig);

export const base = css`
    position: relative;
`;

export const CarouselWrapper = styled.div`
    position: relative;
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
`;

export const CarouselTrack = styled.div<{ gap: Exclude<CarouselProps['gap'], undefined> }>`
    display: inline-flex;
    flex-direction: row;
    gap: ${({ gap }) => gap};

    // TODO: станет неактуально после удаления CarouselOld.
    & > div {
        scroll-snap-align: none;
    }
`;

export const IconButton = styled(IconButtonComponent)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.75rem;
    z-index: 10;

    ${iconButtonTokens.iconButtonColor}: var(${tokens.controlIconButtonColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.controlIconButtonBackgroundColor});
    ${iconButtonTokens.iconButtonColorHover}: var(${tokens.controlIconButtonColorHover});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${tokens.controlIconButtonBackgroundColorHover});
    ${iconButtonTokens.iconButtonColorActive}: var(${tokens.controlIconButtonColorActive});
    ${iconButtonTokens.iconButtonBackgroundColorActive}: var(${tokens.controlIconButtonBackgroundColorActive});

    ${iconButtonTokens.iconButtonHeight}: 2.5rem;
    ${iconButtonTokens.iconButtonWidth}: 2.5rem;
    ${iconButtonTokens.iconButtonPadding}: 1rem;
    ${iconButtonTokens.iconButtonRadius}: var(${tokens.controlIconButtonRadius});

    &.${classes.rightControlButton} {
        left: auto;
        right: 0.75rem;
    }
`;

export const ControlsWrapper = styled.div`
    position: relative;
`;
