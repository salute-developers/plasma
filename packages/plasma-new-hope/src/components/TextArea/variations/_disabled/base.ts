import { css } from 'styled-components';

import { tokens, classes } from '../../TextArea.tokens';
import {
    StyledContent,
    StyledContentWrapper,
    StyledHeaderSlot,
    StyledHelpers,
    StyledHintWrapper,
    StyledIndicator,
    StyledLabel,
    StyledLeftHelper,
    StyledOptionalText,
    StyledOutsideHelpersWrapper,
    StyledRightHelper,
    StyledTextArea,
    StyledTextAreaWrapper,
    TitleCaption,
} from '../../TextArea.styles';

const { styledTextArea } = classes;

export const base = css`
    &[disabled] {
        cursor: not-allowed;
                
        ${StyledHintWrapper}, ${StyledIndicator} {
            cursor: default;
        }

        ${StyledLabel}, ${StyledOptionalText}, ${TitleCaption},
        ${StyledOutsideHelpersWrapper} {
            opacity: var(${tokens.disabledOpacity});
            cursor: not-allowed;
            pointer-events: none;

            &:hover,
            &:active {
                transform: none;
            }
        }

        ${StyledTextAreaWrapper},
        ${StyledHelpers} {
            opacity: var(${tokens.disabledBackgroundOpacity}, var(${tokens.disabledOpacity}));
        }

        ${StyledHeaderSlot},
        ${StyledContent},
        ${StyledContentWrapper},
        ${StyledTextArea},
        ${StyledLeftHelper},
        ${StyledRightHelper} {
            pointer-events: none;
            opacity: var(${tokens.disabledInnerContentOpacity}, 1);
        }
    }

    .${styledTextArea} {
        &:disabled {
            cursor: not-allowed;
            color: var(${tokens.inputColorDisabled});
        }
    }
`;
