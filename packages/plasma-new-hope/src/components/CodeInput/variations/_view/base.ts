import { css } from '@linaria/core';

import { CaptionWrapper, ItemInput, ItemCircle } from '../../CodeInput.styles';
import { classes, tokens } from '../../CodeInput.tokens';
import { addFocus } from '../../../../mixins';

export const base = css`
    ${CaptionWrapper} {
        color: var(${tokens.captionColor});

        &.${classes.captionError} {
            color: var(${tokens.captionColorError});
        }
    }

    ${ItemInput} {
        color: var(${tokens.codeColor});
        background-color: var(${tokens.backgroundColor});
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColor});
    }

    ${ItemCircle} {
        border: var(${tokens.codeItemCircleBorderWidth}) solid var(${tokens.codeColor});
        background-color: 'transparent';

        &.${classes.itemCirlceFilled} {
            background-color: var(${tokens.codeColor});
        }

        &.${classes.itemCircleErrorAnimation} {
            animation: shakingError 0.3s forwards;
        }

        &.${classes.itemCircleError} {
            background-color: var(${tokens.codeColorError});
            border: var(${tokens.codeItemCircleBorderWidth}) solid var(${tokens.codeColorError});
        }

        &:focus-visible {
            outline: none;
        }

        &[data-focus-visible-added] {
            ${addFocus({
                outlineOffset: '-0.125rem',
                outlineSize: '0.125rem',
                outlineRadius: '1rem',
                outlineColor: `var(${tokens.borderColorFocus})`,
            })}
            border: none;
            position: absolute;
        }
    }

    &:hover {
        .${classes.hoverEnabled} {
            background-color: var(${tokens.backgroundColorHover});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorHover});
        }
    }

    &:focus-within {
        ${ItemInput}:focus-within {
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorFocus});
        }
    }

    && .${classes.codeErrorAnimation} {
        animation: shakingError 0.3s forwards;
    }

    && .${classes.codeError} {
        ${ItemInput} {
            color: var(${tokens.codeColorError});
            background-color: var(${tokens.backgroundErrorColor});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderErrorColor});
        }

        ${ItemCircle} {
            border: var(${tokens.codeItemCircleBorderWidth}) solid var(${tokens.codeColorError});

            &.${classes.itemCirlceFilled} {
                background-color: var(${tokens.codeColorError});
            }
        }

        &:focus-within {
            ${ItemInput} {
                background-color: var(${tokens.backgroundErrorColor});
                box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderErrorColor});
            }
        }

        &.${classes.codeErrorFade} {
            ${ItemInput} {
                animation: fadeError 0.3s forwards;
            }
        }
    }

    && .${classes.itemErrorAnimation} {
        animation: shakingError 0.3s forwards;
    }

    && .${classes.itemError}, && .${classes.itemError}:focus-within {
        color: var(${tokens.codeColorError});
        background-color: var(${tokens.backgroundErrorColor});
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderErrorColor});

        &.${classes.codeErrorFade} {
            animation: shakingError 0.3s forwards fadeError 0.3s forwards;
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
            color: var(${tokens.codeColorError});
        }
        100% {
            color: transparent;
        }
    }
`;
