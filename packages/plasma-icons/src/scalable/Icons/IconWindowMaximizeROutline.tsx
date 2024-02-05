import React from 'react';

import { WindowMaximizeROutline as Icon16 } from '../Icon.assets.16/WindowMaximizeROutline';
import { WindowMaximizeROutline as Icon24 } from '../Icon.assets.24/WindowMaximizeROutline';
import { WindowMaximizeROutline as Icon36 } from '../Icon.assets.36/WindowMaximizeROutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMaximizeROutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
