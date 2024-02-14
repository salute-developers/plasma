import React from 'react';

import { RublePlus as Icon16 } from '../Icon.assets.16/RublePlus';
import { RublePlus as Icon24 } from '../Icon.assets.24/RublePlus';
import { RublePlus as Icon36 } from '../Icon.assets.36/RublePlus';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconRublePlus: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
