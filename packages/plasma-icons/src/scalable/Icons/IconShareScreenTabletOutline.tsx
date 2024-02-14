import React from 'react';

import { ShareScreenTabletOutline as Icon16 } from '../Icon.assets.16/ShareScreenTabletOutline';
import { ShareScreenTabletOutline as Icon24 } from '../Icon.assets.24/ShareScreenTabletOutline';
import { ShareScreenTabletOutline as Icon36 } from '../Icon.assets.36/ShareScreenTabletOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShareScreenTabletOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
