import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import {
    Input,
    InputPlaceholder,
    InputWrapper,
    Label,
    LeftHelper,
    StyledContentRight,
    TitleCaption,
} from '../../TextField.styles';

export const base = css`
    &[readonly] {
        :not(&.${classes.clear}) {
            ${InputWrapper} {
                position: relative;
                z-index: 0;
                color: var(${tokens.colorReadOnly});
                background: transparent;
                box-shadow: none;

                :before {
                    position: absolute;
                    content: '';
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: var(${tokens.borderRadius});
                    background-color: var(${tokens.backgroundColorReadOnly});
                    opacity: var(${tokens.readOnlyOpacity});
                    box-shadow: inset 0 0 0 var(${String(tokens.borderWidth)}) var(${tokens.borderColorReadOnly});
                    z-index: -1;
                }

                :hover {
                    background-color: transparent;
                }
            }
        }

        &.${classes.hasDivider} ${InputWrapper} {
            &:before {
                background-color: var(${String(tokens.dividerColorReadOnly)});
            }
        }

        ${InputWrapper}:focus-within ${InputPlaceholder}, ${InputPlaceholder} {
            color: var(${tokens.placeholderColorReadOnly});
        }

        ${Input} {
            color: var(${tokens.colorReadOnly});
            cursor: default;
            min-width: unset;
        }

        ${TitleCaption} {
            color: var(${tokens.titleCaptionColorReadOnly});
        }

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }

        ${StyledContentRight}:hover, ${StyledContentRight}:active {
            cursor: default;
            color: var(${tokens.contentSlotRightColor}, var(${tokens.contentSlotColor}));
        }

        &.${classes.outerLabelPlacement} ${Label} {
            color: var(${tokens.labelColorReadOnly});
        }
    }
`;
