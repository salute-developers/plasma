import React from 'react';

import { BellDashOutline as Icon16 } from '../Icon.assets.16/BellDashOutline';
import { BellDashOutline as Icon24 } from '../Icon.assets.24/BellDashOutline';
import { BellDashOutline as Icon36 } from '../Icon.assets.36/BellDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
