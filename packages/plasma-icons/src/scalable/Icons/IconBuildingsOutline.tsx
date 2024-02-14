import React from 'react';

import { BuildingsOutline as Icon16 } from '../Icon.assets.16/BuildingsOutline';
import { BuildingsOutline as Icon24 } from '../Icon.assets.24/BuildingsOutline';
import { BuildingsOutline as Icon36 } from '../Icon.assets.36/BuildingsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBuildingsOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
