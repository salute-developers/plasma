import React from 'react';

import { WatchRoundOutline as Icon16 } from '../Icon.assets.16/WatchRoundOutline';
import { WatchRoundOutline as Icon24 } from '../Icon.assets.24/WatchRoundOutline';
import { WatchRoundOutline as Icon36 } from '../Icon.assets.36/WatchRoundOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWatchRoundOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
