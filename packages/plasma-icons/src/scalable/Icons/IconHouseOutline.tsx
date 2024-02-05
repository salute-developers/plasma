import React from 'react';

import { HouseOutline as Icon16 } from '../Icon.assets.16/HouseOutline';
import { HouseOutline as Icon24 } from '../Icon.assets.24/HouseOutline';
import { HouseOutline as Icon36 } from '../Icon.assets.36/HouseOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHouseOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
