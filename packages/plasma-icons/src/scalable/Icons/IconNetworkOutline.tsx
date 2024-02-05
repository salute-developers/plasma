import React from 'react';

import { NetworkOutline as Icon16 } from '../Icon.assets.16/NetworkOutline';
import { NetworkOutline as Icon24 } from '../Icon.assets.24/NetworkOutline';
import { NetworkOutline as Icon36 } from '../Icon.assets.36/NetworkOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconNetworkOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
