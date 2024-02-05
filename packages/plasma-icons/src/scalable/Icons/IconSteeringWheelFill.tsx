import React from 'react';

import { SteeringWheelFill as Icon16 } from '../Icon.assets.16/SteeringWheelFill';
import { SteeringWheelFill as Icon24 } from '../Icon.assets.24/SteeringWheelFill';
import { SteeringWheelFill as Icon36 } from '../Icon.assets.36/SteeringWheelFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSteeringWheelFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
