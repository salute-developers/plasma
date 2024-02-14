import React from 'react';

import { DishwasherNormalOutline as Icon16 } from '../Icon.assets.16/DishwasherNormalOutline';
import { DishwasherNormalOutline as Icon24 } from '../Icon.assets.24/DishwasherNormalOutline';
import { DishwasherNormalOutline as Icon36 } from '../Icon.assets.36/DishwasherNormalOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherNormalOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
