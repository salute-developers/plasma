import React from 'react';

import { CloudOutline as Icon16 } from '../Icon.assets.16/CloudOutline';
import { CloudOutline as Icon24 } from '../Icon.assets.24/CloudOutline';
import { CloudOutline as Icon36 } from '../Icon.assets.36/CloudOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
