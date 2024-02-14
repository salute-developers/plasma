import React from 'react';

import { DeviceShareFill as Icon16 } from '../Icon.assets.16/DeviceShareFill';
import { DeviceShareFill as Icon24 } from '../Icon.assets.24/DeviceShareFill';
import { DeviceShareFill as Icon36 } from '../Icon.assets.36/DeviceShareFill';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDeviceShareFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
