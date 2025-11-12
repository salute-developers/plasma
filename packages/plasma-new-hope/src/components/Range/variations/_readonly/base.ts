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
            position: relative;
            box-shadow: none;
            background: transparent;

            :before {
                position: absolute;
                content: '';
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: var(${tokens.borderRadius});
                box-shadow: inset 0 0 0 var(${tokens.borderWidth}, 1px) var(${tokens.borderColorReadOnly});
                background: var(${tokens.backgroundReadOnly});
                opacity: var(${tokens.readOnlyOpacity});
                z-index: -1;
            }
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

            &:hover,
            &:active {
                color: var(${tokens.textFieldColorReadOnly});
                cursor: default;
            }
        }

        ${StyledContentRight} {
            opacity: var(${tokens.rightContentOpacityReadOnly});
        }
    }
`;
