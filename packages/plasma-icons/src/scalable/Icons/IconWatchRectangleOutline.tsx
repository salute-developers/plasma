import React from 'react';

import { WatchRectangleOutline as Icon16 } from '../Icon.assets.16/WatchRectangleOutline';
import { WatchRectangleOutline as Icon24 } from '../Icon.assets.24/WatchRectangleOutline';
import { WatchRectangleOutline as Icon36 } from '../Icon.assets.36/WatchRectangleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWatchRectangleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
