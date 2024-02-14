import React from 'react';

import { DoorLOpenFill as Icon16 } from '../Icon.assets.16/DoorLOpenFill';
import { DoorLOpenFill as Icon24 } from '../Icon.assets.24/DoorLOpenFill';
import { DoorLOpenFill as Icon36 } from '../Icon.assets.36/DoorLOpenFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoorLOpenFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
