import React from 'react';

import { Menu as Icon16 } from '../Icon.assets.16/Menu';
import { Menu as Icon24 } from '../Icon.assets.24/Menu';
import { Menu as Icon36 } from '../Icon.assets.36/Menu';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMenu: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
