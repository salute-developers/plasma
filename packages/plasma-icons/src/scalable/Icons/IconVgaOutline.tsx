import React from 'react';

import { VgaOutline as Icon16 } from '../Icon.assets.16/VgaOutline';
import { VgaOutline as Icon24 } from '../Icon.assets.24/VgaOutline';
import { VgaOutline as Icon36 } from '../Icon.assets.36/VgaOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconVgaOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
