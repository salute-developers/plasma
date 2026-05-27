import { css } from 'styled-components';

import { tokens } from '../../Range.tokens';
import { ContentWrapper, StyledContentLeft, StyledContentRight, StyledDivider } from '../../Range.styles';

export const base = css`
    &[readonly] {
        cursor: default;

        ${ContentWrapper} {
            position: relative;
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

        ${StyledDivider} {
            color: var(${tokens.dividerColorReadOnly});
            opacity: var(${tokens.dividerOpacityReadOnly});
        }

        ${StyledContentLeft}, ${StyledContentRight} {
            color: var(${tokens.textFieldContentSlotColor}, var(${tokens.textFieldColorReadOnly}));

            &:hover {
                color: var(${tokens.textFieldContentSlotColorHover}, var(${tokens.textFieldColorReadOnly}));
                cursor: default;
            }

            &:active {
                color: var(${tokens.textFieldContentSlotColorActive}, var(${tokens.textFieldColorReadOnly}));
                cursor: default;
            }
        }

        ${StyledContentRight} {
            opacity: var(${tokens.rightContentOpacityReadOnly});
            color: var(${tokens.textFieldContentSlotRightColor});
            pointer-events: none;

            &:hover {
                color: var(${tokens.textFieldContentSlotRightColorHover}, var(${tokens.textFieldColorReadOnly}));
                cursor: default;
            }

            &:active {
                color: var(${tokens.textFieldContentSlotRightColorActive}, var(${tokens.textFieldColorReadOnly}));
                cursor: default;
            }
        }
    }
`;
