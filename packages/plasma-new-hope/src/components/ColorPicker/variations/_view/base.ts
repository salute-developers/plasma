import { css } from 'styled-components';

import { tokens } from '../../ColorPicker.tokens';

export const base = css`
    --plasma-color-picker-bg: var(${tokens.backgroundColor}, rgb(255 255 255));
    --plasma-color-picker-active-tab-color: var(
        ${tokens.activeTabColor},
        --plasma-button-background-color,
        rgb(255 255 255)
    );
`;
