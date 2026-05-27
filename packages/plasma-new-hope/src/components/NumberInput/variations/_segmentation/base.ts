import { css } from 'styled-components';

import { classes, privateTokens, tokens } from '../../NumberInput.tokens';
import { StyledIconButton } from '../../ui/ActionButton/ActionButton.styles';
import { AdditionalText, Input, InputWrapper, StyledSpinner } from '../../ui/Input/Input.styles';
import { spinnerTokens } from '../../../Spinner';

export const base = css`
    ${InputWrapper} {
        border-radius: var(${tokens.inputWrapperBorderRadius});
    }

    ${StyledIconButton} {
        ${privateTokens.segmentationBorderRadius}: var(${tokens.iconButtonRadius});

        &.${classes.segmentedView}, &.${classes.solidView} {
            ${privateTokens.segmentationBorderRadius}: var(${tokens.iconButtonSegmentationRadius}, var(${tokens.iconButtonRadius}));
        }

        &.${classes.actionButtonDecrement} {
            border-radius: var(${tokens.iconButtonRadius}) var(${privateTokens.segmentationBorderRadius}) var(${privateTokens.segmentationBorderRadius}) var(${tokens.iconButtonRadius});
        }

        &.${classes.actionButtonIncrement} {
            border-radius: var(${privateTokens.segmentationBorderRadius}) var(${tokens.iconButtonRadius}) var(${tokens.iconButtonRadius}) var(${privateTokens.segmentationBorderRadius});
        }
    }

    &.${classes.segmentedView} {
        ${InputWrapper} {
            border-radius: var(${tokens.iconButtonSegmentationRadius});
        }
    }

    &.${classes.decrementHidden} {
        ${StyledIconButton}.${classes.actionButtonDecrement} {
            pointer-events: none;
            opacity: 0;
        }
    }

    &.${classes.incrementHidden} {
        ${StyledIconButton}.${classes.actionButtonIncrement} {
            pointer-events: none;
            opacity: 0;
        }
    }

    &.${classes.solidView} {            
        ${privateTokens.topBoxShadow}: inset 0 var(${tokens.rootBorderWidth}) var(${tokens.wrapperBorderColor});
        ${privateTokens.bottomBoxShadow}: inset 0 calc(-1 * var(${tokens.rootBorderWidth})) var(${tokens.wrapperBorderColor});
        ${privateTokens.leftBoxShadow}: inset var(${tokens.rootBorderWidth}) 0 var(${tokens.wrapperBorderColor});
        ${privateTokens.rightBoxShadow}: inset calc(-1 * var(${tokens.rootBorderWidth})) 0 var(${tokens.wrapperBorderColor});


        &.${classes.focused}:not(${classes.loading}), &.${classes.focused}:not(${classes.disabled}) {
            ${privateTokens.topBoxShadow}: inset 0 var(${tokens.rootBorderWidth}) var(${tokens.wrapperBorderColorFocus});
            ${privateTokens.bottomBoxShadow}: inset 0 calc(-1 * var(${tokens.rootBorderWidth})) var(${tokens.wrapperBorderColorFocus});
            ${privateTokens.leftBoxShadow}: inset var(${tokens.rootBorderWidth}) 0 var(${tokens.wrapperBorderColorFocus});
            ${privateTokens.rightBoxShadow}: inset calc(-1 * var(${tokens.rootBorderWidth})) 0 var(${tokens.wrapperBorderColorFocus});
        }

        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - var(${tokens.iconButtonWidth}) * 2);
            height: 100%;
            background: var(${tokens.backgroundColorSolid});
            box-shadow: var(${privateTokens.topBoxShadow}), var(${privateTokens.bottomBoxShadow});
        }

        ${InputWrapper} {
            position: relative;
            color: var(${tokens.colorSolid});
            
            &:not(${classes.errorAnimation}):focus-within {
                background-color: var(${tokens.backgroundColorSolidFocus});
                box-shadow: inset 0 0 0 var(${tokens.inputWrapperBorderWidth}) var(${tokens.borderColorSolidFocus});
            }
        }

        ${StyledIconButton} {
            &.${classes.actionButtonDecrement} {
                box-shadow: var(${privateTokens.bottomBoxShadow}), var(${privateTokens.topBoxShadow}), var(${privateTokens.leftBoxShadow});
            }

            &.${classes.actionButtonIncrement} {
                box-shadow: var(${privateTokens.bottomBoxShadow}), var(${privateTokens.topBoxShadow}), var(${privateTokens.rightBoxShadow});
            }

            :hover,
            :active {                
                background-color: var(${tokens.iconButtonBackgroundColor});
            }

            :hover {                
                color: var(${tokens.iconButtonColorSolidHover});
            }

            :active {                
                color: var(${tokens.iconButtonColorSolidActive});
            }

            &.${classes.actionButtonDecrementDisabled}, &.${classes.actionButtonIncrementDisabled} {
                opacity: 1;

                svg {
                    opacity: var(${tokens.actionButtonDisabledOpacity});
                }

                :hover,
                :active {
                    color: var(${tokens.iconButtonColor});

                    svg {
                        opacity: var(${tokens.actionButtonDisabledOpacity});
                    }
                }
            }
        }

        &.${classes.clearView} {
            ${StyledIconButton} {
                &.${classes.actionButtonDecrementDisabled}, &.${classes.actionButtonIncrementDisabled} {
                    :hover,
                    :active {
                        background-color: transparent;
                    }
                }
            }
        }

        ${StyledSpinner} {
            ${spinnerTokens.color}: var(${tokens.loaderSpinnerColorSolid});
        }

        &.${classes.manualInput} ${Input} {
            caret-color: var(${tokens.caretColorSolid}, var(${tokens.caretColor}));
        }

        ${Input} {
            &:not(.${classes.errorAnimation}){
                color: var(${tokens.colorSolid});
            }
        }

        ${AdditionalText} {
            color: var(${tokens.additionalTextColorSolid});
        }

        &.${classes.decrementHidden} {
            ${StyledIconButton}.${classes.actionButtonDecrement} {
                opacity: 1;
                
                & > :first-child {
                    opacity: 0;
                }
            }
        }

        &.${classes.incrementHidden} {
            ${StyledIconButton}.${classes.actionButtonIncrement} {
                opacity: 1;
                
                & > :first-child {
                    opacity: 0;
                }
            }
        }
    }

    &.${classes.onlyIncrementShown} {
        ${StyledIconButton}.${classes.actionButtonIncrement} {
            border-radius: var(${tokens.iconButtonRadius});
            box-shadow: var(${privateTokens.topBoxShadow}), var(${privateTokens.bottomBoxShadow}),
                    var(${privateTokens.rightBoxShadow}), var(${privateTokens.leftBoxShadow});
            width: 100%;
        }

        &.${classes.solidView}:before {
            display: none;
        }
    }

    &.${classes.onlyDecrementShown} {
        ${StyledIconButton}.${classes.actionButtonDecrement} {
            border-radius: var(${tokens.iconButtonRadius});
            box-shadow: var(${privateTokens.topBoxShadow}), var(${privateTokens.bottomBoxShadow}),
                    var(${privateTokens.rightBoxShadow}), var(${privateTokens.leftBoxShadow});
            width: 100%;
        }

        &.${classes.solidView}:before {
            display: none;
        }
    }
`;
