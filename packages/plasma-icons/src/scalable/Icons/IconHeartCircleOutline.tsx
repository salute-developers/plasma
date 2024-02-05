import React from 'react';

import { HeartCircleOutline as Icon16 } from '../Icon.assets.16/HeartCircleOutline';
import { HeartCircleOutline as Icon24 } from '../Icon.assets.24/HeartCircleOutline';
import { HeartCircleOutline as Icon36 } from '../Icon.assets.36/HeartCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
