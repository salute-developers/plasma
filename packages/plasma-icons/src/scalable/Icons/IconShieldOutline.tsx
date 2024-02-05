import React from 'react';

import { ShieldOutline as Icon16 } from '../Icon.assets.16/ShieldOutline';
import { ShieldOutline as Icon24 } from '../Icon.assets.24/ShieldOutline';
import { ShieldOutline as Icon36 } from '../Icon.assets.36/ShieldOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
