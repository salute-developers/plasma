import { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { classes, tokens } from '../../IconButtonGroup.tokens';
import { buttonTokens, buttonClasses } from '../../../Button';

const focus = (outlineRadius: string) =>
    addFocus({
        outlineOffset: 'var(--plasma_private-btn-outline-size)',
        outlineSize: 'calc(0.032rem + var(--plasma_private-btn-outline-size))',
        outlineRadius,
        outlineColor: `var(${buttonTokens.buttonFocusColor})`,
    });

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
    &.${classes.pilled} {
        --plasma_private-button-radius-inner: var(${tokens.buttonHeight});
    }

    & .${buttonClasses.buttonItem} {
        ${buttonTokens.buttonRadius}: var(--plasma_private-button-radius-inner);

        ${focus('var(--plasma_private-button-radius-inner)')}
    }

    &.${classes.horizontal}, &.${classes.vertical} {
        .${buttonClasses.buttonItem}:first-child:last-child {
            border-radius: var(${tokens.buttonSideRadius});

            ${focus(`var(${tokens.buttonSideRadius})`)}
        }
    }

    &.${classes.horizontal} {
        .${buttonClasses.buttonItem}:first-child {
            --plasma_private-left-side-radius: var(${tokens.buttonSideRadius}) var(--plasma_private-button-radius-inner)
                var(--plasma_private-button-radius-inner) var(${tokens.buttonSideRadius});

            border-radius: var(--plasma_private-left-side-radius);

            ${focus('var(--plasma_private-left-side-radius)')}
        }

        .${buttonClasses.buttonItem}:last-child {
            --plasma_private-right-side-radius: var(--plasma_private-button-radius-inner)
                var(${tokens.buttonSideRadius}) var(${tokens.buttonSideRadius})
                var(--plasma_private-button-radius-inner);

            border-radius: var(--plasma_private-right-side-radius);

            ${focus('var(--plasma_private-right-side-radius)')}
        }
    }

    &.${classes.vertical} {
        .${buttonClasses.buttonItem}:first-child {
            --plasma_private-up-side-radius: var(${tokens.buttonSideRadius}) var(${tokens.buttonSideRadius})
                var(--plasma_private-button-radius-inner) var(--plasma_private-button-radius-inner);

            border-radius: var(--plasma_private-up-side-radius);

            ${focus('var(--plasma_private-up-side-radius)')}
        }
        .${buttonClasses.buttonItem}:last-child {
            --plasma_private-down-side-radius: var(--plasma_private-button-radius-inner)
                var(--plasma_private-button-radius-inner) var(${tokens.buttonSideRadius})
                var(${tokens.buttonSideRadius});

            border-radius: var(--plasma_private-down-side-radius);

            ${focus('var(--plasma_private-down-side-radius)')}
        }
    }

    &.${classes.pilled}.${classes.horizontal}, &.${classes.pilled}.${classes.vertical} {
        .${buttonClasses.buttonItem},
            .${buttonClasses.buttonItem}:first-child,
            .${buttonClasses.buttonItem}:last-child,
            .${buttonClasses.buttonItem}:first-child:last-child {
            border-radius: var(${tokens.buttonHeight});

            ${focus(`var(${tokens.buttonHeight})`)}
        }
    }
`;
