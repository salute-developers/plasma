import React from 'react';

import { BusFill as Icon16 } from '../Icon.assets.16/BusFill';
import { BusFill as Icon24 } from '../Icon.assets.24/BusFill';
import { BusFill as Icon36 } from '../Icon.assets.36/BusFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBusFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
