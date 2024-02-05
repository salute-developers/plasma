import React from 'react';

import { PostOutline as Icon16 } from '../Icon.assets.16/PostOutline';
import { PostOutline as Icon24 } from '../Icon.assets.24/PostOutline';
import { PostOutline as Icon36 } from '../Icon.assets.36/PostOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPostOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
