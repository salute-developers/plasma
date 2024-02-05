import React from 'react';

import { BeautificationOutline as Icon16 } from '../Icon.assets.16/BeautificationOutline';
import { BeautificationOutline as Icon24 } from '../Icon.assets.24/BeautificationOutline';
import { BeautificationOutline as Icon36 } from '../Icon.assets.36/BeautificationOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconBeautificationOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
