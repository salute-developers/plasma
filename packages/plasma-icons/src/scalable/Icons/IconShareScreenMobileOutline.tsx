import React from 'react';

import { ShareScreenMobileOutline as Icon16 } from '../Icon.assets.16/ShareScreenMobileOutline';
import { ShareScreenMobileOutline as Icon24 } from '../Icon.assets.24/ShareScreenMobileOutline';
import { ShareScreenMobileOutline as Icon36 } from '../Icon.assets.36/ShareScreenMobileOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconShareScreenMobileOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
