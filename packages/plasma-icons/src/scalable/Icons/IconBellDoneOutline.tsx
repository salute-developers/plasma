import React from 'react';

import { BellDoneOutline as Icon16 } from '../Icon.assets.16/BellDoneOutline';
import { BellDoneOutline as Icon24 } from '../Icon.assets.24/BellDoneOutline';
import { BellDoneOutline as Icon36 } from '../Icon.assets.36/BellDoneOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellDoneOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
