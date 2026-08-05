import { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { classes, privateTokens, tokens } from '../../ChipGroup.tokens';
import { chipClasses, chipPrivateTokens, chipTokens } from '../../../Chip';

export const base = css`
    &.${classes.default} {
        ${privateTokens.radiusInner}: var(${tokens.chipDefaultRadius});
    }
    &.${classes.segmented} {
        ${privateTokens.radiusInner}: var(${tokens.chipSegmentedRadius});
    }

    & .${chipClasses.chipItem} {
        border-radius: var(${privateTokens.radiusInner});

        ${addFocus({
            outlineOffset: `var(${chipPrivateTokens.privateOutlineSize})`,
            outlineSize: `calc(0.032rem + var(${chipPrivateTokens.privateOutlineSize}))`,
            outlineRadius: `var(${privateTokens.radiusInner})`,
            outlineColor: `var(${chipTokens.focusColor})`,
        })}
    }

    .${chipClasses.chipItem}:first-child:last-child {
        border-radius: var(${tokens.chipSideRadius});

        ${addFocus({
            outlineOffset: `var(${chipPrivateTokens.privateOutlineSize})`,
            outlineSize: `calc(0.032rem + var(${chipPrivateTokens.privateOutlineSize}))`,
            outlineRadius: `var(${tokens.chipSideRadius})`,
            outlineColor: `var(${chipTokens.focusColor})`,
        })}
    }

    .${chipClasses.chipItem}:first-child {
        ${privateTokens.leftSideRadius}: var(${tokens.chipSideRadius}) var(${privateTokens.radiusInner})
            var(${privateTokens.radiusInner}) var(${tokens.chipSideRadius});

        border-radius: var(${privateTokens.leftSideRadius});

        ${addFocus({
            outlineOffset: `var(${chipPrivateTokens.privateOutlineSize})`,
            outlineSize: `calc(0.032rem + var(${chipPrivateTokens.privateOutlineSize}))`,
            outlineRadius: `var(${privateTokens.leftSideRadius})`,
            outlineColor: `var(${chipTokens.focusColor})`,
        })}
    }

    .${chipClasses.chipItem}:last-child {
        ${privateTokens.rightSideRadius}: var(${privateTokens.radiusInner}) var(${tokens.chipSideRadius})
            var(${tokens.chipSideRadius}) var(${privateTokens.radiusInner});

        border-radius: var(${privateTokens.rightSideRadius});

        ${addFocus({
            outlineOffset: `var(${chipPrivateTokens.privateOutlineSize})`,
            outlineSize: `calc(0.032rem + var(${chipPrivateTokens.privateOutlineSize}))`,
            outlineRadius: `var(${privateTokens.rightSideRadius})`,
            outlineColor: `var(${chipTokens.focusColor})`,
        })}
    }
`;
