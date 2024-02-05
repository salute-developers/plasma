import React from 'react';

import { DishwasherIntensiveFill as Icon16 } from '../Icon.assets.16/DishwasherIntensiveFill';
import { DishwasherIntensiveFill as Icon24 } from '../Icon.assets.24/DishwasherIntensiveFill';
import { DishwasherIntensiveFill as Icon36 } from '../Icon.assets.36/DishwasherIntensiveFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherIntensiveFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
