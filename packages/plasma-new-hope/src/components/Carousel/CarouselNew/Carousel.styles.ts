import styled, { css } from 'styled-components';
import { component, mergeConfig } from 'src/engines';
import { iconButtonConfig, iconButtonTokens } from 'src/components/IconButton';

import { CarouselNewProps as CarouselProps } from './Carousel.types';
import { classes, tokens } from './Carousel.tokens';

const mergedConfig = mergeConfig(iconButtonConfig);
export const IconButtonComponent = component(mergedConfig);

export const base = css`
    position: relative;
`;

export const CarouselWrapper = styled.div<{ isSwipeEnabled?: boolean }>`
    position: relative;
    padding: 0;
    list-style: none;

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

    overflow-x: hidden;
    overflow-y: hidden;

    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    touch-action: pan-y;
    cursor: ${({ isSwipeEnabled }) => (isSwipeEnabled ? 'grab' : 'default')};

    &:active {
        cursor: ${({ isSwipeEnabled }) => (isSwipeEnabled ? 'grabbing' : 'default')};
    }
`;

// Трек в fullWidth имеет определённую ширину, поэтому 100% — это ширина вьюпорта, а не сумма слайдов.
// Обычная строка, а не css``: Linaria в build:css подставляет результат css`` как имя класса.
const fullWidthSlideCss = `
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    box-sizing: border-box;

    & > * {
        width: 100% !important;
        max-width: 100% !important;
        box-sizing: border-box;
    }
`;

export const CarouselSlide = styled.div`
    ${fullWidthSlideCss}
`;

export const CarouselTrack = styled.div<{ gap: Exclude<CarouselProps['gap'], undefined> }>`
    display: inline-flex;
    flex-direction: row;
    gap: ${({ gap }) => gap};
    vertical-align: top;

    /* TODO: станет неактуально после удаления CarouselOld. */
    & > div {
        scroll-snap-align: none;
    }
`;

export const CarouselFullWidthTrack = styled(CarouselTrack)`
    display: flex;
    width: 100%;
`;

export const CarouselVirtualItem = styled.div`
    display: flex;
    flex: 0 0 auto;
`;

export const CarouselFullWidthVirtualItem = styled(CarouselVirtualItem)`
    ${fullWidthSlideCss}
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
