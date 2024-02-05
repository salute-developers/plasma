import React from 'react';

import { ShieldDashOutline as Icon16 } from '../Icon.assets.16/ShieldDashOutline';
import { ShieldDashOutline as Icon24 } from '../Icon.assets.24/ShieldDashOutline';
import { ShieldDashOutline as Icon36 } from '../Icon.assets.36/ShieldDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
