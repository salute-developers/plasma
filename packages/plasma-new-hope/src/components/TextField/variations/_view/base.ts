import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
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
        --plasma_private-textfield-border-color: var(${String(tokens.borderColor)});
        --plasma_private-textfield-bg-color: var(${String(tokens.backgroundColor)});

        color: var(${tokens.color});
        background-color: var(--plasma_private-textfield-bg-color);
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(--plasma_private-textfield-border-color),
            var(${tokens.boxShadow}, inset 0 0 0 0 transparent);
        caret-color: var(${tokens.caretColor});

        transition: background-color 0.1s ease-in, color 0.1s ease-in, box-shadow 0.1s ease-in;
    }
    ${InputWrapper}:hover {
        --plasma_private-textfield-border-color: var(${tokens.borderColorHover}, var(${String(tokens.borderColor)}));
        --plasma_private-textfield-bg-color: var(
            ${tokens.backgroundColorHover},
            var(${String(tokens.backgroundColor)})
        );
    }

    ${Input} {
        color: var(${tokens.color});
    }

    ${InputPlaceholder} {
        color: var(${tokens.placeholderColor});
    }

    ${InputWrapper}:focus-within {
        --plasma_private-textfield-border-color: var(${tokens.borderColorFocus}, var(${String(tokens.borderColor)}));
        --plasma_private-textfield-bg-color: var(
            ${tokens.backgroundColorFocus},
            var(${String(tokens.backgroundColor)})
        );

        &:after {
            box-shadow: var(${tokens.boxShadowSecondary}, inset 0 0 0 0 transparent);
        }

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
            --plasma_private-textfield-divider-color: var(${String(tokens.dividerColor)});
            --plasma_private-textfield-divider-width: var(${String(tokens.dividerWidth)});

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
                var(${String(tokens.dividerColor)})
            );
        }

        &:not([readonly]) ${InputWrapper}:focus-within {
            --plasma_private-textfield-divider-color: var(
                ${tokens.dividerColorFocus},
                var(${String(tokens.dividerColor)})
            );

            ${InputPlaceholder} {
                color: var(${tokens.clearPlaceholderColorFocus});
            }
        }
    }
`;
