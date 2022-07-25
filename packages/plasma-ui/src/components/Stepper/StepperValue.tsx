import React from 'react';
import styled, { css } from 'styled-components';
import { body2, text, warning, scalingPixelBasis } from '@salutejs/plasma-tokens';
import { applyNoSelect } from '@salutejs/plasma-core';

interface StyledValueProps {
    /**
     * Неактивное состояние: состояние, при котором компонент отображается, но недоступен для действий пользователя
     */
    disabled?: boolean;
    /**
     * Состояние, когда значение контрола близко к предельному
     */
    showWarning?: boolean;
}

const StyledValue = styled.span<StyledValueProps>`
    ${body2}

    box-sizing: border-box;

    margin-left: ${12 / scalingPixelBasis}rem;
    margin-right: ${12 / scalingPixelBasis}rem;
    min-width: ${20 / scalingPixelBasis}rem;

    color: ${text};

    text-align: center;

    ${applyNoSelect};

    ${({ showWarning }) =>
        showWarning &&
        css`
            color: ${warning};
        `}

    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.4;
        `}
`;

export interface StepperValueProps extends React.HTMLAttributes<HTMLDivElement>, StyledValueProps {
    /**
     * Выводимое значение
     */
    value: number;
    /**
     * Функция для форматирования отображаемого значения
     */
    formatter?: (value: number) => string;
}

/**
 * Компонент для отображения значения степпера.
 */
export const StepperValue = ({ value, disabled, showWarning, formatter, ...rest }: StepperValueProps) => (
    <StyledValue role="status" aria-live="polite" disabled={disabled} showWarning={showWarning} {...rest}>
        {typeof formatter === 'function' ? formatter(value) : value}
    </StyledValue>
);
