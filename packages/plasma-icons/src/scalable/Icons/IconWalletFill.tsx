import React from 'react';

import { WalletFill as Icon16 } from '../Icon.assets.16/WalletFill';
import { WalletFill as Icon24 } from '../Icon.assets.24/WalletFill';
import { WalletFill as Icon36 } from '../Icon.assets.36/WalletFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWalletFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
