import React from 'react';

import { CakeOutline as Icon16 } from '../Icon.assets.16/CakeOutline';
import { CakeOutline as Icon24 } from '../Icon.assets.24/CakeOutline';
import { CakeOutline as Icon36 } from '../Icon.assets.36/CakeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCakeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
