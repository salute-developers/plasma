import React from 'react';

import { BellErrorOutline as Icon16 } from '../Icon.assets.16/BellErrorOutline';
import { BellErrorOutline as Icon24 } from '../Icon.assets.24/BellErrorOutline';
import { BellErrorOutline as Icon36 } from '../Icon.assets.36/BellErrorOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBellErrorOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
