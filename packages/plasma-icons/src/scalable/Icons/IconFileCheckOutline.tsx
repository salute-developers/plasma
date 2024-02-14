import React from 'react';

import { FileCheckOutline as Icon16 } from '../Icon.assets.16/FileCheckOutline';
import { FileCheckOutline as Icon24 } from '../Icon.assets.24/FileCheckOutline';
import { FileCheckOutline as Icon36 } from '../Icon.assets.36/FileCheckOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileCheckOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
