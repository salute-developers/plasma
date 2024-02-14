import React from 'react';

import { ProfileCrossOutline as Icon16 } from '../Icon.assets.16/ProfileCrossOutline';
import { ProfileCrossOutline as Icon24 } from '../Icon.assets.24/ProfileCrossOutline';
import { ProfileCrossOutline as Icon36 } from '../Icon.assets.36/ProfileCrossOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileCrossOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
