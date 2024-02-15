import React from 'react';

import { CartBagFill as Icon16 } from '../Icon.assets.16/CartBagFill';
import { CartBagFill as Icon24 } from '../Icon.assets.24/CartBagFill';
import { CartBagFill as Icon36 } from '../Icon.assets.36/CartBagFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCartBagFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
