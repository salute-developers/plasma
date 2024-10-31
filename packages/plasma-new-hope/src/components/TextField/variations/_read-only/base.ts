import { css } from '@linaria/core';

import { classes, tokens } from '../../TextField.tokens';
import { Input, InputPlaceholder, InputWrapper, Label, LeftHelper, TitleCaption } from '../../TextField.styles';

export const base = css`
    &[readonly] {
        ${InputWrapper} {
            color: var(${tokens.colorReadOnly});
            background-color: var(${String(tokens.backgroundColorReadOnly)});
            box-shadow: inset 0 0 0 var(${String(tokens.borderWidth)}) var(${String(tokens.borderColorReadOnly)});
        }

        &.${classes.hasDivider} ${InputWrapper} {
            &:before {
                background-color: var(${String(tokens.dividerColorReadOnly)});
            }
        }

        ${InputWrapper}:hover {
            background-color: var(${tokens.backgroundColorReadOnly});
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

        &.${classes.outerLabelPlacement} ${Label} {
            color: var(${tokens.labelColorReadOnly});
        }
    }
`;
