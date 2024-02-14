import React from 'react';

import { ShieldLinesOutline as Icon16 } from '../Icon.assets.16/ShieldLinesOutline';
import { ShieldLinesOutline as Icon24 } from '../Icon.assets.24/ShieldLinesOutline';
import { ShieldLinesOutline as Icon36 } from '../Icon.assets.36/ShieldLinesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldLinesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
