import React from 'react';

import { WeatherOutline as Icon16 } from '../Icon.assets.16/WeatherOutline';
import { WeatherOutline as Icon24 } from '../Icon.assets.24/WeatherOutline';
import { WeatherOutline as Icon36 } from '../Icon.assets.36/WeatherOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWeatherOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
