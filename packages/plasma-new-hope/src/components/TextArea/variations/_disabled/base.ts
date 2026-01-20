import { css } from '@linaria/core';

import { tokens, classes } from '../../TextArea.tokens';
import {
    StyledContent,
    StyledHelpers,
    StyledIndicator,
    StyledLabel,
    StyledOptionalText,
    StyledOutsideHelpersWrapper,
    StyledPlaceholder,
    StyledTextAreaWrapper,
    TitleCaption,
} from '../../TextArea.styles';

const { styledTextArea } = classes;

export const base = css`
    &[disabled] {
        ${StyledLabel}, ${StyledIndicator}, ${StyledOptionalText}, ${TitleCaption},
        ${StyledContent}, ${StyledTextAreaWrapper},
        ${StyledHelpers}, ${StyledPlaceholder}, ${StyledOutsideHelpersWrapper} {
            opacity: var(${tokens.disabledOpacity});
            cursor: not-allowed;
            pointer-events: none;

            &:hover,
            &:active {
                transform: none;
            }
        }
    }

    .${styledTextArea} {
        &:disabled {
            cursor: not-allowed;
            color: var(${tokens.inputColorDisabled});
        }
    }
`;
