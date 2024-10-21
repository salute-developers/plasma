import { styled } from '@linaria/react';

import { classes, tokens } from '../../Slider.tokens';

export const StyledValue = styled.span<{ isLargeThumb?: boolean }>`
    position: absolute;
    z-index: 1;
    top: var(${tokens.currentValueTopOffset});
    text-align: center;
    width: 100%;
    margin-left: -0.125rem;
    display: flex;
    justify-content: center;
    font-family: var(${tokens.valueFontFamily});
    font-size: var(${tokens.valueFontSize});
    font-style: var(${tokens.valueFontStyle});
    font-weight: var(${tokens.valueFontWeight});
    letter-spacing: var(${tokens.valueLetterSpacing});
    line-height: var(${tokens.valueLineHeight});
`;

export const HandlerStyled = styled.div<{ isLarge?: boolean }>`
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    --thumb-size: ${({ isLarge }) => (isLarge ? `var(${tokens.thumbSizeLarge})` : `var(${tokens.thumbSize})`)};

    &.${classes.verticalOrientation} {
        right: 0;
        bottom: auto;
        align-items: flex-start;
        justify-content: center;

        ${StyledValue} {
            margin: 0;
            top: 0;
            bottom: 0;
            right: 0;
            left: calc(var(${tokens.size}) - (var(${tokens.size}) - var(--thumb-size)) / 2 + 0.25rem);
            align-items: center;
            justify-content: flex-start;
        }
    }

    &.${classes.valuePlacementLeft} {
        ${StyledValue} {
            left: auto;
            right: calc(var(${tokens.size}) - (var(${tokens.size}) - var(--thumb-size)) / 2 + 0.3125rem);
            justify-content: flex-end;
        }
    }
`;
