import React from 'react';

import { FileStackOutline as Icon16 } from '../Icon.assets.16/FileStackOutline';
import { FileStackOutline as Icon24 } from '../Icon.assets.24/FileStackOutline';
import { FileStackOutline as Icon36 } from '../Icon.assets.36/FileStackOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconFileStackOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
