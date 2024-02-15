import React from 'react';

import { ShieldLinesCirclesOutline as Icon16 } from '../Icon.assets.16/ShieldLinesCirclesOutline';
import { ShieldLinesCirclesOutline as Icon24 } from '../Icon.assets.24/ShieldLinesCirclesOutline';
import { ShieldLinesCirclesOutline as Icon36 } from '../Icon.assets.36/ShieldLinesCirclesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShieldLinesCirclesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
