import React from 'react';

import { Bluetooth as Icon16 } from '../Icon.assets.16/Bluetooth';
import { Bluetooth as Icon24 } from '../Icon.assets.24/Bluetooth';
import { Bluetooth as Icon36 } from '../Icon.assets.36/Bluetooth';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBluetooth: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
