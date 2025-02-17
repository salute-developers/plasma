import { css } from '@linaria/core';

import { tokens } from '../../Range.tokens';
import {
    ContentWrapper,
    LeftHelper,
    StyledContentLeft,
    StyledContentRight,
    StyledDivider,
    StyledLabel,
} from '../../Range.styles';

export const base = css`
    &[readonly] {
        cursor: default;

        ${ContentWrapper} {
            background: var(${tokens.backgroundReadOnly});
        }

        ${StyledLabel} {
            display: block;
            color: var(${tokens.labelColorReadOnly});
        }

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }

        ${StyledDivider} {
            color: var(${tokens.dividerColorReadOnly});
            opacity: var(${tokens.dividerOpacityReadOnly});
        }

        ${StyledContentLeft}, ${StyledContentRight} {
            color: var(${tokens.textFieldColorReadOnly});
        }

        ${StyledContentRight} {
            opacity: var(${tokens.rightContentOpacityReadOnly});
        }
    }
`;
