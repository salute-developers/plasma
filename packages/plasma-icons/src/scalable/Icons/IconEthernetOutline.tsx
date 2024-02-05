import React from 'react';

import { EthernetOutline as Icon16 } from '../Icon.assets.16/EthernetOutline';
import { EthernetOutline as Icon24 } from '../Icon.assets.24/EthernetOutline';
import { EthernetOutline as Icon36 } from '../Icon.assets.36/EthernetOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconEthernetOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
