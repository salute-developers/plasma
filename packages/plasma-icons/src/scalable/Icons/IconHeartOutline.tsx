import React from 'react';

import { HeartOutline as Icon16 } from '../Icon.assets.16/HeartOutline';
import { HeartOutline as Icon24 } from '../Icon.assets.24/HeartOutline';
import { HeartOutline as Icon36 } from '../Icon.assets.36/HeartOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
