import React, { ButtonHTMLAttributes, forwardRef, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import {
    body1,
    accent,
    primary,
    secondary,
    tertiary,
    success,
    warning,
    critical,
    applyEllipsis,
} from '@salutejs/plasma-core';
import type { FieldProps as BaseProps, DisabledProps } from '@salutejs/plasma-core';
import { IconChevronDown } from '@salutejs/plasma-icons';

import { inputBorder, inputBorderHover } from '../../tokens';

import { applyB2CSelectButton } from './views/b2c/SelectButton';
import { Design } from './types';

export interface FieldProps extends BaseProps, DisabledProps, HTMLAttributes<HTMLLabelElement> {}

export type SelectRefElement = HTMLButtonElement;

export interface SelectButtonProps
    extends Pick<FieldProps, 'status' | 'placeholder' | 'disabled'>,
        Omit<ButtonHTMLAttributes<SelectRefElement>, 'value'> {
    /**
     * Выводимое значение.
     */
    value?: string | number | null;
    hasItems?: boolean;
    isOpen?: boolean;
    children?: never;
}

export interface StyledButtonProps extends Pick<SelectButtonProps, 'status' | 'hasItems' | 'isOpen'> {
    focused?: boolean;
}

const statuses = {
    success,
    warning,
    error: critical,
};

const StyledArrow = styled(IconChevronDown)`
    margin: var(--plasma-select-button-arrow-margin, 0 0 0 0.75rem);
    transition: color 0.3s ease-in-out, transform 0.15s ease-in-out;
    pointer-events: none;
    user-select: none;
`;

const StyledText = styled.span`
    ${applyEllipsis};

    color: ${primary};
    transition: color 0.3s ease-in-out;
    pointer-events: none;
    user-select: none;
`;

const StyledPlaceholder = styled.span`
    ${applyEllipsis};

    color: ${tertiary};
    pointer-events: none;
    user-select: none;
`;

const StyledButton = styled.button<StyledButtonProps & Design>`
    ${body1};

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;

    width: 100%;
    height: 3rem;

    /* stylelint-disable-next-line number-max-precision */
    padding: 0.875rem 0.9375rem;
    border: 1px solid ${inputBorder};
    border-radius: 0.25rem;

    background-color: transparent;
    color: ${secondary};
    transition: border-color 0.3s ease-in-out;

    ${({ hasItems }) =>
        hasItems &&
        css`
            &:not(:disabled):hover {
                cursor: pointer;
                border-color: ${inputBorderHover};
                color: ${secondary};
            }
        `}

    &:disabled {
        cursor: inherit;
    }

    &:not(:disabled):focus {
        outline: 0 none;
        border-color: ${accent};
        color: ${accent};
    }

    ${({ focused }) =>
        focused &&
        css`
            border-color: ${accent};
            color: ${accent};
        `}

    ${({ status }) =>
        status &&
        css`
            border-color: ${statuses[status]};
            color: ${statuses[status]};

            /* stylelint-disable-next-line selector-nested-pattern */
            &:hover,
            &:focus {
                border-color: ${statuses[status]};
            }
        `}

    ${({ isOpen }) =>
        isOpen &&
        css`
            ${StyledArrow} {
                transform: rotate(-180deg);
            }
        `}

    ${({ design, ...props }) => design === 'b2c' && applyB2CSelectButton(props)}
`;

// eslint-disable-next-line prefer-arrow-callback
export const SelectButton = forwardRef<SelectRefElement, SelectButtonProps & Design>(function SelectButton(
    { value, placeholder, hasItems, ...rest },
    ref,
) {
    return (
        <StyledButton type="button" {...rest} ref={ref} hasItems={hasItems} aria-label={placeholder}>
            {value && <StyledText>{value}</StyledText>}
            {placeholder && !value && <StyledPlaceholder aria-hidden="true">{placeholder}</StyledPlaceholder>}
            {hasItems && <StyledArrow size="xs" color="inherit" />}
        </StyledButton>
    );
});
