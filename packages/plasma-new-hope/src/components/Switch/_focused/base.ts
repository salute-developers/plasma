import { css } from '@linaria/core';

import { tokens, classes } from '../Switch.tokens';

const { styledInputClass, styledContentWrapperClass, styledTriggerClass } = classes;

const addFocus = (outlineOffset: string, outlineSize: string, outlineRadius: string, outlineColor = '') => {
    return `&::before {
        content: '';
        position: absolute;
        inset: ${outlineOffset};
        display: block;
        box-sizing: content-box;
        border-radius: ${outlineRadius};
        border: ${outlineSize} solid transparent;
        box-shadow: 0 0 0 ${outlineSize} ${outlineColor};
        pointer-events: none;
        transition: box-shadow 0.2s ease-in-out;
    }`;
};

export const base = css`
    .${styledTriggerClass} {
        ${addFocus('-0.125rem', '0.125rem', `var(${tokens.switchTriggerBorderRadius})`, 'transparent')}
    }

    .${styledInputClass}[data-focus-visible-added] + .${styledContentWrapperClass} .${styledTriggerClass},
      // TODO: https://github.com/salute-developers/plasma/issues/849
      /* eslint-disable-next-line prettier/prettier*/
    .${styledInputClass}[data-focus-visible-added]:checked + .${styledContentWrapperClass} .${styledTriggerClass} {
        ${addFocus(
            '-0.125rem',
            '0.125rem',
            `var(${tokens.switchTriggerBorderRadius})`,
            `var(${tokens.switchFocusColor})`,
        )}
    }
`;
