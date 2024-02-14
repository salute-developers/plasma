import React from 'react';

import { CoinFill as Icon16 } from '../Icon.assets.16/CoinFill';
import { CoinFill as Icon24 } from '../Icon.assets.24/CoinFill';
import { CoinFill as Icon36 } from '../Icon.assets.36/CoinFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
