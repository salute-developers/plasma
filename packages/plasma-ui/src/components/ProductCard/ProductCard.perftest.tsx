import React, { useMemo, useState } from 'react';

import { ProductCard } from '.';

const defaultStyle = { width: '12.25rem' };

export const Default = () => {
    const [quantity, setQuantity] = useState(1);

    const badge = useMemo(() => <div>−20%</div>, []);
    const media = useMemo(() => <div style={{ width: '12.25rem', height: '12.25rem' }} />, []);

    return (
        <div style={defaultStyle}>
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
