import React from 'react';

import { BellOutline as Icon16 } from '../Icon.assets.16/BellOutline';
import { BellOutline as Icon24 } from '../Icon.assets.24/BellOutline';
import { BellOutline as Icon36 } from '../Icon.assets.36/BellOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
