import React from 'react';

import { DoorLOpenOutline as Icon16 } from '../Icon.assets.16/DoorLOpenOutline';
import { DoorLOpenOutline as Icon24 } from '../Icon.assets.24/DoorLOpenOutline';
import { DoorLOpenOutline as Icon36 } from '../Icon.assets.36/DoorLOpenOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoorLOpenOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
