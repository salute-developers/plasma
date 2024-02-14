import React from 'react';

import { LocationArrowOutline as Icon16 } from '../Icon.assets.16/LocationArrowOutline';
import { LocationArrowOutline as Icon24 } from '../Icon.assets.24/LocationArrowOutline';
import { LocationArrowOutline as Icon36 } from '../Icon.assets.36/LocationArrowOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLocationArrowOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
