import React from 'react';
import { IconCart } from '@salutejs/plasma-icons';
import { Button } from '@salutejs/plasma-ui';

import { AppStateContext } from '../../../../components/PlasmaApp/AppStateContext';

interface CartButtonProps {
    screen: string;
}

export const CartButton: React.FC<CartButtonProps> = ({ screen }) => {
    const { pushScreen } = React.useContext(AppStateContext);
    const onClick = React.useCallback(() => pushScreen(screen, null), [screen, pushScreen]);

    return <Button contentLeft={<IconCart />} text="Корзина" view="clear" size="s" onClick={onClick} />;
};
