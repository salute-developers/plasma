import React from 'react';

import { WifiDash as Icon16 } from '../Icon.assets.16/WifiDash';
import { WifiDash as Icon24 } from '../Icon.assets.24/WifiDash';
import { WifiDash as Icon36 } from '../Icon.assets.36/WifiDash';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconWifiDash: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
