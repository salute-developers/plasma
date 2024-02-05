import React from 'react';

import { BuildingsFill as Icon16 } from '../Icon.assets.16/BuildingsFill';
import { BuildingsFill as Icon24 } from '../Icon.assets.24/BuildingsFill';
import { BuildingsFill as Icon36 } from '../Icon.assets.36/BuildingsFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBuildingsFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
