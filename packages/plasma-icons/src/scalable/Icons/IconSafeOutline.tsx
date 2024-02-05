import React from 'react';

import { SafeOutline as Icon16 } from '../Icon.assets.16/SafeOutline';
import { SafeOutline as Icon24 } from '../Icon.assets.24/SafeOutline';
import { SafeOutline as Icon36 } from '../Icon.assets.36/SafeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSafeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
