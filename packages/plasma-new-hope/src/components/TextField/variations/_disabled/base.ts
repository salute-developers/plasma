import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import {
    Input,
    InputLabelWrapper,
    Label,
    TitleCaption,
    LeftHelper,
    StyledOptionalText,
    StyledIndicator,
    StyledContentLeft,
    StyledContentRight,
    InputWrapper,
    StyledHintWrapper,
} from '../../TextField.styles';

export const base = css`
    &[disabled] {
        ${InputWrapper}, ${TitleCaption}, ${LeftHelper},
        ${StyledIndicator} {
            opacity: var(${tokens.disabledOpacity});
        }

        &.${classes.outerLabelPlacement} {
            ${Label}, ${StyledOptionalText} {
                opacity: var(${tokens.disabledOpacity});
            }
        }

        ${Input}, ${InputLabelWrapper}, ${StyledContentLeft}, ${StyledContentRight} {
            pointer-events: none;
        }

        ${StyledHintWrapper} {
            cursor: default;
        }

        ${InputWrapper}, ${Label}, ${StyledOptionalText}, ${TitleCaption}, ${LeftHelper} {
            cursor: not-allowed;
        }

        ${Input} {
            min-width: unset;
        }
    }
`;
