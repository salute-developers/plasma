import React from 'react';

import { DropOutline as Icon16 } from '../Icon.assets.16/DropOutline';
import { DropOutline as Icon24 } from '../Icon.assets.24/DropOutline';
import { DropOutline as Icon36 } from '../Icon.assets.36/DropOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDropOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
