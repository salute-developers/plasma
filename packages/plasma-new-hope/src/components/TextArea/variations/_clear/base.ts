import { css } from '@linaria/core';

import { classes, tokens } from '../../TextArea.tokens';
import {
    OuterLabelWrapper,
    StyledContainer,
    StyledContent,
    StyledHelpers,
    StyledHintWrapper,
    StyledIndicator,
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

        ${OuterLabelWrapper} {
            margin-bottom: var(${tokens.clearLabelMarginBottom});
        }

        ${StyledContent} {
            right: 0;
            bottom: unset;
        }

        ${StyledTextArea}, ${StyledHelpers} {
            padding-left: 0;
        }

        ${StyledHelpers} {
            background-color: unset;
            border-radius: 0;
            padding-top: var(${tokens.clearHelpersPaddingTop});
            padding-right: 0;
        }

        ${StyledTextArea} {
            color: var(${tokens.clearInputColor});
            padding-right: 0;

            &.${classes.hasRightContent} {
                padding-right: var(${tokens.clearInputPaddingRightWithRightContent});
            }
        }

        ${StyledContainer} {
            &:not(.${classes.innerPlaceholderUp}) {
                ${StyledPlaceholder} {
                    color: var(${tokens.clearPlaceholderColor});
                }

                &.${classes.focusedOuterPlaceholderColor} ${StyledPlaceholder} {
                    color: var(${tokens.clearPlaceholderColorFocus});
                }
            }

            &.${classes.innerPlaceholderUp} {
                color: var(${tokens.placeholderColor});
            }
        }

        ${StyledPlaceholder} {
            padding-left: 0;
        }

        ${StyledIndicator} {
            &.${classes.innerLabelPlacement} {
                inset: var(${tokens.clearIndicatorLabelPlacementInner});

                &.${classes.requiredAlignRight} {
                    inset: var(${tokens.clearIndicatorLabelPlacementInnerRight});
                }
            }
        }

        &.${classes.hasHint} {
            ${StyledHintWrapper} {
                &.${classes.innerLabelPlacement} {
                    inset: var(${tokens.clearHintInnerLabelPlacementOffset});
                }
            }

            ${StyledIndicator} {
                &.${classes.innerLabelPlacement}.${classes.requiredAlignRight} {
                    inset: var(${tokens.clearIndicatorHintInnerRight});
                }
            }
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
                    background-color: var(${tokens.dividerColor});
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
