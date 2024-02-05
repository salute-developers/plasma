import React from 'react';

import { PinOutline as Icon16 } from '../Icon.assets.16/PinOutline';
import { PinOutline as Icon24 } from '../Icon.assets.24/PinOutline';
import { PinOutline as Icon36 } from '../Icon.assets.36/PinOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconPinOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
