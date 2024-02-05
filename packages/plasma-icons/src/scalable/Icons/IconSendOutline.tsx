import React from 'react';

import { SendOutline as Icon16 } from '../Icon.assets.16/SendOutline';
import { SendOutline as Icon24 } from '../Icon.assets.24/SendOutline';
import { SendOutline as Icon36 } from '../Icon.assets.36/SendOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSendOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
