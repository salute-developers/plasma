import React from 'react';

import { WindowMaximizeLOutline as Icon16 } from '../Icon.assets.16/WindowMaximizeLOutline';
import { WindowMaximizeLOutline as Icon24 } from '../Icon.assets.24/WindowMaximizeLOutline';
import { WindowMaximizeLOutline as Icon36 } from '../Icon.assets.36/WindowMaximizeLOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWindowMaximizeLOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
