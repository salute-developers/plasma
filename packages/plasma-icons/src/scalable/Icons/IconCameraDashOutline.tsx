import React from 'react';

import { CameraDashOutline as Icon16 } from '../Icon.assets.16/CameraDashOutline';
import { CameraDashOutline as Icon24 } from '../Icon.assets.24/CameraDashOutline';
import { CameraDashOutline as Icon36 } from '../Icon.assets.36/CameraDashOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconCameraDashOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
