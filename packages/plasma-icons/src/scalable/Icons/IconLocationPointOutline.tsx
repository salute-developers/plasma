import React from 'react';

import { LocationPointOutline as Icon16 } from '../Icon.assets.16/LocationPointOutline';
import { LocationPointOutline as Icon24 } from '../Icon.assets.24/LocationPointOutline';
import { LocationPointOutline as Icon36 } from '../Icon.assets.36/LocationPointOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLocationPointOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
