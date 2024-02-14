import React from 'react';

import { RotateCw as Icon16 } from '../Icon.assets.16/RotateCw';
import { RotateCw as Icon24 } from '../Icon.assets.24/RotateCw';
import { RotateCw as Icon36 } from '../Icon.assets.36/RotateCw';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRotateCw: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
