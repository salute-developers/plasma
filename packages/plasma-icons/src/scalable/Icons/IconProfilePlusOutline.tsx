import React from 'react';

import { ProfilePlusOutline as Icon16 } from '../Icon.assets.16/ProfilePlusOutline';
import { ProfilePlusOutline as Icon24 } from '../Icon.assets.24/ProfilePlusOutline';
import { ProfilePlusOutline as Icon36 } from '../Icon.assets.36/ProfilePlusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfilePlusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
