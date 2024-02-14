import React from 'react';

import { MapFill as Icon16 } from '../Icon.assets.16/MapFill';
import { MapFill as Icon24 } from '../Icon.assets.24/MapFill';
import { MapFill as Icon36 } from '../Icon.assets.36/MapFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMapFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
