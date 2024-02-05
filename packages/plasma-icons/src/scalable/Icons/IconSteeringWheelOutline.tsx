import React from 'react';

import { SteeringWheelOutline as Icon16 } from '../Icon.assets.16/SteeringWheelOutline';
import { SteeringWheelOutline as Icon24 } from '../Icon.assets.24/SteeringWheelOutline';
import { SteeringWheelOutline as Icon36 } from '../Icon.assets.36/SteeringWheelOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSteeringWheelOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
