import React from 'react';

import { HeartBoxOutline as Icon16 } from '../Icon.assets.16/HeartBoxOutline';
import { HeartBoxOutline as Icon24 } from '../Icon.assets.24/HeartBoxOutline';
import { HeartBoxOutline as Icon36 } from '../Icon.assets.36/HeartBoxOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartBoxOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
