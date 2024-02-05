import React from 'react';

import { ShieldChildOutline as Icon16 } from '../Icon.assets.16/ShieldChildOutline';
import { ShieldChildOutline as Icon24 } from '../Icon.assets.24/ShieldChildOutline';
import { ShieldChildOutline as Icon36 } from '../Icon.assets.36/ShieldChildOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldChildOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
