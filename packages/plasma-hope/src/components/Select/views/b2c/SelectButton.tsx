import { button2, critical, primary, success, surfaceLiquid01, surfaceLiquid02, warning } from '@salutejs/plasma-core';
import { css, InterpolationFunction } from 'styled-components';

import { StyledButtonProps } from '../../SelectButton';

const statuses = {
    success,
    warning,
    error: critical,
};

export const applyB2CSelectButton: InterpolationFunction<StyledButtonProps> = ({ hasItems, status }) => {
    return css`
        ${button2};

        --plasma-select-button-arrow-margin: 0 -0.25rem 0 0.75rem;

        padding: 1rem;

        background-color: ${surfaceLiquid01};
        border: 0 none;
        border-radius: 0.75rem;
        color: ${primary};

        &:focus {
            outline: 0 none;
        }

        ${hasItems &&
        css`
            &:hover:not(:disabled),
            &:focus:not(:disabled) {
                background-color: ${surfaceLiquid02};
                color: ${primary};
                cursor: pointer;
            }
        `}

        &:focus:not(:disabled) {
            background-color: ${surfaceLiquid02};
        }

        ${status &&
        css`
            color: ${statuses[status]};
        `}
    `;
};
