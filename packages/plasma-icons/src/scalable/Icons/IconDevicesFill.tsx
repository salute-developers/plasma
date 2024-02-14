import React from 'react';

import { DevicesFill as Icon16 } from '../Icon.assets.16/DevicesFill';
import { DevicesFill as Icon24 } from '../Icon.assets.24/DevicesFill';
import { DevicesFill as Icon36 } from '../Icon.assets.36/DevicesFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDevicesFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
