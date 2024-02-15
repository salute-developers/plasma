import React from 'react';

import { HomeAltOutline as Icon16 } from '../Icon.assets.16/HomeAltOutline';
import { HomeAltOutline as Icon24 } from '../Icon.assets.24/HomeAltOutline';
import { HomeAltOutline as Icon36 } from '../Icon.assets.36/HomeAltOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHomeAltOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
