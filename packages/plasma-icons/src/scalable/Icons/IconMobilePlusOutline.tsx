import React from 'react';

import { MobilePlusOutline as Icon16 } from '../Icon.assets.16/MobilePlusOutline';
import { MobilePlusOutline as Icon24 } from '../Icon.assets.24/MobilePlusOutline';
import { MobilePlusOutline as Icon36 } from '../Icon.assets.36/MobilePlusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconMobilePlusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
