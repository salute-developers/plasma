import React from 'react';

import { AntennaOutline as Icon16 } from '../Icon.assets.16/AntennaOutline';
import { AntennaOutline as Icon24 } from '../Icon.assets.24/AntennaOutline';
import { AntennaOutline as Icon36 } from '../Icon.assets.36/AntennaOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAntennaOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
