import { css } from 'styled-components';

import { tokens } from '../../TextField.tokens';
import {
    Input,
    InputWrapper,
    StyledContentRight,
    StyledContentLeft,
    StyledChips,
    Label,
    StyledOptionalText,
    TitleCaption,
    StyledHelpers,
    StyledHintWrapper,
    StyledIndicator,
} from '../../TextField.styles';

export const base = css`
    &[disabled] {
        cursor: not-allowed;
        
        ${StyledHintWrapper}, ${StyledIndicator} {
            cursor: default;
        }

        ${Label}, ${StyledOptionalText}, ${TitleCaption}, ${StyledHelpers} {
            cursor: not-allowed;
            opacity: var(${tokens.disabledOpacity}, 1);
        }

        ${InputWrapper} {
            pointer-events: none;
            opacity: var(${tokens.disabledBackgroundOpacity}, var(${tokens.disabledOpacity}));
        }

        ${StyledContentLeft}, ${StyledContentRight}, ${Input}, ${StyledChips} {
            opacity: var(${tokens.disabledInnerContentOpacity}, 1);
        }

        ${Input} {
            min-width: unset;
        }
    }
`;
