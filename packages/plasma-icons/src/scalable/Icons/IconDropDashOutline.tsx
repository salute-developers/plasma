import React from 'react';

import { DropDashOutline as Icon16 } from '../Icon.assets.16/DropDashOutline';
import { DropDashOutline as Icon24 } from '../Icon.assets.24/DropDashOutline';
import { DropDashOutline as Icon36 } from '../Icon.assets.36/DropDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconDropDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
