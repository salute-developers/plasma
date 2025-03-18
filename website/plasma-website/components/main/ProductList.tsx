import styled from 'styled-components';
import { forwardRef } from 'react';

import { ArrowTopRight } from '../icons/ArrowTopRight';

import { Product, ProductProps } from './Product';
import { LinkItem } from './LinkItem';

const Root = styled.main`
    margin-bottom: 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export interface ProductListProps {
    items: Array<ProductProps>;
    group?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

export const ProductList = forwardRef<HTMLDivElement, ProductListProps>(({ items, group, onClick, style }, ref) => (
    <Root onClick={onClick} style={style} ref={ref}>
        {items.map((item, i) => (
            <Product
                key={`item:${i}`}
                {...item}
                contentTopRight={i === 0 && group && <LinkItem title={group} />}
                titleContentRight={group && <ArrowTopRight />}
                isVertical={Boolean(group)}
            />
        ))}
    </Root>
));
