import styled, { css } from 'styled-components';
import type { TextFieldProps } from '@salutejs/plasma-core';
import { surfaceLiquid01, surfaceLiquid02 } from '@salutejs/plasma-tokens';

export const FieldInput = styled.input<Pick<TextFieldProps, '$isFocused'>>`
    background: ${surfaceLiquid01};
    border-color: transparent;
    border-radius: 1rem;

    transition: background-color 0.1s ease-in-out;

    &:focus:not(:read-only) {
        background-color: ${surfaceLiquid02};
    }

    ${({ $isFocused }) =>
        $isFocused &&
        css`
            background-color: ${surfaceLiquid02};
        `}
`;
