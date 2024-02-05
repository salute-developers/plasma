import React from 'react';

import { TriangleOutline as Icon16 } from '../Icon.assets.16/TriangleOutline';
import { TriangleOutline as Icon24 } from '../Icon.assets.24/TriangleOutline';
import { TriangleOutline as Icon36 } from '../Icon.assets.36/TriangleOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTriangleOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
