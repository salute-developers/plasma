import React from 'react';

import { CloudDashOutline as Icon16 } from '../Icon.assets.16/CloudDashOutline';
import { CloudDashOutline as Icon24 } from '../Icon.assets.24/CloudDashOutline';
import { CloudDashOutline as Icon36 } from '../Icon.assets.36/CloudDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCloudDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
