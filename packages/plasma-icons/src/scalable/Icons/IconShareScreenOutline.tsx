import React from 'react';

import { ShareScreenOutline as Icon16 } from '../Icon.assets.16/ShareScreenOutline';
import { ShareScreenOutline as Icon24 } from '../Icon.assets.24/ShareScreenOutline';
import { ShareScreenOutline as Icon36 } from '../Icon.assets.36/ShareScreenOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShareScreenOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
