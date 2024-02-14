import React from 'react';

import { ParkingFill as Icon16 } from '../Icon.assets.16/ParkingFill';
import { ParkingFill as Icon24 } from '../Icon.assets.24/ParkingFill';
import { ParkingFill as Icon36 } from '../Icon.assets.36/ParkingFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconParkingFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
