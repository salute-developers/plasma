import styled from 'styled-components';

import { classes, tokens } from '../../Slider.tokens';
import {
    Label,
    LabelWrapper,
    BaseSliderContainer,
    BaseStyledTrack,
    BaseStyledRange,
} from '../SliderBase/SliderBase.styles';

export { Label, LabelWrapper };

export const LabelContent = styled.div`
    display: inline-flex;
`;

export const StyledRangeValue = styled.span`
    grid-area: b;

    color: var(${tokens.rangeValueColor});
    font-family: var(${tokens.valueFontFamily});
    font-size: var(${tokens.valueFontSize});
    font-style: var(${tokens.valueFontStyle});
    font-weight: var(${tokens.valueFontWeight});
    letter-spacing: var(${tokens.valueLetterSpacing});
    line-height: var(${tokens.valueLineHeight});

    transition: opacity 0.1s ease-in-out;

    &.${classes.hideMinValue}, &.${classes.hideMaxValue} {
        opacity: 0;
    }

    &.${classes.activeRangeValue} {
        color: var(${tokens.labelColor});
    }

    &.${classes.maxRangeValue} {
        grid-area: c;
    }
`;

export const SliderContainer = styled(BaseSliderContainer)`
    grid-area: a;
    flex: 1;
    z-index: 1;

    &.${classes.reversed} {
        transform: scaleX(-1);
    }

    &.${classes.verticalOrientation} {
        width: var(${tokens.size});
        height: 100%;
        transform: scaleY(-1);
        container-type: size;

        &.${classes.reversed} {
            transform: none;
        }
    }
`;

export const StyledTrack = styled(BaseStyledTrack)`
    .${classes.verticalOrientation} & {
        top: 0;
        bottom: 0;
        left: 50%;
        right: auto;
        transform: translateX(-50%);
        width: var(${tokens.railThickness});
        height: auto;
    }
`;

export const StyledProgress = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: var(${tokens.railThickness});
    border-radius: var(${tokens.railBorderRadius}) 0 0 var(${tokens.railBorderRadius});
    background: var(${tokens.fillColor});
    pointer-events: none;

    .${classes.pointerHidden} & {
        border-radius: var(${tokens.railBorderRadius});
    }

    .${classes.verticalOrientation} & {
        bottom: 0;
        left: 50%;
        top: auto;
        transform: translateX(-50%);
        width: var(${tokens.railThickness});
        height: 0; /* переопределяется через style */
    }
`;

export const StyledCurrentValue = styled.span`
    position: absolute;
    top: var(${tokens.currentValueTopOffset});
    transform: translateX(-50%);
    pointer-events: none;
    white-space: nowrap;
    z-index: 2;

    font-family: var(${tokens.valueFontFamily});
    font-size: var(${tokens.valueFontSize});
    font-style: var(${tokens.valueFontStyle});
    font-weight: var(${tokens.valueFontWeight});
    letter-spacing: var(${tokens.valueLetterSpacing});
    line-height: var(${tokens.valueLineHeight});
    color: var(${tokens.rangeValueColor});

    /* Компенсация scaleX(-1) у родителя в режиме reversed */
    .${classes.reversed} & {
        transform: translateX(-50%) scaleX(-1);
    }

    .${classes.verticalOrientation} & {
        top: auto;
        left: var(${tokens.currentValueTopOffset});
        transform: translateY(-50%) scaleY(-1);
    }

    .${classes.labelAlignLeft} .${classes.verticalOrientation} & {
        left: unset;
        right: var(${tokens.currentValueTopOffset});
    }

    .${classes.verticalOrientation}.${classes.reversed} & {
        transform: translateY(-50%);
    }

    /* valuePlacement — horizontal */
    .${classes.valuePlacementTop} & {
        top: auto;
        bottom: var(${tokens.currentValueTopOffset});
    }

    .${classes.valuePlacementBottom} & {
        top: var(${tokens.currentValueTopOffset});
        bottom: auto;
    }

    /* valuePlacement — vertical */
    .${classes.verticalOrientation}.${classes.valuePlacementRight} & {
        left: var(${tokens.currentValueTopOffset});
        right: auto;
    }

    .${classes.verticalOrientation}.${classes.valuePlacementLeft} & {
        left: auto;
        right: var(${tokens.currentValueTopOffset});
    }

    /* valuePlacement — none (both orientations) */
    .${classes.valuePlacementNone} & {
        display: none;
    }
