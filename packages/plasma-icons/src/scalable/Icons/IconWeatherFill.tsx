import React from 'react';

import { WeatherFill as Icon16 } from '../Icon.assets.16/WeatherFill';
import { WeatherFill as Icon24 } from '../Icon.assets.24/WeatherFill';
import { WeatherFill as Icon36 } from '../Icon.assets.36/WeatherFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWeatherFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
