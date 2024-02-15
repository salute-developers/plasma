import React from 'react';

import { MapOutline as Icon16 } from '../Icon.assets.16/MapOutline';
import { MapOutline as Icon24 } from '../Icon.assets.24/MapOutline';
import { MapOutline as Icon36 } from '../Icon.assets.36/MapOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMapOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
