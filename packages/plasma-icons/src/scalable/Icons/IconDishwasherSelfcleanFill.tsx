import React from 'react';

import { DishwasherSelfcleanFill as Icon16 } from '../Icon.assets.16/DishwasherSelfcleanFill';
import { DishwasherSelfcleanFill as Icon24 } from '../Icon.assets.24/DishwasherSelfcleanFill';
import { DishwasherSelfcleanFill as Icon36 } from '../Icon.assets.36/DishwasherSelfcleanFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDishwasherSelfcleanFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
