import React from 'react';

import { CoinFallingFill as Icon16 } from '../Icon.assets.16/CoinFallingFill';
import { CoinFallingFill as Icon24 } from '../Icon.assets.24/CoinFallingFill';
import { CoinFallingFill as Icon36 } from '../Icon.assets.36/CoinFallingFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinFallingFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
