import React from 'react';

import { DeviceShareOutline as Icon16 } from '../Icon.assets.16/DeviceShareOutline';
import { DeviceShareOutline as Icon24 } from '../Icon.assets.24/DeviceShareOutline';
import { DeviceShareOutline as Icon36 } from '../Icon.assets.36/DeviceShareOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDeviceShareOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
