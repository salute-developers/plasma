import { css } from '@linaria/core';

import {
    StyledContainer,
    StyledContent,
    StyledHelpers,
    StyledTextArea,
    StyledTextAreaWrapper,
} from '../../TextArea.styles';
import { classes, tokens } from '../../TextArea.tokens';

export const base = css`
    &[readonly] {
        ${StyledTextArea} {
            color: var(${tokens.inputColorReadOnly});
        }

        ${StyledContent} {
            opacity: var(${tokens.contentSlotRightOpacityReadOnly});
        }

        &.${classes.clear} {
            ${StyledTextAreaWrapper} {
                &:before {
                    background-color: var(${tokens.dividerColorReadOnly});
                }
            }
        }

        :not(&.${classes.clear}) {
            ${StyledTextAreaWrapper}, ${StyledHelpers} {
                background: transparent;
            }

            ${StyledTextAreaWrapper} {
                position: relative;
                box-shadow: none;

                :before {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    box-shadow: inset 0 0 0 var(${tokens.borderSize}, 1px) var(${tokens.borderColorReadOnly});
                    border-radius: var(${tokens.borderRadius});
                    opacity: var(${tokens.readOnlyOpacity});
                }
            }

            ${StyledContainer} {
                background: transparent;
                position: relative;

                :before {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: var(${tokens.backgroundColorReadOnly});
                    border-radius: var(${tokens.borderRadius});
                    opacity: var(${tokens.readOnlyOpacity});

                    z-index: -1;
                }

                :hover {
                    background: transparent;
                }
            }
        }
    }
`;
