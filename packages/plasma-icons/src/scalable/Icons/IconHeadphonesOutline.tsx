import React from 'react';

import { HeadphonesOutline as Icon16 } from '../Icon.assets.16/HeadphonesOutline';
import { HeadphonesOutline as Icon24 } from '../Icon.assets.24/HeadphonesOutline';
import { HeadphonesOutline as Icon36 } from '../Icon.assets.36/HeadphonesOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconHeadphonesOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
