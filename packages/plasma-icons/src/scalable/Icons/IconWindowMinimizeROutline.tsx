import React from 'react';

import { WindowMinimizeROutline as Icon16 } from '../Icon.assets.16/WindowMinimizeROutline';
import { WindowMinimizeROutline as Icon24 } from '../Icon.assets.24/WindowMinimizeROutline';
import { WindowMinimizeROutline as Icon36 } from '../Icon.assets.36/WindowMinimizeROutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMinimizeROutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
