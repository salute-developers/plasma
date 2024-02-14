import React from 'react';

import { CarOutline as Icon16 } from '../Icon.assets.16/CarOutline';
import { CarOutline as Icon24 } from '../Icon.assets.24/CarOutline';
import { CarOutline as Icon36 } from '../Icon.assets.36/CarOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCarOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
