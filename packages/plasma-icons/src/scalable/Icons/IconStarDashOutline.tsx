import React from 'react';

import { StarDashOutline as Icon16 } from '../Icon.assets.16/StarDashOutline';
import { StarDashOutline as Icon24 } from '../Icon.assets.24/StarDashOutline';
import { StarDashOutline as Icon36 } from '../Icon.assets.36/StarDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
