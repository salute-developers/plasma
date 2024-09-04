import { css } from '@linaria/core';

import { classes, tokens } from '../../TextFieldGroup.tokens';
import { textFieldTokens, textFieldClasses } from '../../../TextField';
import { InputWrapper } from '../../../TextField/TextField.styles';

export const base = css`
    &.${classes.default} {
        --plasma_private-text-field-radius-inner: var(${tokens.textFieldDefaultRadius});
    }

    &.${classes.segmented} {
        --plasma_private-text-field-radius-inner: var(${tokens.textFieldSegmentedRadius});

        &.${classes.none} {
            --plasma_private-text-field-radius-inner: 0;
        }
    }

    & .${textFieldClasses.textFieldGroupItem} ${InputWrapper} {
        ${textFieldTokens.borderRadius}: var(--plasma_private-text-field-radius-inner);
        transition: clip-path 0.05s ease-in;
    }

    /* NOTE: блок нужен только для TextField в plasma-web, чтобы border не наслаивались друг на друга */
    &.${classes.horizontal}&.${classes.none} .${textFieldClasses.textFieldGroupItem} {
        &:not(:first-child) {
            margin-left: var(${tokens.textFieldGroupWebMarginLeft});
        }

        &:not(:last-child) {
            ${InputWrapper} {
                clip-path: var(${tokens.textFieldGroupWebClipPath});

                &:hover,
                &:focus-within {
                    clip-path: inset(0 0 0 0);
                }
            }
        }
    }

    &.${classes.vertical}&.${classes.none} .${textFieldClasses.textFieldGroupItem} {
        &:not(:first-child) {
            margin-top: var(${tokens.textFieldGroupWebMarginTop});
        }

        &:not(:first-child) {
            ${InputWrapper} {
                clip-path: var(${tokens.textFieldGroupWebVerticalClipPath});

                &:hover,
                &:focus-within {
                    clip-path: inset(0 0 0 0);
                }
            }
        }
    }

    &.${classes.horizontal}, &.${classes.vertical} {
        .${textFieldClasses.textFieldGroupItem}:first-child:last-child ${InputWrapper} {
            border-radius: var(${tokens.textFieldSideRadius});
        }
    }

    &.${classes.horizontal} {
        .${textFieldClasses.textFieldGroupItem}:first-child ${InputWrapper} {
            --plasma_private-left-side-radius: var(${tokens.textFieldSideRadius})
                var(--plasma_private-text-field-radius-inner) var(--plasma_private-text-field-radius-inner)
                var(${tokens.textFieldSideRadius});

            border-radius: var(--plasma_private-left-side-radius);
        }

        .${textFieldClasses.textFieldGroupItem}:last-child ${InputWrapper} {
            --plasma_private-right-side-radius: var(--plasma_private-text-field-radius-inner)
                var(${tokens.textFieldSideRadius}) var(${tokens.textFieldSideRadius})
                var(--plasma_private-text-field-radius-inner);

            border-radius: var(--plasma_private-right-side-radius);
        }
    }

    &.${classes.vertical} {
        .${textFieldClasses.textFieldGroupItem}:first-child ${InputWrapper} {
            --plasma_private-up-side-radius: var(${tokens.textFieldSideRadius}) var(${tokens.textFieldSideRadius})
                var(--plasma_private-text-field-radius-inner) var(--plasma_private-text-field-radius-inner);

            border-radius: var(--plasma_private-up-side-radius);
        }
        .${textFieldClasses.textFieldGroupItem}:last-child ${InputWrapper} {
            --plasma_private-down-side-radius: var(--plasma_private-text-field-radius-inner)
                var(--plasma_private-text-field-radius-inner) var(${tokens.textFieldSideRadius})
                var(${tokens.textFieldSideRadius});

            border-radius: var(--plasma_private-down-side-radius);
        }
    }
`;
