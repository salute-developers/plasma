import React from 'react';

import { DishwasherNormalFill as Icon16 } from '../Icon.assets.16/DishwasherNormalFill';
import { DishwasherNormalFill as Icon24 } from '../Icon.assets.24/DishwasherNormalFill';
import { DishwasherNormalFill as Icon36 } from '../Icon.assets.36/DishwasherNormalFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherNormalFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
