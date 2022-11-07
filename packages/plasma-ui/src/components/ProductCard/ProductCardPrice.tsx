import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { black, success } from '@salutejs/plasma-core';

import { Price } from '../Price';
import { Body2, Caption } from '../Typography';

import { ProductCardPrice as Props, PriceTypes } from './types';

const StyledPrices = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 2.375rem;
`;

const StyledPrice = styled(Price)<{ $type?: PriceTypes }>`
    color: ${({ $type }) => {
        switch ($type) {
            case PriceTypes.NEW:
                return success;
            default:
                return black;
        }
    }};

    ${({ $type }) =>
        $type === PriceTypes.OLD &&
        css`
            opacity: 0.56;
        `}
`;

export const ProductCardPrice = memo<Props>(({ price, oldPrice, periodicity }) => {
    if (!price) {
        return null;
    }

    return (
        <StyledPrices>
            <StyledPrice
                $type={oldPrice !== undefined ? PriceTypes.NEW : undefined}
                forwardedAs={Body2}
                periodicity={periodicity}
            >
                {price}
            </StyledPrice>
            {oldPrice && (
                <StyledPrice $type={PriceTypes.OLD} stroke forwardedAs={Caption} periodicity={periodicity}>
                    {oldPrice}
                </StyledPrice>
            )}
        </StyledPrices>
    );
});
