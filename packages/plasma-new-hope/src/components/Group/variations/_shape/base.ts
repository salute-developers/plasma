import { css } from 'styled-components';

import { buttonClasses } from '../../../Button';
import { chipClasses } from '../../../Chip';
import { classes, privateTokens, tokens } from '../../Group.tokens';

const innerRadius = `var(${privateTokens.innerRadius})`;

const items = (pseudo: string, suffix = '') =>
    [buttonClasses.buttonItem, chipClasses.chipItem].map((item) => `> .${item}${pseudo}${suffix}`).join(', ');

export const base = css`
    &.${classes.segmented} {
        ${privateTokens.innerRadius}: var(${tokens.segmentedRadius});

        &.${classes.none} {
            ${privateTokens.innerRadius}: 0;
        }
    }

    &.${classes.segmented}.${classes.horizontal} {
        ${items(':not(:first-child)')}, ${items(':not(:first-child)', '::before')} {
            border-top-left-radius: ${innerRadius};
            border-bottom-left-radius: ${innerRadius};
        }

        ${items(':not(:last-child)')}, ${items(':not(:last-child)', '::before')} {
            border-top-right-radius: ${innerRadius};
            border-bottom-right-radius: ${innerRadius};
        }
    }

    &.${classes.segmented}.${classes.vertical} {
        ${items(':not(:first-child)')}, ${items(':not(:first-child)', '::before')} {
            border-top-left-radius: ${innerRadius};
            border-top-right-radius: ${innerRadius};
        }

        ${items(':not(:last-child)')}, ${items(':not(:last-child)', '::before')} {
            border-bottom-left-radius: ${innerRadius};
            border-bottom-right-radius: ${innerRadius};
        }
    }
`;
