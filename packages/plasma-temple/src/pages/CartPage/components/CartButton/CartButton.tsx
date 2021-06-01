import React from 'react';
import styled from 'styled-components';
import { IconCart } from '@salutejs/plasma-icons';
import { Badge, Button, Price } from '@salutejs/plasma-ui';

import { AppStateContext } from '../../../../components/PlasmaApp/AppStateContext';
import { useCart } from '../../hooks';

interface CartButtonProps {
    screen: string;
    withPrice?: boolean;
}

const StyledBadge = styled(Badge)`
    position: absolute;
    left: 0.75rem;
    top: -8px;
`;

const StyledIconCount = styled.div`
    position: relative;
`;

export const CartButton: React.FC<CartButtonProps> = ({ screen, withPrice }) => {
    const { pushScreen } = React.useContext(AppStateContext);
    const { quantity, price, currency } = useCart();

    const onClick = React.useCallback(() => pushScreen(screen, null), [screen, pushScreen]);

    return (
        <Button
            contentLeft={
                <StyledIconCount>
                    {quantity > 0 && <StyledBadge text={String(quantity)} size="s" view="primary" circled />}
                    <IconCart />
                </StyledIconCount>
            }
            text={withPrice && price > 0 ? <Price currency={currency}>{price}</Price> : 'Корзина'}
            view="clear"
            size="s"
            onClick={onClick}
        />
    );
};
