import React from 'react';

import { DishwasherSuper60Outline as Icon16 } from '../Icon.assets.16/DishwasherSuper60Outline';
import { DishwasherSuper60Outline as Icon24 } from '../Icon.assets.24/DishwasherSuper60Outline';
import { DishwasherSuper60Outline as Icon36 } from '../Icon.assets.36/DishwasherSuper60Outline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherSuper60Outline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
