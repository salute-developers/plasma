import React from 'react';

import { AppleOutline as Icon16 } from '../Icon.assets.16/AppleOutline';
import { AppleOutline as Icon24 } from '../Icon.assets.24/AppleOutline';
import { AppleOutline as Icon36 } from '../Icon.assets.36/AppleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAppleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
