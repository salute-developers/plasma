import React from 'react';

import { GlobeOutline as Icon16 } from '../Icon.assets.16/GlobeOutline';
import { GlobeOutline as Icon24 } from '../Icon.assets.24/GlobeOutline';
import { GlobeOutline as Icon36 } from '../Icon.assets.36/GlobeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconGlobeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
