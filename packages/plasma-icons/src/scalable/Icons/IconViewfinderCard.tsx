import React from 'react';

import { ViewfinderCard as Icon16 } from '../Icon.assets.16/ViewfinderCard';
import { ViewfinderCard as Icon24 } from '../Icon.assets.24/ViewfinderCard';
import { ViewfinderCard as Icon36 } from '../Icon.assets.36/ViewfinderCard';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconViewfinderCard: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
