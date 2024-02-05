import React from 'react';

import { FootballOutline as Icon16 } from '../Icon.assets.16/FootballOutline';
import { FootballOutline as Icon24 } from '../Icon.assets.24/FootballOutline';
import { FootballOutline as Icon36 } from '../Icon.assets.36/FootballOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFootballOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
