import React from 'react';

import { Refresh as Icon16 } from '../Icon.assets.16/Refresh';
import { Refresh as Icon24 } from '../Icon.assets.24/Refresh';
import { Refresh as Icon36 } from '../Icon.assets.36/Refresh';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRefresh: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
