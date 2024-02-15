import React from 'react';

import { WindowMinimizeLOutline as Icon16 } from '../Icon.assets.16/WindowMinimizeLOutline';
import { WindowMinimizeLOutline as Icon24 } from '../Icon.assets.24/WindowMinimizeLOutline';
import { WindowMinimizeLOutline as Icon36 } from '../Icon.assets.36/WindowMinimizeLOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMinimizeLOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
