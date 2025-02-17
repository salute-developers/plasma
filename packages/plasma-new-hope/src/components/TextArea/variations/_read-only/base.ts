import { css } from '@linaria/core';

import { StyledContainer, StyledTextArea } from '../../TextArea.styles';
import { classes, tokens } from '../../TextArea.tokens';

export const base = css`
    &[readonly] {
        ${StyledTextArea} {
            color: var(${tokens.inputColorReadOnly});
        }

        :not(&.${classes.clear}) {
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
