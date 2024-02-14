import React from 'react';

import { TravelCarOutline as Icon16 } from '../Icon.assets.16/TravelCarOutline';
import { TravelCarOutline as Icon24 } from '../Icon.assets.24/TravelCarOutline';
import { TravelCarOutline as Icon36 } from '../Icon.assets.36/TravelCarOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTravelCarOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
