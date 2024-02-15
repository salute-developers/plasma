import React from 'react';

import { HousePercentOutline as Icon16 } from '../Icon.assets.16/HousePercentOutline';
import { HousePercentOutline as Icon24 } from '../Icon.assets.24/HousePercentOutline';
import { HousePercentOutline as Icon36 } from '../Icon.assets.36/HousePercentOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHousePercentOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
