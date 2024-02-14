import React from 'react';

import { Drag as Icon16 } from '../Icon.assets.16/Drag';
import { Drag as Icon24 } from '../Icon.assets.24/Drag';
import { Drag as Icon36 } from '../Icon.assets.36/Drag';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDrag: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
