import React from 'react';

import { WalletOutline as Icon16 } from '../Icon.assets.16/WalletOutline';
import { WalletOutline as Icon24 } from '../Icon.assets.24/WalletOutline';
import { WalletOutline as Icon36 } from '../Icon.assets.36/WalletOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWalletOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
