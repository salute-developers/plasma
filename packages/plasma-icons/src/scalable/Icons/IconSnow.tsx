import React from 'react';

import { Snow as Icon16 } from '../Icon.assets.16/Snow';
import { Snow as Icon24 } from '../Icon.assets.24/Snow';
import { Snow as Icon36 } from '../Icon.assets.36/Snow';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSnow: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
