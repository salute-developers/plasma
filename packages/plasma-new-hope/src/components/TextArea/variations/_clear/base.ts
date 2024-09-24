import { css } from '@linaria/core';

import { classes, tokens } from '../../TextArea.tokens';
import {
    StyledContainer,
    StyledContent,
    StyledHelpers,
    StyledLabel,
    StyledPlaceholder,
    StyledTextArea,
    StyledTextAreaWrapper,
} from '../../TextArea.styles';

export const base = css`
    &.${classes.clear} {
        border: unset;

        ${StyledTextAreaWrapper} {
            box-shadow: unset;
            background-color: unset;
            border-radius: 0;
            padding-bottom: var(${tokens.inputPaddingTop});
        }

        ${StyledLabel} {
            margin-bottom: var(${tokens.clearLabelMarginBottom});
        }

        ${StyledContent} {
            right: 0;
        }

        ${StyledTextArea}, ${StyledHelpers} {
            padding-right: 0;
            padding-left: 0;
        }

        ${StyledHelpers} {
            background-color: unset;
            border-radius: 0;
            padding-top: var(${tokens.clearHelpersPaddingTop});
        }

        ${StyledTextArea} {
            color: var(${tokens.clearInputColor});
        }

        ${StyledContainer}:not(.${classes.innerPlaceholderUp}) ${StyledPlaceholder} {
            color: var(${tokens.clearPlaceholderColor});
        }
        
        ${StyledPlaceholder} {
            padding-left: 0;
        }

        .${classes.styledContainer} {
            border: unset;
            border-radius: 0;
        }

        &:focus-within:not([readonly]) .${classes.styledTextAreaWrapper} {
            background-color: unset;
            box-shadow: unset;
        }

        &:focus-within:not([readonly]) .${classes.styledContainer} {
            border: unset;
        }

        &:focus-within:not([readonly]) .${classes.styledHelpers} {
            background-color: unset;
        }

        &.${classes.hasDivider} {
            ${StyledTextAreaWrapper} {
                position: relative;

                --plasma_private-textarea-divider-color: var(${String(tokens.dividerColor)});

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
                    var(${String(tokens.dividerColor)})
                );
            }
            &:not([readonly]) ${StyledTextAreaWrapper}:focus-within {
                --plasma_private-textarea-divider-color: var(
                    ${tokens.dividerColorFocus},
                    var(${String(tokens.dividerColor)})
                );
            }
        }
    }
`;
