import React from 'react';

import { AppsOutline as Icon16 } from '../Icon.assets.16/AppsOutline';
import { AppsOutline as Icon24 } from '../Icon.assets.24/AppsOutline';
import { AppsOutline as Icon36 } from '../Icon.assets.36/AppsOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconAppsOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
