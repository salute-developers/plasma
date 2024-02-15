import React from 'react';

import { SunOutline as Icon16 } from '../Icon.assets.16/SunOutline';
import { SunOutline as Icon24 } from '../Icon.assets.24/SunOutline';
import { SunOutline as Icon36 } from '../Icon.assets.36/SunOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSunOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
