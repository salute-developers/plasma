import React from 'react';

import { PinListOutline as Icon16 } from '../Icon.assets.16/PinListOutline';
import { PinListOutline as Icon24 } from '../Icon.assets.24/PinListOutline';
import { PinListOutline as Icon36 } from '../Icon.assets.36/PinListOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPinListOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
