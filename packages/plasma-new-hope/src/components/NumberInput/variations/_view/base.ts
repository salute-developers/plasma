import { css } from '@linaria/core';

import { classes, tokens } from '../../NumberInput.tokens';
import { iconButtonTokens } from '../../../IconButton';
import { StyledIconButton } from '../../ui/ActionButton/ActionButton.styles';
import { AdditionalText, Input, InputWrapper, StyledSpinner } from '../../ui/Input/Input.styles';
import { spinnerTokens } from '../../../Spinner';

export const base = css`
    ${StyledIconButton} {
        ${iconButtonTokens.iconButtonColor}: var(${tokens.iconButtonColor});
        ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.iconButtonBackgroundColor});
        ${iconButtonTokens.iconButtonColorHover}: var(${tokens.iconButtonColorHover});
        ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${tokens.iconButtonBackgroundColorHover});
        ${iconButtonTokens.iconButtonColorActive}: var(${tokens.iconButtonColorActive});
        ${iconButtonTokens.iconButtonBackgroundColorActive}: var(${tokens.iconButtonBackgroundColorActive});

        &.${classes.actionButtonDecrementDisabled}, &.${classes.actionButtonIncrementDisabled} {
            opacity: var(${tokens.actionButtonDisabledOpacity});
            cursor: not-allowed;

            :hover,
            :active {
                scale: none;

                color: var(${tokens.iconButtonColor});
                background-color: var(${tokens.iconButtonBackgroundColor});
            }
        }
    }

    && ${InputWrapper}{
        &.${classes.manualInput}:focus-within {
            background-color: var(${tokens.backgroundColorFocus});
            box-shadow: inset 0 0 0 var(${tokens.inputWrapperBorderWidth}) var(${tokens.borderColorFocus});
        }

        &.${classes.manualInput}.${classes.errorAnimation} {
            background-color: var(${tokens.backgroundErrorColor});
            box-shadow: inset 0 0 0 var(${tokens.inputWrapperBorderWidth}) var(${tokens.borderErrorColor});

            animation: shakingError 0.3s forwards;

            ${Input} {
                color: var(${tokens.errorColor});
                animation: fadeError 0.3s forwards;
            }

            &:focus-within {
                background-color: var(${tokens.backgroundErrorColor});
                box-shadow: inset 0 0 0 var(${tokens.inputWrapperBorderWidth}) var(${tokens.borderErrorColor});
            }
        }

        @keyframes shakingError {
            14% {
                transform: translateX(-0.125rem);
            }
            28% {
                transform: translateX(0.125rem);
            }
            42% {
                transform: translateX(-0.125rem);
            }
            57% {
                transform: translateX(0.125rem);
            }
            71% {
                transform: translateX(-0.125rem);
            }
            85% {
                transform: translateX(0.125rem);
            }
            100% {
                transform: translateX(-0.125rem);
            }
        }

        @keyframes fadeError {
            50% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    }

    ${StyledSpinner} {
        ${spinnerTokens.color}: var(${tokens.loaderSpinnerColor});
    }

    ${Input} {
        color: var(${tokens.color});
        caret-color: var(${tokens.caretColor});
    }

    ${AdditionalText} {
        color: var(${tokens.additionalTextColor});
    }
`;
