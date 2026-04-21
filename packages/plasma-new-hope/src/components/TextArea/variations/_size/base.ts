import { css } from 'styled-components';

import { classes, tokens } from '../../TextArea.tokens';
import { StyledIndicator, StyledTextAreaWrapper } from '../../TextArea.styles';

export const base = css`
    ${StyledTextAreaWrapper} {
        &:after {
            border-radius: var(${tokens.borderRadius});
        }
    }

    &.${classes.hasHint}.${classes.clear} {
        ${StyledIndicator} {
            &.${classes.innerLabelPlacement}.${classes.requiredAlignRight} {
                inset: var(${tokens.clearIndicatorHintInnerRight});
            }
        }
    }
`;
