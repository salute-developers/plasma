import React from 'react';

import { CoinRubleOutline as Icon16 } from '../Icon.assets.16/CoinRubleOutline';
import { CoinRubleOutline as Icon24 } from '../Icon.assets.24/CoinRubleOutline';
import { CoinRubleOutline as Icon36 } from '../Icon.assets.36/CoinRubleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCoinRubleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
