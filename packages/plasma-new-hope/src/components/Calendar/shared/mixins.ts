import { styled } from '@linaria/react';

import { addFocus } from '../../../mixins/addFocus';

export const flexCenter = () => ({
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
});

export const flexSpaceBetween = () => ({
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
});

/**
 * Миксин для установки синтетического фокуса на выбранной кнопке.
 */

export const buttonFocus = styled.button`
    --add-focus-outline-offset: 0.125rem;
    --add-focus-outline-size: 0.063rem;
    --add-focus-outline-radius: 0.563rem;
    --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
    --add-focus-outline-color: var(--plasma-colors-button-focused);
    ${addFocus()};

    border: none;
    background-color: transparent;
    padding: 0;
`;

/**
 * Миксины для изменения стиля выбранного дня.
 */
const active = () => `
    &:active {
        background-color: var(--plasma-colors-primary);
        color: var(--plasma-colors-surface-solid03);
        font-family: var(--plasma-typo-body-s-font-family);
        font-size: var(--plasma-typo-body-s-font-size);
        font-style: var(--plasma-typo-body-s-font-style);
        letter-spacing: var(--plasma-typo-body-s-letter-spacing);
        line-height: var(--plasma-typo-body-s-line-height);
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
    }
`;

export const selectedMixin = () => `
    outline: none;
    cursor: pointer;

    &:hover:not(.selected) {
        background-color: var(--plasma-colors-surface-liquid02);
        
        ${active()};
    };

    &.selected {
        border: 0;
        background-color: var(--plasma-colors-primary);
        color: var(--plasma-colors-background-primary);
        cursor: default;
        font-family: var(--plasma-typo-body-s-font-family);
        font-size: var(--plasma-typo-body-s-font-size);
        font-style: var(--plasma-typo-body-s-font-style);
        letter-spacing: var(--plasma-typo-body-s-letter-spacing);
        line-height: var(--plasma-typo-body-s-line-height);
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
    };

    &.current {
        border: 0.063rem solid var(--plasma-colors-primary);

        &:hover {
            border: 0.063rem solid var(--plasma-colors-primary);
            background-color: transparent;
            color: var(--plasma-colors-primary);

            & > div {
                background-color: var(--plasma-colors-surface-liquid02);
                min-width: var(--selected-min-width);
                min-height: var(--selected-min-height);
            }
        }
    };

    &.hovered:hover {
        background-color: var(--plasma-colors-accent);
        color: var(--plasma-colors-background-primary);
        cursor: pointer;
        font-family: var(--plasma-typo-body-s-font-family);
        font-size: var(--plasma-typo-body-s-font-size);
        font-style: var(--plasma-typo-body-s-font-style);
        letter-spacing: var(--plasma-typo-body-s-letter-spacing);
        line-height: var(--plasma-typo-body-s-line-height);
        font-weight: var(--plasma-typo-body-s-bold-font-weight);
        ${active()};
    }

    ${active()};
`;

// export const buttonFocus = styled.button`
//     --add-focus-outline-offset: 0.125rem;
//     --add-focus-outline-size: 0.063rem;
//     --add-focus-outline-radius: 0.563rem;
//     --add-focus-outline-transition: box-shadow 0.2s ease-in-out;
//     --add-focus-outline-color: var(--plasma-colors-button-focused);
//     ${addFocus()};

//     border: none;
//     background-color: transparent;
//     padding: 0;
// `;

// /**
//  * Миксины для изменения стиля выбранного дня.
//  */
// const active = {
//     '&:active': {
//         'background-color': 'var(--plasma-colors-primary)',
//         color: 'var(--plasma-colors-surface-solid03)',
//         'font-family': 'var(--plasma-typo-body-s-font-family)',
//         'font-size': 'var(--plasma-typo-body-s-font-size)',
//         'font-style': 'var(--plasma-typo-body-s-font-style)',
//         'letter-spacing': 'var(--plasma-typo-body-s-letter-spacing)',
//         'line-height': 'var(--plasma-typo-body-s-line-height)',
//         'font-weight': 'var(--plasma-typo-body-s-bold-font-weight)',
//     },
// };

// export const selectedMixin = () => ({
//     outline: 'none',
//     cursor: 'pointer',

//     '&.selected': {
//         border: 0,
//         'background-color': 'var(--plasma-colors-primary)',
//         color: 'var(--plasma-colors-background-primary)',
//         cursor: 'default',
//         'font-family': 'var(--plasma-typo-body-s-font-family)',
//         'font-size': 'var(--plasma-typo-body-s-font-size)',
//         'font-style': 'var(--plasma-typo-body-s-font-style)',
//         'letter-spacing': 'var(--plasma-typo-body-s-letter-spacing)',
//         'line-height': 'var(--plasma-typo-body-s-line-height)',
//         'font-weight': 'var(--plasma-typo-body-s-bold-font-weight)',
//     },

//     '&:hover:not(.selected)': {
//         'background-color': 'var(--plasma-colors-surface-liquid02)',
//         ...active,
//     },

//     '&.current': {
//         border: '0.063rem solid var(--plasma-colors-primary)',

//         '&:hover': {
//             border: '0.063rem solid var(--plasma-colors-primary)',
//             'background-color': 'transparent',
//             color: 'var(--plasma-colors-primary)',
//             ...active,

//             '& > div': {
//                 'background-color': 'var(--plasma-colors-surface-liquid02)',
//                 'min-width': 'var(--selected-min-width)',
//                 'min-height': 'var(--selected-min-height)',
//             },
//         },
//     },

//     '&.hovered:hover': {
//         'background-color': 'var(--plasma-colors-accent)',
//         color: 'var(--plasma-colors-background-primary)',
//         cursor: 'pointer',
//         'font-family': 'var(--plasma-typo-body-s-font-family)',
//         'font-size': 'var(--plasma-typo-body-s-font-size)',
//         'font-style': 'var(--plasma-typo-body-s-font-style)',
//         'letter-spacing': 'var(--plasma-typo-body-s-letter-spacing)',
//         'line-height': 'var(--plasma-typo-body-s-line-height)',
//         'font-weight': 'var(--plasma-typo-body-s-bold-font-weight)',
//     },

//     ...active,
// });
