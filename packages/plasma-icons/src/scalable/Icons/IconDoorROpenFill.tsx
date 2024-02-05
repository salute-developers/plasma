import React from 'react';

import { DoorROpenFill as Icon16 } from '../Icon.assets.16/DoorROpenFill';
import { DoorROpenFill as Icon24 } from '../Icon.assets.24/DoorROpenFill';
import { DoorROpenFill as Icon36 } from '../Icon.assets.36/DoorROpenFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDoorROpenFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
