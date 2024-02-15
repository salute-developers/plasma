import React from 'react';

import { StarCircleOutline as Icon16 } from '../Icon.assets.16/StarCircleOutline';
import { StarCircleOutline as Icon24 } from '../Icon.assets.24/StarCircleOutline';
import { StarCircleOutline as Icon36 } from '../Icon.assets.36/StarCircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconStarCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
