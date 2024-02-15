import React from 'react';

import { LightningOutline as Icon16 } from '../Icon.assets.16/LightningOutline';
import { LightningOutline as Icon24 } from '../Icon.assets.24/LightningOutline';
import { LightningOutline as Icon36 } from '../Icon.assets.36/LightningOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconLightningOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
