import { css } from 'styled-components';
import { button2 } from '@salutejs/plasma-core';

export const applyB2CSelectDropdown = () => {
    return css`
        --plasma-dropdown-padding: 0.125rem;
        --plasma-dropdown-border-radius: 0.875rem;
        --plasma-dropdown-item-height: 2.75rem;
        --plasma-dropdown-item-padding: 0.875rem;
        --plasma-dropdown-item-border-radius: 0.75rem;
        --plasma-dropdown-item-font-size: ${button2.fontSize};
        --plasma-dropdown-item-font-weight: ${button2.fontWeight};
        --plasma-dropdown-item-line-height: ${button2.lineHeight};
        --plasma-dropdown-item-letter-spacing: ${button2.letterSpacing};
    `;
};
