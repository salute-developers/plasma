import { css } from '@linaria/core';

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
            
            &:not(${classes.errorAnimation}).${classes.manualInput}:focus-within {
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
    
        ${Input} {
            caret-color: var(${tokens.caretColorSolid}, var(${tokens.caretColor}));

            &:not(.${classes.errorAnimation}){
                color: var(${tokens.colorSolid});
            }
        }
    
        ${AdditionalText} {
            color: var(${tokens.additionalTextColorSolid});
        }
    }
`;
