import React from 'react';

import { WifiLock as Icon16 } from '../Icon.assets.16/WifiLock';
import { WifiLock as Icon24 } from '../Icon.assets.24/WifiLock';
import { WifiLock as Icon36 } from '../Icon.assets.36/WifiLock';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWifiLock: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
