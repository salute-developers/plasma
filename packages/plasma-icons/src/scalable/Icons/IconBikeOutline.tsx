import React from 'react';

import { BikeOutline as Icon16 } from '../Icon.assets.16/BikeOutline';
import { BikeOutline as Icon24 } from '../Icon.assets.24/BikeOutline';
import { BikeOutline as Icon36 } from '../Icon.assets.36/BikeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBikeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
