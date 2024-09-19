import { styled } from '@linaria/react';

import { classes, tokens } from '../../Slider.tokens';

export const LabelWrapper = styled.div`
    color: var(${tokens.labelColor});

    display: flex;
    gap: var(${tokens.labelWrapperGap});
`;

export const LabelContentLeft = styled.div``;

export const Label = styled.label`
    font-family: var(${tokens.labelFontFamily});
    font-size: var(${tokens.labelFontSize});
    font-style: var(${tokens.labelFontStyle});
    font-weight: var(${tokens.labelFontWeight});
    letter-spacing: var(${tokens.labelLetterSpacing});
    line-height: var(${tokens.labelLineHeight});
`;

export const StyledRangeValue = styled.span`
    color: var(${tokens.rangeValueColor});
    font-family: var(${tokens.rangeValueFontFamily});
    font-size: var(${tokens.rangeValueFontSize});
    font-style: var(${tokens.rangeValueFontStyle});
    font-weight: var(${tokens.rangeValueFontWeight});
    letter-spacing: var(${tokens.rangeValueLetterSpacing});
    line-height: var(${tokens.rangeValueLineHeight});

    transition: opacity 0.1s ease-in-out;

    &.${classes.hideMinValue}, &.${classes.hideMaxValue} {
        opacity: 0;
    }

    &.${classes.activeRangeValue} {
        color: var(${tokens.labelColor});
    }
`;

export const SliderBaseWrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;

    &.${classes.rangeValuesPlacementOuter} {
        ${StyledRangeValue} {
            position: absolute;
            bottom: var(${tokens.rangeValueBottomOffset});
            left: 0;

            &.${classes.maxRangeValue} {
                left: unset;
                right: 0;
            }
        }
    }

    &.${classes.rangeValuesPlacementInner} {
        align-items: center;

        ${StyledRangeValue} {
            margin-right: var(${tokens.rangeMinValueMargin});

            &.${classes.maxRangeValue} {
                margin-right: 0;
                margin-left: var(${tokens.rangeMaxValueMargin});
            }
        }
    }
`;

export const SingleWrapper = styled.div`
    display: flex;
    opacity: var(${tokens.disabledOpacity});

    &.${classes.labelPlacementOuter} {
        flex-direction: column;

        ${LabelWrapper} {
            margin-bottom: var(${tokens.labelWrapperMarginBottom});
        }
    }

    &.${classes.labelPlacementInner} {
        ${LabelWrapper} {
            margin-right: var(${tokens.labelWrapperMarginRight});
        }
    }
`;
