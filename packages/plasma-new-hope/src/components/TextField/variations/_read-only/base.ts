import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import {
    Input,
    InputPlaceholder,
    InputWrapper,
    Label,
    LeftHelper,
    StyledContentLeft,
    StyledContentRight,
    TitleCaption,
} from '../../TextField.styles';

export const base = css`
    &[readonly] {
        ${InputWrapper} {
            position: relative;
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
                box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorReadOnly}),
                    var(${tokens.boxShadow}, inset 0 0 0 0 transparent);
                opacity: var(${tokens.readOnlyOpacity});
                z-index: -1;
            }

            &:hover {
                background-color: transparent;
                box-shadow: none;
            }

            &:focus-within {
                background-color: transparent;
                box-shadow: none;
            }
        }

        &.${classes.hasDivider} ${InputWrapper} {
            &:before {
                top: unset;
                background-color: var(${tokens.dividerColor});
                opacity: 1;
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
            color: var(${tokens.titleCaptionColorReadOnly}, var(${tokens.titleCaptionColor}));
        }

        ${LeftHelper} {
            color: var(${tokens.leftHelperColorReadOnly});
        }

        ${StyledContentLeft}:hover {
            color: var(${tokens.contentSlotColor});
        }
         
        ${StyledContentRight} {
            opacity: var(${tokens.contentSlotRightOpacityReadOnly});
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
