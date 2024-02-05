import React from 'react';

import { ProfileOutline as Icon16 } from '../Icon.assets.16/ProfileOutline';
import { ProfileOutline as Icon24 } from '../Icon.assets.24/ProfileOutline';
import { ProfileOutline as Icon36 } from '../Icon.assets.36/ProfileOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconProfileOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
