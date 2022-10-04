import React, { forwardRef, ReactNode, memo } from 'react';
import styled, { css } from 'styled-components';
import { body1, black, blackSecondary, success } from '@salutejs/plasma-core';
import type { DisabledProps } from '@salutejs/plasma-core';
import Color from 'color';

import { mediaQuery } from '../../utils';
import { Price } from '../Price';
import { Footnote1, Body2, Caption } from '../Typography';
import { Card } from '../Card/Card';
import type { CardProps } from '../Card/Card';
import { CardBody } from '../Card/CardBody';
import { CardContent } from '../Card/CardContent';
import { useDeviceKind } from '../../hooks';

import { ProductCardStepper } from './ProductCardStepper';
import type { ProductCardStepperProps } from './ProductCardStepper';

export interface ProductCardProps extends CardProps, DisabledProps {
    /**
     * Слот под картинку.
     */
    media?: ReactNode;
    /**
     * Слот под бейдж (-и).
     */
    badge?: ReactNode;
    /**
     * Текст или название карточки.
     */
    text?: string;
    /**
     * Дополнительная информация для карточки.
     */
    additionalInfo?: string;
    /**
     * Актуальная цена.
     */
    price?: number;
    /**
     * Старая (перечеркнутая) цена.
     */
    oldPrice?: number;
    /**
     * Количество.
     */
    quantity?: ProductCardStepperProps['value'];
    /**
     * Колбек изменени количества.
     */
    onQuantityChange?: ProductCardStepperProps['onChange'];
    /**
     * Шаг изменения количества.
     */
    quantityStep?: ProductCardStepperProps['step'];
    /**
     * Минимальное количества.
     */
    quantityMin?: ProductCardStepperProps['min'];
    /**
     * Максимальное количества.
     */
    quantityMax?: ProductCardStepperProps['max'];
    /**
     * Слот под степпер.
     */
    stepper?: ReactNode;
    /**
     * Цвет подложки и градиента карточки.
     */
    backgroundColor?: string;
    /**
     * Режим только для чтения.
     */
    readonly?: boolean;
    /**
     * Отключить экшен кнопки.
     */
    disabledAction?: boolean;
}

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
const StyledCardContent = styled(CardContent)<{ $backgroundColor?: string; $isValuePositive?: boolean }>`
    padding: 0.75rem;
    padding-top: 0;

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
const StyledBadgeSlot = memo(styled.div`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 1;
`);
const StyledText = memo(styled(Footnote1)`
    max-height: 3.38rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    ${(props) =>
        mediaQuery(
            'XL',
            props.theme.deviceScale,
        )(
            css`
                max-height: 3.75rem;
                ${body1}
            `,
        )}
`);

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
const StyledPrices = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 2.375rem;
`;
const StyledPrice = styled(Price)<{ $type?: 'new' | 'old' }>`
    color: ${({ $type }) => {
        switch ($type) {
            case 'new':
                return success;
            default:
                return black;
        }
    }};

    ${({ $type }) =>
        $type === 'old' &&
        css`
            opacity: 0.56;
        `}
`;

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

const Prices = memo<{ price: number; oldPrice?: number }>(({ price, oldPrice }) => {
    return (
        <StyledPrices>
            <StyledPrice $type={oldPrice !== undefined ? 'new' : undefined} forwardedAs={Body2}>
                {price}
            </StyledPrice>
            {oldPrice && (
                <StyledPrice $type="old" stroke forwardedAs={Caption}>
                    {oldPrice}
                </StyledPrice>
            )}
        </StyledPrices>
    );
});

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
        ...rest
    },
    ref,
) {
    const { isSberBox } = useDeviceKind();

    const isReadonly = isSberBox || readonly;

    const tabIndex = isSberBox ? 0 : -1;

    return (
        <StyledRoot>
            {badge && <StyledBadgeSlot>{badge}</StyledBadgeSlot>}
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
                        {text && <StyledText>{text}</StyledText>}
                        {additionalInfo && <StyledAdditionalInfo>{additionalInfo}</StyledAdditionalInfo>}
                        {(price !== undefined || quantity !== undefined) && (
                            <StyledBottom>
                                {price !== undefined && <Prices price={price} oldPrice={oldPrice} />}
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
