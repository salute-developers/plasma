import React, { useMemo, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import styled from 'styled-components';
import { buttonBlack } from '@salutejs/plasma-tokens';

import { InSpacingDecorator } from '../../helpers';
import { Badge } from '../Badge';
import { CardMedia } from '../Card/CardMedia';

import type { ProductCardProps as ProductCardPropsBasic } from '.';
import { ProductCard } from '.';

export default {
    title: 'Content/ProductCard',
    decorators: [InSpacingDecorator],
    argTypes: {
        periodicity: {
            options: {
                default: '',
                perDay: '/ день',
                perWeek: '/ неделя',
                perMonth: '/ месяц',
                perYear: '/ год',
            },
            control: {
                type: 'select',
            },
        },
    },
} as Meta;

// eslint-disable-next-line @typescript-eslint/camelcase, @typescript-eslint/class-name-casing
interface ProductCardProps extends ProductCardPropsBasic {
    'media:src'?: string;
    'media:alt'?: string;
    'badge1:text'?: string;
    'badge2:text'?: string;
    'example:cardWidth'?: string | number;
}

const CustomBadge = styled(Badge)`
    background: ${buttonBlack};
`;

const StyledCardMedia = styled(CardMedia)`
    height: 100%;
`;

// eslint-disable-next-line @typescript-eslint/camelcase
export const Product_Card: Story<ProductCardProps> = ({
    'media:src': imageSrc,
    'media:alt': imageAlt,
    'badge1:text': badgeText,
    'badge2:text': badge2Text,
    'example:cardWidth': cardWidth,
    quantity: q,
    periodicity,
    ...rest
}) => {
    const [state, setState] = useState({
        quantity1: q,
        quantity2: 2,
        quantity3: 0,
        quantity4: 1,
        quantity5: 0,
        quantity6: 2,
        quantity7: 4,
    });

    const badges = [<Badge text={badgeText} size="l" />, <Badge text={badge2Text} size="l" />];

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(auto-fill, ${cardWidth})`,
                gap: '1rem',
                alignItems: 'stretch',
            }}
        >
            <ProductCard
                {...rest}
                badge={badges}
                media={<StyledCardMedia src={imageSrc} alt={imageAlt} width="12.25rem" />}
                quantity={state.quantity1}
                periodicity={periodicity}
                onQuantityChange={(quantity) => setState((s) => ({ ...s, quantity1: quantity }))}
            />
            <ProductCard
                badge={<Badge view="warning" text="Больше нет" size="l" />}
                media={<StyledCardMedia src="./images/320_320_1.jpg" width="12.25rem" />}
                text="Беконайзер с сыром, зеленью, большой котлетой, яйцом и соусом"
                price={89}
                oldPrice={100}
                quantityMax={2}
                quantity={4}
                onQuantityChange={(quantity) => setState((s) => ({ ...s, quantity2: quantity }))}
            />
            <ProductCard
                disabled
                badge={<CustomBadge text="Раскупили" size="l" />}
                media={<StyledCardMedia src="./images/320_320_2.jpg" width="12.25rem" />}
                text="Смартфон Midnight Midnight 13 128GB Midnight"
                price={79_289}
                oldPrice={89_109}
                quantity={state.quantity3}
                onQuantityChange={(quantity) => setState((s) => ({ ...s, quantity3: quantity }))}
            />
            <ProductCard
                disabled
                badge={<CustomBadge text="Раскупили" size="l" />}
                media={<StyledCardMedia src="./images/320_320_2.jpg" width="12.25rem" />}
                text="Смартфон Midnight Midnight 13 128GB Midnight"
                additionalInfo="64GB"
                price={79_289}
                oldPrice={89_109}
                quantity={state.quantity4}
                onQuantityChange={(quantity) => setState((s) => ({ ...s, quantity4: quantity }))}
            />
            <ProductCard
                badge={<Badge text="Популярный" size="l" />}
                media={<StyledCardMedia src="./images/320_320_3.jpg" width="12.25rem" />}
                text="Большой весенний букет"
                price={7_555}
                disabledAction
                quantity={state.quantity5}
                onQuantityChange={(quantity) => setState((s) => ({ ...s, quantity5: quantity }))}
                backgroundColor="#ebca1d"
            />
            <ProductCard
                media={<StyledCardMedia src="./images/320_320_3.jpg" width="12.25rem" />}
                text="Большой"
                additionalInfo="Длинный текст в подписи, который не помещается в строку"
                price={7_555}
                quantity={state.quantity6}
                onQuantityChange={(quantity) => setState((s) => ({ ...s, quantity6: quantity }))}
            />
            <ProductCard
                media={<StyledCardMedia src="./images/320_320_3.jpg" width="12.25rem" />}
                text="Смартфон Midnight Midnight 13 128GB Midnight"
                additionalInfo="128GB Midnight"
                price={7_555}
                readonly
                quantityMax={4}
                quantity={state.quantity7}
            />
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/camelcase
Product_Card.args = {
    text: 'Молоко в деревне ультрапастеризованное Моментики 925 мл',
    price: 69,
    quantity: 0,
    quantityStep: 1,
    quantityMin: 0,
    quantityMax: 10,
    'media:src': './images/320_320_0.jpg',
    'media:alt': '',
    'badge1:text': '−20%',
    'badge2:text': '−30%',
    'example:cardWidth': '12.25rem',
};

export const ProductCardPerformance: Story<ProductCardProps> = () => {
    const [quantity, setQuantity] = useState(1);

    const badge = useMemo(() => <Badge text="−20%" size="l" />, []);
    const media = useMemo(() => <StyledCardMedia src="./images/320_320_1.jpg" width="12.25rem" />, []);

    return (
        <div
            style={{
                width: '12.25rem',
            }}
        >
            <ProductCard
                badge={badge}
                media={media}
                text="Беконайзер с сыром, зеленью, большой котлетой, яйцом и соусом"
                price={80}
                oldPrice={100}
                quantityMax={10}
                quantity={quantity}
                onQuantityChange={setQuantity}
            />
        </div>
    );
};
