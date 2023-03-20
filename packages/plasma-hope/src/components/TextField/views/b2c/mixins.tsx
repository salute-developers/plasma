import { css, InterpolationFunction } from 'styled-components';
import { fieldStatuses, primary, secondary, surfaceLiquid01, surfaceLiquid02 } from '@salutejs/plasma-core';
import type { FieldProps } from '@salutejs/plasma-core';

export const applyInputStyles: InterpolationFunction<Pick<FieldProps, 'status' | '$isFocused'>> = ({
    status,
    $isFocused,
}) => css`
    background-color: ${surfaceLiquid01};
    color: ${primary};

    transition: background-color 0.1s ease-in-out;

    &::placeholder {
        color: ${secondary};
    }

    &:focus:not(:read-only) {
        background-color: ${surfaceLiquid02};
    }

    ${$isFocused &&
    css`
        background-color: ${surfaceLiquid02};
    `}

    ${status &&
    css`
        background-color: transparent;
        color: ${fieldStatuses[status]};
    `}
`;
