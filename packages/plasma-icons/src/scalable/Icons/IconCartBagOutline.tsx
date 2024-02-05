import React from 'react';

import { CartBagOutline as Icon16 } from '../Icon.assets.16/CartBagOutline';
import { CartBagOutline as Icon24 } from '../Icon.assets.24/CartBagOutline';
import { CartBagOutline as Icon36 } from '../Icon.assets.36/CartBagOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCartBagOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
