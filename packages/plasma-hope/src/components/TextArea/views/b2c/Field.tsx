import styled, { css, InterpolationFunction } from 'styled-components';
import {
    fieldBackgroundStatuses,
    fieldStatuses,
    applyEllipsis,
    primary,
    secondary,
    surfaceLiquid01,
    surfaceLiquid02,
} from '@salutejs/plasma-core';
import type { FieldProps } from '@salutejs/plasma-core';
import { textXS } from '@salutejs/plasma-typo';

export const FieldWrapper = styled.div<Pick<FieldProps, 'status'> & { width: number }>`
    position: relative;

    ${({ status, width }) =>
        status &&
        css`
            &::before {
                position: absolute;
                width: ${width}rem;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;

                content: '';
                background: ${fieldBackgroundStatuses[status]};
                opacity: 0.3;

                border-radius: 0.75rem;

                pointer-events: none;
            }
        `}
`;

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

export const FieldHelpers = styled.div`
    position: absolute;
    height: fit-content;
    width: 100%;

    bottom: 1.25rem;
    padding: 0 1.5rem;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
`;

/**
 * Вспомогательный текст снизу для поля ввода
 */
export const FieldHelper = styled.span`
    ${textXS}

    margin: 0;
    padding: 0;

    ${applyEllipsis};
`;
