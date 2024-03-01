import { css } from '@linaria/core';

import { classes, tokens } from '../../ButtonGroup.tokens';
import { buttonTokens, buttonClasses } from '../../../Button';
import { addFocus } from '../../../../mixins';

export const base = css`
    &.${classes.default} {
        --plasma_private-button-radius-inner: var(${tokens.buttonDefaultRadius});
    }
    &.${classes.segmented} {
        --plasma_private-button-radius-inner: var(${tokens.buttonSegmentedRadius});

        &.${classes.none} {
            --plasma_private-button-radius-inner: 0;
        }
    }

    & .${buttonClasses.buttonItem} {
        ${buttonTokens.buttonRadius}: var(--plasma_private-button-radius-inner);

        ${addFocus({
            outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
            outlineSize: 'var(--plasma_private-btn-outline-size)',
            outlineRadius: 'var(--plasma_private-button-radius-inner)',
            outlineColor: `var(${buttonTokens.buttonFocusColor})`,
        })}
    }

    &.${classes.horizontal}, &.${classes.vertical} {
        .${buttonClasses.buttonItem}:first-child:last-child {
            border-radius: var(${tokens.buttonSideRadius});

            ${addFocus({
                outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
                outlineSize: 'var(--plasma_private-btn-outline-size)',
                outlineRadius: `var(${tokens.buttonSideRadius})`,
                outlineColor: `var(${buttonTokens.buttonFocusColor})`,
            })}
        }
    }

    &.${classes.horizontal} {
        .${buttonClasses.buttonItem}:first-child {
            --plasma_private-left-side-radius: var(${tokens.buttonSideRadius}) var(--plasma_private-button-radius-inner)
                var(--plasma_private-button-radius-inner) var(${tokens.buttonSideRadius});

            border-radius: var(--plasma_private-left-side-radius);

            ${addFocus({
                outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
                outlineSize: 'var(--plasma_private-btn-outline-size)',
                outlineRadius: 'var(--plasma_private-left-side-radius)',
                outlineColor: `var(${buttonTokens.buttonFocusColor})`,
            })}
        }

        .${buttonClasses.buttonItem}:last-child {
            --plasma_private-right-side-radius: var(--plasma_private-button-radius-inner)
                var(${tokens.buttonSideRadius}) var(${tokens.buttonSideRadius})
                var(--plasma_private-button-radius-inner);

            border-radius: var(--plasma_private-right-side-radius);

            ${addFocus({
                outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
                outlineSize: 'var(--plasma_private-btn-outline-size)',
                outlineRadius: 'var(--plasma_private-right-side-radius)',
                outlineColor: `var(${buttonTokens.buttonFocusColor})`,
            })}
        }
    }

    &.${classes.vertical} {
        .${buttonClasses.buttonItem}:first-child {
            --plasma_private-up-side-radius: var(${tokens.buttonSideRadius}) var(${tokens.buttonSideRadius})
                var(--plasma_private-button-radius-inner) var(--plasma_private-button-radius-inner);

            border-radius: var(--plasma_private-up-side-radius);

            ${addFocus({
                outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
                outlineSize: 'var(--plasma_private-btn-outline-size)',
                outlineRadius: 'var(--plasma_private-up-side-radius)',
                outlineColor: `var(${buttonTokens.buttonFocusColor})`,
            })}
        }
        .${buttonClasses.buttonItem}:last-child {
            --plasma_private-down-side-radius: var(--plasma_private-button-radius-inner)
                var(--plasma_private-button-radius-inner) var(${tokens.buttonSideRadius})
                var(${tokens.buttonSideRadius});

            border-radius: var(--plasma_private-down-side-radius);

            ${addFocus({
                outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
                outlineSize: 'var(--plasma_private-btn-outline-size)',
                outlineRadius: 'var(--plasma_private-down-side-radius)',
                outlineColor: `var(${buttonTokens.buttonFocusColor})`,
            })}
        }
    }
`;
