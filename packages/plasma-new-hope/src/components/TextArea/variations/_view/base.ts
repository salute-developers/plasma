import { css } from 'styled-components';

import { tokens, classes } from '../../TextArea.tokens';
import { StyledTextAreaWrapper, TitleCaption } from '../../TextArea.styles';

const { styledContainer, styledTextAreaWrapper, styledHelpers } = classes;

const exclusionSelectors = `not(.${classes.clear}):not([disabled]):not([readonly]):not(:focus-within)`;

export const base = css`
    ${TitleCaption} {
        color: var(${tokens.titleCaptionColor});
    }

    .${styledContainer} {
        background-color: var(${tokens.backgroundColor});
        transition: box-shadow 0.1s ease-in-out;
        border-radius: var(${tokens.borderRadius});
        box-shadow: var(${tokens.boxShadow}, inset 0 0 0 0 transparent);

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 var(${tokens.borderSize}, 0.0625rem) var(${tokens.borderColor});
            transition: box-shadow 0.1s ease-in-out;
            pointer-events: none;
        }
    }

    .${styledTextAreaWrapper} {
        transition: background-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 0.0625rem) var(${tokens.inputBorderColor});

        /* INFO: Отступ справа, чтобы scrollbar не перекрывал рамку */
        padding-right: var(${tokens.borderSize}, 0.0625rem);
    }

    &:focus-within:not([readonly]) .${styledTextAreaWrapper} {
        background-color: var(${tokens.inputBackgroundColorFocus});
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 0.0625rem) var(${tokens.inputBorderColorFocus});

        &:after {
            box-shadow: var(${tokens.boxShadowSecondary}, inset 0 0 0 0 transparent);
        }
    }

    &:focus-within:not([readonly]) .${styledContainer} {
        background-color: var(${tokens.backgroundColorFocus});
        box-shadow: var(${tokens.boxShadow}, inset 0 0 0 0 transparent);

        &::after {
            box-shadow: inset 0 0 0 var(${tokens.borderSize}, 0.0625rem) var(${tokens.borderColorFocus});
        }
    }

    &:focus-within:not([readonly]) .${styledHelpers} {
        background-color: var(${tokens.helpersBackgroundColorFocus});
    }

    &:hover:${exclusionSelectors} .${styledContainer} {
        background-color: var(${tokens.backgroundColorHover});
        box-shadow: var(${tokens.boxShadow}, inset 0 0 0 0 transparent);

        &::after {
            box-shadow: inset 0 0 0 var(${tokens.borderSize}, 0.0625rem) var(${tokens.borderColorHover});
        }
    }

    &:hover:${exclusionSelectors} .${styledTextAreaWrapper} {
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 0.0625rem) var(${tokens.inputBorderColorHover});
        background-color: var(${tokens.inputBackgroundColorHover});
    }

    &:hover:${exclusionSelectors} .${styledTextAreaWrapper} + .${styledHelpers} {
        background-color: var(${tokens.helpersBackgroundColorHover});
    }

    &:active:${exclusionSelectors} .${styledTextAreaWrapper} {
        box-shadow: inset 0 0 0 var(${tokens.borderSize}, 0.0625rem) var(${tokens.inputBorderColorActive});
        background-color: var(${tokens.inputBackgroundColorActive});
    }

    &:active:${exclusionSelectors} .${styledContainer} {
        background-color: var(${tokens.backgroundColorActive});
    }

    &:active:${exclusionSelectors} .${styledTextAreaWrapper} + .${styledHelpers} {
        background-color: var(${tokens.helpersBackgroundColorActive});
    }

    &.${classes.hasDivider} {
        ${StyledTextAreaWrapper} {
            position: relative;

            --plasma_private-textarea-divider-color: var(${tokens.dividerColor});

            &:before {
                content: '';
                position: absolute;
                height: 0.063rem;
                width: 100%;
                bottom: 0;
                left: 0;
                background-color: var(--plasma_private-textarea-divider-color);
                transition: background-color 0.1s ease-in;
            }
        }

        &:not([readonly]) ${StyledTextAreaWrapper}:hover {
            --plasma_private-textarea-divider-color: var(
                ${tokens.dividerColorHover},
                var(${tokens.dividerColor})
            );
        }

        &:not([readonly]) ${StyledTextAreaWrapper}:focus-within {
            --plasma_private-textarea-divider-color: var(
                ${tokens.dividerColorFocus},
                var(${tokens.dividerColor})
            );
        }
    }
`;