`;

export const ScaleTick = styled.div<{
    tickValue: number;
    isVertical?: boolean;
    sliderAlign?: 'center' | 'left' | 'right' | 'none';
    scaleAlign?: 'top' | 'side' | 'bottom' | 'none';
}>`
    position: absolute;
    width: 0;
    overflow: visible;
    font-family: var(${tokens.valueFontFamily});
    font-size: var(${tokens.valueFontSize});
    font-style: var(${tokens.valueFontStyle});
    font-weight: var(${tokens.valueFontWeight});
    letter-spacing: var(${tokens.valueLetterSpacing});
    line-height: var(${tokens.valueLineHeight});

    &:before {
        content: ${({ tickValue }) => `"${tickValue}"`};
        position: absolute;
        top: ${({ isVertical, scaleAlign }) => {
            if (isVertical) return '50%';
            if (scaleAlign === 'top') return 'auto';
            return '0';
        }};
        bottom: ${({ isVertical, scaleAlign }) => {
            if (!isVertical && scaleAlign === 'top') return '0';
            return 'unset';
        }};
        left: ${({ isVertical, sliderAlign }) => {
            if (isVertical) {
                if (sliderAlign === 'right') {
                    return 'unset';
                }

                return '0';
            }
            return '0';
        }};
        right: ${({ isVertical, sliderAlign }) => {
            if (isVertical && sliderAlign === 'right') {
                return '0';
            }

            return 'unset';
        }};
        transform: ${({ isVertical }) => (isVertical ? 'translateY(-50%)' : 'translateX(-50%)')};

        color: var(${tokens.rangeValueColor});
        cursor: pointer;
    }
`;

export const ScaleTickDot = styled.span<{
    filled?: boolean;
    reversed?: boolean;
    isVertical?: boolean;
    scaleAlign?: 'top' | 'side' | 'bottom' | 'none';
    sliderAlign?: 'center' | 'left' | 'right' | 'none';
}>`
    position: absolute;
    z-index: 0;

    top: ${({ isVertical, scaleAlign }) => {
        if (isVertical) {
            return '50%';
        }

        if (scaleAlign === 'top') {
            return `calc(100% + var(${tokens.size}) / 2)`;
        }

        return `calc(var(${tokens.size}) / -2)`;
    }};

    left: ${({ isVertical, sliderAlign }) => {
        if (isVertical) {
            if (sliderAlign === 'right') {
                return `calc(100% + var(${tokens.size}) / 2)`;
            }

            return `calc(var(${tokens.size}) / -2)`;
        }

        return '0';
    }};

    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: block;
    width: var(${tokens.tickSize});
    height: var(${tokens.tickSize});
    background-color: ${({ filled }) => (filled ? `var(${tokens.tickDotFilledColor})` : `var(${tokens.tickDotColor})`)};
`;

export const ScaleTicksWrapper = styled.datalist<{ isVertical?: boolean; reversed?: boolean }>`
    position: relative;
    display: block;

    grid-column-start: ${({ isVertical }) => (isVertical ? 'b' : 'b')};
    grid-column-end: ${({ isVertical }) => (isVertical ? 'b' : 'c')};

    grid-row-start: ${({ isVertical }) => (isVertical ? 'b' : 'b')};
    grid-row-end: ${({ isVertical }) => (isVertical ? 'c' : 'b')};
`;

export const StyledRange = styled(BaseStyledRange)`
    position: relative;
    z-index: 1;

    &::-webkit-slider-thumb {
        pointer-events: ${({ showPointer }) => (showPointer === false ? 'none' : 'auto')};
    }

    .${classes.verticalOrientation} & {
        position: absolute;
        width: 100cqh;
        height: var(${tokens.size});
        top: calc(50% - var(${tokens.size}) / 2);
        left: calc(50% - 100cqh / 2);
        transform: rotate(-90deg);
    }
`;

export const SliderBaseWrapper = styled.div`
    display: flex;
    flex: 1;
    position: relative;

    &:has(${StyledRange}:disabled) ${ScaleTicksWrapper} ${ScaleTick}:before {
        cursor: not-allowed;
    }

    &:has(.${classes.valuePlacementTop}) {
        padding-top: var(${tokens.currentValueTopOffset});
    }

    &.${classes.rangeValuesPlacementOuter} {
        display: grid;
        grid-template-areas:
            'a a'
            'b c';

        ${StyledRangeValue} {
            width: fit-content;

            &.${classes.maxRangeValue} {
                justify-self: end;
            }
        }

        &.${classes.scalePlacementTop} {
            grid-template-areas:
                'b c'
                'a a';
            padding-top: var(${tokens.valueLineHeight});
        }
    }

    &.${classes.rangeValuesPlacementInner} {
        align-items: center;

        ${StyledRangeValue} {
            margin-right: var(${tokens.rangeValueHorizontalMargin});

            &.${classes.maxRangeValue} {
                margin-right: 0;
                margin-left: var(${tokens.rangeValueHorizontalMargin});
            }
        }
    }
