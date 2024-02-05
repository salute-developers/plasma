import React from 'react';

import { MobileFrontOutline as Icon16 } from '../Icon.assets.16/MobileFrontOutline';
import { MobileFrontOutline as Icon24 } from '../Icon.assets.24/MobileFrontOutline';
import { MobileFrontOutline as Icon36 } from '../Icon.assets.36/MobileFrontOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobileFrontOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
