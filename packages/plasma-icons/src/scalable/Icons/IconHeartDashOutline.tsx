import React from 'react';

import { HeartDashOutline as Icon16 } from '../Icon.assets.16/HeartDashOutline';
import { HeartDashOutline as Icon24 } from '../Icon.assets.24/HeartDashOutline';
import { HeartDashOutline as Icon36 } from '../Icon.assets.36/HeartDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeartDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
