import { styled } from '@linaria/react';

import { classes, tokens } from '../../Slider.tokens';
import { Slider } from '../SliderBase/SliderBase.styles';

export const LabelWrapper = styled.div`
    color: var(${tokens.labelColor});

    display: flex;
    gap: var(${tokens.labelWrapperGap});
`;

export const LabelContent = styled.div`
    display: inline-flex;
`;

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
`;

export const SliderBaseWrapper = styled.div`
    display: flex;
    flex: 1;
    position: relative;

    &.${classes.rangeValuesPlacementOuter} {
        display: grid;
        grid-template-areas:
            'a a'
            'b c';

        ${Slider} {
            grid-area: a;
        }

        ${StyledRangeValue} {
            width: fit-content;
            grid-area: b;

            &.${classes.maxRangeValue} {
                grid-area: c;
                justify-self: end;
            }
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
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        &.${classes.labelAlignCenter} {
            ${StyledRangeValue} {
                position: static;
                bottom: 0;
                left: 0;
                margin-bottom: var(${tokens.rangeValueVerticalMargin});

                &.${classes.maxRangeValue} {
                    left: 0;
                    right: 0;
                    bottom: 0;
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

            ${Slider} {
                grid-area: a;
            }

            ${StyledRangeValue} {
                grid-area: b;
                align-self: start;
                justify-self: end;

                &.${classes.maxRangeValue} {
                    grid-area: c;
                    align-self: end;
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
                justify-self: start;
            }
        }
    }
`;
