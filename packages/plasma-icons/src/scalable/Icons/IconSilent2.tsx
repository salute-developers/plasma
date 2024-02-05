import React from 'react';

import { Silent2 as Icon16 } from '../Icon.assets.16/Silent2';
import { Silent2 as Icon24 } from '../Icon.assets.24/Silent2';
import { Silent2 as Icon36 } from '../Icon.assets.36/Silent2';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSilent2: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
