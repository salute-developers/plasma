import React from 'react';

import { DishwasherFill as Icon16 } from '../Icon.assets.16/DishwasherFill';
import { DishwasherFill as Icon24 } from '../Icon.assets.24/DishwasherFill';
import { DishwasherFill as Icon36 } from '../Icon.assets.36/DishwasherFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
