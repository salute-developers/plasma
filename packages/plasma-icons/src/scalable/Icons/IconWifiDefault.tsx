import React from 'react';

import { WifiDefault as Icon16 } from '../Icon.assets.16/WifiDefault';
import { WifiDefault as Icon24 } from '../Icon.assets.24/WifiDefault';
import { WifiDefault as Icon36 } from '../Icon.assets.36/WifiDefault';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWifiDefault: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
