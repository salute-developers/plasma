import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
// import { StyledInput } from '../Switch.styles';

// const { styledInputClass, styledContentWrapperClass, styledTriggerClass } = classes;

export const base = css`
    opacity: var(${tokens.disabledOpacity});

    &[disabled] {
        cursor: not-allowed;
    }
`;

// export const base = css`
//     .${styledInputClass}:disabled + .${styledContentWrapperClass} {
//         cursor: not-allowed;
//         color: var(${tokens.switchFontColorDisabled});
//         opacity: var(${tokens.switchOpacityDisabled});
//     }

//     .${styledInputClass}:disabled + .${styledContentWrapperClass} .${styledTriggerClass} {
//         background: var(${tokens.switchTriggerBackgroundDisabled});

//         &::after {
//             box-shadow: var(${tokens.switchEllipseBoxShadowDisabled});
//         }

//         &:hover {
//             background: var(${tokens.switchTriggerBackgroundDisabled});
//         }
//     }

//     .${styledInputClass}:checked:disabled + .${styledContentWrapperClass} .${styledTriggerClass} {
//         background: var(${tokens.switchTriggerBackgroundCheckedDisabled});

//         &::after {
//             box-shadow: var(${tokens.switchEllipseBoxShadowDisabled});
//         }

//         &:hover {
//             background: var(${tokens.switchTriggerBackgroundCheckedDisabledHover});
//         }
//     }
// `;
