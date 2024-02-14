import React from 'react';

import { CartOutline as Icon16 } from '../Icon.assets.16/CartOutline';
import { CartOutline as Icon24 } from '../Icon.assets.24/CartOutline';
import { CartOutline as Icon36 } from '../Icon.assets.36/CartOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCartOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
