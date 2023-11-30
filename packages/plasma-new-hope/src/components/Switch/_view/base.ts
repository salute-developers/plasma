import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
import { StyledTrigger, StyledInput } from '../Switch.styles';

export const base = css`
    ${StyledTrigger} {
        background-color: var(${tokens.trackBackgroundColorOff});
    }

    ${StyledInput}:checked ~ ${StyledTrigger} {
        background-color: var(${tokens.trackBackgroundColorOn});
    }

    ${StyledTrigger}::after {
        background-color: var(${tokens.thumbBackgroundColor});
        box-shadow: var(${tokens.thumbBoxShadow});
    }
`;

// export const base = css`
//     .${styledInputClass}:checked + .${styledContentWrapperClass} .${styledTriggerClass} {
//         background-color: var(${tokens.switchTriggerBackgroundChecked});

//         &:hover {
//             background-color: var(${tokens.switchTriggerBackgroundCheckedHover});
//         }
//     }

//     .${styledTriggerClass} {
//         position: relative;
//         display: flex;
//         background: var(${tokens.switchTriggerBackground});
//         transition: width 0.15s ease-in-out, left 0.3s ease-in-out, right 0.3s ease-in-out;

//         &:hover {
//             background-color: var(${tokens.switchTriggerBackgroundHover});
//         }
//     }

//     .${styledInputClass}:checked + .${styledContentWrapperClass} .${styledTriggerClass}::after {
//         left: auto;
//         right: 0;
//         box-shadow: var(${tokens.switchEllipseBoxShadowChecked});
//     }

//     .${styledContentWrapperClass} {
//         width: 100%;
//         justify-content: var(${tokens.justifyContent});
//         color: var(${tokens.fontColor});
//         flex-direction: var(${tokens.flexDirection});
//         gap: 0.5rem;
//     }
// `;
