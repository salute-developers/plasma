import React, { forwardRef, memo } from 'react';
import styled, { css } from 'styled-components';
import { body1, blackSecondary } from '@salutejs/plasma-core';
import Color from 'color';

import { mediaQuery } from '../../utils';
import { Footnote1 } from '../Typography';
import { Card } from '../Card/Card';
import { CardBody } from '../Card/CardBody';
import { CardContent } from '../Card/CardContent';
import { useDeviceKind } from '../../hooks';

import { ProductCardStepper } from './ProductCardStepper';
import { ProductCardText } from './ProductCardText';
import { ProductCardPrice } from './ProductCardPrice';
import { ProductCardProps } from './types';

const StyledRoot = styled.div`
    position: relative;
`;

const StyledCard = styled(Card)<{ $backgroundColor?: string }>`
    height: 100%;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    color: ${blackSecondary};
`;

const StyledMediaSlot = memo(styled.div`
    height: 100%;
    min-height: 0;

    & img {
        display: block;
        height: 100%;
    }
`);

const getGradient = (backgroundColor: string) => {
    const color = Color(backgroundColor);

    return `linear-gradient(
        180deg,
        ${color.alpha(0).string()} 0%,
        ${color.alpha(0.0156863).string()} 8.62%,
        ${color.alpha(0.054902).string()} 16.56%,
        ${color.alpha(0.117647).string()} 23.93%,
        ${color.alpha(0.2).string()} 30.85%,
        ${color.alpha(0.290196).string()} 37.42%,
        ${color.alpha(0.392157).string()} 43.77%,
        ${color.alpha(0.501961).string()} 50%,
        ${color.alpha(0.607843).string()} 56.23%,
        ${color.alpha(0.709804).string()} 62.58%,
        ${color.alpha(0.8).string()} 69.15%,
        ${color.alpha(0.882353).string()} 76.07%,
        ${color.alpha(0.945098).string()} 83.44%,
        ${color.alpha(0.984314).string()} 91.38%,
        ${backgroundColor} 100%
    )`;
};

const StyledCardBody = styled(CardBody)`
    justify-content: space-between;
`;

// TODO: https://github.com/salute-developers/plasma/issues/232
const StyledCardContent = styled(CardContent)<{ $backgroundColor?: string; $isValuePositive?: boolean }>`
    padding: 0 0.75rem 0.75rem;

    border-radius: 0;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'all 0.15s ease-in-out')};

    &::after {
        content: '';
        position: absolute;
        top: -2.5rem;
        left: 0;
        right: 0;
        height: 2.5rem;
        transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'all 0.15s ease-in-out')};
        background: ${({ $backgroundColor }) => $backgroundColor && getGradient($backgroundColor)};
    }

    ${({ $isValuePositive }) =>
        $isValuePositive &&
        css`
            margin-top: -3rem;
        `}
`;

// TODO: https://github.com/salute-developers/plasma/issues/232
const StyledAdditionalInfo = memo(styled(Footnote1)`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${(props) =>
        mediaQuery(
            'XL',
            props.theme.deviceScale,
        )(
            css`
                ${body1}
            `,
        )}
`);

const StyledBottom = memo(styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 0.25rem;
`);

// TODO: https://github.com/salute-developers/plasma/issues/232
const StyledStepper = memo(styled(ProductCardStepper)<{ $onTop?: boolean }>`
    width: 100%;
    transition: ${({ theme }) => (theme.lowPerformance ? 'unset' : 'all 0.15s ease-in-out')};

    ${({ $onTop }) =>
        $onTop
            ? css`
                  margin-top: -2.5rem;
              `
            : css`
                  margin-top: 0.5rem;
              `}
`);

const StyledBadges = memo(styled.div`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    max-width: calc(100% - 0.75rem);
`);

/**
 * Карточка продукта с возможностью указания картинки, текста, цены и выбора количества.
 */
// eslint-disable-next-line prefer-arrow-callback
export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(function ProductCard(
    {
        badge,
        media,
        text,
        additionalInfo,
        price,
        oldPrice,
        quantity,
        quantityStep,
        quantityMin,
        quantityMax,
        onQuantityChange,
        disabled,
        disabledAction,
        readonly,
        backgroundColor = '#FFFFFF',
        periodicity,
        ...rest
    },
    ref,
) {
    const { isSberBox } = useDeviceKind();

    const isReadonly = isSberBox || readonly;

    const tabIndex = isSberBox ? 0 : -1;

    return (
        <StyledRoot>
            {badge && <StyledBadges>{badge}</StyledBadges>}
            <StyledCard
                {...rest}
                ref={ref}
                tabIndex={tabIndex}
                outlined={isSberBox}
                disabled={disabled}
                $backgroundColor={backgroundColor}
            >
                <StyledCardBody>
                    {media && <StyledMediaSlot>{media}</StyledMediaSlot>}
                    <StyledCardContent
                        $isValuePositive={!isReadonly && !!quantity && quantity > 0}
                        $backgroundColor={backgroundColor}
                    >
                        <ProductCardText text={text} />
                        {additionalInfo && <StyledAdditionalInfo>{additionalInfo}</StyledAdditionalInfo>}
                        {(price !== undefined || quantity !== undefined) && (
                            <StyledBottom>
                                <ProductCardPrice price={price} oldPrice={oldPrice} periodicity={periodicity} />
                                {!disabled && quantity !== undefined && (
                                    <StyledStepper
                                        readonly={isReadonly}
                                        value={quantity}
                                        step={quantityStep}
                                        min={quantityMin}
                                        max={quantityMax}
                                        onChange={onQuantityChange}
                                        $onTop={isReadonly || (price !== undefined && quantity === 0)}
                                        disabled={disabledAction || disabled}
                                    />
                                )}
                            </StyledBottom>
                        )}
                    </StyledCardContent>
                </StyledCardBody>
            </StyledCard>
        </StyledRoot>
    );
});
