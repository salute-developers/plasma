import styled from 'styled-components';

import { Product, ProductProps } from './Product';

const Root = styled.main`
    margin-bottom: 2rem;
`;

interface ProductListProps {
    items: Array<ProductProps>;
}

export const ProductList = ({ items }: ProductListProps) => (
    <Root>
        {items.map((item, i) => (
            <Product key={`item:${i}`} {...item} />
        ))}
    </Root>
);
