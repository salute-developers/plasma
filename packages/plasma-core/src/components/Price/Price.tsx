import React from 'react';
import styled, { css } from 'styled-components';

import { formatCurrency } from '../../utils';

import { PriceProps, StyledPriceProps } from './types';

const StyledPrice = styled.span<StyledPriceProps>`
    ${({ $stroke }) =>
        $stroke &&
        css`
            text-decoration: line-through;
        `};
`;

const StyledPeriodicity = styled.span`
    padding-left: 0.25rem;
`;

/**
 * Компонент для отображения цены / стоимости / суммы.
 */
export const Price: React.FC<PriceProps> = ({
    children,
    currency = 'rub',
    minimumFractionDigits = 0,
    stroke = false,
    periodicity,
    ...rest
}) => (
    <StyledPrice $stroke={stroke} {...rest}>
        {formatCurrency(children, currency, minimumFractionDigits)}
        {periodicity && <StyledPeriodicity>{periodicity}</StyledPeriodicity>}
    </StyledPrice>
);
