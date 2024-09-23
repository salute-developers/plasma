import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import {
    Input,
    InputPlaceholder,
    InputWrapper,
    Label,
    StyledContentLeft,
    StyledContentRight,
} from '../../TextField.styles';

export const base = css`
    &.${classes.clear} {
        &[readonly] ${InputWrapper}, ${InputWrapper} {
            background-color: unset;
            box-shadow: none;
            border-radius: 0;
            padding-left: 0;
            padding-right: 0;

            &:hover {
                background-color: unset;
            }
        }

        ${StyledContentLeft} {
            margin-left: 0;
        }

        ${StyledContentRight} {
            margin-right: 0;
        }

        ${InputPlaceholder} {
            color: var(${tokens.clearPlaceholderColor});
        }

        &.${classes.outerLabelPlacement} {
            ${Label} {
                margin-bottom: var(${tokens.clearLabelOffset});
            }
        }

        ${Input} {
            color: var(${tokens.clearColor});
        }

        &.${classes.hasDivider} {
            ${InputWrapper} {
                --plasma_private-textfield-divider-color: var(${String(tokens.dividerColor)});

                &:before {
                    content: '';
                    position: absolute;
                    height: 0.063rem;
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
            }
        }
    }
`;
