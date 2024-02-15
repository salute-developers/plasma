import React from 'react';

import { DoorRClosedFill as Icon16 } from '../Icon.assets.16/DoorRClosedFill';
import { DoorRClosedFill as Icon24 } from '../Icon.assets.24/DoorRClosedFill';
import { DoorRClosedFill as Icon36 } from '../Icon.assets.36/DoorRClosedFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoorRClosedFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
