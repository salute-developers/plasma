import { css } from '@linaria/core';

import { classes, tokens } from '../../InputGroup.tokens';
import { textFieldTokens, textFieldClasses } from '../../../TextField';
import { InputWrapper } from '../../../TextField/TextField.styles';

export const base = css`
    &.${classes.default} {
        --plasma_private-input-radius-inner: var(${tokens.inputDefaultRadius});
    }

    &.${classes.segmented} {
        --plasma_private-input-radius-inner: var(${tokens.inputSegmentedRadius});

        &.${classes.none} {
            --plasma_private-input-radius-inner: 0;
        }
    }

    & .${textFieldClasses.inputGroupItem} ${InputWrapper} {
        ${textFieldTokens.borderRadius}: var(--plasma_private-input-radius-inner);
        transition: clip-path 0.05s ease-in;
    }

    /* NOTE: блок нужен только для TextField в plasma-web, чтобы border не наслаивались друг на друга */
    &.${classes.horizontal}&.${classes.none} .${textFieldClasses.inputGroupItem} {
        &:not(:first-child) {
            margin-left: var(${tokens.inputGroupWebMarginLeft});
        }

        &:not(:last-child) {
            ${InputWrapper} {
                clip-path: var(${tokens.inputGroupWebClipPath});

                &:hover,
                &:focus-within {
                    clip-path: inset(0 0 0 0);
                }
            }
        }
    }

    &.${classes.vertical}&.${classes.none} .${textFieldClasses.inputGroupItem} {
        &:not(:first-child) {
            margin-top: var(${tokens.inputGroupWebMarginTop});
        }

        &:not(:first-child) {
            ${InputWrapper} {
                clip-path: var(${tokens.inputGroupWebVerticalClipPath});

                &:hover,
                &:focus-within {
                    clip-path: inset(0 0 0 0);
                }
            }
        }
    }

    &.${classes.horizontal}, &.${classes.vertical} {
        .${textFieldClasses.inputGroupItem}:first-child:last-child ${InputWrapper} {
            border-radius: var(${tokens.inputSideRadius});
        }
    }

    &.${classes.horizontal} {
        .${textFieldClasses.inputGroupItem}:first-child ${InputWrapper} {
            --plasma_private-left-side-radius: var(${tokens.inputSideRadius}) var(--plasma_private-input-radius-inner)
                var(--plasma_private-input-radius-inner) var(${tokens.inputSideRadius});

            border-radius: var(--plasma_private-left-side-radius);
        }

        .${textFieldClasses.inputGroupItem}:last-child ${InputWrapper} {
            --plasma_private-right-side-radius: var(--plasma_private-input-radius-inner) var(${tokens.inputSideRadius})
                var(${tokens.inputSideRadius}) var(--plasma_private-input-radius-inner);

            border-radius: var(--plasma_private-right-side-radius);
        }
    }

    &.${classes.vertical} {
        .${textFieldClasses.inputGroupItem}:first-child ${InputWrapper} {
            --plasma_private-up-side-radius: var(${tokens.inputSideRadius}) var(${tokens.inputSideRadius})
                var(--plasma_private-input-radius-inner) var(--plasma_private-input-radius-inner);

            border-radius: var(--plasma_private-up-side-radius);
        }
        .${textFieldClasses.inputGroupItem}:last-child ${InputWrapper} {
            --plasma_private-down-side-radius: var(--plasma_private-input-radius-inner)
                var(--plasma_private-input-radius-inner) var(${tokens.inputSideRadius}) var(${tokens.inputSideRadius});

            border-radius: var(--plasma_private-down-side-radius);
        }
    }
`;
