import React from 'react';

import { DoorROpenOutline as Icon16 } from '../Icon.assets.16/DoorROpenOutline';
import { DoorROpenOutline as Icon24 } from '../Icon.assets.24/DoorROpenOutline';
import { DoorROpenOutline as Icon36 } from '../Icon.assets.36/DoorROpenOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoorROpenOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