`;

export const SingleWrapper = styled.div<{ hasTicks?: boolean }>`
    display: flex;
    width: 100%;
    opacity: var(${tokens.disabledOpacity});

    &.${classes.labelPlacementOuter} {
        flex-direction: column;

        ${LabelWrapper} {
            margin-bottom: var(${tokens.labelWrapperMarginBottom});
        }

        &.${classes.scalePlacementTop} {
            ${LabelWrapper} {
                margin-bottom: var(${tokens.valueLineHeight});
            }
        }
    }

    &.${classes.labelPlacementInner} {
        align-items: flex-start;

        ${LabelWrapper} {
            margin-right: var(${tokens.labelWrapperMarginRight});
        }

        ${LabelWrapper}:not(:has(${Label})):has(${LabelContent}) {
            margin-right: var(${tokens.labelWrapperOnlyIconMarginRight});
        }

        ${LabelWrapper}:has(${Label}) {
            margin-right: var(${tokens.labelWrapperMarginRight});
        }
    }

    &.${classes.verticalOrientation} {
        flex-direction: column;
        align-items: center;
        width: fit-content;

        &.${classes.labelAlignCenter} {
            ${LabelWrapper} {
                flex-direction: column-reverse;
            }

            &.${classes.labelPlacementBottom} {
                ${LabelWrapper} {
                    flex-direction: column;
                }

                &.${classes.labelContentReversed} {
                    ${LabelWrapper} {
                        flex-direction: column-reverse;
                    }
                }
            }

            &.${classes.labelContentReversed} {
                ${LabelWrapper} {
                    flex-direction: column;
                }
            }
        }

        ${LabelWrapper} {
            align-items: center;
        }

        ${SliderBaseWrapper} {
            width: var(${tokens.size});
        }

        &.${classes.labelPlacementInner} {
            ${LabelWrapper} {
                margin-right: 0;
                margin-bottom: var(${tokens.labelWrapperVerticalMargin});
            }
        }

        &.${classes.labelAlignLeft} {
            align-items: flex-end;

            ${LabelWrapper} {
                flex-direction: row-reverse;
            }
        }

        &.${classes.labelAlignRight} {
            align-items: flex-start;
        }

        &.${classes.labelPlacementBottom} {
            flex-direction: column-reverse;

            ${LabelWrapper} {
                margin-top: var(${tokens.labelWrapperVerticalMargin});
                margin-right: 0;
                margin-bottom: 0;
            }
        }
    }

    &.${classes.verticalOrientation} {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ${SliderBaseWrapper} {
            display: grid;
            grid-template-areas: ${({ hasTicks }) =>
                hasTicks
                    ? `'a b'
                'a c'`
                    : `'b'
                    'a'
                    'a'
                    'c'`};
        }

        &.${classes.labelAlignCenter} {
            ${SliderBaseWrapper} {
                grid-template-rows: auto 1fr auto;
            }
            
            ${StyledRangeValue} {
                justify-self: center;
                margin-bottom: var(${tokens.rangeValueVerticalMargin});

                &.${classes.maxRangeValue} {
                    margin-top: var(${tokens.rangeValueVerticalMargin});
                    margin-bottom: 0;
                }
            }
        }

        &.${classes.labelAlignLeft}, &.${classes.labelAlignRight} {
            ${SliderBaseWrapper} {
                display: grid;
                grid-template-areas:
                'b a'
                'c a';
                flex-direction: unset;
                align-items: unset;
                justify-content: unset;

                width: unset;
            }

            ${StyledRangeValue} {
                align-self: flex-start;
                justify-self: flex-end;

                &.${classes.maxRangeValue} {
                    align-self: flex-end;
                }
            }
        }

        &.${classes.labelAlignRight} {
            ${SliderBaseWrapper} {
                grid-template-areas:
                    'a b'
                    'a c';
            }  
                
            ${StyledRangeValue} {
                align-self: flex-start;
                justify-self: flex-start;
            }
        }
    }
`;
