import React from 'react';

import { TagBadgeOutline as Icon16 } from '../Icon.assets.16/TagBadgeOutline';
import { TagBadgeOutline as Icon24 } from '../Icon.assets.24/TagBadgeOutline';
import { TagBadgeOutline as Icon36 } from '../Icon.assets.36/TagBadgeOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconTagBadgeOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
