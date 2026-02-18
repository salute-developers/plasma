import { css } from '@linaria/core';

import { classes, tokens } from '../../TextArea.tokens';
import { StyledIndicator, StyledTextAreaWrapper } from '../../TextArea.styles';

export const base = css`
    ${tokens.tourBorderRadius}: var(${tokens.borderRadius});

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
