import React from 'react';

import { CartHeaderButton } from '../../../../components/Cart/CartHeaderButton/CartHeaderButton';
import { useCart } from '../../../../components/Cart/hooks/useCart';
import { ScreensProviderContext } from '../../../../components/ScreensProvider/ScreensProviderContext';

interface CartButtonProps {
    screen: string;
    withPrice?: boolean;
    label?: string;
    hideEmpty?: boolean;
}

/**
 * @deprecated instead use CartHeaderButton? works only with PlasmaApp
 */
export const CartButton: React.FC<CartButtonProps> = ({ screen, withPrice, label, hideEmpty }) => {
    const { pushScreen } = React.useContext(ScreensProviderContext);
    const { state } = useCart();
    const { quantity, amount, currency } = state;

    const onClick = React.useCallback(() => pushScreen(screen), [screen, pushScreen]);

    if (hideEmpty && !state.items.length) {
        return null;
    }

    return (
        <CartHeaderButton
            amount={amount}
            quantity={quantity}
            currency={currency}
            withPrice={withPrice}
            label={label}
            hideEmpty={hideEmpty}
            onClick={onClick}
        />
    );
};
