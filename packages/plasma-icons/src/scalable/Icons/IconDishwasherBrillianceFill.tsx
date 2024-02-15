import React from 'react';

import { DishwasherBrillianceFill as Icon16 } from '../Icon.assets.16/DishwasherBrillianceFill';
import { DishwasherBrillianceFill as Icon24 } from '../Icon.assets.24/DishwasherBrillianceFill';
import { DishwasherBrillianceFill as Icon36 } from '../Icon.assets.36/DishwasherBrillianceFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherBrillianceFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
