import React from 'react';

import { DishwasherOutline as Icon16 } from '../Icon.assets.16/DishwasherOutline';
import { DishwasherOutline as Icon24 } from '../Icon.assets.24/DishwasherOutline';
import { DishwasherOutline as Icon36 } from '../Icon.assets.36/DishwasherOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
