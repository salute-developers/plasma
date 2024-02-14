import React from 'react';

import { DishwasherSelfcleanOutline as Icon16 } from '../Icon.assets.16/DishwasherSelfcleanOutline';
import { DishwasherSelfcleanOutline as Icon24 } from '../Icon.assets.24/DishwasherSelfcleanOutline';
import { DishwasherSelfcleanOutline as Icon36 } from '../Icon.assets.36/DishwasherSelfcleanOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherSelfcleanOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
