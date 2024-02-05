import React from 'react';

import { CircleOutline as Icon16 } from '../Icon.assets.16/CircleOutline';
import { CircleOutline as Icon24 } from '../Icon.assets.24/CircleOutline';
import { CircleOutline as Icon36 } from '../Icon.assets.36/CircleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCircleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
