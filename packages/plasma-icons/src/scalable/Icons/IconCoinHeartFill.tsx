import React from 'react';

import { CoinHeartFill as Icon16 } from '../Icon.assets.16/CoinHeartFill';
import { CoinHeartFill as Icon24 } from '../Icon.assets.24/CoinHeartFill';
import { CoinHeartFill as Icon36 } from '../Icon.assets.36/CoinHeartFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinHeartFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
