import React from 'react';

import { CubeOutline as Icon16 } from '../Icon.assets.16/CubeOutline';
import { CubeOutline as Icon24 } from '../Icon.assets.24/CubeOutline';
import { CubeOutline as Icon36 } from '../Icon.assets.36/CubeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCubeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
