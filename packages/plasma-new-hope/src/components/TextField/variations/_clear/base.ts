import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import {
    Input,
    InputPlaceholder,
    InputWrapper,
    OuterLabelWrapper,
    StyledContentLeft,
    StyledContentRight,
    StyledHintWrapper,
    StyledIndicator,
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

        &.${classes.outerLabelPlacement} {
            ${OuterLabelWrapper} {
                margin-bottom: var(${tokens.clearLabelOffset});
            }
        }

        ${Input} {
            color: var(${tokens.clearColor});
        }

        ${InputPlaceholder} {
            color: var(${tokens.clearPlaceholderColor});
        }

        ${StyledIndicator} {
            &.${classes.innerLabelPlacement} {
                inset: var(${tokens.clearIndicatorLabelPlacementInner});

                &.${classes.requiredAlignRight} {
                    inset: 0 0 0 100%;
                    margin: var(${tokens.clearIndicatorLabelPlacementInnerRight});
                }

                &.${classes.requiredAlignRight}:not(.${classes.hasInnerHint}) {
                    background: blue;
                    inset: 0 0 0 calc(100% + var(--plasma-private-text-field-hint-icon-size) + var(${
                        tokens.clearHintInnerLabelPlacementOffset
                    }));
                    margin: var(${tokens.clearIndicatorLabelPlacementInnerRight});
                }
            }
        }

        ${StyledHintWrapper} {
            :not(.${classes.outerLabelPlacement}) {
                /* + var(tokens.borderWidth)? */

                :not(&.${classes.hasInnerHint}) {
                    margin: 0 0 0 var(${tokens.clearHintInnerLabelPlacementOffset});
                }
            }
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

                ${InputPlaceholder} {
                    color: var(${tokens.clearPlaceholderColorFocus});
                }
            }
        }
    }
`;
