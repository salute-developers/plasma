import { css } from '@linaria/core';

import { classes, privateTokens, tokens } from '../../TextField.tokens';
import {
    Input,
    InputPlaceholder,
    InputWrapper,
    StyledTextAfter,
    StyledTextBefore,
    TitleCaption,
} from '../../TextField.styles';

export const base = css`
    ${InputWrapper} {
        ${privateTokens.borderColor}: var(${tokens.borderColor});
        ${privateTokens.backgroundColor}: var(${tokens.backgroundColor});

        color: var(${tokens.color});
        background-color: var(${privateTokens.backgroundColor});
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${privateTokens.borderColor}),
            var(${tokens.boxShadow}, inset 0 0 0 0 transparent);
        caret-color: var(${tokens.caretColor});

        transition: background-color 0.1s ease-in, color 0.1s ease-in, box-shadow 0.1s ease-in;
    }

    &:not([readonly]) ${InputWrapper}:hover {
        ${privateTokens.borderColor}: var(${tokens.borderColorHover}, var(${tokens.borderColor}));
        ${privateTokens.backgroundColor}: var(
            ${tokens.backgroundColorHover},
            var(${tokens.backgroundColor}))
        );
    }

    ${Input} {
        color: var(${tokens.color});
    }

    ${InputPlaceholder} {
        color: var(${tokens.placeholderColor});
    }

    &:not([readonly]) ${InputWrapper}:focus-within {
        ${privateTokens.borderColor}: var(${tokens.borderColorFocus}, var(${tokens.borderColor}));
        ${privateTokens.backgroundColor}: var(
            ${tokens.backgroundColorFocus},
            var(${tokens.backgroundColor})
        );

        ${Input} {
            color: var(${tokens.colorFocus});
        }

        ${InputPlaceholder} {
            color: var(${tokens.placeholderColorFocus});
        }
    }

    ${TitleCaption} {
        color: var(${tokens.titleCaptionColor});
    }

    ${StyledTextBefore} {
        color: var(${tokens.textBeforeColor});
    }

    ${StyledTextAfter} {
        color: var(${tokens.textAfterColor});
    }

    &.${classes.hasDivider} {
        ${InputWrapper} {
            --plasma_private-textfield-divider-color: var(${tokens.dividerColor});
            --plasma_private-textfield-divider-width: var(${tokens.dividerWidth});

            &:before {
                content: '';
                position: absolute;
                height: var(--plasma_private-textfield-divider-width, 0.063rem);
                width: 100%;
                bottom: 0;
                left: 0;
                background-color: var(--plasma_private-textfield-divider-color);
                transition: background-color 0.1s ease-in;
            }
        }

        &:not([readonly]) ${InputWrapper}:hover {
            --plasma_private-textfield-divider-color: var(
                ${tokens.dividerColorHover},
                var(${tokens.dividerColor})
            );
        }

        &:not([readonly]) ${InputWrapper}:focus-within {
            --plasma_private-textfield-divider-color: var(
                ${tokens.dividerColorFocus},
                var(${tokens.dividerColor})
            );

            ${InputPlaceholder} {
                color: var(${tokens.clearPlaceholderColorFocus});
            }
        }
    }
`;
