import React from 'react';

import { GasStationOutline as Icon16 } from '../Icon.assets.16/GasStationOutline';
import { GasStationOutline as Icon24 } from '../Icon.assets.24/GasStationOutline';
import { GasStationOutline as Icon36 } from '../Icon.assets.36/GasStationOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGasStationOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
